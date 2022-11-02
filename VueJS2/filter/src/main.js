import Vue from 'vue'
import App from './App.vue'


Vue.mixin({
  created() {
    console.log('Global Mixins - create hook');
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
});
