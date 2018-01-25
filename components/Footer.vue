<template>
 <el-footer class="footer">
    <el-row :gutter="0"><div class="container">
      <!-- links -->
      <el-col :span="8"><div class="footer-main">
        <el-row> <h4> Links</h4> </el-row>
        <el-row><a href="" class="links">GitHub</a></el-row>
        <el-row><a href="">Home</a></el-row>
        <el-row><a href="">Cities</a></el-row>
        <el-row><a href="">Login</a></el-row>
        <el-row><a href="">Sign up</a></el-row>
      </div></el-col>
      <!-- Community -->
      <el-col :span="8"><div class="footer-main">
        <el-row><h4>Community</h4></el-row>
        <el-row> <a href="">Feedback</a></el-row>
        <el-row> <a href="">Meet up</a></el-row>
      </div></el-col>
      <!-- Social-Media -->
      <el-col :span="8"> <div class="footer-social">
        <el-row> <h4>Social Media</h4></el-row>
        <el-row> <a href=""> <img class="header-img" src="../static/github.png" alt="github pic"></a>
        <a href=""> <img class="header-img" src="../static/twitter.png" alt="twitter pic"></a></el-row>
      </div></el-col>
      <!-- Copy Rights -->
      <el-row :gutter="20"> 
        <el-col :span="12" :offset="6">
        <div>
          <h6 id="copy-right"> 
            &copy; All Rights Rever
            <br>
            Charles Kenny Paul Zavattieri Emmanuel Mosqueda R.
          </h6>
        </div>
      </el-col>
    </el-row>
   </div></el-row>
   
 </el-footer>

</template>

<style>
.footer{
  align-self: auto;
  background-color: #545c64;
  color: #fccb5d;
}
.container {
 align-self: auto;
  background-color: #545c64;
  color: #fccb5d;
}
#copy-right{
  text-align: center;
}

</style>


