<template>
  <div class="bottom">
    <ul class="menu">
      <li>
        <a href="#/">
          <i class="fa fa-smile-o"></i>
          消息
        </a>
      </li>
      <li>
        <a href="#/contact">
          <i class="fa fa-user-o"></i>
          联系人
        </a>
      </li>
      <li>
        <a href="#/active">
          <i class="fa fa-star-o"></i>
          动态
        </a>
      </li>
    </ul>
  </div>
</template>


<script>

  export default {
    data:function(){
      return {

      }
    }
  }

</script>

<style scoped>

  .bottom{
    position:fixed;
    bottom:0;
    border-top:solid 1px #ccc;
    width:100%;
    background:#fff;
  }
  .bottom .menu{
    overflow: hidden;
  }
  .bottom .menu li{
    width:33.3%;
    float:left;
  }
  .bottom .menu li a{
    display: block;
    padding:10px 0;
    color:#444;
    font-size:12px;
  }
  .bottom .menu li i{
    display: block;
    font-size:20px;;
  }
  .bottom .menu li a:hover{
    color:PaleVioletRed;
  }


</style>
