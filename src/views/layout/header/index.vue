<template>
  <header>
    <ul>
      <li v-for="(item,index) in routerOption.children" :key="index" @click="jumpFun(item.path)">
        {{item.meta.title}}
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
  import {readonly} from "vue"
  import {useRouter} from "vue-router";
  import router from "@/router/index";

  export default {
    setup() {
      // 1级菜单列表
      const routerOption = readonly(
        router.options.routes[0]
      )
      // 跳转
      const routers = useRouter()
      const jumpFun = (params: string) => routers.push(params)
      return {
        routerOption,
        jumpFun
      }
    }
  }
</script>

<style lang="stylus">
  @import "./index.styl"
</style>
