<template>
<div class="searching-qualifications">
  <b-col>
    <h4>Für unseren Bewerberpool sind wir laufend an folgenden Qualifikationen interessiert:</h4>
    <div class="block">
      <button @click.prevent="collapse(0)">Finanzpositionen/Finance</button>
      <transition name="fade">
        <div v-show="boxes[0].show">
          <ul>
            <li>(LeiterIn) BuchhalterIn</li>
            <li>(LeiterIn) (Senior-) BilanzbuchhalterIn</li>
            <li>(Senior-) Personal-/LohnverrechnerIn</li>
            <li>(LeiterIn) (Senior-) ControllerIn</li>
            <li>BerufsanwärterIn/ SteuerberaterIn</li>
            <li>Konzernrechnungswesen</li>
            <li>SachbearbeiterIn Rechnungswesen</li>
            <li>MitarbeiterIn Rechnungswesen</li>
            <li>Objekt- /ImmobilienbuchhalterIn</li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="block">
      <button @click.prevent="collapse(1)">Kaufm. Personal</button>
      <transition name="fade">
        <div v-show="boxes[1].show">
          <ul>
            <li>Human Ressource MitarbeiterIn</li>
            <li>AssistentIn der Geschäftsführung</li>
            <li>TeamassistentIn, SekretärIn</li>
            <li>SachbearbeiterIn</li>
            <li>EmpfangsmitarbeiterIn</li>
            <li>Call Center MitarbeiterIn</li>
            <li>Customer Care</li>
            <li>Haus- /ImmobilienverwalterIn</li>
            <li>Sales MitarbeiterIn</li>
            <li>AußendienstmitarbeiterIn</li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="block">
      <button @click.prevent="collapse(2)">Technik</button>
      <transition name="fade">
        <div v-show="boxes[2].show">
          <ul>
            <li>MechatronikerIn</li>
            <li>ElektrotechnikerIn</li>
            <li>ElektroanlagentechnikerIn</li>
            <li>HKLS-TechnikerIn</li>
            <li>CAD-TechnikerIn und ZeichnerIn</li>
            <li>MaschineneinstellerIn</li>
            <li>InstandhaltungstechnikerIn</li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="block">
      <button @click.prevent="collapse(3)">Höheres technisches Personal</button>
      <transition name="fade">
        <div v-show="boxes[3].show">
          <ul>
            <li>ProduktingenieurIn</li>
            <li>ProjektingenieurIn</li>
            <li>Projekt- und ProzessmanagerIn</li>
            <li>ProduktmanagerIn</li>
            <li>ProduktionsingenieurIn</li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="block">
      <button @click.prevent="collapse(4)">Pharma</button>
      <transition name="fade">
        <div v-show="boxes[4].show">
          <ul>
            <li>(LeiterIn) Qualitätsmanagement</li>
            <li>QC LabortechnikerIn</li>
            <li>QC SpezialistIn</li>
            <li>SpezialistIn für die Supportfunktion</li>
            <li>Quality Assurance SpezialistIn</li>
            <li>ChemieverfahrenstechnikerIn</li>
            <li>ChemieingenieurIn</li>
            <li>Qualified Person</li>
            <li>ProjektleiterIn</li>
            <li>Manufactoring SpezialistIn</li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="block">
      <button @click.prevent="collapse(5)">Einkauf, Logistik, Transport &amp; Produktion</button>
      <transition name="fade">
        <div v-show="boxes[5].show">
          <ul>
            <li>Supply Chain MangerIn (SCM)</li>
            <li>SeriendisponentIn</li>
            <li>TeamleaderIn Specialist Planning &amp; Scheduling</li>
            <li>DisponentIn</li>
            <li>(TeamleaderIn) Serienlogistik</li>
            <li>LogistikmitarbeiterIn</li>
            <li>EinkäuferIn</li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="block">
      <button @click.prevent="collapse(6)">Gewerbliches Personal</button>
      <transition name="fade">
        <div v-show="boxes[6].show">
          <ul>
            <li>Angelernte ArbeitnehmerIn</li>
            <li>Logistik- / LagermitarbeiterIn</li>
            <li>Bürohilfskraft</li>
          </ul>
        </div>
      </transition>
    </div>
  </b-col>
</div>
</template>

<script>
export default {
  name: 'jobs-pool',
  data() {
    return {
      boxes: [{
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
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
    collapse: function(n) {
      for (var i = 0; i < 7; i++) {
        this.boxes[i].show = false;
      }
      this.boxes[n].show = true;
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/util/util.scss";

.searching-qualifications {
    @include rem((padding: 20px));

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
            -webkit-transition: all 0.5s ease;
            transition: all 0.5s ease;
            &:hover {
                background: $color-red;
                border: 1px solid $color-red;
                -webkit-transition: all 0.5s ease;
                transition: all 0.5s ease;
            }
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
            transition: opacity 0.3s;
        }
        .fade-leave-active {
            transition: opacity 0.1s;
        }
        .fade-enter,
        .fade-leave-active {
            opacity: 0;
        }
    }
}
</style>
