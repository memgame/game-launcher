import fs from 'fs'
import firebase from 'firebase'
import download from 'download'
import extractZip from 'extract-zip'

const state = {
    currentGameVersion: null,
    newestGameVersion: null,
    isCurrentVersionUpToDate: false,
    downloadProgress: 1
}

const mutations = {
    SET_NEWEST_GAME_VERSION(state, value) {
        state.newestGameVersion = value
    },
    SET_CURRENT_GAME_VERSION(state, value) {
        state.currentGameVersion = value
    },
    SET_IS_CURRENT_VERSION_UP_TO_DATE(state, value) {
        state.isCurrentVersionUpToDate = value
    },
    SET_DOWNLOAD_PROGRESS(state, value) {
        state.downloadProgress = value
    }
}

const actions = {
    downloadNewestGameVersion({ commit, state }) {
        commit('SET_IS_CURRENT_VERSION_UP_TO_DATE', false)
        commit('SET_DOWNLOAD_PROGRESS', 0)
        var db = firebase.firestore()
        db.collection('gameBuilds').orderBy('version', 'desc').limit(1).get()
            .then(function (querySnapshot) {
                console.log(querySnapshot)
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    var data = doc.data()
                    commit('SET_NEWEST_GAME_VERSION', data.version)
                    if (state.currentGameVersion == state.newestGameVersion) {
                        console.log('GAME UP TO DATE')
                        commit('SET_DOWNLOAD_PROGRESS', 1)
                        commit('SET_IS_CURRENT_VERSION_UP_TO_DATE', true)
                        return;
                    }
                    commit('SET_DOWNLOAD_PROGRESS', 0.2)
                    download(data.windows, 'tmp').then(() => {
                        commit('SET_DOWNLOAD_PROGRESS', 0.7)
                        console.log('DONE DOWNLOAD')
                        extractZip(
                            'tmp/testBuild.zip',
                            {
                                dir: process.cwd() + '/game',
                                onEntry: (entry, zipfile) => {
                                    console.log('EXTRACT FILE')
                                }
                            },
                            (err) => {
                                if (!err) {
                                    console.log('DONE EXTRACT')
                                    commit('SET_CURRENT_GAME_VERSION', data.version)
                                    commit('SET_DOWNLOAD_PROGRESS', 1)
                                    commit('SET_IS_CURRENT_VERSION_UP_TO_DATE', true)
                                }
                            }
                        )
                    })
                })
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            })

        console.log('get newest game version')
        console.log('if no current version download newest version')
        console.log('compare current and newest game version')
        console.log('if diffrent download patch for newest version else do nothing')
    }
}

const getters = {
    getIsCurrentVersionUpToDate: (state) => state.isCurrentVersionUpToDate
}

export default {
    state,
    mutations,
    actions,
    getters
}
