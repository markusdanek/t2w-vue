<template>
<div>
  <div class="section-hero small">
    <div class="hero-image">
      <div class="image-src" style="background-image: url('./static/images/hero/hero-applicants.jpg')"></div>
    </div>
    <div class="container">
      <div class="hero-text">
        <div class="text container">
          <h1 class="startpage">
              Mit unserer Hilfe zu Ihrem Traumjob
            </h1>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <form class="login-form" @click.prevent='login' >
      <p>
        <input type="text" v-model='email' placeholder="Email">
      </p>
      <p>
        <input type='password' v-model='password' placeholder="Password">
      </p>
      <p>
        <button type="submit" name="button">Submit</button>
      </p>
    </form>
  </div>

</div>
</template>

<script>

import Vue from 'vue'
import auth from '../../mixins/auth'
// import About_Hero from '@/components/about/Hero'
// Vue.component('about-hero', About_Hero);

export default {
  name: 'login',
  data() {
    return {
      email: 'markus.danek@gmail.com',
      password: '1234'
    }
  },
  methods: {
    login() {
      auth.login(this.email, this.password);
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
