/*首页*/
import {RouteRecordRaw} from "vue-router";

const HOME_ROUTER: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ "@/views/home/index.vue")
  }
]

export default HOME_ROUTER
