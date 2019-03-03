import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

Vue.mixin({
    methods: {
        // From: https://davidwalsh.name/javascript-debounce-function
        debounce: function debounce(func, wait, immediate) {
            let timeout;
            return function () {
                let context = this, args = arguments,
                    later = function () {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    },
                    callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }
    }
});
