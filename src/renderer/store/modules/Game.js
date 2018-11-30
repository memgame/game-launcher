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
    startGame({ commit, getters, state }) {
        console.log(getters.getIsCurrentVersionUpToDate)
        if (getters.getIsCurrentVersionUpToDate && !state.isGameRunning) {
            commit('SET_IS_GAME_RUNNING', true)
            childProcess.exec(process.cwd() + '/' + config.game.folerName + '/' + config.game[process.platform].startfile, (err) => {
                console.log(err)
                console.log('hallo')
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
