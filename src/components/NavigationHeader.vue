<template>
    <div id="nav">
        <ul id="navbar">
            <li v-for="route in routes" :key="route.to">
                <router-link :to="route.to">
                    {{route.name}}
                </router-link>
                |
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
                { name: 'About', to: '/about' }
            ]
        };
    }
};
</script>

<style lang="less">
    #nav {
        padding: 30px 0 30px 0;

        #navbar {
            padding: 15px 0 15px 0;
            list-style-type: none;
            margin: 0;
            overflow: hidden;
            background-color: @backgroundgray;

            li {
                display: inline-block;
                padding: 10px;
                color: @lightgray;

                a {
                    font-weight: bold;

                    &:visited {
                        color: @lightgray;
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
