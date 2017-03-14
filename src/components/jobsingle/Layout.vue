<template>
  <div>
    <jobsingle-hero></jobsingle-hero>
  </div>
</template>

<script>
  import Vue from 'vue'
  import JobSingle_Hero from '@/components/jobsingle/Hero'
  Vue.component('jobsingle-hero', JobSingle_Hero);

  export default {
    name: 'jobSingle',
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }
</style>
