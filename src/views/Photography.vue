<template>
    <div id="photography">
        <vue-instagram :token="accessToken" :count="numberOfPhotos" media-type="image">
            <template slot="error">
                <div class="center">Sorry, an error occurred fetching photos from Instagram.</div>
            </template>
            <template slot="feeds" slot-scope="props">
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <img :src="props.feed.images.standard_resolution.url" alt="Instagram Post Photograph">
                        </div>

                        <div class="card-metadata">
                            <div class="user">
                                <div class="user-picture user-info">
                                    <img :src="props.feed.user.profile_picture" alt="Instagram Profile Picture">
                                </div>
                                <div class="user-info">
                                    <p class="title">{{props.feed.user.full_name}}</p>
                                    <p class="subtitle">@{{props.feed.user.username}}</p>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer">
                            <div class="card-footer-item">
                                <heart-icon class="icon" />
                                {{props.feed.likes.count}}
                            </div>
                            <div class="card-footer-item">
                                <comment-icon class="icon" />
                                {{props.feed.comments.count}}
                            </div>
                            <div class="card-footer-item">
                                <a :href="props.feed.link" target="_blank">
                                    <link-icon class="icon link-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template slot="error" slot-scope="props">
                <div class="fancy-alert"> {{props.error.error_message}} </div>
            </template>
        </vue-instagram>
    </div>
</template>

<script>
import HeartIcon from 'vue-material-design-icons/Heart.vue';
import CommentIcon from 'vue-material-design-icons/Comment.vue';
import LinkIcon from 'vue-material-design-icons/Link.vue';
import VueInstagram from 'vue-instagram';

export default {
    name: 'photography',
    components: {
        HeartIcon,
        CommentIcon,
        LinkIcon,
        VueInstagram
    },
    data: function () {
        return {
            numberOfPhotos: 12,
            accessToken: '2041962474.2c405b3.21c0e46556ca405dabbff6b287e8482b'
        };
    }
};
</script>

<style lang="less">
    #photography {
        .column {
            -webkit-box-flex: 0;
            -ms-flex: none;
            flex: none;
            width: 33.33333%;
            display: inline-block;

            .card {

                .card-image {
                    img {
                        width: 100%;
                    }
                }

                .card-metadata {
                    .user {
                        .user-info {
                            display: inline-block;
                            padding-right: .5em;
                        }

                        .user-picture {
                            img {
                                height: 3em;
                            }
                        }
                    }
                }

                .card-footer {
                    text-align: center;

                    .card-footer-item {
                        display: inline-block;
                        width: 33.33333%;

                        .icon {
                            vertical-align: middle;
                            color: @darkgray;
                        }
                    }
                }
            }
        }
    }



    /*.card {*/
        /*background-color: #fff;*/
        /*-webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);*/
        /*box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);*/
        /*color: #4a4a4a;*/
        /*max-width: 100%;*/
        /*position: relative;*/
    /*}*/
    /*.card-image {*/
        /*display: block;*/
        /*position: relative;*/
    /*}*/
    /*.image {*/
        /*display: block;*/
        /*position: relative;*/

        /*&.is-square {*/
            /*padding-top: 100%;*/
        /*}*/

        /*img {*/
            /*bottom: 0;*/
            /*left: 0;*/
            /*position: absolute;*/
            /*right: 0;*/
            /*top: 0;*/
            /*width: 100%;*/
            /*display: block;*/
            /*max-width: 100%;*/
        /*}*/
    /*}*/
    /*.card-content {*/
        /*padding: 1.5rem;*/
    /*}*/
    /*.card .media:not(:last-child) {*/
        /*margin-bottom: .75rem;*/
    /*}*/
    /*.media {*/
        /*-webkit-box-align: start;*/
        /*-ms-flex-align: start;*/
        /*align-items: flex-start;*/
        /*display: -webkit-box;*/
        /*display: -ms-flexbox;*/
        /*display: flex;*/
        /*text-align: left;*/

        /*.media-left {*/
            /*margin-right: 1rem;*/

            /*.user-picture {*/
                /*height: 40px;*/
                /*width: 40px;*/
            /*}*/
        /*}*/

        /*.media-left, .media-right {*/
            /*-ms-flex-preferred-size: auto;*/
            /*flex-basis: auto;*/
            /*-webkit-box-flex: 0;*/
            /*-ms-flex-positive: 0;*/
            /*flex-grow: 0;*/
            /*-ms-flex-negative: 0;*/
            /*flex-shrink: 0;*/
        /*}*/
    /*}*/
</style>
