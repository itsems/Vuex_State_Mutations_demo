<template>
  <div id="app">
    <p>isLoading: {{ifLoading}}</p>
    <button @click="Loaded();add(2)">Reverse</button>
    <p>Button Clicked Times: {{Times}}</p>
    <p>{{myName}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import { mapState } from "vuex";

export default {
  name: "app",
  data() {
    return {
      name: "emma"
    };
  },
  computed: {
    // singleState:
    // ifLoading() {
    //   return this.$store.state.isLoading;
    // },
    // Times() {
    //   return this.$store.state.clickedTimes;
    // }

    // mapState:
    // 陣列寫法
    // ...mapState(["isLoading", "clickedTimes"])
    // 物件寫法
    ...mapState({
      ifLoading: state => state.isLoading,
      Times: "clickedTimes",
      myName(state) {
        return state.myName + this.name;
      }
    })
  },
  methods: {
    // commit函式
    // reverse() {
    //   this.$store.commit("Loaded");
    // },
    // add() {
    //   this.$store.commit({ type: "addTimes", key: 2 });
    // }
    // mapMutations
    ...mapMutations(["Loaded"]),
    ...mapMutations({
      add: "addTimes"
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
