<template>
    <div id="photography">
        <h2>Background</h2>
        <p>
            I became interested in photography several years ago after seeing the big cameras and lenses at my sister's softball tournaments.
            My parents ended up purchasing me my first DSLR camera - a Canon EOS Digital Rebel XTi with an 18-55mm and 75-300mm lens.
            I took well over 20,000 photos with that camera and it went practically everywhere.
        </p>
        <p>
            After purchasing my Nissan 370z, I wanted to get better quality photos of it than I could take with just my cell phone.
            Upon researching the cameras on the market, I decided on a Canon EOS Rebel T5i with an 18-55mm lens.
            I later purchased a 50mm macro lens to use with it as well.
            Again, I took over 20,000 photos with it. Many of those photos were taken at various car shows and  cruise nights that I
            participated in.
        </p>
        <p>
            In search of better quality and more fine-grained control, I recently purchased my first full-frame DSLR camera -
            a Canon EOS 6D Mark II.
            In the first year of ownership, I have already taken several thousand photos with it and look forward to thousands more!
        </p>
        <h2>Recent Instagram Posts</h2>
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
                                    <div class="name">{{props.feed.user.full_name}}</div>
                                    <div class="username">
                                        <a :href="instagramBaseUrl + props.feed.user.username">
                                            @{{props.feed.user.username}}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="card-footer">
                                <div class="card-footer-item">
                                    <heart-icon class="icon" />
                                    <span class="likes icon-text">{{props.feed.likes.count}}</span>
                                </div>
                                <div class="card-footer-item">
                                    <comment-icon class="icon" />
                                    <span class="comments icon-text">{{props.feed.comments.count}}</span>
                                </div>
                                <div class="card-footer-item">
                                    <a :href="props.feed.link" target="_blank" rel="noopener">
                                        <link-icon class="icon link-icon" />
                                    </a>
                                </div>
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
            instagramBaseUrl: 'https://instagram.com/',
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
                margin: .5em;

                .card-image {
                    margin-bottom: -6px;
                    border-top-left-radius: 16px;
                    border-top-right-radius: 16px;
                    overflow: hidden;

                    img {
                        width: 100%;
                    }
                }

                .card-metadata {
                    border: 1px @lightgray;
                    border-bottom-left-radius: 16px;
                    border-bottom-right-radius: 16px;
                    border-style: none solid solid solid;

                    .user {
                        text-align: center;
                        padding-top: 1.3em;
                        padding-bottom: .3em;

                        .user-info {
                            display: inline-block;
                            padding-right: .5em;

                            .name {
                                color: @darkgray;
                            }

                            .username {
                                a {
                                    color: @darkgray;
                                    transition: 0.3s;
                                    text-decoration: none;

                                    &:hover {
                                        color: @lightblue;
                                    }
                                }
                            }
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
                    padding-top: 1em;

                    .card-footer-item {
                        display: inline-block;
                        width: 33.33333%;

                        .icon {
                            vertical-align: middle;
                            color: @darkgray;
                            padding-right: .5em;
                        }

                        .link-icon {
                            transition: .3s;
                            &:hover {
                                color: @lightblue;
                            }
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
