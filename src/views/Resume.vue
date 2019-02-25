<template>
    <div id="resume" class="center">
        <pdf src="pdf/resume.pdf" class="inline" :page="1">
            <template slot="loading">
                <div class="center">
                    <p>Please wait, résumé loading...</p>
                    <img id="loading" src="../assets/spinner-icon.gif" alt="Loading icon">
                </div>
            </template>
        </pdf>
        <p>
            Looking for my
            <a href="pdf/cv.pdf">Curriculum Vitae (CV)</a>
            instead?
        </p>
    </div>
</template>

<script>
import pdf from 'pdfvuer';

export default {
    name: 'resume',
    components: {
        pdf
    }
};
</script>

<style lang="less">
    #resume {
    }
    .center {
        text-align: center;
    }
    #loading {
        height: 4em;
        width: 4em;
    }
    .inline {
        display: inline-block;
    }
</style>
