<template>
    <div id="resume" class="center">
        <div id="download">
            <div class="download-link">
                <a :href="resumeSource" target="_blank" rel="noopener" v-on:click="trackClick('resume')"><arrow-down-bold-box /> Résumé</a>
            </div>
            <div class="download-link">
                <a :href="cvSource" target="_blank" rel="noopener" v-on:click="trackClick('cv')"><arrow-down-bold-box /> Curriculum Vitae (CV)</a>
            </div>
        </div>
        <!--<div v-for="page in numPages" :id="page" :key="page">-->
        <div>
            <!--<pdf :page="page" :src="pdfData" :scale="scale" :resize="true" class="inline page">-->
            <pdf :page="page" :src="resumeSource" :scale="scale" :resize="true" class="inline page">
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
            resumeSource: 'pdf/resume.pdf',
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
        // this.getPdf();
    },
    methods: {
        getPdf: function () {
            let self = this;
            self.pdfData = pdf.createLoadingTask(this.resumeSource);
            self.pdfData.then(pdf => {
                self.numPages = pdf.numPages;
            });
        },
        trackClick: function (downloadType) {
            this.$ga.event({
                eventCategory: 'resume',
                eventAction: 'download',
                eventLabel: downloadType
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

        .inline {
            display: inline-block;
        }
    }

    .center {
        text-align: center;

        #loading {
            height: 4em;
            width: 4em;
        }
    }

    @media @upToNarrowQuery {
        #resume {
            .page {
                width: 100%;
            }
        }
    }

    @media @narrowAndUpQuery {
        #resume {
            .page {
                width: 90%;
            }
        }
    }

    @media @mediumAndUpQuery {
        #resume {
            .page {
                width: 70%;
            }
        }
    }

    @media @largeAndUpQuery {
        #resume {
            .page {
                width: 60%;
            }
        }
    }
</style>
