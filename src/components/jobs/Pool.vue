<template>
  <div class="searching-qualifications col-sm-11 col-md-3 col-md-offset-1">
    <h4>Für unseren Bewerberpool sind wir laufend an folgenden Qualifikationen interessiert:</h4>
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
</template>

<script>
  export default {
    name: 'jobs-pool'
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
    ul {
      li {
        list-style-type: square;
        word-break: break-word;
      }
    }
  }
</style>
