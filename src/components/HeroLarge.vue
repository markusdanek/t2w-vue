<template>
<div class="wrapper">
  <b-jumbotron fluid>
    <h1 class="startpage">
      <span class="first">{{ firstWord }}</span>
      <span class="second">{{ secondWord }}</span>
      <span class="third">{{ thirdWord }}</span>
    </h1>
    <h2 class="startpage">{{ startpage }}</h2>
  </b-jumbotron>
</div>
</template>

<script>
export default {
  name: 'heroLarge',
  props: {
    firstWord: {
      type: String,
      default: 'Überlassung, '
    },
    secondWord: {
      type: String,
      default: 'Vermittlung '
    },
    thirdWord: {
      type: String,
      default: 'und Beratung'
    },
    startpage: {
      type: String,
      default: 'Egal, ob Sie qualifizierte Mitarbeiter suchen oder eine neue Arbeitsstelle finden wollen: Wir kennen die Menschen und Unternehmen, die sich erfolgreich ergänzen. Für technische, kaufmännische und gewerbliche Personallösungen.'
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/util/util.scss";

.jumbotron {
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url("../assets/images/hero/hero-home.jpg");
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
    h1,
    h2 {
        font-family: 'Open Sans';
        color: $color-white;
    }
    h1.startpage {
        @include rem(font-size, 52px);
        line-height: 56px;
        font-weight: bolder;
        text-transform: uppercase;
        span.first {
            visibility: hidden;
            -webkit-animation: fadein 2s forwards;
            animation-delay: 1s;
        }
        span.second {
            visibility: hidden;
            -webkit-animation: fadein 2s forwards;
            animation-delay: 2s;
        }
        span.third {
            visibility: hidden;
            -webkit-animation: fadein 2s forwards;
            animation-delay: 3s;
        }
    }
    h2.startpage {
        @include rem(font-size, 20px);
        font-weight: lighter;
        visibility: hidden;
        -webkit-animation: fadein 2s forwards;
        animation-delay: 4s;
    }
}
</style>
