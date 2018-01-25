<template>
  <div class="city-button-root">
    <!-- loop through all cities - create button with <br> for each -->
    <div v-for="city in cities" :key="city" class="city-button-item">
      <el-button  
        round
        type="warning"
        class="city-button">{{ city }}
      </el-button>
      <br>
    </div>
  </div>
</template>

<script>
// export data object
export default {
  data() {
    return {
      cities: ["Asheville", "Charlotte", "Durham", "Raleigh", "Wilmington"]
    }
  }
}
</script>

<style>
/* flex box center root */
.city-button-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/* equal spacing for buttons */
.city-button-item {
  margin: auto;
}

/* button style */
.city-button {
  font-family: 'Courier', sans-serif;
  font-weight: bold;
  font-size: 2.4em;
  margin: 10px;
  border: 1px solid #545c64;
}
</style>
