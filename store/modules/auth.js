import axios from '@/plugins/axios'
import { Notification } from 'element-ui'

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
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
      commit(mutationTypes.SET_USER, data)
    } catch (err) {
      // TODO: handle
      console.error(err)
      Notification({ title: 'Error', message: 'Could not login!' })
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
