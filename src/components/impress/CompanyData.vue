<template>
  <div class="wrapper block">
    <div class="row">
      <div class="col-sm-10 col-sm-offset-1">
        <h3>Unternehmensdaten</h3>
        <p>Offenlegung gemäß Mediengesetz &sect; 25:</p>
        <ul>
          <li>Inhaber der Website:
            <span>team<span class="two">2</span>work Arbeitskräfteüberlassung GmbH</span></li>
          <li>Gewerbliche- und Handelsrechtliche Geschäftsführerinnen:
            <span>Irina Friedrich-Ahrer und Monika Hrib</span></li>
          <li>Firmenbuch: <span>Handelsgericht Wien</span></li>
          <li>Firmenbuchnummer: <span>FN 296741i</span></li>
          <li>UID: <span>ATU 63536533</span></li>
          <li>DVR: <span>9155457</span></li>
          <li>Mitglied der WKÖ: <span>Fachgruppe Allgemeines Gewerbe </span></li>
          <li>Gewerbeordnung: <span>www.ris.bka.gv.at</span></li>
        </ul>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'impress-companydata'
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
