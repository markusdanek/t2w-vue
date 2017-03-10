<template>
  <div>
    <company-hero></company-hero>
    <company-tabs></company-tabs>
  </div>
</template>

<script>
export default {
  name: 'company'
}
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }
</style>
