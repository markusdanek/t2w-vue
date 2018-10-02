<template>
<div class="wrapper">
  <b-jumbotron fluid :class="template">
    <h1 class="startpage">{{ title }}</h1>
  </b-jumbotron>
</div>
</template>

<script>
export default {
  name: 'hero-small',
  props: {
    title: {
      type: String,
      default: 'Unser Angebot für Ihr Unternehmen'
    },
    template: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/util/util.scss";

.jumbotron {
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #000;
    background-size: cover;
    margin-bottom: 0;
    @-webkit-keyframes fadein {
        0% {
            opacity: 0;
            visibility: hidden;
        }
        100% {
            opacity: 1;
            visibility: visible;
        }
    }
    h1 {
        font-family: 'Open Sans';
        color: $color-white;
    }
    h1.startpage {
        @include rem(font-size, 52px);
        line-height: 56px;
        font-weight: bolder;
        text-transform: uppercase;
        text-align: center;
    }
    &.impressum {
      background: url("../assets/images/hero/hero-impress.jpg");
    }
    &.kontakt {
      background: url("../assets/images/hero/hero-contact.jpg");
    }
    &.jobs {
      background: url("../assets/images/hero/hero-applicants.jpg");
    }
    &.ueber {
      background: url("../assets/images/hero/hero-about.jpg");
    }
    &.bewerber {
      background: url("../assets/images/hero/hero-applicants.jpg");
    }
    &.unternehmen {
      background: url("../assets/images/hero/hero-company.jpg");
    }
    &.backend {
      background: url("../assets/images/hero/hero-backend.jpg");
    }
}
</style>
