import fse from 'fs-extra'
import firebase from 'firebase'
import download from 'download'
import extractZip from 'extract-zip'
import config from '../../../../config/config'

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
                    commit('SET_NEWEST_GAME_VERSION', data.version)
                    //TODO check OS and get download link for the specific OS
                    commit('SET_NEWEST_GAME_VERSION_DOWNLOAD_LINK', data.windows)
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
            .catch(() => {
                commit('SET_IS_GETTING_NEWEST_GAME_VERSION', false)
            })
    },
    installNewestGameVersion({ state, commit }) {
        extractZip(
            config.tmpFolderName + '/' + config.game.zipFileName,
            {
                dir: process.cwd() + '/' + config.game.folerName,
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
            }
        )
    }
}

const getters = {
    getIsCurrentVersionUpToDate: (state) => state.currentGameVersion == state.newestGameVersion
}

export default {
    state,
    mutations,
    actions,
    getters
}