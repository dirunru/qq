<template>
  <div class="message">
    <header-nav>
      消息
    </header-nav>
    <news-list>

    </news-list>
    <footer-nav></footer-nav>
  </div>
</template>


<script>
  // <!--导入自定义的组件的模板数据---局部组件-->
  import HeaderNav from '../components/HeaderNav';
  import FooterNav from '../components/FooterNav';
  import NewsList from '../components/NewsList';

  //原始创建组件
  // Vue.component('HeaderNav',{})
  export default {
    data:function () {
      return{

      }
    },
    components:{
      HeaderNav,
      FooterNav,
      NewsList
    }
  }
</script>

<style scoped>

</style>
