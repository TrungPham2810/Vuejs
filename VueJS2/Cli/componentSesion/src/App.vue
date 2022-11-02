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
  name: "app",
  components: {
    appUser: User,
  },
};
</script>

<style>
</style>
