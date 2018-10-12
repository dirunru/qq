
<template>
  <div class="active">
    <!--调用头部和底部组件-->
    <header-nav>动态</header-nav>
    <ul class="active-nav">
      <li>
        <a href=""><i class="fa fa-star-o"></i><span>好友动态</span></a>
      </li>
      <li>
        <a href=""><i class="fa fa-gear"></i><span>附近的人</span></a>
      </li>
      <li>
        <a href=""><i class="fa fa-home"></i><span>兴趣部落</span></a>
      </li>
    </ul>
    <ul class="active-content">
      <li>
        <a href="">
          <i class="fa fa-gamepad"></i>
          <span>游戏</span>
        </a>
      </li>
        <li>
          <a href="">
            <i class="fa fa-film"></i>
            <span>电影、电视</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa fa-eye"></i>
            <span>微博</span>
          </a>
        </li>
    </ul>
    <footer-nav></footer-nav>
  </div>
</template>
<script>
  //<!--导入自定义的组件的模板数据---局部组件-->
  import HeaderNav from '../components/HeaderNav';
  import FooterNav from '../components/FooterNav';
  //原始创建组件
  // Vue.component('HeaderNav',{})
  export default {
    data: function () {
      return {}
    },
    components: {
      HeaderNav,
      FooterNav
    }
  }
</script>

<style scoped>
  .active-nav {
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #ccc;
  }

  .active-nav li {
    float: left;
    width: 33%;
    margin-top: 10px;
  }

  .active-nav li a {
    color: #8a8a8a;
  }

  .active-nav li i {
    width: 30px;
    height: 30px;
    font-size: 30px;
  }
  .active-nav li span {
    display: block;
    font-size: 12px;
  }
  .active-content{
    border-top:1px solid #8a8a8a;
    margin-top: 10px;
    border-bottom:1px solid #8a8a8a;
  }
  .active-content li{
    width: 100%;
    height: 30px;
  }
  .active-content li a{
    text-align: left;
    width: 100%;
    height:100%;
    overflow: hidden;
  }
  .active-content li a i{
    float: left;
    padding:0 10px;
    font-size: 20px;
    width: 15%;
    height: 30px;
    color:#8a8a8a;
  }
  .active-content li a span{
    float: left;
    display:block;
    color:#8a8a8a;
    width: 85%;
    height: 100%;
    border-bottom:solid 1px #8a8a8a;
  }
  .active-content li:last-child span{
    border-bottom: none;
  }


</style>
