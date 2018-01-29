<template>
    <el-container>
        <div class="left-side">
            <div class="profile-buttons">
                <profile-button v-for="item in items" :key="item" :text="item" class="page-buttons" />
            </div>
        </div>
        <div class="right-side">
            <el-header class="pro-header">
                <img 
                src="head.png" 
                style="width:80px;height:80px;margin-right:15px;" 
                class="img-circle"/> 
                Dummy User 
                <br>
                <el-button id="follow-b" round>Follow</el-button>
            </el-header>
            <div class="main-profile">
                <h3 id="bio-text"> Locals City</h3>
                    <p id="bio-text">:Raleigh</p>
                <h3 id="bio-text"> Most Visited Brewery</h3>
                    <p id="bio-text">Big Boss</p>
                <h3 id="bio-text"> Favorite Brew</h3>
                    <p id="bio-text">Pale Ale, IPA</p>
            </div>
        </div>
    </el-container>
</template>

<script>

import {Button} from '@/components'


export default {
    components: {
        'profile-button': Button
    },
    data(){
        return{
            items: ["Home", "Cities","Breweries", "Forum","About"]
        }
    }
  
}
</script>

<style>
.profile-buttons{
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
.container {
     display: flex;
     align-items: center;
     justify-content: center;
}
.left-side{
    width: 30%;
    height: 450px;
    background-color: #545c64;
    margin-right: 20px;
    margin-left: 20px;
    border-radius: 25px;

}
.right-side {
    width: 50%;
    height: 500px;
    background-color: #DCDCDC;
    border-radius: 10px;
}
.pro-header{
    padding-top: 1%;
    padding-bottom: 16%;
    background-color: #545c64;
    align-items: center;
    justify-content: center;
    color: #ebb563;
    font-weight: bolder;
    background-color: #545c64;
    font-size: 1.8em;
    text-align:justify;
    border-radius: 10px;
}
#follow-b{
    margin-top: 5px;
    background: #ebb563;
    color:#545c64;
    font-weight: bold;
}
.img-circle {
    border-radius: 50%;
    float: left;
}
#bio-text{
    margin-left: 15px;

}


</style>


