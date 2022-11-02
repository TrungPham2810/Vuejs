<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <p>My Name is {{ reverseName() }}</p>

        <button @click="resetName">Reset Name</button>
      </div>
    </div>
  </div>
</template>

<script>
// props dungf để truyền dữ liệu từ component cha sang component con để có thể dùng dc
export default {
  name: "app",
  props: {
    nameUser: {
      type: Number,
      required: true,
       default: 'ok di em',
      validator: function (value) {
        return value.length > 100
      }
     
    },
  },

  methods: {
    reverseName: function () {
      return this.nameUser;
    },
    resetName : function () {
         this.nameUser = 'Trung';
         this.$emit('nameWasReset', this.nameUser)
    }
  },
};
</script>

<style scoped>
.container {
  background: rgb(206, 183, 139);
}
</style>

