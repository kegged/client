<!-- 
<template>
 <el-footer class="footer">
    <el-row :gutter="0"><div class="container">
      <el-col :span="8"><div class="footer-main">
        <el-row> <h4> Links</h4> </el-row>
        <el-row><a href="" class="links">GitHub</a></el-row>
        <el-row><a href="">Home</a></el-row>
        <el-row><a href="">Cities</a></el-row>
        <el-row><a href="">Login</a></el-row>
        <el-row><a href="">Sign up</a></el-row>
      </div></el-col>
      <el-col :span="8"><div class="footer-main">
        <el-row><h4>Community</h4></el-row>
        <el-row> <a href="">Feedback</a></el-row>
        <el-row> <a href="">Meet up</a></el-row>
      </div></el-col>
      <el-col :span="8"> <div class="footer-social">
        <el-row> <h4>Social Media</h4></el-row>
        <el-row> <a href=""> <img class="header-img" src="../static/github.png" alt="github pic"></a>
        <a href=""> <img class="header-img" src="../static/twitter.png" alt="twitter pic"></a></el-row>
      </div></el-col>
      <el-row :gutter="20"> 
        <el-col :span="12" :offset="6">
        <div>
          <h6 id="copy-right"> 
            &copy; All Rights Rever
            <br>
            Charles Kenney Paul Zavattieri Emmanuel Mosqueda R.
          </h6>
        </div>
      </el-col>
    </el-row>
   </div></el-row>
 </el-footer>
</template>
-->

<template>
  <footer class="footer-root">
    <div class="footer-sections">
      <div class="footer-section">
        <h4> Links</h4> 
        <a href="">Home</a>
        <a href="">Cities</a>
        <a href="">Login</a>
        <a href="">Sign up</a>
      </div>
      <div class="footer-section">
        <h4>Community</h4>
        <a href="">Feedback</a>
        <a href="">Meet up</a>
      </div>
      <div class="footer-section">
        <h4>Social Media</h4>
        <!-- fixme: replace these with svgs at some point -->
        <div>
          <a href=""> <img class="header-img" src="../static/github.png" alt="github pic"></a>
          <a href=""> <img class="header-img" src="../static/twitter.png" alt="twitter pic"></a>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <h6>
        &copy; All Rights Reserved
        <br/>
        Charles Kenney Paul Zavattieri Emmanuel Mosqueda R.
      </h6>
    </div>
  </footer>
</template>


<style>
.footer-root {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #545c64;
  color: #fccb5d;
}

.footer-sections {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.footer-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.footer-section h4 {
  margin-bottom: 10px;
}

.footer-copyright {
  text-align: center;
}
</style>


