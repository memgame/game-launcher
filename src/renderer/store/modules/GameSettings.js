import config from '../../../../config/config'

const state = {
    serverIp: config.server.ip,
    port: config.server.port,
    roomName: config.server.roomName
}

const mutations = {
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
