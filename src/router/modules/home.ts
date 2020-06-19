/*首页*/
import {RouteRecordRaw} from "vue-router";

const HOME_ROUTER: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "Home"
    },
    component: () => import(/* webpackChunkName: "home" */ "@/views/home/index.vue")
  }
]

export default HOME_ROUTER
