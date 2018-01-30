<template>
  <el-container class="profile-container">
    <el-card class="profile-info-root">
			<div slot="header" class="profile-header-root">
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
      <div class="profile-card-body">
				<h3 id="bio-text">About Me</h3>
        <p id="bio-text">Hey, I'm dummy user. I like dummy user stuff and things.</p>
        <h3 id="bio-text">Local City</h3>
        <p id="bio-text">Raleigh</p>
        <h3 id="bio-text">Favorite Brewery</h3>
        <p id="bio-text">Big Boss</p>
        <h3 id="bio-text">Favorite Brews</h3>
        <p id="bio-text">Dogfish Head 120 Minute IPA, Bell's Hopslam</p>
      </div>
    </el-card>
		<el-card class="link-to-posts-root">
			<div slot="header" class="link-to-posts-header">
				<div class="link-to-post-title">
       		<span>Your Posts</span>
     	  </div>
			</div>
			<div class="link-to-posts-body">
				<div v-for="(item, i) in posts" :key="i">
       		<span>{{ i+1 }}.</span>
					<nuxt-link class="post-link-nuxt" to="/">
					  <span>{{ item.title }}</span>
					</nuxt-link>
     	  </div>
			</div>
		</el-card>
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
			follow: "Follow",
			posts: [
				{ title: "Placeholder title 1" }, 
				{ title: "Placeholder title 2" }, 
				{ title: "Placeholder title 3" }, 
				{ title: "Placeholder title 4" }
			]
    }
  }
}
</script>

<style>
/* fixme: namespace these styles; use more descriptive class names */
.profile-container {
	display: flex;
	align-items: center;
	justify-content: center;
}

.profile-info-root {
	width: 45%;
	margin: 20px;
	background-color: #DCDCDC;

}

.profile-header-root {
	height: 100px;
	background-color: #545c64;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
}

.name-root {
	width: 70%;
	text-align: center;
	font-weight: bold;
	color:#ebb563;
	font-size: 1.5em;
}

.el-card__header {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #ebb563;
  font-weight: bolder;
  background-color: #545c64;
  font-size: 1.1em;
}

.el-card__body {
  background-color: #DCDCDC;
  padding: 10px;
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

.link-to-posts-root {
	width: 20%;
}

.link-to-posts-header {
	text-align: center;
}

.link-to-posts-body {
	line-height: 2em;
}

.post-link-nuxt {
  text-decoration: none;
  cursor: pointer;
	color: black;
}

.post-link-nuxt:hover {
  text-decoration: underline;
}
</style>

<style scoped>
.el-button+.el-button {
  margin-left: 0;
}
</style>



