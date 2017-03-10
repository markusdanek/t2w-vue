<template>
  <div>
    <applicants-hero></applicants-hero>
    <applicants-tab></applicants-tab>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Applicants_Hero from '@/components/applicants/Hero'
  import Applicants_Tab from '@/components/applicants/tab/Layout'
  Vue.component('applicants-hero', Applicants_Hero);
  Vue.component('applicants-tab', Applicants_Tab);

  export default {
    name: 'applicants'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }
</style>
