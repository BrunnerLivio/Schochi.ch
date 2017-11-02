import Home from '@/components/Home/Home';
import JAN2018Detail from '@/components/Events/JAN2018/JAN2018-detail';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/january2018',
      name: 'JAN2018',
      component: JAN2018Detail,
    },
  ],
});
