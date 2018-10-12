<template>
  <div>
    <div class="bot">
      <router-link to="">
       <span>
          <img src="../assets/iconfont-7.png" alt="">
          <p>消息</p>
       </span>
      </router-link>
      <router-link to="">
        <span>
          <img src="../assets/iconfont-me.png" alt="">
          <p>联系人</p>
        </span>
      </router-link>
      <router-link to="">
        <span>
          <img src="../assets/眼睛.png" alt="">
          <p>看点</p>
        </span>
      </router-link>
       <router-link to="">
          <span>
            <img src="../assets/事务动态.png" alt="">
            <p>动态</p>
          </span>
       </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
  export default {
    data:function () {
      return{

      }
    }
  }
</script>

<style scoped>
  .bot{
    position: absolute;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    background: #eee;
    bottom:0;
    color: #8a8a8a;
  }
  .bot span{
    display: inline-block;
    width: 50px;
    height: 40px;
    margin-top: 5px;
    /*border:solid 1px red;*/
  }
   img{
    width: 25px;
    height: 25px;
  }
  p{
    font-size: 10px;
    color:#8a8a8a;
  }
  /*.bot span>span{
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: red;
    vertical-align:top;
  }*/


</style>
