<template>
  <div class="wrapper block">
    <div class="row">
      <div class="col-sm-10 col-sm-offset-1">
        <h3>Allgemeine Geschäftsbedingungen</h3>
          <ul>
          <li>
            <a target="_blank" href="files/agb/AGB_Personalbereitstellung_2016.pdf">
              &raquo; AGB für Personalbereitstellung - Stand {{year}} (PDF, 2MB)
            </a>
          </li>
          <li>
            <a target="_blank" href="files/agb/AGB_Personalvermittlung_2016.pdf">
              &raquo; AGB für Personalvermittlung - Stand {{year}} (PDF, 1.5MB)
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'impress-terms',
    computed: {
      month() {
        return this.twoDigits((new Date()).getUTCMonth() + 1);
      },
      year() {
        return (new Date()).getUTCFullYear();
      }
    }
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
