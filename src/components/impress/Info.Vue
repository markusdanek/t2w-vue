<template>
  <div class="wrapper block">
    <div class="row">
      <div class="col-sm-10 col-sm-offset-1">
        <p>
          Aus Gründen der besseren Lesbarkeit wird auf die gleichzeitige Verwendung
          männlicher und weiblicher Sprachformen verzichtet. Sämtliche
          Personenbezeichnungen gelten gleichwohl für beiderlei Geschlecht.
        </p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'impress-info'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .block {
    @include rem((padding: 60px 0 30px 0));
    hr {
      @include rem((margin-top: 60px));
    }
  }
</style>
