import Home from '@/components/Home/Home';
import JAN2018Detail from '@/components/Events/JAN2018/JAN2018-detail';
import APR2018Detail from '@/components/Events/APR2018/APR2018-detail';
import Router from 'vue-router';
import Vue from 'vue';
import fourzerofour from '@/components/404/404';

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
    {
      path: '/april2018',
      name: 'APR2018',
      component: APR2018Detail,
    },
    {
      path: '/404',
      name: '404',
      component: fourzerofour,
    },
    {
      path: '*',
      component: fourzerofour,
    },
  ],
});
