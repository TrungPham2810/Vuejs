<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <app-user></app-user>
      </div>
    </div>
  </div>
</template>

<script>
import User from "./components/User.vue";
export default {
  name: "trung",
  data() {
    return {
      msg: "Welcome to Your Trung.js App",
    };
  },
  components: {
    appUser: User,
  },
};
</script>

<style>
</style>
