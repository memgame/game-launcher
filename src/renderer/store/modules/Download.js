const state = {
    currentGameVersion: null,
    newestGameVersion: null
}

const mutations = {

}

const actions = {
    downloadNewestGameVersion() {
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
