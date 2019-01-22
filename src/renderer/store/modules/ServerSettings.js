import config from '../../../../config/config'

const state = {
    serverIp: config.server.ip,
    port: config.server.port,
    roomName: config.server.roomName
}

const mutations = {
    updateServerIp (state, value) {
        state.serverIp = value
    },
    updatePort (state, value) {
        state.port = value
    },
    updateRoomName (state, value) {
        state.roomName = value
    }
}

const actions = {
}


const getters = {
    getServerIp: (state) => state.serverIp,
    getPort: (state) => state.port,
    getRoomName: (state) => state.roomName
}

export default {
    state,
    mutations,
    actions,
    getters
}
