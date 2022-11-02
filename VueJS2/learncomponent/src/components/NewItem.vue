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
