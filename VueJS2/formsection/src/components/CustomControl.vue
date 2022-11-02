<template>
  <div class="col-sm-6 offset-sm-3 mt-5 text-center mb-5">
    <label>Switch</label>
    <div id="on" @click="switched(true)" :class="{active:value}">ON</div>
    <div id="off" @click="switched(false)" :class="{active:!value}">Off</div>
  </div>
</template>

<script>
    export default {
        props:['value'],
        methods: {
            switched(isOn){
                this.$emit('input', isOn)
            }
        }
    }
</script>

<style scoped>
  #on, #off {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid;
    margin-left: 10px;
    background: beige;
  }

  #on.active, #on:hover {
    background: lightgreen;
  }

  #off.active, #off:hover {
    background: lightcoral;
  }


</style>
