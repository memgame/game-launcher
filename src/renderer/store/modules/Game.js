import childProcess from 'child_process'
import config from '../../../../config/config'

const state = {
    isGameRunning: false
}

const mutations = {
    SET_IS_GAME_RUNNING(state, value) {
        state.isGameRunning = value
    }
}

const actions = {
    async startGameAsync({ commit, getters, state, dispatch }) {
        console.log(getters.getIsCurrentVersionUpToDate)
        await dispatch('checkNewestGameVersionAsync')
        if(!getters.getIsCurrentVersionUpToDate) {
            await dispatch("downloadNewestGameVersionAsync");
        }
        if (getters.getIsCurrentVersionUpToDate) {
            commit('SET_IS_GAME_RUNNING', true)
            var gamePath = config.rootFolder + '/' + config.game.folderName + '/' + config.game[process.platform].startfile
            var command = `${gamePath} -serverip ${getters.getServerIp} -serverport ${getters.getPort} -roomname ${getters.getRoomName}`
            alert(command, 'start command')
            childProcess.exec(command, (err) => {
                if(err) {
                    alert(err)
                }
                console.log(err)
                commit('SET_IS_GAME_RUNNING', false)
            })
        }
    }
}


const getters = {
    getIsGameRunning: (state) => state.isGameRunning
}

export default {
    state,
    mutations,
    actions,
    getters
}
