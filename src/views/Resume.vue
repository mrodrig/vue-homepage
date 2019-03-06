<template>
    <div id="resume" class="center">
        <div id="download">
            <div class="download-link">
                <a :href="pdfSource" target="_blank" rel="noopener"><arrow-down-bold-box /> Résumé</a>
            </div>
            <div class="download-link">
                <a :href="cvSource" target="_blank" rel="noopener"><arrow-down-bold-box /> Curriculum Vitae (CV)</a>
            </div>
        </div>
        <div v-for="page in numPages" :id="page" :key="page">
            <pdf :page="page" :src="pdfData" :scale="scale" :resize="true" class="inline page">
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
import ArrowDownBoldBox from 'vue-material-design-icons/ArrowDownBoldBox.vue';

export default {
    name: 'resume',
    components: {
        pdf,
        ArrowDownBoldBox
    },
    data () {
        return {
            pdfSource: 'pdf/resume.pdf',
            cvSource: 'pdf/cv.pdf',
            numPages: 0,
            pdfData: undefined,
            scale: 'page-width',
            debounceReload: null
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
        getPdf: function () {
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

        #download {
            .download-link {
                padding: .5em;

                * {
                    vertical-align: bottom;
                }
            }

            a {
                color: @darkgray;
                text-decoration: none;
                transition: .3s;
                width: 3em;

                &:hover {
                    color: @lightblue;
                }
            }
        }

        .page {
            max-width:80%;
        }
    }
    .center {
        text-align: center;

        #loading {
            height: 4em;
            width: 4em;
        }
    }
    .inline {
        display: inline-block;
    }
</style>
