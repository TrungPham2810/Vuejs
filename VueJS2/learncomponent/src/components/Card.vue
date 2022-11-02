<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
div {
  border: 1px solid green;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
}
h2 {
  color: red;
}
</style>