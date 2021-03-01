<template>
  <div id="app">
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
    <cookie-message></cookie-message>
    <CoronaModal />
    <AddressModal />
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
import CookieMessage from "@/components/CookieMessage.vue";
import CoronaModal from "@/components/CoronaModal.vue";
import AddressModal from "@/components/AddressModal.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AppFooter,
    CookieMessage,
    CoronaModal,
    AddressModal,
  },
  methods: {
    checkTimestampAge() {
      var maxAge = 1000 * 1 * (60 * 1) * (60 * 12) * (24 * 30);
      var timestamp = new Date(localStorage["timestamp"]);
      var currentTime = new Date();
      if (currentTime - timestamp > maxAge) {
        localStorage.removeItem("id_token");
        localStorage.removeItem("profile");
        this.authenticated = false;
      }
    },
  },
  mounted() {
    this.checkTimestampAge();
  },
};
</script>

<style lang="scss">
@import "styles/util/util.scss";

body,
html {
  overflow-x: hidden;
  overflow-y: auto;
}
html {
  @include rem(font-size, 18px);
  -webkit-font-smoothing: antialiased;
  position: relative;
  min-height: 100%;
}
body {
  font-family: $font-regular, "Helvetica Neue", "Helvetica", "Arial",
    "sans-serif";
  color: $color-black-medium;
  border-right: 10px solid $color-red-t2w;
  background: #f9f9f9 !important;
}
// .container {
//     padding: 0px !important;
// }
@media (min-width: 1200px) {
  .wrapper {
    max-width: 1600px !important;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    // width: 100% !important;
  }
}
%button {
  @include rem(font-size, 14px);
  @include rem(
    (
      padding-top: 0 10px,
    )
  );
  background: none;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  opacity: 0.8;
  color: inherit;
  line-height: 36px;
  display: inline-block;
  height: auto;
  cursor: pointer;
  &:hover {
    opacity: 1;
    text-decoration: inherit;
  }
}
span.two {
  color: $color-red-t2w;
}
hr {
  @include rem(
    (
      margin: 20px 0,
    )
  );
  border-top: 1px solid $color-gray-light;
}
</style>
