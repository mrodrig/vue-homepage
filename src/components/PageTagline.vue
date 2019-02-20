<template>
    <div id="tagline">
        <h1><a href="#">Michael Rodrigues</a></h1>
        <p>Senior Web Applications Developer and Cybersecurity Professional</p>
    </div>
</template>

<script>

export default {
    name: 'page-tagline',
    props: {},
    data () {
        return {
            currentYear: (new Date()).getFullYear(),
            iconSize: 36
        };
    }
};
</script>

<style lang="less">
#tagline {
    text-align: center;

    h1 {
        margin-block-start: 1em;
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
    }
}
</style>
