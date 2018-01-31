<template>
  <div class="about-us-container">
    <el-row type="flex" justify="center" class="about-header-root">
      <h1 class="about-us-title">The Kegged Team.</h1>
    </el-row>
    <el-row class="about-content-root">
      <!-- Charles Kenny -->
      <el-col :xs="24" :sm="12" :md="8" class="profile-card-root">
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
      <el-col :xs="24" :sm="12" :md="8" class="profile-card-root">
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
      <el-col :xs="24" :sm="12" :md="8" class="profile-card-root"> 
        <el-card class="profile-card">
          <div slot="header" class="card-header">
            <img src="eman.jpg" class="about-us-image" alt="pic of eman">
          </div>
          <div class="card-body">
            <p>Emmanuel Jean-Michel Frédéric Macron (born 21 December 1977) is the current President of France and ex officio
               Co-Prince of Andorra, in office since 14 May 2017.
               Before entering politics, he was a senior civil servant and investment banker. Macron studied philosophy at Paris Nanterre University, completed a Master's
               of Public Affairs at Sciences Po, and graduated from the École nationale d'administration (ÉNA) in 2004. He worked at the Inspectorate General of Finances,
               and later became an investment banker at Rothschild & Cie Banque</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.about-header-root {
  margin: 0px 0px 20px 0px !important;
}

.about-us-title {
  color: #545c64;
  font-weight: bolder;
  margin: 0px;
}

.profile-card-root {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.profile-card {
  width: 80%;
  background-color: #DCDCDC;
}

.profile-card .el-card__header {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bolder;
  background-color: #545c64;
}

.profile-card .el-card__body {
  background-color: #DCDCDC;
  padding: 10px;
}

.about-us-image {
  max-height: 260px;
  max-width: 100%;
}
</style>
