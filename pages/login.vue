<template>
  <div class="login-root">
    <el-card class="login-card">
      <!-- Header -->
      <div slot="header">
        <span>Login</span>
      </div>
      <!-- Form -->
      <el-form
        status-icon
        :model="form"
        :rules="rules"
        ref="form"
      >
        <el-form-item label="Username" prop="userName">
          <el-input
            spellcheck="false"
            auto-complete="off"
            type="text"
            v-model="form.userName"
          />
        </el-form-item>
        <el-form-item label="Password" prop="passWord">
          <el-input
            spellcheck="false"
            auto-complete="off"
            :type="showPassword ? 'text' : 'password'"
            v-model="form.passWord"
          />
        </el-form-item>
        <div class="login-form-controls">
          <x-button
            text="Login"
            @click="preformLogin"
          />
          <el-switch
            v-model="showPassword"
            active-color="#ebb563"
            inactive-text="***"
            active-text="abc"
          />
        </div>
      </el-form>
    </el-card>
    <nuxt-link
      class="login-link"
      :to="cbUrl ? '/register?cbUrl=' + cbUrl : '/register'">
      <strong>
        Create an account
      </strong>
    </nuxt-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import { Button } from '@/components'
import { LOGIN } from '@/store/types/actions'

export default {
  middleware: 'unauth',
  components: { 'x-button': Button },
  data() {
    // validate username
    return {
      showPassword: false,
      form: {
        userName: '',
        passWord: '',
      },
      rules: {
        userName: [
          {
            required: true,
            message: 'Please enter your username',
            trigger: 'blur',
          },
          {
            pattern: /^[a-z0-9-_]{3,20}$/i,
            message: 'Invalid username',
            trigger: 'blur'
          }
        ],
        passWord: [
          {
            required: true,
            message: 'Please enter your password',
            trigger: 'blur',
          },
          {
            pattern: /^.{8,20}$/i,
            message: 'Invalid password',
            trigger: 'blur',
          },
        ],
      }
    }
  },
  methods: {
    ...mapActions({ login: LOGIN }),
    preformLogin() {
      const { form, cbUrl } = this
      this.$refs.form.validate(valid => {
        if (valid) this.login({ form, cbUrl })
        this.$refs.form.clearValidate()
        this.$refs.form.validateField('userName')
      })
    }
  },
  computed: {
    cbUrl() {
      return this.$route.query.cbUrl || ''
    }
  }
}
</script>

<style>
.login-root {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.login-card {
  width: 450px;
}

.login-link {
  margin-top: 10px;
  text-decoration: none;
  color: #545c64;
  font-weight: bolder;
  font-size: 1em;
  line-height: 1.5em;
}

.login-form-controls {
  margin: 10px 20px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>

<style>
/* global */
.el-switch__label.is-active {
  color: #ebb563 !important;
}
</style>
