<template>
  <div class="row">
    <div class="Cookie" :class="containerPosition" v-if="isOpen">
      <div class="Cookie__content col-sm-8 col-sm-offset-1">
        <slot name="message">
          team2work.at verwendet Cookies um Ihnen das bestmögliche Surferlebnis zu ermöglichen. <br/>
          Um auch weiterhin unseren Webauftritt besser zu gestalten, analysieren wir anomysiert das Surfverhalten unserer Nutzer und Nutzerinnen. <br/>
          Weiterführende Information finden Sie <a href="https://publications.europa.eu/de/cookies-notice">hier</a>.
        </slot>
      </div>
      <div class="Cookie__buttons col-sm-1">
        <a :href="buttonLink" v-if="buttonLink" :class="buttonClass">{{ buttonLinkText }}</a>
        <div class="btn" :class="buttonClass" @click="accept">{{ buttonText }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Verstanden'
    },
    buttonLink: {
      type: String
    },
    buttonLinkText: {
      type: String,
      default: 'Mehr Information'
    },
    message: {
      type: String,
      default: 'Default text'
    },
    position: {
      type: String,
      default: 'bottom'
    },
    buttonClass: {
      type: String,
      default: 'Cookie__button'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    containerPosition() {
      return `Cookie--${this.position}`
    }
  },
  created() {
    if (!this.getVisited() === true) {
      this.isOpen = true
    }
  },
  methods: {
    setVisited() {
      localStorage.setItem('cookie:accepted', true)
    },
    getVisited() {
      return localStorage.getItem('cookie:accepted')
    },
    accept() {
      this.setVisited()
      this.isOpen = false
      this.$emit('accept')
    }
  }
}
</script>

<style lang="scss">
  @import "../../styles/util/util.scss";
  .Cookie {
      position: fixed;
      overflow: hidden;
      box-sizing: border-box;
      z-index: 1;
      width: 100%;
      background: $color-black-medium;
      color: $color-white;
      padding: 1.250em 0;
  }

  .Cookie__content.col-sm-8.col-sm-offset-1 > a {
      font-size: 14px;
      color: $color-white;
      &:hover {
          text-decoration: underline;
      }
  }

  .Cookie--top {
      top: 0;
      left: 0;
      right: 0;
  }

  .Cookie--bottom {
      bottom: 0;
      left: 0;
      right: 0;
  }
  .Cookie__button {
      cursor: pointer;
      text-align: center;
      background: $color-red-t2w;
      padding: 10px;
      border: none;
      border-radius: 0;
      &:hover {
          background: $color-red;
          color: $color-white;
      }
  }
</style>
