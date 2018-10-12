import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MessageList from '@/pages/MessageList';
import ContactList from  '@/pages/ContactList';
import ActiveList from  '@/pages/ActiveList';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'message',
      component: MessageList
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactList
    },
    {
      path: '/active',
      name: 'active',
      component: ActiveList
    }

  ]
})
