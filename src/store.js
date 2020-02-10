import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLoading: false,
        clickedTimes: 0,
        myName: 'My Name is '
    },
    mutations: {
        Loaded(state) {
            state.isLoading = !state.isLoading;
        },
        addTimes(state, payload) {
            state.clickedTimes = state.clickedTimes + payload;
        }

    }
})

export default store;