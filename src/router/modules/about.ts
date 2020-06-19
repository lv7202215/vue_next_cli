/*about*/
import {RouteRecordRaw} from "vue-router";

const ABOUT_ROUTER: Array<RouteRecordRaw> = [
  {
    path: '/about',
    name: 'About',
    meta: {
      title: "About"
    },
    component: () => import(/* webpackChunkName: "about" */ "@/views/about/index.vue")
  }
]

export default ABOUT_ROUTER
