<template>
  <div>
    <jobs-hero></jobs-hero>
    <jobs-list></jobs-list>
    <jobs-pool></jobs-pool>
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
</style>
