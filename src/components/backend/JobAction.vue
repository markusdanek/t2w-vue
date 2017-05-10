<template>
  <div>
    <backend-hero></backend-hero>
    adsf
  </div>
</template>

<script>
  import Vue from 'vue';
  import JobMethods from '../../mixins/job';
  import Backend_Hero from '@/components/backend/Hero';
  Vue.component('backend-hero', Backend_Hero);

  export default {
    name: 'api-job-action',
    data() {
      return {
        jobs: [],
        loading: false,
      }
    },
    created() {
      this.retrieveJobSingle();
    },
    route: {
      beforeEnter() {
        return checkAuth();
      }
    },
    mixins: [JobMethods]
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";


</style>
