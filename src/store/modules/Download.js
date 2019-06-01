import fse from 'fs-extra'
import firebase from 'firebase'
import settings from 'electron-settings'
import request from 'request'
import requestProgress from 'request-progress'
// https://www.npmjs.com/package/request
// https://www.npmjs.com/package/request-progress
// import download from 'download'
import extractZip from 'extract-zip'
import config from '../../../config/config'

const state = {
    currentGameVersion: settings.get('currentGameVersion') || null,
    newestGameVersion: null,
    newestGameVersionDownloadLink: null,
    isGettingNewestGameVersion: false,
    downloadPercent: 0
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
    },
    SET_DOWNLOAD_PERCENT(state, value) {
        state.downloadPercent = value
    }
}

const actions = {
    async checkNewestGameVersionAsync({ commit, getters, dispatch }) {
        var db = firebase.firestore()
        await db.collection('gameBuilds').orderBy('version', 'desc').limit(1).get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    var data = doc.data()
                    commit('SET_NEWEST_GAME_VERSION', data.version)
                    commit('SET_NEWEST_GAME_VERSION_DOWNLOAD_LINK', data[process.platform])
                })
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            })
    },
    async downloadNewestGameVersionAsync({ state, commit, dispatch }) {
        commit('SET_DOWNLOAD_PERCENT', 0)
        commit('SET_IS_GETTING_NEWEST_GAME_VERSION', true)
        console.log('start downloading')
        console.log(state.newestGameVersionDownloadLink)

        if (!fse.existsSync(config.tmpFolderName)){
            fse.mkdirSync(config.tmpFolderName);
        }

        requestProgress(request(state.newestGameVersionDownloadLink), {})
        .on('progress', (state) => {
            console.log(state)
            commit('SET_DOWNLOAD_PERCENT', state.percent)
        })
        .on('error', (err) => {
            console.log(err)
            commit('SET_IS_GETTING_NEWEST_GAME_VERSION', false)
        })
        .on('end', () => {
            console.log('end download game')
            commit('SET_DOWNLOAD_PERCENT', 1)
            dispatch('installNewestGameVersion')
        })
        .pipe(fse.createWriteStream(`${config.tmpFolderName}/${config.game.zipFileName}`))
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
                    settings.set('currentGameVersion', state.newestGameVersion)
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