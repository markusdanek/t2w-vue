<template>
  <div>
    <about-hero></about-hero>
    <about-employee></about-employee>
    <hr />
    <about-text></about-text>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }
</style>
