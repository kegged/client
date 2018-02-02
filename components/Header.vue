<template>
  <el-menu
    router
    :default-active="$route.path"
    class="header-root"
    mode="horizontal"
    background-color="#545c64"
    text-color="#ebb563"
    active-text-color="#f18e1c">
      <img class="header-img" src="../static/keg.png" alt="keg pic">
      <h1 class="header-title">
        <nuxt-link to="/" class="home-link">
          Kegged.
        </nuxt-link>
      </h1>
      <span class="header-span">Craft your taste.</span>
      <div class="nav-items">
        <template v-for="(item, index) in navItems">
          <el-menu-item
            :key="index"
            :index="item.route"
            :route="item.route"
          >
            {{ item.label }}
          </el-menu-item>
        </template>
        <template v-if="isAuthenticated">
          <el-dropdown
            class="profile-dropdown"
            @command="handleCommand"
            size="small"
          >
            <span class="drop-down-logout">
              <img src="/head.png" class="profile-header-img"/>
              <i class="el-icon-arrow-down el-icon--right"/>
            </span>
            <el-dropdown-menu
              slot="dropdown"
              class="dropdown"
            >
              <el-dropdown-item
                command="goToProfile"
                class="logout-links"
                id="logout"
              >
                Profile
              </el-dropdown-item>
              <el-dropdown-item
                command="logout"
                class="logout-links"
                id="logout"
              >
                Logout
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </div>
  </el-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { LOGOUT } from '@/store/types/actions'

export default {
  methods: {
    ...mapActions({ logout: LOGOUT }),
    handleCommand(cmd) {
      console.log(cmd)
      this[cmd]()
    },
    goToProfile() {
      this.$router.push(`/users/${this.userName}`)
    }
    
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'userName']),
    navItems() {
      const baseNavItems = [
        { label: 'Home.', route: '/'  },
        { label: 'Cities.', route: '/cities' },
        { label: 'Brew Stack.', route: '/brewstack' },
      ]
      return this.isAuthenticated ? baseNavItems :
        [ ...baseNavItems, { label: 'Login.', route: '/login' } ]
    }
  }
}
</script>

<style>
.header-root {
  display: flex;
  width: 100;
  align-items: center;
  font-size: 0.9em;
  height: 70px;
}

.header-title {
  margin: 0px 15px;
  font-weight: 500;
}

.home-link {
  color: #ebb563;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
}

.home-link:hover {
  text-decoration: underline;
}

.header-title, .header-span {
  color: #ebb563;
  font-weight: bold;
}

.header-span {
  padding-top: 8px;
  font-size: 1.1em;
}

.header-img {
  max-height: 40px;
  margin-left: 15px;
}

.nav-items {
  margin-left: auto;
  display: flex; 
}

/* sign out */
.drop-down-logout{
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
}

.profile-header-img{
  outline: none !important;
  height: 40px;
  width: 40px;
}

.logout-links{
  height: 40px;
  width: 70px;
  color:#ebb563;
}

.profile-dropdown span {
  outline: none !important;
}

#logout{
  font-weight: bold;
}

/* Sign-out end */
.nav-items, .header-title, .header-img, .header-span {
  outline: none !important;
}
</style>
