<template>
  <div class="top">
    <span @click="btnClick">
      <img src="../assets/搞笑5.jpg" alt="">
    </span>
    <span>
      <slot></slot>
    </span>
    <span class="fa fa-plus">

    </span>
  </div>
</template>


<script>
import bus from '../bus';
  export default {
    data:function(){
      return {

      }
    },
    methods:{
      btnClick:function () {
          bus.$emit('sendValue',true);
      }
    }
  }

</script>

<style scoped>
  .top{
    background:PaleVioletRed;
    color:#fff;
    padding:5px 15px 2px;
    overflow: hidden;
    position: fixed;
    top:0;
    width:100%;
  }
  .top span{
    display: inline-block;
  }
  .top span:first-child{
    float:left;
  }
  .top img{
    width:35px;
    height:35px;
    border-radius:50%;
  }
  .top span:nth-child(2){
    position: relative;
    top:8px;
    letter-spacing: 5px;
  }
  .top span:last-child{
    float:right;
    position:relative;
    top:10px;
    font-size:18px;
  }
</style>
