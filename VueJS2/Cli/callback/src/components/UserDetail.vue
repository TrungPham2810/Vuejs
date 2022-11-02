<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <p>My Name is {{ reverseName() }}</p>
        <p>My Age is {{ age }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetNameFn()">Reset Name case: call Back</button>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
// props dungf để truyền dữ liệu từ component cha sang component con để có thể dùng dc
export default {
  name: "app",
  props: {
    nameUser: {
      type: String,
    },
    resetNameFn: {
      type: Function,
    },
    ageUser: {
      type: Number
    },
  },
  data(){
      return {
          age: this.ageUser
      }
  },
  methods: {
    reverseName: function () {
      return this.nameUser;
    },
    resetName: function () {
      this.nameUser = "Trung";
      this.$emit("nameWasReset", this.nameUser);
    },
  },
  created() {
    eventBus.$on('changeAgeUserEventBus',  (ageNew) => {
      console.log('changeAgeUserEventBus')
      this.age = ageNew;
        //  this.ageUser = ageNew;
    })
  }
};
</script>

<style scoped>
.container {
  background: rgb(206, 183, 139);
}
</style>

