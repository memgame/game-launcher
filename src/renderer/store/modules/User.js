import firebase from 'firebase'

const state = {
    isAnonymous: true,
    displayName: null,
    uid: null,
    email: null,
    token: null,
    loginError: '',
    isLoginInProgress: false
}

const mutations = {
    SET_IS_ANONYMOUS(state, value) {
        state.isAnonymous = value
    },
    SET_LOGIN_ERROR(state, value) {
        state.loginError = value
    },
    SET_USER_TOKEN(state, value) {
        state.token = value
    },
    SET_USER_EMAIL(state, value) {
        state.email = value
    },
    SET_USER_UID(state, value) {
        state.uid = value
    },
    SET_DISPLAY_NAME(state, value) {
        state.displayName = value
    },
    LOGOUT_USER(state) {
        state.isAnonymous = true
        state.displayName = null
        state.uid = null
        state.email = null
        state.token = null
        state.loginError = ''
    },
    SET_IS_LOGIN_IN_PROGRESS(state, value) {
        state.isLoginInProgress = value
    }
}

const actions = {
    signUp({ commit }, value) {
        commit('SET_IS_LOGIN_IN_PROGRESS', true)
        commit('SET_LOGIN_ERROR', '')
        firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
            .then((res) => {
                commit('SET_USER_EMAIL', res.user.email)
                commit('SET_USER_UID', res.user.uid)
                commit('SET_DISPLAY_NAME', res.user.displayName)
                commit('SET_IS_ANONYMOUS', false)
                commit('SET_IS_LOGIN_IN_PROGRESS', false)
            })
            .catch((error) => {
                commit('SET_LOGIN_ERROR', 'Could not create an account')
                commit('SET_IS_LOGIN_IN_PROGRESS', false)
            })
    },
    signIn({ commit }, value) {
        commit('SET_IS_LOGIN_IN_PROGRESS', true)
        commit('SET_LOGIN_ERROR', '')
        firebase.auth().signInWithEmailAndPassword(value.email, value.password)
            .then((res) => {
                commit('SET_USER_EMAIL', res.user.email)
                commit('SET_USER_UID', res.user.uid)
                commit('SET_DISPLAY_NAME', res.user.displayName)
                commit('SET_IS_ANONYMOUS', false)
                commit('SET_IS_LOGIN_IN_PROGRESS', false)
            })
            .catch((error) => {
                commit('SET_LOGIN_ERROR', 'The email and password you entered don\'t match')
                commit('SET_IS_LOGIN_IN_PROGRESS', false)
            })
    },
    logout({ commit }) {
        commit('LOGOUT_USER')
    },
    changeDisplayName({ commit, getters }, value) {
        if (getters.getDisplayNameRaw != value) {
            firebase.auth().currentUser.updateProfile({
                displayName: value
            }).then(() => {
                commit('SET_DISPLAY_NAME', value)
            })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}

const getters = {
    getDisplayNameRaw: (state) => state.displayName,
    getDisplayName: (state, getters) => {
        var displayNameRaw = getters.getDisplayNameRaw
        var displayName = !!displayNameRaw
            ? displayNameRaw
            : 'Anonymous'
        return displayName
    },
    getIsLoginInProgress: () => state.isLoginInProgress
}

export default {
    state,
    mutations,
    actions,
    getters
}
