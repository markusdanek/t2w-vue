<template>
<div class="wrapper">
  <div class="corona">
    <p><b>Coronavirus COVID-19</b>: Aus gegebenem Anlass bitten wir Sie uns nur per Telefon oder per E-Mail zu erreichen.</p>
    <p class="info">Für mehr Informationen klicken Sie bitte hier: </p>
    <button v-b-modal.modal-1>Informationen</button>
  </div>
  <b-modal id="modal-1" size="lg" hide-footer title="Wichtige Information zu COVID-19">
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
  name: 'corona-banner',
  data() {
    return {
      slide: 0,
      sliding: null
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/util/util.scss";
  .corona {
    background: $color-red-t2w;
    color: $color-white;
    padding: 20px;
    text-align: center;
    p {
      margin: 0;
      padding: 5px;
      &.info {
        display: inline;
      }
    }
    button {
      background: none;
      color: $color-white;
      border: 2px solid $color-red;
      border-radius: 0;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      &:focus {
        outline: none;
      }
      &:hover {
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        background: $color-red;
        border: 2px solid $color-white;
        color: $color-white;
      }
    }
  }
  #modal-1 {
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
