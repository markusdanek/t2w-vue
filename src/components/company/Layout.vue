<template>
  <div>
    <company-hero></company-hero>
    <company-tab></company-tab>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Company_Hero from '@/components/company/Hero'
  import Company_Tab from '@/components/company/tab/Layout'
  Vue.component('company-hero', Company_Hero);
  Vue.component('company-tab', Company_Tab);

  export default {
    name: 'company'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }
</style>
