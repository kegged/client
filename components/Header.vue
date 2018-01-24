<template>
  <el-menu class="header-root" mode="horizontal">
    <h1 class="header-title">Learning</h1>
    <div class="nav-items">
      <el-menu-item index="1">Home</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Cities</template>
          <el-menu-item index="2-1">Raleigh</el-menu-item>
          <el-menu-item index="2-2">Charlotte</el-menu-item>
          <el-menu-item index="2-3">Wilmington</el-menu-item>
          <el-menu-item index="2-4">Asheville</el-menu-item>
          <el-menu-item index="2-5">Durham</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">Contact</el-menu-item>
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

.nav-items {
  margin-left: auto;
  display: flex; 
  outline: none !important;
}
</style>