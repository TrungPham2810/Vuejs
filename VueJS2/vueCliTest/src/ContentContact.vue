<template>
  <div>
    <p>Address:{{ address }}</p>
    <button @click="changePhone">Show My Phone</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      address: "Me tri - Nam tu liem- Ha noi",
    };
  },
  methods: {
    changePhone: function () {
      this.address = "0123456789";
    },
  },
};
</script>

<style scoped>
  div {
    border: 1px solid blue;
  
  }
  
</style>