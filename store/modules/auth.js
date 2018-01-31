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
    state.user = null
    state.token = null
  }
}

const actions = {
  [actionTypes.LOGOUT] ({ commit }) {
    axios.defaults.headers.common['Authorization'] = undefined
    delete axios.defaults.headers.common['Authorization']
    commit(mutationTypes.UNSET_USER)
  },

  async [actionTypes.LOGIN] ({ commit }, { form, cbUrl }) {
    try {
      const { data } = await axios.post('login', form)
      // set user
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
      commit(mutationTypes.SET_USER, data)
      // redirect
      this.app.router.push(cbUrl || '/')
      Notification({
        title: 'Welcome back',
        message: `Welcome, ${data.user.firstName || 'user'}!`,
      })
    } catch (err) {
      const message = err.response.status === 401 || 404 ?
        'Incorrect username or password' : 'Could not login'
      Message({ type: 'error', message })
    }
  },

  async [actionTypes.REGISTER] ({ commit }, { form, cbUrl }) {
    try {
      const { data } = await axios.post('users', form)
      // set user
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
      commit(mutationTypes.SET_USER, { token: data.Token, user: data.newUser })
      // go home
      this.app.router.push(cbUrl || '/')
      Notification({
        title: 'Welcome to kegged!',
        message: `Welcome, ${data.newUser.firstName || 'user'}!`
      })
    } catch (err) {
      Message({ type: 'error', message: err.message })
    }
  }
}

const getters = {
  user: state => state.user,
  token: token => state.token,
  isAuthenticated: state => state.user !== null,
  userName: state => state.user.userName
}

export default {
  state,
  mutations,
  actions,
  getters,
}
