const state = {
    result: 0
};
const getters = {
    tenResult: function (state) {
        return state.result * 10;
    },
    nameResult: function (state) {
        return state.result + ' Name Product.';
    },
};

const mutations = {
    incrementOp(state) {
        state.result ++;
    },
    decrement(state) {
        state.result--;
    },
};

const actions = {
    increment({commit}) {
        commit('incrementOp')
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}