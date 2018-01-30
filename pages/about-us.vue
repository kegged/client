<template>
  <div class="about-us-container">
    <el-row class="about-header-root" :gutter="20">
      <h1 class="about-us-title">The Kegged Team.</h1>
    </el-row>
    <el-row class="about-content-root">
      <!-- Charles Kenny -->
      <el-col class="profile-card-root">
        <el-card class="profile-card">
          <div slot="header" class="card-header">
            <img src="charles-k.jpeg" class="about-us-image" alt="pic of charles"> 
          </div>
          <div class="card-body">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
          </div>
        </el-card>
      </el-col>
      <!-- Paul  -->
      <el-col class="profile-card-root">
        <el-card class="profile-card">
          <div slot="header" class="card-header"> 
            <img src="paul-z2.jpeg" class="about-us-image" alt="pic of paul"> 
          </div>
          <div class="card-body">
            <p>Hey, I'm Paul. I'm originally from Wilmington, NC, but have called Raleigh, NC my home for the past eight years. 
            I've explored the best breweries NC has to offer, and my current favorite has to be Waterline Brewing Company in Wilmington (try their Kolsch!).
            Locally, my favorite Raleigh brewery is Big Boss. Hope you enjoy Kegged.</p>
          </div> 
        </el-card>
      </el-col>
      <!-- Emmanuel -->
      <el-col class="profile-card-root"> 
        <el-card class="profile-card">
          <div slot="header" class="card-header">
            <img src="eman.jpg" class="about-us-image" alt="pic of eman">
          </div>
          <div class="card-body">
            <p>Hola, I'm Emmanuel. Beer plays a big role in my culture and over the years that role has grown into a passion for me.
            Here at Kegged we're devoted developers that want to bring both outsiders and locals the best experience when visiting and living in
            NC with all its great breweries that it has to offer.</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.about-us-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
}

.about-header-root, .about-content-root {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
}

.about-us-title {
  color: #545c64;
  font-weight: bolder;
  margin: 0px;
  text-align: center;
}

.profile-card-root {
  width: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.profile-card {
  width: 80%;
  background-color: #DCDCDC;
}

.el-card__header {
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bolder;
  background-color: #545c64;
}

.el-card__body {
  background-color: #DCDCDC;
  padding: 10px;
}

.about-us-image {
  max-height: 260px;
  border: 1px solid #ebb563;
}
</style>
