<template>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
            {{msg}}
        </div>
    
      </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Component User Edit'
    }
  },
}
</script>

<style scoped>
    .container {
        background: rgb(139, 206, 195);
    }
</style>