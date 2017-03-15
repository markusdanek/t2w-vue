<template>
  <div>
    <home-hero></home-hero>
    <home-joblist></home-joblist>
    <hr />
    <home-service></home-service>
    <home-testimonial></home-testimonial>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Home_Hero from '@/components/home/Hero'
  import Home_JobList from '@/components/home/JobList'
  import Home_Service from '@/components/home/Service'
  import Home_Testimonial from '@/components/home/Testimonial'
  Vue.component('home-hero', Home_Hero);
  Vue.component('home-joblist', Home_JobList);
  Vue.component('home-service', Home_Service);
  Vue.component('home-testimonial', Home_Testimonial);

  export default {
    name: 'home',
    data() {
      return {
        msg: ' '
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }

  hr {
    @include rem((margin: 0));
    border-top: 1px solid $color-gray-light;
  }
</style>
