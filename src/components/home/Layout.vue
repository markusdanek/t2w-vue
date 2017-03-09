<template>
  <div>
    <home-hero></home-hero>
    <home-joblist></home-joblist>
    <home-service></home-service>
    <home-testimonial></home-testimonial>
  </div>
</template>

<script>
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
</style>
