<template lang="html">
  <div>
    <b-modal @hide="accept" size="lg" hide-footer v-model="modalShow" id="modal-address" title="Wir haben eine neue Adresse!">
      <h5 class="address-header">Wir sind übersiedelt und haben ab sofort folgende neue Adresse</h5>
      <br/>
      <p class="center">Rinnböckstraße 24 / Top 1</p>
      <p class="center">1110 Wien</p>
      <div class="iframe">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.247939595874!2d16.405659551571112!3d48.182574179125126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da9fd24802ab7%3A0x9180a360246c1342!2zUmlubmLDtmNrc3RyYcOfZSAyNCwgMTExMCBXaWVuLCDDlnN0ZXJyZWljaA!5e0!3m2!1sde!2sus!4v1614597452158!5m2!1sde!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <br/><br/>
        <p>Bitte beachten Sie das aufgrund der aktuellen COVID-19 Situation dennoch bis auf weiteres unser Büro geschlossen ist und wir wie bereits gewohnt im Home-Offcie für Sie zur Verfügung stehen.</p>
        <p class="center">Ihr team<span class="two">2</span>work</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "address-modal",
  data() {
    return {
      modalShow: false,
    };
  },
  created() {
    if (!this.getVisited() === true) {
      this.modalShow = true;
    }
  },
  methods: {
    setVisited() {
      localStorage.setItem("address:accepted", true);
    },
    getVisited() {
      return localStorage.getItem("address:accepted");
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
#modal-address {
  h5.address-header {
    color: $color-red-t2w;
    text-align: center;
  }
  p.center {
    text-align: center;
    font-weight: bold;
  }
  h5 {
    font-size: 20px;
  }
  .modal-title {
    font-size: 20px;
  }
  .iframe {
    text-align: center;
  }
  a {
    color: $color-red-t2w;
  }
}
</style>
