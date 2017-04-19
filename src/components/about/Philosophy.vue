<template>
  <div>
    <p>
      Unseren Bewerber/innen kommunizieren wir auf Erfahrungswerten basierende Bewerbungstipps
      und erarbeiten bei Bedarf gemeinsam eine neue „berufliche Visitenkarte“.

      Mit unserem speziellen Recruitingzugang möchten wir Sie als Bewerber/in und Mensch
      kennen lernen und herausfinden, mit welchen Rahmenbedingungen Sie Ihr Know-How am
      besten umsetzen können.

      Unseren Kund/innen möchten wir auf verschiedenen Ebenen mit Rat und Tat zur Seite
      stehen. Ob bei der Beratung des Wordings für die Inseratschaltung oder den Blick für das
      Wesentliche bei der Auswahl der Kandidat/innen.
      <br><br>
      Für uns bedeutet das Wort TEAM „<strong>T</strong>ogether w<strong>e</strong>
      <strong>a</strong>chieve <strong>m</strong>ore“.
    </p>
    </div>
</template>

<script>
  export default {
    name: 'about-philosophy'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .about-text {
    .company-philosophy {
      @include rem((margin: 60px auto 60px auto));
      h2 {
        color: $color-red-t2w;
        text-align: right;
      }
      p {
        text-align: right;
      }
    }
  }
</style>
