<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script lang="ts">
  import {ref} from "vue"
  export default {
    setup() {
      const title = ref("hello")
      return {
        tempValue: ref(0),
        title
      }
    }
  }
</script>

<style lang="stylus">
  @import "~@/style/main.styl"
  header
    background-color $main-dark
    color $main-light
    line-height 75px
    text-align center
    box-shadow(3px)
</style>
