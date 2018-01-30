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
      </div>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      baseNavItems: [
        { label: 'Home', route: '/'  },
        { label: 'Cities', route: '/cities' },
        { label: 'Brew Stack', route: '/brewstack' },
      ]
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
    navItems() {
      return this.isAuthenticated ?
        [ ...this.baseNavItems, { label: 'Profile', route: '/profile' } ] :
        [ ...this.baseNavItems, { label: 'Login', route: '/login' } ]
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

.nav-items, .header-title, .header-img, .header-span {
  outline: none !important;
}
</style>