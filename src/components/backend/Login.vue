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
    <button @click="login()" v-show="!authenticated">Login</button>
    <button @click="logout()" v-show="authenticated">Logout</button>
    <hr>
    <router-link to="/private" v-show="authenticated">Private Route</router-link>
  </div>

</div>
</template>

<script>

import Vue from 'vue'
import auth from '../../mixins/auth'
// import About_Hero from '@/components/about/Hero'
// Vue.component('about-hero', About_Hero);

function checkAuth() {
  return !!localStorage.getItem('id_token');
}

export default {
  name: 'login',
  data() {
    return {
      authenticated: false,
      secretThing: '',
      lock: new Auth0Lock('fjIMo36jLsTc4rYl6BOCIizBDK62hTZY', 'mrks.eu.auth0.com')
    }
  },
  events: {
    'logout': function() {
      this.logout();
    }
  },
  // Check the user's auth status when the app
  // loads to account for page refreshing
  mounted() {
    var self = this;
    Vue.nextTick(function() {
      self.authenticated = checkAuth();
      self.lock.on('authenticated', (authResult) => {
        console.log('authenticated');
        localStorage.setItem('id_token', authResult.idToken);
        self.lock.getProfile(authResult.idToken, (error, profile) => {
          if (error) {
            // Handle error
            return;
          }
          // Set the token and user profile in local storage
          localStorage.setItem('profile', JSON.stringify(profile));

          self.authenticated = true;
        });
      });
      self.lock.on('authorization_error', (error) => {
        // handle error when authorizaton fails
      });
  });
  },
  methods: {
    login() {
      this.lock.show();
    },
    logout() {
      // To log out, we just need to remove the token and profile
      // from local storage
      localStorage.removeItem('id_token');
      localStorage.removeItem('profile');
      this.authenticated = false;
    }
  },
  mixins: [auth]
}
</script>

<style scoped lang="scss">
@import "../../styles/util/util.scss";

.wrapper {
    background: $color-white;
}
</style>
