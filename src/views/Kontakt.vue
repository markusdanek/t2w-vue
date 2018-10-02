<template>
<div>
  <HeroSmall title="Kontaktieren Sie uns" template="backend" />
  <div class="wrapper">
    <div class="contact-maps">
      <b-container>
        <b-col>
          <b-row>
            <b-col>
              <div class="stuff">
                <h2>Adresse:</h2>
                <ul>
                  <li class="t2w">team<span class="two">2</span>work Arbeitskräfteüberlassung GmbH</li>
                  <li>Mariahilfer Straße 136</li>
                  <li>A-1150 Wien</li>
                  <li>Tel: +43 1 892 1 892, Fax -14</li>
                  <li>
                    <a :href="`mailto:office@team2work.at`">E-Mail: office@team2work.at</a>
                  </li>
                </ul>
              </div>
              <div class="item">
                <h2>Bewerbungen</h2>
                <p>
                  <b>Mo bis Fr</b> zwischen <b>09:00</b> und <b>12:00</b> Uhr.<br /> Persönliche Beratung und Besprechung nach <u>vorheriger telefonischer</u> Vereinbarung.
                </p>
              </div>
            </b-col>
            <b-col>
              <gmap-map :center="center" :zoom="16" style="width: 100%; height: 500px" :options="{scrollwheel: false}">
                <gmap-marker v-for="m in markers" :key="m.id" :position="m.position" :clickable="false" :draggable="false">
                </gmap-marker>
              </gmap-map>
            </b-col>
          </b-row>
        </b-col>
      </b-container>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import HeroSmall from '@/components/HeroSmall.vue'
import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD8cbYKedLTOAsQVesi7QYWFPl7ZJvrt10'
  }
});
export default {
  name: 'kontakt',
  components: {
    HeroSmall
  },
  data() {
    return {
      center: {
        lat: 48.1951244,
        lng: 16.336835
      },
      markers: [{
        position: {
          lat: 48.1951244,
          lng: 16.336835
        }
      }]
    }
  },
  metaInfo: {
    title: 'team2work',
    titleTemplate: '%s » Kontakt',
    meta: [
      {
        'property': 'og:title',
        'content': 'team2work',
        'template': chunk => `${chunk} - Kontakt`,
        'vmid': 'og:title'
      },
      {
        'property': 'og:site_name',
        'content': 'team2work',
        'template': chunk => `${chunk} - Kontakt`,
        'vmid': 'og:site_name'
      },
      {
        'property': 'og:type',
        'content': 'website'
      },
      {
        'property': 'og:url',
        'content': 'https://team2work.at/#/kontakt'
      }
    ]
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/util/util.scss";

.wrapper {
    background: #FFF;
}
.contact-maps {
    @include rem((padding-top: 60px));
    @include rem((padding-bottom: 60px));
    .stuff {
        @include rem((margin-bottom: 60px));
        h2 {
            @include rem((margin-bottom: 20px));
            font-weight: bold;
            color: $color-red-t2w;
        }
        ul {
            @include rem((padding-left: 0));
            li {
                list-style-type: none;
                span {
                    display: inline;
                }
                &.t2w {
                    font-weight: bold;
                }
                a {
                    color: $color-black-medium;
                    &:hover {
                        border-bottom: 1px solid $color-red-t2w;
                        text-decoration: none;
                    }
                }
            }
        }
    }
}
</style>
