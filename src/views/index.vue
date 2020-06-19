<template>
  <div class="main-layout">
    <!--头部导航-->
    <Header/>
    <!--内容主体-->
    <Body/>
  </div>
</template>

<script lang="ts">
  // import {ref} from "vue"
  import Header from "@/views/layout/header/index.vue"
  import Body from "@/views/layout/body/index.vue"
  export default {
    components: {Header,Body},
    setup() {
      return {}
    }
  }
</script>

<style lang="stylus">
</style>
