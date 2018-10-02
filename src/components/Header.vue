<template>

<b-navbar toggleable="md" fixed="top" id="t2w-nav">
  <b-container>
  <b-navbar-toggle target="nav_collapse" class="ml-auto"></b-navbar-toggle>

  <b-navbar-brand href="/">
    <router-link to="/">&nbsp;</router-link>
  </b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="ml-auto">
      <b-nav-item>
        <router-link to="/unternehmen">Für Unternehmen</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/bewerber">Für Bewerber</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/ueber">Über Uns</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/jobs">Jobs</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/kontakt">Kontakt</router-link>
      </b-nav-item>
      <b-nav-item >
        <router-link to="/backend/list">Backend</router-link>
      </b-nav-item>
    </b-navbar-nav>

  </b-collapse>
  </b-container>
</b-navbar>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      scrollPosition: null
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  created() {

  },
  methods: {
    updateScroll() {
      let nav = document.getElementById("t2w-nav");
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition >= 62){
        nav.classList.add("active");
      } else {
        nav.classList.remove("active");
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/styles/util/util.scss";

  // General
  #t2w-nav {
    @include transition(all 0.5s ease);
    min-height: 90px;
    .navbar-brand {
        @include transition(all 0.5s ease);
        background: url("../assets/images/logo/team2work-white.svg") no-repeat;
        width: 220px;
        height: 130px;
        position: absolute;
        top: 10px;
        z-index: -999999;
    }
    a {
      color: #FFF;
      &:hover {
        color: $color-red-t2w;
      }
    }

    // Scroll
    &.active {
      @include transition(all 0.5s ease);
      background: #FFF;
      min-height: 90px;
      .navbar-brand {
          @include transition(all 0.5s ease);
          background: url("../assets/images/logo/team2work.svg") no-repeat;
          width: 130px;
          height: 80px;
          position: absolute;
          top: 5px;
      }
      a {
        color: #000;
        &:hover {
          color: $color-red-t2w;
        }
      }
      .navbar-collapse.collapse.show {
        background: #FFF;
        margin-top: 50px;
        text-align: right;
      }
    }
  }

  // Large
  @media (max-width: 992px) {
    #t2w-nav {
      .navbar-brand {
        width: 130px;
        top: 5px;
      }
    }
  }

  // Medium
  @media (max-width: 768px) {
    #t2w-nav {
      background: #FFF;
      border-bottom: 1px solid #F0F0F0;
      .navbar-brand {
        background: url("../assets/images/logo/team2work.svg") no-repeat;
        width: 130px;
        top: 5px;
      }
      a {
        color: #000;
        &:hover {
          color: $color-red-t2w;
        }
      }
      .navbar-collapse.collapse.show {
        background: #FFF;
        margin-top: 50px;
        text-align: right;
      }
    }
  }

  // Small
  @media (max-width: 576px) {
    #t2w-nav {
      background: #FFF;
      border-bottom: 1px solid #F0F0F0;
      .navbar-brand {
        background: url("../assets/images/logo/team2work.svg") no-repeat;
        width: 130px;
        top: 5px;
      }
      a {
        color: #000;
        &:hover {
          color: $color-red-t2w;
        }
      }
      .navbar-collapse.collapse.show {
        background: #FFF;
        margin-top: 50px;
        text-align: right;
      }
    }
  }
</style>
