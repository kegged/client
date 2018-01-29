<template>
  <div class="container">
      <el-row class="main-container" :gutter="20">
           <h1 class="title">The Kegged Team.</h1>
        <!-- Charles Kenny -->
        <el-col :span="6" :offset="3"> <p class="profile"> <img src="charles-k.jpeg" style="width:120px;height:120px;margin-right:15px;" class="img-circle"> 
            Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p> </el-col>
        <!-- Paul  -->
        <el-col :span="6"> 
          <p class="profile"> 
          <img src="paul-z2.jpeg" style="width:120px;height:120px;margin-right:15px;" class="img-circle"> 
          Hey, I'm Paul. I'm originally from Wilmington, NC, but have called Raleigh, NC my home for the past eight years. 
          I've explored the best breweries NC has to offer, and my current favorite has to be Waterline Brewing Company in Wilmington (try their Kolsch!).
          Locally, my favorite Raleigh brewery is Big Boss. Hope you enjoy Kegged.
          </p> 
        </el-col>
        <!-- Emmanuel -->
        <el-col :span="6"> <p class="profile"> <img src="eman.jpg" style="width:120px;height:120px;margin-right:15px;object-fit: cover;" class="img-circle">
            Hola, I'm Emmanuel. Beer plays a big role in my culture and over the years that role has grown into a passion for me.
            Here at Kegged we're devoted developers that want to bring you outsider and locals the best experience when visiting and living in
            NC with all its great breweries that it has to offer.
        </p>
        </el-col>
      </el-row>
  </div>
</template>

<style>
.container{
  text-align: center;
}

.main-container {
  max-width: 100%;
}

.title {
     color: #545c64;
  font-weight: bolder;
  margin-bottom: 12px;
}
.profile{
    border-radius: 25px;
    background-color: #ebb563;
    margin-left:55px;
    padding-top: 15px;
    padding-right: 15px;
    padding-bottom: 20px;
    padding-left: 15px;
    width: 250px;
    border: 1px solid #545c64;
    color: #545c64;
}
.img-circle {
    border-radius: 50%;
    float: left;
}

</style>


