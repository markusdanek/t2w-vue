<template>
<div class="wrapper">
  <div class="testimonial">
    <b-carousel id="testimonial" style="text-shadow: 1px 1px 2px #333;" indicators background="#4b4b4b" :interval="4000" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <b-carousel-slide img-blank>
        <p>
          Nach mehr als 1jähriger Beschäftigung über team<span class="two">2</span>work wurde ich übernommen.
          Ich bedanke mich für die gute Zusammenarbeit, die korrekte und pünktliche Abwicklung der Personalabrechnung,
          und dass ich jederzeit eine Ansprechperson hatte. <br /><br /> Ich kann nur Positives über diese
        Personalbereitstellungsfirma berichten!
        </p>
          <small>Jürgen H., 25 Jahre, EAT</small>
      </b-carousel-slide>
      <b-carousel-slide img-blank>
        <p>
          Dank der tollen Betreuung und Beratung seitens team<span class='two'>2</span>work habe ich nach
          1jähriger Auszeit wieder eine Anstellung in meinem gewünschten Arbeitsumfeld gefunden. Durch die
          offene Kommunikation seitens des Teams von team<span class='two'>2</span>work hatte ich von Anfang
          an ein gutes Gefühl. Während des Vorstellungsgespräches hatte ich nicht das Gefühl, nur eine unter
          vielen zu sein und die Beraterin ging auf meine persönliche Situation ein.
        </p>
        <small>Katrin D., BSc, 27 Jahre, Supply Chain</small>
      </b-carousel-slide>
    </b-carousel>
  </div>
</div>
</template>

<script>
export default {
  name: 'testimonial',
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/util/util.scss";

.testimonial {
    background: $color-black-medium;
}

.img-fluid {
    max-height: 250px !important;
}

@media (max-width: 992px) {
  .img-fluid {
      max-height: 300px !important;
  }
}
@media (max-width: 768px) {
  .img-fluid {
      max-height: 400px !important;
  }
}
@media (max-width: 576px) {
  .img-fluid {
      max-height: 450px !important;
  }
}
</style>
