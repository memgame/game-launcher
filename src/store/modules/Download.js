import fse from 'fs-extra'
import firebase from 'firebase'
// https://www.npmjs.com/package/request
// https://www.npmjs.com/package/request-progress
// import download from 'download'
import extractZip from 'extract-zip'
import config from '../../../config/config'

const state = {
    currentGameVersion: null,
    newestGameVersion: null,
    newestGameVersionDownloadLink: null,
    isGettingNewestGameVersion: false
}

const mutations = {
    SET_NEWEST_GAME_VERSION(state, value) {
        state.newestGameVersion = value
    },
    SET_CURRENT_GAME_VERSION(state, value) {
        state.currentGameVersion = value
    },
    SET_NEWEST_GAME_VERSION_DOWNLOAD_LINK(state, value) {
        state.newestGameVersionDownloadLink = value
    },
    SET_IS_GETTING_NEWEST_GAME_VERSION(state, value) {
        state.isGettingNewestGameVersion = value
    }
}

const actions = {
    async checkNewestGameVersionAsync({ commit, getters, dispatch }) {
        var db = firebase.firestore()
        await db.collection('gameBuilds').orderBy('version', 'desc').limit(1).get()
            .then(function (querySnapshot) {
                console.log(querySnapshot)
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    var data = doc.data()
                    console.log(data)
                    commit('SET_NEWEST_GAME_VERSION', data.version)
                    //TODO check OS and get download link for the specific OS
                    console.log(data[process.platform])
                    commit('SET_NEWEST_GAME_VERSION_DOWNLOAD_LINK', data[process.platform])
                })
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            })
    },
    async downloadNewestGameVersionAsync({ state, commit, dispatch }) {
        commit('SET_IS_GETTING_NEWEST_GAME_VERSION', true)
        console.log(state.newestGameVersionDownloadLink)
        await download(state.newestGameVersionDownloadLink, config.tmpFolderName)
            .then(() => {
                console.log('DONE DOWNLOAD')
                dispatch('installNewestGameVersion')
            })
            .catch((err) => {
                commit('SET_IS_GETTING_NEWEST_GAME_VERSION', false)
                alert(err)
            })
    },
    installNewestGameVersion({ state, commit }) {
        extractZip(
            config.tmpFolderName + '/' + config.game.zipFileName,
            {
                dir: config.rootFolder + '/' + config.game.folderName,
                onEntry: (entry, zipfile) => {
                    console.log('EXTRACT FILE')
                }
            },
            (err) => {
                if (!err) {
                    console.log('DONE EXTRACT')
                    commit('SET_CURRENT_GAME_VERSION', state.newestGameVersion)
                }
                fse.remove(config.tmpFolderName, (err) => {
                    console.log(err)
                    console.log('CLEANUP')
                    commit('SET_IS_GETTING_NEWEST_GAME_VERSION', false)
                })
                if(err) {
                    alert(err)
                }
            }
        )
    }
}

const getters = {
    getIsCurrentVersionUpToDate: (state) => state.currentGameVersion == state.newestGameVersion,
    getIsGettingNewestGameVersion: (state) => state.isGettingNewestGameVersion
}

export default {
    state,
    mutations,
    actions,
    getters
}