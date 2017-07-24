<template>
<div>
  <backend-hero></backend-hero>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-sm-offset-1 loggedin" v-show="authenticated">
          <div class="media">
            <div class="media-left">
              <img :src="this.getUserPicture()" alt="userPicture" width="150px;">
            </div>
            <div class="media-body">
              <h2 class="media-heading">Hallo {{this.getLoggedInUserName()}}</h2>
              <p>Du bist bereits eingeloggt!</p>
              <p>Klicke hier um zur Job Verwaltung zu kommen: <router-link to="/backend/list">API Job Übersicht</router-link></p>
              <button class="btn-logout btn btn-xs" @click="logout()">Abmelden</button>
            </div>
          </div>
        </div>
        <div class="col-sm-12 login" v-show="!authenticated">
          <h2>Sie sind zur Zeit nicht angemeldet!</h2>
          <button class="btn-login btn btn-lg" @click="login()">Login</button>
        </div>
      </div>
    </div>
  </div>
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
        lock: new Auth0Lock('fjIMo36jLsTc4rYl6BOCIizBDK62hTZY', 'mrks.eu.auth0.com', {auth: { autoParseHash: false, redirect: false }})
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

        self.lock.resumeAuth(window.location.hash, function(err, result) {
          console.log(result);
        });

        self.lock.on('authenticated', (authResult) => {
          localStorage.setItem('id_token', authResult.idToken);
          localStorage.setItem('timestamp', new Date());
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
        localStorage.removeItem('timestamp');
        this.authenticated = false;
      },
      getLoggedInUserName() {
        var obj = JSON.parse(localStorage.getItem('profile'));
        if (obj) {
            return obj.name;
        } else {
            return '';
        }
      },
      getUserPicture() {
        var url = JSON.parse(localStorage.getItem('profile'));
        if (url) {
          return url.picture;
        } else {
          return '';
        }
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
      @include rem((margin: 20px 0));
    }
    button {
      @include rem((margin: 20px 0));
    }
  }
  button.btn-login {
    @extend %ghost-button-green;
  }
  button.btn-logout {
    @extend %ghost-button-red;
  }
  .loggedin {
    @include rem((margin-top: 50px));
    @include rem((margin-bottom: 50px));
    h2 {
      @include rem((marin: 20px 0));
    }
  }
</style>
