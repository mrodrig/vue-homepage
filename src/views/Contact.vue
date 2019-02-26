<template>
    <div id="contact">
        <div class="row">
            <p>
                Prefer to use your email client? Click to send an email:
                <a :href="mailTo">{{destinationEmailAddress}}</a>.
            </p>
        </div>

        <form :action="destination" method="post">
            <div>
                <input id="from" v-model="from" type="hidden" hidden name="from">
                <input id="to" v-model="destinationEmailAddress" type="hidden" hidden name="to">
            </div>
            <div class="row">
                <input id="name" v-model="name" type="text" name="name" placeholder="Name" required>
            </div>
            <div class="row">
                <input id="reply-to" v-model="replyTo" type="email" name="h:Reply-To" placeholder="Email" required>
            </div>
            <div class="row">
                <input id="subject" v-model="subject" type="text" name="subject" placeholder="Subject" autocomplete="off" required>
            </div>
            <div class="row">
                <textarea id="message" v-model="body" name="text" placeholder="Message" rows="5" required />
            </div>
            <div id="button-wrap">
                <input type="submit" class="button" value="Send Message">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'contact',
    props: {},
    data () {
        return {
            sendFromEmailAddress: 'contact@michaelrodrigues.com',
            name: '',
            replyTo: '',
            subject: '',
            body: '',
            destinationEmailAddress: 'rodrigues.mi@husky.neu.edu',
            username: 'api',
            key: 'key-90e27fb32160148dc1cc3890ef601355',
            api: 'api.mailgun.net/v3/michaelrodrigues.com/messages',
        };
    },
    computed: {
        from: function () {
            return (this.name || '') + ' <' + this.sendFromEmailAddress + '>';
        },
        destination: function () {
            return 'https://' + this.username + ':' + this.key + '@' + this.api;
        },
        mailTo: function () {
            return 'mailto: ' + this.destinationEmailAddress
                + '?subject=' + this.subject
                + '&body=' + this.body;
        }
    }
};
</script>

<style lang="less">
#contact {
    padding: 2em 0;

    /*
     * Button centering styles from:
     *   https://stackoverflow.com/questions/7560832/how-to-center-a-button-within-a-div
     */
    #button-wrap {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .row {
        text-align: center;
    }
    input[type=submit] {
        color: @white;
        -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        background-color: @darkgray;
        border-radius: 5px;
        border: 0;
        cursor: pointer;
        line-height: 2.75em;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        letter-spacing: -0.025em;
        padding: .5em 1.5em;
        font-size: .9em;

        &:hover {
            background-color: @lightblue;
        }
    }
    input:not([type=submit]), textarea {
        margin-bottom: .5em;
        padding: .375rem .75rem;
        width: 50%;
        font-size: 1rem;
        line-height: 2em;
        color: @darkgray;
        background-color: @white;
        background-clip: padding-box;
        border: 1px solid @lightgray;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        overflow: visible;

        &:focus {
            outline: none;
            border:1px solid @lightblue;
            box-shadow: 0 0 10px @lightgray;
        }
    }
}
</style>
