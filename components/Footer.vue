<template class="footer">
  <el-row><div class="container">
    <el-row :gutter="20"><div class="footer-main">
      <el-row><h4>Links</h4></el-row>
      <el-row><a href="" taget="_blank" class="links">GitHub</a></el-row>
      <el-row><a href="">Home</a></el-row>
      <el-row><a href="">Cities</a></el-row>
      <el-row><a href="">Login</a></el-row>
      <el-row><a href="">Sign up</a></el-row>
    </div></el-row>
    <div class="footer-main" :gutter="20">
      <h4>Community</h4>
      <a href="">Feedback</a>
      <br>
      <a href=""> Meet Ups</a>
    </div>
    <div class="footer-social" :gutter="20">
      <h4>Social Media</h4>
      <a href="">
        <i class="el-icon-view"></i>
      </a>
      <a href=""></a>

    </div>
  </div></el-row>

</template>

<style>
.el-row{
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 0;
  }
}
.footer .footer-main {
  display: inline-block;
  vertical-align: top;
  margin-right: 110px;
}
.footer {
  width: 100%;
  padding: 40px 150px;
  padding-top: 40px;
  padding-right: 150px;
  padding-bottom: 40px;
  padding-left: 150px;
  margin-top: -340px;
  box-sizing: border-box;
  height: 340px; 
}




</style>


