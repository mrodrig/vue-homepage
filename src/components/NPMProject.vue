<template>
    <div>
        <div class="badges">
            <h3 class="project-title">{{moduleName}}</h3>
            <img class="badge" :src="versionBadgeUrl" alt="Version number indicator">
            <img class="badge" :src="githubStarsBadgeUrl" alt="Github stars indicator">
            <img class="badge" :src="downloadsPerMonthBadgeUrl" alt="Downloads per month indicator">
        </div>
        <p>{{description}}</p>
    </div>
</template>

<script>
export default {
    name: 'npm-project',
    props: {
        moduleName: {
            type: String,
            default: () => ''
        },
        description: {
            type: String,
            default: () => ''
        }
    },
    computed: {
        downloadsPerMonthBadgeUrl: function() {
            return 'http://img.shields.io/npm/dm/' + this.moduleName + '.svg';
        },
        versionBadgeUrl: function () {
            return 'https://img.shields.io/npm/v/' + this.moduleName + '.svg';
        },
        githubStarsBadgeUrl: function () {
            return 'https://img.shields.io/github/stars/mrodrig/' + this.moduleName + '.svg?style=flat';
        }
    }
};
</script>

<style lang="less">
.project-title {
    display: inline-block;
    padding-right: 1em;
    min-width: 8em;
}
.badge {
    vertical-align: middle;
    padding-right: .3em;
}
</style>
