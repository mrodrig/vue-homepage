<template>
    <div id="footer">
        <div id="copyright">
            &copy; 2014 - {{currentYear}} Michael Rodrigues. All Rights Reserved.
        </div>
        <div id="identities">
            <a href="https://github.com/mrodrig" target="_blank" rel="noopener">
                <github-circle class="icon" :size="iconSize" />
            </a>
            <a href="https://www.linkedin.com/in/rodriguesmichael" target="_blank" rel="noopener">
                <linkedin class="icon" :size="iconSize" />
            </a>
            <a href="mailto:rodrigues.mi@husky.neu.edu">
                <email class="icon" :size="iconSize" />
            </a>
        </div>
    </div>
</template>

<script>
import GithubCircle from 'vue-material-design-icons/GithubCircle.vue';
import Linkedin from 'vue-material-design-icons/Linkedin.vue';
import Email from 'vue-material-design-icons/Email.vue';

export default {
    name: 'page-footer',
    components: {
        GithubCircle,
        Linkedin,
        Email
    },
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
#footer {
    margin-top: 2em;
    text-align: center;

    #identities {
        padding-top: 1em;

        a {
            color: black;
            padding: .4em;
        }

        .icon {
            opacity: 0.5;
            transition: 0.4s;

            &:hover {
                opacity: 1;
            }
        }
    }
}
</style>
