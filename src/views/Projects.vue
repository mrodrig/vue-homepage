<template>
    <div id="projects">
        <div class="projects-group">
            <h2>Node Modules</h2>
            <npm-project v-for="npmProject in npmProjects" :key="npmProject.name" :module-name="npmProject.name" :description="npmProject.description" />
        </div>
    </div>
</template>

<script>
import npmProject from '../components/NPMProject.vue';
import npmProjects from '../data/npmProjects.js';

export default {
    name: 'contact',
    components: {
        npmProject
    },
    data () {
        return {
            npmProjects: npmProjects.projects
        };
    }
};
</script>

<style lang="less">
#projects {

}
</style>
