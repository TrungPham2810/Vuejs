<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button @click="increase">{{ count }}</button>
    <contact></Contact>
    <hello></hello>
   
  </div>
</template>

<script>
var cpt = {
  data: function () {
    return {
      count: 0,
    };
  },
  template:
    '<button v-on:click="increase">You clicked me {{ count }} times.</button>',
  methods: {
    increase: function () {
      this.count += 1;
      console.log(this);
    },
  },
};
import Contact from './Contactxx.vue';

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js",
      count: 0,
    };
  },
  methods: {
    increase: function () {
      this.count += 1;
    },
  },
  components: {
    hello: cpt,
    contact:Contact
  },
};
</script>

