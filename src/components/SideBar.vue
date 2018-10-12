<template>
  <div class="side">
      <div class="side-top">
        <img src="../assets/搞笑5.jpg" alt="">
        <h3>疯人院院长</h3>
      </div>
      <div class="side-content">

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
  .side{
    position:fixed;
    width: 80%;
    height: 100vh;
    left:0;
    top: 0;
    background: #eee;
    z-index:10;
  }
  .side .side-top{
    width: 100%;
    height: 30%;
    background:linear-gradient(to bottom,#ccc,skyblue);
    padding: 70px 10px;
  }
  .side .side-top img{
    vertical-align:middle;
    width: 60px;
    height:60px;
    border-radius: 50%;
  }
  .side .side-top h3{
    display: inline-block;
  }


</style>
