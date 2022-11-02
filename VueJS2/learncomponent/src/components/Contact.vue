<template>
  <div>
    <h1>This is contact Page</h1>
    <button @click="count++">{{count}}</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            count:0
        }
    },
    created() {
          console.log('created')
    },
    destroyed() {
        console.log('destroyed')
    },
    deactivated() {
         console.log('deactivated')
    },
    activated() {
         console.log('activated')
    },
};
</script>
