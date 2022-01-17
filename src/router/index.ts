import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/stats',
    name: 'Stats',
    component: () => import('@/components/character/CharacterStats.vue')
  },
  {
    path: '/spells',
    name: 'Spells',
    component: () => import('@/components/spells/SpellList.vue')
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import('@/components/features/FeatureList.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
