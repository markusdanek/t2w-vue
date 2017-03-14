<template>
  <div>
    <jobs-hero></jobs-hero>
    <div class="wrapper">
      <div class="row">
        <div class="col-sm-11 col-sm-offset-1">
          <div class="row job-block">
            <jobs-list></jobs-list>
            <jobs-pool></jobs-pool>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Jobs_Hero from '@/components/jobs/Hero'
  import Jobs_List from '@/components/jobs/List'
  import Jobs_Pool from '@/components/jobs/Pool'
  Vue.component('jobs-hero', Jobs_Hero);
  Vue.component('jobs-list', Jobs_List);
  Vue.component('jobs-pool', Jobs_Pool);

  export default {
    name: 'jobs',
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
