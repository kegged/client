<template>
  <div class="register-root">
    <el-card class="register-card">
      <!-- Header -->
      <div slot="header">
        <span>Register</span>
      </div>
      <!-- Form -->
      <el-form
        label-width="100"
        status-icon
        :model="form"
        :rules="rules"
        label-position="right"
        ref="form"
      >
        <el-form-item label="First name" prop="firstName">
          <el-input
            spellcheck="false"
            auto-complete="off"
            type="text"
            v-model="form.firstName"
          />
        </el-form-item>
        <el-form-item label="Last name" prop="lastName">
          <el-input
            spellcheck="false"
            auto-complete="off"
            type="text"
            v-model="form.lastName"
          />
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input
            spellcheck="false"
            auto-complete="off"
            type="text"
            v-model="form.email"
          />
        </el-form-item>
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
            ref="passWord"
            spellcheck="false"
            auto-complete="off"
            :type="showPassword ? 'text' : 'password'"
            v-model="form.passWord"
          />
        </el-form-item>
        <el-form-item label="Confirm" prop="confirm">
          <el-input
            spellcheck="false"
            auto-complete="off"
            :type="showPassword ? 'text' : 'password'"
            v-model="form.confirm"
          />
        </el-form-item>
        <div class="register-form-controls">
          <x-button
            @click="preformRegister"
            text="Register"
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { isEmail } from 'validator'

import axios from '@/plugins/axios'
import { Button } from '@/components'
import { REGISTER } from '@/store/types/actions'

export default {
  middleware: 'unauth',
  components: { 'x-button': Button },
  data() {
    const emailValidator = async (rule, value, callback) => {
      if (value === '') return callback(new Error('Please enter your email'))

      if (!isEmail(value)) {
        return callback(new Error('Email is invalid'))
      }

      try {
        await axios.get(`users/email/${value}`)
        return callback(new Error('Email is already taken'))
      } catch (err) { /* swallow 404 */ }

      callback()
    }

    const userNameValidator = async (rule, value, callback) => {
      if (value === '') return callback(new Error('Please enter your username'))

      if (!/^[a-z0-9-_]{3,20}$/i.test(value)) {
        return callback(new Error('Username is invalid'))
      }

      try {
        await axios.get(`users/${value}`)
        return callback(new Error('Username is already taken'))
      } catch (err) { /* swallow 404 */ }

      callback()
    }

    const confirmValidator = async (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('Please confirm your password'))
      }

      this.$refs.form.validateField('passWord')
      if (this.$refs.passWord.validateState === 'error') {
        return callback(new Error('Initial password is invalid'))
      }
      
      if (value !== this.form.passWord) {
        return callback(new Error('Does not match password'))
      }

      callback()
    }

    return {
      showPassword: false,
      form: {
        userName: '',
        passWord: '',
        confirm: '',
        firstName: '',
        lastName: '',
        email: '',
      },
      rules: {
        firstName: [
          {
            required: true,
            message: 'Please enter your first name',
            trigger: 'blur',
          }
        ],
        lastName: [
          {
            required: true,
            message: 'Please enter your last name',
            trigger: 'blur',
          }
        ],
        email: [
          {
            required: true,
            validator: emailValidator,
            trigger: 'change'
          },
          {
            required: true,
            validator: emailValidator,
            trigger: 'blur',
          }
        ],
        userName: [
          {
            required: true,
            validator: userNameValidator,
            trigger: 'change',
          },
          {
            required: true,
            validator: userNameValidator,
            trigger: 'blur',
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
        confirm: [
          {
            required: true,
            validator: confirmValidator,
            trigger: 'change',
          },
          {
            required: true,
            validator: confirmValidator,
            trigger: 'blur',
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions({ register: REGISTER  }),
    preformRegister() {
      const { form } = this
      this.$refs.form.validate(valid => {
        if (valid) this.register({
          form: { ...form, confirm: undefined },
          cbUrl: this.$route.query.cbUrl,
        })
        this.$refs.form.clearValidate()
      })
    }
  }
}
</script>

<style>
.register-root {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.register-card {
  width: 600px;
}

.register-form-controls {
  margin: 10px 20px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
