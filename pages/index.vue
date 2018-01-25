<template>
  <div center class="welcome-root">
    <h1 class="welcome-message">Welcome to Kegged.</h1>
    <h3 class="welcome-message">We like NC beer.</h3>
    <h3 class="welcome-message">We hope you do too.</h3>
    <el-button  
      round
      type="warning"
      class="explore-nc-button">Explore NC</el-button>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>
 .welcome-message {
   text-align: center;
   color: #545c64;
   font-weight: bolder;
 }

 .explore-nc-button {
   display: flex;
   margin: auto;
   font-family: 'Courier', sans-serif;
   font-weight: bold;
   font-size: 2.6em;
   border: 1px solid #545c64;
 }
 
</style>