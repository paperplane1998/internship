import { defineConfig } from 'umi';

export default defineConfig({
  dva: {},
  antd: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/search', component: '@/pages/search' },
    { path: '/display', component: '@/pages/display' },
  ],
});
