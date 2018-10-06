import Home from '@/components/Home/Home';
import JAN2018Detail from '@/components/Events/JAN2018/JAN2018-detail';
import APR2018Detail from '@/components/Events/APR2018/APR2018-detail';
import OCT2018Detail from '@/components/Events/OCT2018/OCT2018-detail';
import Router from 'vue-router';
import Vue from 'vue';
import fourzerofour from '@/components/404/404';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/january2018',
      name: 'JAN2018',
      meta: {
        title: 'Schochi x Galvanik',
      },
      component: JAN2018Detail,
    },
    {
      path: '/april2018',
      name: 'APR2018',
      meta: {
        title: 'Schochi - Zug Entgleist',
      },
      component: APR2018Detail,
    },
    {
      path: '/oct2018',
      name: 'OCT2018',
      meta: {
        title: '$poiled - Schochi x Doodag',
      },
      component: OCT2018Detail,
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Schochi';
  next();
});

export default router;
