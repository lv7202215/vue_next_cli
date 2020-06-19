import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import HOME_ROUTER from "@/router/modules/home"; // 首页
import ABOUT_ROUTER from "@/router/modules/about"; // ABOUT

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "home" */ "@/views/index.vue"),
    children:[
      ...HOME_ROUTER,
      ...ABOUT_ROUTER
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
