<template>
    <div id="photography">
        <vue-instagram :token="accessToken" :count="5" media-type="image">
            <template slot="feeds" slot-scope="props">
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-square">
                                <img :src="props.feed.images.standard_resolution.url" alt="Image">
                            </figure>
                        </div>

                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image user-picture">
                                        <img :src="props.feed.user.profile_picture" alt="Image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">{{props.feed.user.full_name}}</p>
                                    <p class="subtitle is-6">@ {{props.feed.user.username}}</p>
                                </div>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <p class="card-footer-item"><i class="fa fa-heart" /> &nbsp; {{props.feed.likes.count}}</p>
                            <p class="card-footer-item"><i class="fa fa-commenting" /> &nbsp; {{props.feed.comments.count}}</p>
                            <a :href="props.feed.link" target="_blank" class="card-footer-item"><i class="fa fa-external-link" /> &nbsp; Link</a>
                        </footer>
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
import VueInstagram from 'vue-instagram';

export default {
    name: 'photography',
    components: {
        VueInstagram
    },
    data: function () {
        return {
            'accessToken': '2041962474.2c405b3.21c0e46556ca405dabbff6b287e8482b'
        };
    }
};
</script>

<style lang="less">
    .column {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 33.33333%;
    }
    .card {
        background-color: #fff;
        -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
        box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
        color: #4a4a4a;
        max-width: 100%;
        position: relative;
    }
    .card-image {
        display: block;
        position: relative;
    }
    .image {
        display: block;
        position: relative;

        &.is-square {
            padding-top: 100%;
        }

        img {
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            /*height: 100%;*/
            width: 100%;
            display: block;
            max-width: 100%;
        }
    }
    .card-content {
        padding: 1.5rem;
    }
    .card .media:not(:last-child) {
        margin-bottom: .75rem;
    }
    .media {
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        text-align: left;

        .media-left {
            margin-right: 1rem;

            .user-picture {
                height: 40px;
                width: 40px;
            }
        }

        .media-left, .media-right {
            -ms-flex-preferred-size: auto;
            flex-basis: auto;
            -webkit-box-flex: 0;
            -ms-flex-positive: 0;
            flex-grow: 0;
            -ms-flex-negative: 0;
            flex-shrink: 0;
        }
    }
</style>
