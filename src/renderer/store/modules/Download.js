import fs from 'fs'
import firebase from 'firebase'
import download from 'download'
import extractZip from 'extract-zip'

const state = {
    currentGameVersion: null,
    newestGameVersion: null,
    isCurrentVersionUpToDate: false
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
    }
}

const actions = {
    downloadNewestGameVersion({ commit, state }) {
        commit('SET_IS_CURRENT_VERSION_UP_TO_DATE', false)
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
                        commit('SET_IS_CURRENT_VERSION_UP_TO_DATE', true)
                        return;
                    }
                    download(data.windows, 'tmp').then(() => {
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
