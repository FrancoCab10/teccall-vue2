import Vue from "vue";
import Vuex from "vuex";
import courses from "./modules/courses";
import students from "./modules/students";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    courses,
    students
  }
});
