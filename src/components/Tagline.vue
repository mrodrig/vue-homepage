<template>
    <div id="tagline">
        <h1><a href="#" v-on:click="trackEvent('click')" v-on:mouseover="trackEvent('hover')">Michael Rodrigues</a></h1>
        <p>Senior Web Applications Developer and Cybersecurity Professional</p>
    </div>
</template>

<script>
export default {
    name: 'tagline',
    props: {},
    data () {
        return {
            currentYear: (new Date()).getFullYear(),
            iconSize: 36
        };
    },
    methods: {
        trackEvent: function (event) {
            this.$ga.event({
                eventCategory: 'tagline',
                eventAction: event,
                eventLabel: 'name'
            });
        }
    }
};
</script>

<style lang="less">
#tagline {
    text-align: center;
    background-color: #f4f4f4;

    h1 {
        padding-top: 1em;
        margin-block-start: 0;
        margin-block-end: 0;

        a {
            color: black;
            transition: 0.3s;
            text-decoration: none;

            &:hover {
                color: @lightblue;
            }
        }
    }

    p {
        margin-block-start: 0em;
        margin-block-end: 0;
        padding-bottom: 2em;
    }
}
</style>
