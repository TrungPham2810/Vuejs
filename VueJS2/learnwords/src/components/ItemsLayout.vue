<template>
  <div class="container">
    <div class="row">
        <appItems v-for="(item, index) in items" v-bind:data="item" v-bind:key="item" @click.native="removeItems(index)">{{item}}</appItems>
    </div>
   
  </div>
</template>

<script>
import Items from './Items.vue';
export default {
    props:['items'],
    components: {
        appItems:Items
    },
    methods: {
        removeItems: function(index) {
            this.$emit('removeItem', index)
        }
    }
}
</script>

