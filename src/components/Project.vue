<template>
    <div class="project">
        <div v-if="project">
            <h3 class="project-title">
                <a :href="project.url" target="_blank" rel="noopener" v-on:click="trackClick(project.name)">{{project.name}}</a>
            </h3>
            <div v-if="project.startDate" class="project-dates">
                (<span v-if="project.startDate">{{project.startDate}}</span>
                -
                <span>{{project.endDate || 'Present'}}</span>)
            </div>
            <img v-if="isNpmProject" class="badge" :src="versionBadgeUrl" alt="Version number indicator">
            <img v-if="isNpmProject" class="badge" :src="githubStarsBadgeUrl" alt="Github stars indicator">
            <img v-if="isNpmProject" class="badge" :src="downloadsPerMonthBadgeUrl" alt="Downloads per month indicator">
        </div>
        <p v-if="descriptionType === 'string'">
            {{project.description}}
        </p>
        <ul v-else-if="descriptionType === 'object'">
            <li v-for="descriptionItem in project.description" :key="descriptionItem">
                {{descriptionItem}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'project',
    props: {
        project: {
            type: Object,
            default: () => {}
        },
        type: {
            type: String,
            default: () => ''
        }
    },
    computed: {
        isNpmProject: function () {
            return this.type === 'npm' && this.project && this.project.name;
        },
        downloadsPerMonthBadgeUrl: function() {
            return 'http://img.shields.io/npm/dm/' + this.project.name + '.svg';
        },
        versionBadgeUrl: function () {
            return 'https://img.shields.io/npm/v/' + this.project.name + '.svg';
        },
        githubStarsBadgeUrl: function () {
            return 'https://img.shields.io/github/stars/mrodrig/' + this.project.name + '.svg?style=flat';
        },
        descriptionType: function () {
            return typeof this.project.description;
        }
    },
    methods: {
        trackClick: function (projectName) {
            this.$ga.event({
                eventCategory: 'projects',
                eventAction: 'click',
                eventLabel: projectName
            });
        }
    }
};
</script>

<style lang="less">
    .project {
        .project-title {
            display: inline-block;
            min-width: 15em;

            a {
                color: black;
                text-decoration: none;
                transition: .3s;

                &:hover {
                    color: @lightblue;
                }
            }
        }
        .project-dates {
            display: inline-block;
            min-width: 15em;
        }
        .badge {
            vertical-align: middle;
            padding-right: .3em;
        }
    }
</style>
