import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'


Vue.use(VueResource);
Vue.http.options.root = 'https://vue-ytb-form-f4678-default-rtdb.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  if(request.method == 'POST') {
    // request.method = 'PUT'; // đổi sang method PUT để thay thế data khi method là POST
  }
  next();
});

new Vue({
  el: '#app',
  render: h => h(App)
});
