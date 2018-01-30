import axios from '@/plugins/axios'
import { Notification, Message } from 'element-ui'

import * as mutationTypes from '../types/mutations'
import * as actionTypes from '../types/actions'

const state = {
  token: null,
  user: null,
}

const mutations = {
  [mutationTypes.SET_USER] (state, { user, token }) {
    state.token = token
    state.user = user
  },

  [mutationTypes.UNSET_USER] (state) {
    state.token = {
      token: null,
      user: null,
    }
  }
}

const actions = {
  [actionTypes.LOGOUT] ({ commit }) {
    axios.defaults.headers.common['Authorization'] = undefined
    delete axios.defaults.headers.common['Authorization']
    commit(mutationTypes.UNSET_USER)
  },

  async [actionTypes.LOGIN] ({ commit }, { userName, passWord }) {
    try {
      const { data } = await axios.post('login', {
        userName,
        passWord
      })
      // set user
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
      commit(mutationTypes.SET_USER, data)
      // go home
      this.app.router.push('/')
      Notification({
        title: 'Welcome back',
        message: `Welcome, ${data.user.firstName || 'user'}!`,
      })
    } catch (err) {
      const message = err.response.status === 401 || 404 ?
        'Incorrect username or password' : 'Could not login'
      Message({ type: 'error', message })
    }
  }
}

const getters = {
  user: state => state.user,
  token: token => state.token,
  isAuthenticated: state => state.user !== null
}

export default {
  state,
  mutations,
  actions,
  getters,
}
