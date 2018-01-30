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
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import { Button } from '@/components'
import { LOGIN } from '@/store/types/actions'

export default {
  components: { 'x-button': Button },
  data() {
    // validate username
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
            message: 'Please enter your email',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Invalid email address',
            trigger: 'blur',
          }
          /* call api to see if taken here */
        ],
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
          /* call api to see if taken here */
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
            validator: (rule, value, callback) => {
              if (value !== this.form.passWord) {
                return callback(new Error('Does not match password'))
              }
              callback()
            },
            trigger: 'change',
          }
        ]
      }
    }
  },
  methods: {
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
</style>
