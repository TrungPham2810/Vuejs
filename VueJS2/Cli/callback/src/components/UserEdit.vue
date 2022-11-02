<template>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
             <p>My Age is {{age}}</p>
        <button @click="changeAge">Change Age</button>
        <button @click="changeAgeEventBus">Change Age Direction tới component cùng cấp ko qua parent</button>
        </div>
    
      </div>
    </div>
</template>

<script>
import {eventBus} from '../main.js';
export default {
  name: 'app',
  props: {
    ageUser:Number
  },
   data(){
      return {
          age: this.ageUser
      }
  },
  methods: {
    changeAge : function() {
      this.age = 20;
      this.$emit('changeAgeUser', this.age)
     
    },
    changeAgeEventBus : function() {
      this.age = 25;
     
      eventBus.changeAge(this.age);
    }
  }
}
</script>

<style scoped>
    .container {
        background: rgb(139, 206, 195);
    }
</style>