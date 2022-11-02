<template>
  <div>
    <h1>{{ msg }}</h1>
    <contact-content></contact-content>
     <contact-content></contact-content>
      <contact-content></contact-content>
  </div>
</template>

<script>
import ContentContact from "./ContentContact.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "from contact page",
    };
  },
  components: {
    "contact-content": ContentContact,
  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>