<template>
  <div>
    <impress-hero></impress-hero>
    <impress-info></impress-info>
    <impress-responsible></impress-responsible>
    <impress-terms></impress-terms>
    <impress-companydata></impress-companydata>
    <impress-cookies></impress-cookies>
    <impress-disclaimer></impress-disclaimer>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Impress_Hero from '@/components/impress/Hero'
  import Impress_Info from '@/components/impress/Info'
  import Impress_Responsible from '@/components/impress/Responsible'
  import Impress_Terms from '@/components/impress/Terms'
  import Impress_CompanyData from '@/components/impress/CompanyData'
  import Impress_Cookies from '@/components/impress/Cookies'
  import Impress_Disclaimer from '@/components/impress/Disclaimer'
  Vue.component('impress-hero', Impress_Hero);
  Vue.component('impress-info', Impress_Info);
  Vue.component('impress-responsible', Impress_Responsible);
  Vue.component('impress-terms', Impress_Terms);
  Vue.component('impress-companydata', Impress_CompanyData);
  Vue.component('impress-cookies', Impress_Cookies);
  Vue.component('impress-disclaimer', Impress_Disclaimer);

  import auth from '../../mixins/auth'

  export default {
    name: 'impress',
    route: {
      beforeEnter() {
        return checkAuth();
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }
</style>
