<template>
    <div>
        <contact-hero></contact-hero>
        <contact-info></contact-info>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Contact_Hero from '@/components/contact/Hero'
    import Contact_Info from '@/components/contact/Info'
    Vue.component('contact-hero', Contact_Hero);
    Vue.component('contact-info', Contact_Info);

    export default {
        name: 'contact'
    }
</script>

<style scoped lang="scss">
    @import "../../styles/util/util.scss";

    .wrapper {
        background: $color-white;
    }
</style>
