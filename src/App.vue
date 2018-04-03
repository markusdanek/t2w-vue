<template>
    <div id="app">
        <cookie-message></cookie-message>
        <app-header></app-header>
        <div class="container">
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Vue from 'vue'
    import App_Header from '@/components/app/Header'
    import App_Footer from '@/components/app/Footer'
    import CookieMessage from '@/components/CookieMessage/CookieMessage'
    Vue.component('app-header', App_Header);
    Vue.component('app-footer', App_Footer);
    Vue.component('cookie-message', CookieMessage);

    export default {
        name: 'app',
        methods: {
            checkTimestampAge() {
                var maxAge = (1000 * 1) * (60 * 1) * (60 * 12) * (24 * 30);
                var timestamp = new Date(localStorage['timestamp']);
                var currentTime = new Date();
                if ((currentTime - timestamp) > maxAge) {
                    localStorage.removeItem('id_token');
                    localStorage.removeItem('profile');
                    this.authenticated = false;
                }
            }
        },
        mounted() {
            this.checkTimestampAge();
        }
    }
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
        @include rem((padding-top: 80px));
        font-family: $font-regular, "Helvetica Neue", "Helvetica", "Arial", "sans-serif";
        color: $color-black-medium;
        border-right: 10px solid $color-red-t2w;
        background: $color-background;
    }
    .container {
        @include rem((padding: 0));
    }
    @media (min-width: 1200px) {
        .container {
            max-width: 1600px;
            width: 100%;
        }
    }
    %button {
        @include rem(font-size, 14px);
        @include rem((padding-top: 0 10px));
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
        @include rem((margin: 20px 0));
        border-top: 1px solid $color-gray-light;
    }
</style>
