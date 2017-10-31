import Home from '@/components/Home/Home';
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
  ],
});
