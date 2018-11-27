import firebase from 'firebase'

const state = {
    currentGameVersion: null,
    newestGameVersion: null
}

const mutations = {
    SET_NEWEST_GAME_VERSION(state, value) {
        state.newestGameVersion = value
    }
}

const actions = {
    downloadNewestGameVersion({ commit }) {
        var db = firebase.firestore()
        db.collection('gameBuilds').orderBy('version', 'desc').limit(1).get()
            .then(function (querySnapshot) {
                console.log(querySnapshot)
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data())
                    commit('SET_NEWEST_GAME_VERSION', 'v' + doc.data().version)
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
