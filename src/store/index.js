import Vue from "vue";
import Vuex from "vuex";
import { getInfoData } from "../data/getInfoData";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    info: "",
    showInfo: false,
  },
  getters: {},
  mutations: {
    SET_INFO_DATA(state, info) {
      state.info = getInfoData[info];
    },
    SET_SHOW_INFO(state, show) {
      state.showInfo = show;
    },
  },
  actions: {},
});
