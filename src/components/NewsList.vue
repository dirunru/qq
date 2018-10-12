<template>
  <div class="news">
    <ul>
      <li v-for="(msg,ins) in msgs" :key="ins">
        <img :src="msg.picture" alt="">
        <div class="text">
          <h3>
            {{msg.name}}
            <small>9:00</small>
          </h3>
          <p>{{msg.content}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        msgs: [
          {
            picture: '/static/搞笑5.jpg',
            name: '张三',
            content: '这是最新的消息'
          },
          {
            picture: '/static/搞笑5.jpg',
            name: '李四',
            content: '这是第二条消息'
          },
          {
            picture: '/static/搞笑5.jpg',
            name: '王武',
            content: '这是第三条消息'
          },
          {
            picture: '/static/搞笑5.jpg',
            name: '王丽丽',
            content: '这是第四条最新的消息'
          },
          {
            picture: '/static/搞笑5.jpg',
            name: '曲筱绡',
            content: '这是第五条最新的消息'
          },
          {
            picture: '/static/搞笑5.jpg',
            name: '小蚯蚓',
            content: '这是最新最后的消息这是最新最后的消息这是最新最后的消息这是最'
          },
          {
            picture: '/static/搞笑5.jpg',
            name: '曲筱绡',
            content: '这是第五条最新的消息'
          },]
      }
    }
  }
</script>

<style scoped>
  ul li {
    width: 100%;
    height: 80px;
    overflow: hidden;
    border-bottom: 1px solid gray;
  }

  img {
    float: left;
    width: 80px;
    height: 80px;
  }

  h4 {
    display: block;
  }

  .text {
    padding: 10px 0;
    height: 80px;
    width: 70%;
    float: right;
    /*background: #eeee;*/
  }

  h3 {
    float: left;
  }

  p {
    width: 100%;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 40px;
    font-size: 14px;
  }
</style>
