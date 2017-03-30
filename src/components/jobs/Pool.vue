<template>
  <div class="searching-qualifications col-sm-11 col-md-3 col-md-offset-1">
    <h4>Für unseren Bewerberpool sind wir laufend an folgenden Qualifikationen interessiert:</h4>

    <div class="block">
      <button @click.prevent="collapse(0)">Bewerberpool</button>
      <transition name="fade">
        <div v-show="boxes[0].show">
          <ul>
            <li>Netzwerkadministratoren</li>
            <li>MS Exchange Specialisten</li>
            <li>Supply Chain Manager</li>
            <li>QC Labortechniker</li>
            <li>Quality Assurance Specialisten</li>
            <li>Chemieverfahrenstechniker</li>
            <li>Servicetechniker im Aussendienst</li>
            <li>Mechatroniker</li>
            <li>Anlagen-/Automatisierungstechniker</li>
            <li>Logistikmitarbeiter mit SAP und Hochregal-Erfahrung</li>
            <li>AssistentInnen sowie BüromitarbeiterInnen</li>
            <li>Maschinenoperator</li>
            <li>Projektmanager</li>
            <li>Produktmanager</li>
          </ul>
        </div>
      </transition>
    </div>

    <!-- <div class="block">
      <button @click.prevent="collapse(1)">Finance</button>
      <transition name="fade">
        <div v-show="boxes[1].show">
          <ul>
            <li>Supply Chain Manager</li>
            <li>AssistentInnen sowie BüromitarbeiterInnen</li>
            <li>Controller</li>
            <li>Financial Analyst</li>
            <li>Bilanzbuchhalter</li>
            <li>Buchhalter</li>
          </ul>
        </div>
      </transition>
    </div>

    <div class="block">
      <button @click.prevent="collapse(2)">Produktion</button>
      <transition name="fade">
        <div v-show="boxes[2].show">
          <ul>
            <li>QC Labortechniker</li>
            <li>Quality Assurance Specialisten</li>
            <li>Chemieverfahrenstechniker</li>
            <li>Mechatroniker</li>
            <li>Anlagen-/Automatisierungstechniker</li>
            <li>Logistikmitarbeiter mit SAP und Hochregal-Erfahrung</li>
            <li>Maschinenoperator</li>
            <li>Produktmanager</li>
          </ul>
        </div>
      </transition>
    </div>

    <div class="block">
      <button @click.prevent="collapse(3)">Real Estate</button>
      <transition name="fade">
        <div v-show="boxes[3].show">
          <ul>
            <li>Servicetechniker im Aussendienst</li>
            <li>Objektbuchhalter</li>
            <li>Immobilienbuchhalter</li>
          </ul>
        </div>
      </transition>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'jobs-pool',
    data() {
      return {
        boxes: [
          {
            show: true
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ]
      }
    },
    methods: {
      collapse: function (n) {
        for(var i = 0; i < 4; i++) {
          this.boxes[i].show = false;
        }
        this.boxes[n].show = true;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .searching-qualifications {
    @include rem((padding: 20px));
    background: $color-gray-light;
    h4 {
      @include rem((margin-bottom: 20px));
      font-weight: bold;
    }
    .block {
      button {
        @include rem((padding: 5px));
        @include rem((margin-bottom: 5px));
        color: $color-white;
        border: 1px solid $color-red-t2w;
        background: $color-red-t2w;
        width: 100%;
      }
      ul {
        @include rem((margin-top: -5px));
        background: $color-white;
        li {
          list-style-type: square;
          word-break: break-word;
        }
      }
      .fade-enter-active {
        transition: opacity .3s;
      }
      .fade-leave-active {
        transition: opacity .1s;
      }
      .fade-enter, .fade-leave-active {
        opacity: 0;
      }
    }
  }
</style>
