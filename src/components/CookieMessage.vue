<template>
<div class="cookie" :class="containerPosition" v-if="isOpen">
  <b-container>
  <b-row>
    <b-col cols="10">
      <div class="cookie__content">
        <slot name="message">
          Wir verwenden Cookies, um Ihnen den bestmöglichen Service zu gewährleisten.
          Durch die Nutzung unserer Website, sind Sie mit der Cookie-Nutzung einverstanden.<br/>
          Weiterführende Information finden Sie <a href="https://publications.europa.eu/de/cookies-notice" target="_blank">hier</a>.
        </slot>
      </div>
    </b-col>
    <b-col cols="2">
      <div class="cookie__buttons">
        <a :href="buttonLink" v-if="buttonLink" :class="buttonClass">{{ buttonLinkText }}</a>
        <div class="btn" :class="buttonClass" @click="accept">{{ buttonText }}</div>
      </div>
    </b-col>
  </b-row>
</b-container>
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
      default: 'cookie__button'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    containerPosition() {
      return `cookie--${this.position}`
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
@import "@/styles/util/util.scss";
.cookie {
    position: fixed;
    overflow: hidden;
    box-sizing: border-box;
    z-index: 1;
    width: 100%;
    background: $color-black-medium;
    color: $color-white;
    padding: 1.250em 0;
}

.cookie__content > a {
    font-size: 14px;
    color: $color-white;
    text-decoration: underline;
    &:hover {
        text-decoration: underline;
    }
}

.cookie--top {
    top: 0;
    left: 0;
    right: 0;
}

.cookie--bottom {
    bottom: 0;
    left: 0;
    right: 0;
}
.cookie__button {
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
