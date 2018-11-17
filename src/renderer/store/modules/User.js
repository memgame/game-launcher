const state = {
    isAnonymous: true,
    displayName: null,
    uid: null,
    email: null
}

const mutations = {
    SET_IS_ANONYMOUS (state, value) {
        state.isAnonymous = value
    }
}

const actions = {
    login ({commit}, value) {
        console.log('login')
        console.log(value.email)
        console.log(value.password)
        commit('SET_IS_ANONYMOUS', false)
    },
    logout ({commit}) {
        console.log('logout')
        commit('SET_IS_ANONYMOUS', true)
    }
}

export default {
    state,
    mutations,
    actions
}
  