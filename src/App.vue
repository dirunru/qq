<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
   <transition name="slide">
     <template v-if="isShow">
       <side-bar></side-bar>
     </template>
   </transition>
    <template v-if="isShow">
      <div class="shadow" @click="isShow=false">

      </div>
    </template>
    <div :class="isShow?'action':'back'">
      <router-view/>
    </div>
  </div>
</template>

<script>
import bus from './bus';
import SideBar from './components/SideBar'
export default {
  name: 'App',
  components:{
    SideBar
  },
  data:function(){
    return{
      isShow:false
    }
  },
  mounted:function () {
    var that=this;
    bus.$on('sendValue',function (val) {
      console.log(val);
      that.isShow=val;
    })
  },
//  当侧边栏显示，滚动条不能滚动
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ul li{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
  .shadow{
    position:fixed;
    width: 100%;
    height: 100vh;
    right:0;
    top: 0;
    background: rgba(0,0,0,0.3);
    z-index:8;
  }
  .slide-enter{
    transform: translate(-100%);
  }
  .slide-enter-active,.slide-leave-active{
    transition: all 0.5s;
  }
  .slide-leave-to{
    transform: translate(-100%);
  }
  .action{
    margin-left:80%;
    transition:all .5s;
  }
  .back{
    margin-left:0;
    transition:all .5s;
  }
</style>
