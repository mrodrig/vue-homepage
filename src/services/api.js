import 'es6-promise/auto';      // IE promise polyfill for use with axios
import axios from 'axios';

export default class Api {

    /**
     * Sends an email via the Mailgun API
     *
     * @return {Promise}
     */
    static sendEmail(apiUrl, email) {
        return axios.post(apiUrl, email);
    }
}
