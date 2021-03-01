<template lang="html">
  <div>
    <b-modal @hide="accept" size="lg" hide-footer v-model="modalShow" id="modal-corona" title="Wichtige Information zu COVID-19">
      <h5 class="corona-header">Wir legen großen Wert auf <b>Ihre</b> Gesundheit.</h5>
      <p class="my-4">
        Aus diesem Grund wurde unsere Arbeitsweise an die Maßnahmen angepasst.
        Unser Büro in Wien bleibt bis auf weiteres geschlossen, dennoch arbeiten wir im Home-Office für Sie weiter.
        <br/><br/>
        Wir sind trotzdem telefonisch, sowie per E-Mail erreichbar und bitten Jobsuchende Ihre Bewerbungsunterlagen elektronisch zu übermitteln.
        <br/><br/>
        Bewerbungsgespräche werden <u>ausschließlich</u> über das Telefon abgehalten.
        <br/><br/>
        Herzlichen Dank für Ihr Verständnis!<br/>
        Ihr team<span class="two">2</span>work
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "corona-modal",
  data() {
    return {
      modalShow: false,
    };
  },
  created() {
    // if (!this.getVisited() === true) {
    //   this.modalShow = true
    // }
  },
  methods: {
    setVisited() {
      localStorage.setItem("corona:accepted", true);
    },
    getVisited() {
      return localStorage.getItem("corona:accepted");
    },
    accept() {
      this.setVisited();
      this.modalShow = false;
      this.$emit("accept");
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/util/util.scss";
#modal-corona {
  h5.corona-header {
    color: $color-red-t2w;
    text-align: center;
  }
  h5 {
    font-size: 20px;
  }
  .modal-title {
    font-size: 20px;
  }
  a {
    color: $color-red-t2w;
  }
}
</style>
