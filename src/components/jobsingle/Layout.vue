<template>
  <div>
    <jobsingle-hero></jobsingle-hero>
    <div class="wrapper">
      <div class="row">
        <div class="col-sm-11 col-sm-offset-1">
          <div class="row job-block">
            <jobsingle-profile></jobsingle-profile>
            <jobsingle-summary></jobsingle-summary>
          </div>
        </div>
        <div class="apply-section col-sm-11 col-sm-offset-1">
          <jobsingle-salary></jobsingle-salary>
          <div class="clearfix"></div>
          <jobsingle-apply></jobsingle-apply>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import JobSingle_Hero from '@/components/jobsingle/Hero'
  import JobSingle_Profile from '@/components/jobsingle/Profile'
  import JobSingle_Summary from '@/components/jobsingle/Summary'
  import JobSingle_Salary from '@/components/jobsingle/Salary'
  import JobSingle_Apply from '@/components/jobsingle/Apply'
  Vue.component('jobsingle-hero', JobSingle_Hero);
  Vue.component('jobsingle-profile', JobSingle_Profile);
  Vue.component('jobsingle-summary', JobSingle_Summary);
  Vue.component('jobsingle-salary', JobSingle_Salary);
  Vue.component('jobsingle-apply', JobSingle_Apply);

  export default {
    name: 'jobSingle',
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }
  .job-block {
    @include rem((padding: 60px 0));
  }
</style>
