<template>
<div>
  <backend-hero></backend-hero>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-sm-offset-1" v-show="authenticated">
          <h1></h1>Hallo {{ localStorage.profile }}, du bist bereits eingeloggt!
          <router-link to="/backend/list">Backend Job List</router-link>

          <button @click="logout()">Logout</button>
        </div>
        <div class="col-sm-9 col-sm-offset-1 login" v-show="!authenticated">
          <h2>Sie sind zur Zeit nicht angemeldet!</h2>
          <button class="btn btn-success btn-lg" @click="login()">Login</button>
        </div>
      </div>
    </div>
  </div>
  <pre>{{localstorage}}</pre>
</div>
</template>

<script>
  import Vue from 'vue'
  import Backend_Hero from '@/components/backend/Hero';
  Vue.component('backend-hero', Backend_Hero);

  function checkAuth() {
    return !!localStorage.getItem('id_token');
  }

  export default {
    name: 'login',
    data() {
      return {
        localStorage,
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
    mounted() {
      var self = this;
      Vue.nextTick(function() {
        self.authenticated = checkAuth();
        self.lock.on('authenticated', (authResult) => {
          console.log('authenticated');
          localStorage.setItem('id_token', authResult.idToken);
          self.lock.getProfile(authResult.idToken, (error, profile) => {
            if (error) {
              return;
            }
            localStorage.setItem('profile', JSON.stringify(profile));
            self.authenticated = true;
          });
        });
        self.lock.on('authorization_error', (error) => {
        });
    });
    },
    methods: {
      login() {
        this.lock.show();
      },
      logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.authenticated = false;
      }
    }
  }
</script>

<style scoped lang="scss">
@import "../../styles/util/util.scss";

  .wrapper {
      background: $color-white;
  }
  .login {
    text-align: center;
    h2 {
      @include rem((margin: 20px auto));
    }
    button {
      @include rem((margin: 20px auto));
    }
  }
</style>
