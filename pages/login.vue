<template>
  <div>
    <input type="text" v-model="userName" />
    <input type="text" v-model="passWord" />
    <button @click="preformLogin" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import { LOGIN } from '@/store/types/actions'

export default {
  data() {
    return {
      userName: '',
      passWord: '',
    }
  },
  methods: {
    ...mapActions({ login: LOGIN }),
    preformLogin() {
      const { userName, passWord } = this
      this.login({ userName, passWord })
    }
  }
}
</script>
