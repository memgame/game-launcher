import childProcess from 'child_process'

const state = {
    isGameRunning: false
}

const mutations = {
    SET_IS_GAME_RUNNING(state, value) {
        state.isGameRunning = value
    }
}

const actions = {
    startGame({ commit, getters }) {
        console.log(getters.getIsCurrentVersionUpToDate)
        if (getters.getIsCurrentVersionUpToDate) {
            commit('SET_IS_GAME_RUNNING', true)
            childProcess.exec(process.cwd() + '/game/testBuild.exe', (err) => {
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
