import axios from '@/plugins/axios'

export default (key, storage) => {
  try {
    // parse persisted state and restore to vuex store
    const state = JSON.parse(storage.getItem('state'))
    // set app wide auth header for authorized requests
    axios.defaults.headers.common['Authorization'] = state.auth ?
      state.auth.token : undefined
    return state
  } catch (err) { return undefined }
}
