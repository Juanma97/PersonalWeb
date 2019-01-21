import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Apps from './views/Apps.vue';
import Tutorials from './views/Tutorials.vue';
import Projects from './views/Projects.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/apps',
      name: 'apps',
      component: Apps,
    },
    {
      path: '/tutorials',
      name: 'tutorials',
      component: Tutorials,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
  ],
});
