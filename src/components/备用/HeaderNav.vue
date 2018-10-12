<template>
  <div class="top">
    <span>
      <img src="../assets/搞笑5.jpg" alt="">
    </span>
    <span>
      消息
    </span>
    <span class="fa fa-plus"></span>
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
  .top{
    background: linear-gradient(to right, #4799ff , #27c4fe);
    color:#fff;
    width:100%;
    height: 50px;
  }
  .top img{
    width: 35px;
    height:35px;
    border-radius: 50%;
  }
  span{
    display:inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
  }
  span:nth-child(1){
    width: 35px;
    height: 35px;
    margin-left: 10px;
    float: left;
    padding: 7.5px;
  }
  span:nth-child(2){
    letter-spacing:5px;
  }
  span:nth-child(3){
    margin-right: 10px;
    float: right;
  }
</style>
