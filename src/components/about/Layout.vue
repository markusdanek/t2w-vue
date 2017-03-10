<template>
  <div>
    <about-hero></about-hero>
    <about-employee></about-employee>
    <hr />
    <about-text></about-text>
  </div>
</template>

<script>
  import Vue from 'vue'
  import About_Hero from '@/components/about/Hero'
  import About_Employee from '@/components/about/Employee'
  import About_Text from '@/components/about/Text'
  Vue.component('about-hero', About_Hero);
  Vue.component('about-employee', About_Employee);
  Vue.component('about-text', About_Text);
  
  export default {
    name: 'about'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }
</style>
