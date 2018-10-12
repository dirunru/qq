<template>
  <div class="contact">
    <header-nav>
      联系人
    </header-nav>
    <div>
      这是联系人页面
    </div>
    <footer-nav></footer-nav>
  </div>
</template>


<script>
  // <!--导入自定义的组件的模板数据---局部组件-->
  import HeaderNav from '../components/HeaderNav';
  import FooterNav from '../components/FooterNav';
  //原始创建组件
  // Vue.component('HeaderNav',{})
  export default {
    data:function () {
      return{

      }
    },
    components:{
      HeaderNav,
      FooterNav
    }
  }
</script>

<style>

</style>
