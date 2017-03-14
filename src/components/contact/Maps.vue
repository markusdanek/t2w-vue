<template>
  <gmap-map
    :center="center"
    :zoom="16"
    style="width: 100%; height: 500px"
    :options="{scrollwheel: false}"
    >
    <gmap-marker
      v-for="m in markers"
      :key="markers.id"
      :position="m.position"
      :clickable="false"
      :draggable="false"
      >
    </gmap-marker>
  </gmap-map>
</template>

<script>
  import Vue from 'vue';
  import * as VueGoogleMaps from 'vue2-google-maps';

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyD8cbYKedLTOAsQVesi7QYWFPl7ZJvrt10'
    }
  });

  export default {
    name: 'contact-maps',
    data () {
      return {
        center: {lat: 48.1951244, lng: 16.336835},
        markers: [{
          position: {lat: 48.1951244, lng: 16.336835}
        }]
      }
    }
  }
</script>
