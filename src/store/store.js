import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  // for keeping tracking of state
  strict: true,
  plugins: [createPersistedState()],
  state: {
    token: {},
    user: null,
    isUserLoggedIn: false,
    admin: false,
    dark: false,
    grad: "to top right, #5D29A9, #CBC8D0",
    active: {
      one: null,
      two: null,
      three: null
    }
  },
  mutations: {
    setReset(state) {
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    },
    setActive(state, active) {
      if (active === "one") {
        state.active.one = "primary";
        state.active.two = null;
        state.active.three = null;
      } else if (active === "two") {
        state.active.one = null;
        state.active.two = "primary";
        state.active.three = null;
      } else if (active === "three") {
        state.active.one = null;
        state.active.two = null;
        state.active.three = "primary";
      }
    },
    setGrad(state, grad) {
      state.grad = grad;
    },
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    setUser(state, user) {
      state.user = user;
    },
    setAdmin(state, admin) {
      state.admin = admin;
    },
    setDark(state, dark) {
      state.dark = dark;
    }
  },
  actions: {
    setReset({ commit }) {
      commit("setReset");
    },
    setActive({ commit }, active) {
      commit("setActive", active);
    },
    setGrad({ commit }, grad) {
      commit("setGrad", grad);
    },
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    setAdmin({ commit }, admin) {
      commit("setAdmin", admin);
    },
    setDark({ commit }, dark) {
      commit("setDark", dark);
    }
  }
});
