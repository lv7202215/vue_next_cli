<template>
  <div class="main-layout">
    <!--头部导航-->
    <Header/>
    <!--内容主体-->
    <router-view></router-view>
    <!--底部-->
    <footer></footer>
  </div>
</template>

<script lang="ts">
  import {ref} from "vue"
  import Header from "@/views/header/index.vue"
  export default {
    components: {Header},
    setup() {
      return {
        tempValue: ref(0)
      }
    }
  }
</script>

<style lang="stylus">
</style>
