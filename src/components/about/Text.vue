<template>
  <div class="wrapper">
    <div class="about-text container">
      <div class="col-sm-10 col-sm-offset-1">
        <div class="who-is-behind">
          <h2>Wer steckt hinter team<span class="two">2</span>work?</h2>
          <p>
            team<span class="two">2</span>work – das sind Irina Friedrich und Monika Hrib, die das Unternehmen 2007 gegründet haben, und ihr Team.
            Insgesamt bringen wir 19 Jahre Erfahrung in der Personaldienstleistung für verschiedenste Branchen mit.
            Was sich in dieser Zeit nie geändert hat: Unser persönlicher Einsatz, unser praktisches Denken und unser Gespür für unausgesprochene Anforderungen.
            Das sind die Stärken, die Kunden und Bewerber an uns schätzen.
          </p>
        </div>
        <hr />
        <div class="double-power">
          <h2>Wer mit doppelter Kraft arbeitet, macht keine halben Sachen.</h2>
          <p>
            Schon gar nicht, wenn wirtschaftliche Interessen auf den menschlichen Wunsch nach einem guten Arbeitsplatz treffen.
            Die beste Basis für den gemeinsamen Erfolg von Unternehmen und Menschen sind Fairness, Vertrauen und Seriosität.
            So wie wir unsere Kunden mit schnellen und unkomplizierten Personallösungen begeistern, motivieren wir unsere Mitarbeiter mit voller Transparenz
            bei allen Verträgen, fairer und pünktlicher Entlohnung und Unterstützung bei ihrer Weiterentwicklung.
          </p>
        </div>
        <hr />
        <div class="solution-practicable">
          <h2>Die besten Lösungen sind praktisch.</h2>
          <p>
            Unsere Menschenkenntnis, mit der wir zielgenau die richtigen Mitarbeiter finden, hat sich nicht am Schreibtisch entwickelt.
            Da wir uns immer vor Ort ein Bild machen und von der Hilfskraft bis zum Personalmanager mit jedem gleich gerne reden, wissen wir, was wirklich gebraucht wird.
            Wir sind die Praktikerinnen unter den Personaldienstleistern. Wir sind team<span class="two">2</span>work.
          </p>
        </div>
        <hr />
        <div class="company-philosophy">
          <h2>Together we achieve more.</h2>
          <p>
            Wir von team<span class="two">2</span>work beraten sowohl Kunden als auch Bewerber gleichermaßen,
            stets nach unserer Firmenphilosophie: <br>„Unser/e Kandidat/innen von heute
            sind möglicherweise unser/e Kund/innen von morgen“.
          </p>
          <transition name="fade">
            <about-philosophy v-if="more"></about-philosophy>
          </transition>
          <button type="button" name="button" class="btn btn-danger pull-right" :class="{ 'more': more }" v-on:click="more = !more">{{ more ? lessText : moreText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import About_Philosophy from '@/components/about/Philosophy'
  Vue.component('about-philosophy', About_Philosophy);

  export default {
    name: 'about-text',
    data() {
      return {
        more: false,
        moreText: 'Unsere Philosophie lesen',
        lessText: 'Weniger anzeigen'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .about-text {
    @include rem((padding-top: 60px));
    @include rem((padding-bottom: 60px));
    h2 {
      @include rem((margin-bottom: 20px));
      font-weight: bold;
    }
    .who-is-behind {
      @include rem((margin-bottom: 60px));
    }
    .double-power,
    .company-philosophy {
      @include rem((margin: 60px auto 60px auto));
      h2 {
        color: $color-red-t2w;
        text-align: right;
      }
      p {
        text-align: right;
      }
      button.more {
        background: $color-black-medium;
        color: $color-white;
        border-color: $color-black;
      }
    }
    .solution-practicable {
      @include rem((margin-top: 60px));
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter,
    .fade-leave-to {
      opacity: 0
    }
  }
</style>
