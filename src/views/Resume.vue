<template>
    <div id="resume" class="center">
        <p>
            Looking for my
            <a href="pdf/cv.pdf">Curriculum Vitae (CV)</a>
            instead?
        </p>
        <div v-for="page in numPages" :id="page" :key="page">
            <pdf :page="page" :src="pdfData" class="inline">
                <template slot="loading">
                    <div class="center">
                        <p>Please wait, résumé loading...</p>
                        <img id="loading" src="../assets/spinner-icon.gif" alt="Loading icon">
                    </div>
                </template>
            </pdf>
            <div v-if="numPages > 1" class="center">
                {{page}} of {{numPages}}
            </div>
        </div>
    </div>
</template>

<script>
import pdf from 'pdfvuer';

export default {
    name: 'resume',
    components: {
        pdf
    },
    data () {
        return {
            pdfSource: 'pdf/resume.pdf',
            numPages: 0,
            pdfData: undefined
        };
    },
    watch: {
        show: function (s) {
            if(s) {
                this.getPdf();
            }
        }
    },
    mounted () {
        this.getPdf();
    },
    methods: {
        getPdf() {
            let self = this;
            self.pdfData = pdf.createLoadingTask(this.pdfSource);
            self.pdfData.then(pdf => {
                self.numPages = pdf.numPages;
            });
        }
    }
};
</script>

<style lang="less">
    #resume {
        padding-top: 1em;
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
