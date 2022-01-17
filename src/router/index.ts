import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'About',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/all_spells',
    name: 'GlobalSpells',
    component: () => import('@/components/spells/GlobalSpellList.vue')
  },
  {
    path: '/all_feats',
    name: 'GlobalFeats',
    component: () => import('@/components/features/GlobalFeats.vue')
  },
  {
    path: '/character',
    name: 'Character',
    component: () => import('@/components/character/CharacterBase.vue'),
    children: [
      {
        path: '',
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
    ]
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/components/profile/Settings.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
