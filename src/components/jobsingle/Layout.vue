<template>
  <div class="job-single">
    <jobsingle-hero></jobsingle-hero>
    <jobsingle-profile></jobsingle-profile>
  </div>
</template>

<script>
  import Vue from 'vue'
  import JobSingle_Hero from '@/components/jobsingle/Hero'
  import JobSingle_Profile from '@/components/jobsingle/Profile'
  Vue.component('jobsingle-hero', JobSingle_Hero);
  Vue.component('jobsingle-profile', JobSingle_Profile);

  export default {
    name: 'jobSingle',
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }
  .job-single {
    @include rem((padding: 60px 0));
  }
</style>
