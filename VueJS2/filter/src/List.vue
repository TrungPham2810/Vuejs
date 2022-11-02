<template>
  <div class="container">
    <hr>
    <div class="row">
      <div class="col-sm-12 offset-sm-2 mt-5">
        <h3>Filter Product From List Component</h3>
        <input type="text" class="form-control" v-model="filterProduct">
        <div class="card">
          <div class="card-body">
            <ul>
              <li v-for="product in filterProducts" v-bind:key="product">{{product}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    import {productMixin} from "./productMixin.js";

    export default {
      mixins:[productMixin]
    }
</script>

