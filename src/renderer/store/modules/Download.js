import fs from 'fs'
import firebase from 'firebase'
import download from 'download'
import extractZip from 'extract-zip'

const state = {
    currentGameVersion: null,
    newestGameVersion: null
}

const mutations = {
    SET_NEWEST_GAME_VERSION(state, value) {
        state.newestGameVersion = value
    },
    SET_CURRENT_GAME_VERSION(state, value) {
        state.currentGameVersion = value
    }
}

const actions = {
    downloadNewestGameVersion({ commit, state }) {
        var db = firebase.firestore()
        db.collection('gameBuilds').orderBy('version', 'desc').limit(1).get()
            .then(function (querySnapshot) {
                console.log(querySnapshot)
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    var data = doc.data()
                    commit('SET_NEWEST_GAME_VERSION', 'v' + data.version)
                    if (state.currentGameVersion == state.newestGameVersion) {
                        //Nothing todo since current game version is up to date
                        console.log('GAME UP TO DATE')
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
                                    commit('SET_CURRENT_GAME_VERSION', 'v' + data.version)
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

export default {
    state,
    mutations,
    actions
}
