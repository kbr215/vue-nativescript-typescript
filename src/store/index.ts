import Vue from 'nativescript-vue';
import Vuex, {Store} from 'vuex';
import {Counter} from './modules/counter'

Vue.use(Vuex);

const store = new Store({
    modules: {
        Counter
    }
})

export default store