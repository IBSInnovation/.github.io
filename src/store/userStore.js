import { createApp } from "vue";
import Vuex from "vuex";
import App from "../App.vue";

createApp(App).use(Vuex);
export default new Vuex.Store({
  state: {
    user: "",
    patients: [],
    gender: null,
    age: null,
  },
  getters: {
    getUser() {
      return JSON.parse(localStorage.getItem("user"));
    },
    isLogedIn() {
      return localStorage.getItem("user") !== null;
    },
    getPatientGender(state) {
      return state.gender;
    },
    getPatientAge(state) {
      return state.age;
    },
    getPatientList(state) {
      return state.patients;
    },
  },
  mutations: {
    changeProfilePicture(state, photoUrl) {
      state.user.photoUrl = photoUrl;
    },
    setPatientGender(state, gender) {
      state.gender = gender;
    },
    setPatientAge(state, age) {
      state.age = age;
    },
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    setPatientList(state, patients) {
      state.patients = patients;
    },
  },
  actions: {
    logOutUser(state) {
      state.user = "";
      localStorage.removeItem("user");
      indexedDB.deleteDatabase("firebaseLocalStorageDb");
      state.patientEmail = "";
      localStorage.removeItem("patientEmail");
    },
    deletePatient(state) {
      state.patientEmail = "";
      localStorage.removeItem("patientEmail");
    },
  },
});
