<template>
  <div class="home">
    <HeroLarge/>
    <JobList/>
    <Testimonial/>
    <Service/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroLarge from '@/components/HeroLarge.vue'
import JobList from '@/components/JobListSmall.vue'
import Testimonial from '@/components/Testimonial.vue'
import Service from '@/components/Service.vue'
export default {
  name: 'home',
  components: {
    HeroLarge, JobList, Testimonial, Service
  },
  metaInfo: {
    title: 'team2work',
    titleTemplate: '%s » Startseite',
    meta: [
      {
        'property': 'og:title',
        'content': 'team2work',
        'template': chunk => `${chunk} - Für Startseite`,
        'vmid': 'og:title'
      },
      {
        'property': 'og:site_name',
        'content': 'team2work',
        'template': chunk => `${chunk} - Für Startseite`,
        'vmid': 'og:site_name'
      },
      {
        'property': 'og:type',
        'content': 'website'
      },
      {
        'property': 'og:url',
        'content': 'https://team2work.at/'
      }
    ]
  }
}
</script>

<style scoped lang="scss">
  hr {
    padding: 0;
    max-width: 1600px;
    margin: 0 auto;
  }
</style>
