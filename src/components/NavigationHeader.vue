<template>
    <div id="nav">
        <ul id="navbar">
            <li v-for="route in routes" :key="route.to" v-on:click="trackClick(route.to)">
                <router-link :to="route.to">{{route.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'navigation-header',
    props: {},
    data () {
        return {
            routes: [
                { name: 'Home', to: '/' },
                { name: 'About', to: '/about' },
                { name: 'Résumé', to: '/resume' },
                { name: 'Projects', to: '/projects' },
                { name: 'Photography', to: '/photography' },
                { name: 'Contact', to: '/contact' }
            ]
        };
    },
    methods: {
        trackClick: function (route) {
            this.$ga.event({
                eventCategory: 'navigation',
                eventAction: 'click',
                eventLabel: route
            });
        }
    }
};
</script>

<style lang="less">
    #nav {
        padding: 0;
        text-align: center;

        #navbar {
            padding: 1em 0 1em 0;
            list-style-type: none;
            margin: 0;
            overflow: hidden;
            background-color: @backgroundgray;

            li {
                display: inline-block;
                padding: .6em;
                padding-left: 1.1em;
                padding-right: 1.1em;
                color: @lightgray;

                a {
                    font-weight: bold;
                    color: @lightgray;
                    text-decoration: none;
                    padding: 1em;

                    &:visited {
                        color: @lightgray;
                    }

                    &:hover {
                        color: @white;
                    }

                    &.router-link-exact-active {
                        color: @lightblue;
                    }
                }
            }
        }

        &:after {
            content: '';
            display: block;
            width: 100%;
            height: 0.75em;
            background-color: @lightblue;
        }
    }
</style>
