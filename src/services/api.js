import 'es6-promise/auto';      // IE promise polyfill for use with axios
import axios from 'axios';

export default class Api {

    /**
     * Gets basic account information from Instagram
     *
     * @return {Promise}
     */
    static getInstagramAccountInfo(token) {
        return axios.get('https://api.instagram.com/v1/users/self/?access_token=' + token);
    }
}
