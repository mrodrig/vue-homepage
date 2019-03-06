import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

const debug = process.env.NODE_ENV === 'production' ? {} : {
    // Enable analytics logging for development, but don't actually send info.
    // from: https://github.com/MatteoGabriele/vue-analytics/issues/15
    enabled: true,
    trace: true,
    sendHitTask: false // Do not actually send analytics events
};

// Configure Google Analytics
Vue.use(VueAnalytics, {
    id: 'UA-135518236-1',
    router: router,
    trackEvent: true,
    autoTracking: {
        exception: true
    },
    debug: debug
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

Vue.mixin({
    methods: {}
});
