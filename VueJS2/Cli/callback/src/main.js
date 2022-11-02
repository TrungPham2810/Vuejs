import Vue from 'vue'
import App from './App.vue'
import Trung from './Trung.vue'

export const eventBus = new Vue({
  methods:{
    changeAge: function(age) {
      this.$emit('changeAgeUserEventBus', age)
    }
  }
});
// new Vue({
//   el: '#trung',
//   render: h => h(Trung)
// })

new Vue({
  el: '#app',
  render: h => h(App)
})