<template>
  <el-menu
    class="header-root"
    mode="horizontal"
    background-color="#545c64"
    text-color="#ebb563"
    active-text-color="#f18e1c">
      <img class="header-img" src="../static/keg.png" alt="keg pic">
      <h1 class="header-title">Kegged.</h1>
      <span class="header-span">Craft your taste.</span>
      <div class="nav-items">
        <nuxt-link to="/">
          <el-menu-item index="1">Home.</el-menu-item>
        </nuxt-link>
        <nuxt-link to="/cities">
          <el-menu-item index="2">Cities.</el-menu-item>
        </nuxt-link>
        <nuxt-link to="/brewstack">
          <el-menu-item index="3">Breweries.</el-menu-item>
        </nuxt-link>
        <nuxt-link to="/login">
          <el-menu-item index="4">Login.</el-menu-item>
        </nuxt-link>
      </div>
  </el-menu>
</template>

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