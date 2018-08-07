import Vue from 'nativescript-vue'
import './styles.scss'
import router from './router/index'
import store from './store/index'

// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({
    router,
    store,
}).$start();
