<template>
  <el-container class="profile-container">
    <div class="left-side">
      <profile-button v-for="item in items" :key="item" :text="item" class="page-buttons" />
    </div>
    <div class="right-side">
			<div class="profile-header-root">
				<div class="profile-pic-root">
					<img src="head.png" class="profile-pic"/>
				</div> 
				<div class="name-root">
					<h1>Dummy User</h1> 
				</div>
				<div class="follow-root">
					<profile-button id="follow-b" :text="follow"></profile-button>
				</div>
			</div>
      <div>
				<h3 id="bio-text">About Me</h3>
        <p id="bio-text">Hey, I'm dummy user. I like dummy user stuff and things.</p>
        <h3 id="bio-text">Local City</h3>
        <p id="bio-text">Raleigh</p>
        <h3 id="bio-text">Favorite Brewery</h3>
        <p id="bio-text">Big Boss</p>
        <h3 id="bio-text">Favorite Brews</h3>
        <p id="bio-text">Dogfish Head 120 Minute IPA, Bell's Hopslam</p>
      </div>
    </div>
  </el-container>
</template>

<script>
import { Button } from '@/components'

export default {
  components: {
    'profile-button': Button
  },
  data(){
    return{
      items: ["Home", "Cities","Breweries", "Forum","About"],
			follow: "Follow"
    }
  }
}
</script>

<style>
.profile-container {
	display: flex;
	align-items: center;
	justify-content: center;
}

.left-side{
	width: 13%;
	background-color: #545c64;
	margin: 0px 20px;
	padding: 5px;
	border-radius: 10px;	
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.page-buttons {
	margin: 10px 0px;
	font-size: 1.5em;
}

.right-side {
	width: 50%;
	margin: 20px;
	background-color: #DCDCDC;
	border-radius: 10px;
}

.profile-header-root {
	height: 100px;
	background-color: #545c64;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	border-radius: 10px;
}

.name-root {
	width: 70%;
	text-align: center;
	font-weight: bold;
	color:#ebb563;
	font-size: 1.5em;
}

.profile-pic-root, .follow-root {
	width: 15%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.profile-pic-root {
	text-align: left;
}

.profile-pic {
	height: 90%;
}

.follow-root {
	text-align: right !important;
}

#bio-text{
  margin-left: 15px;
}
</style>

<style scoped>
.el-button+.el-button {
  margin-left: 0;
}
</style>



