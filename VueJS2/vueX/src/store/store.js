import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        result: 0
    },
    getters: {
        tenResult: function (state) {
            return state.result * 10;
        },
        nameResult: function (state) {
            return state.result + ' Name Product.';
        },
    }
});
