<template>
  <div class="wrapper block">
    <div class="row">
      <div class="col-sm-10 col-sm-offset-1">
        <h3>Impressum</h3>
        <ul>
          <li>
            Medieninhaber &amp; Herausgeber:
            <span>team<span class="two">2</span>work Arbeitskräfteüberlassung GmbH</span>
          </li>
          <li>
            Design &amp; Entwicklung:
            <a href="http://www.creativebrains.net"><span>Markus Danek</span></a>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'impress-responsible'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .block {
    @include rem((padding: 30px 0 30px 0));
    h3 {
      @include rem((margin-bottom: 20px));
      font-weight: bold;
    }
    ul {
      li {
        list-style-type: none;
        font-weight: bold;
        a {
          color: $color-black-medium;
          span {
            font-weight: normal;
          }
        }
        span {
          font-weight: normal;
        }
      }
    }
    hr {
      @include rem((margin-top: 60px));
    }
  }
</style>
