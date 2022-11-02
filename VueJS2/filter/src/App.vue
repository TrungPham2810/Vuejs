<template>
  <div class="container">
      <div class="row">
        <div class="col-sm-12 offset-sm-2 mt-5">
          <h1>Filter & Mixins</h1>
          <span>{{text | lowerCase | upCase}}</span>
        </div>
      </div>
    <hr>
    <div class="row">
      <div class="col-sm-12 offset-sm-2 mt-5">
        <h3>Filter Product</h3>
        <button class="btn btn-success mb-2" @click="products.push('Aloooo')">Add New Item</button>
        <input type="text" class="form-control mb-3" v-model="filterProduct">
        <div class="card">
          <div class="card-body">
            <ul>
              <li v-for="product in filterProducts" v-bind:key="product">{{product}}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-sm-12 offset-sm-2 mt-5">
        <h3>Filter Name</h3>
        <input type="text" class="form-control mb-3" v-model="filterName">
        <div class="card">
          <div class="card-body">
            <ul>
              <li v-for="name in filterNames" v-bind:key="name">{{name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <app-list></app-list>
  </div>
</template>


<script>
    import {productMixin} from "./productMixin.js";
    import List from './List.vue';
    export default {
        name: 'app',
        data () {
            return {
                text: 'Hello Everyone, Vuejs',
                names:['Trung', 'Hien', 'Nokia', 'Motorola', 'Oppo', 'LG', 'Sony'],
                filterName:'',

            }
        },
        created() {
          console.log('created !');
        },
        mixins:[productMixin],
        filters: {
            lowerCase(text) {
                text = text.toString();
                return text.toLowerCase();
            },
            upCase(text) {
                text = text.toString();
                return text.toUpperCase();
            }
        },
        computed: {
            filterNames() {
                return this.names.filter((element) => {
                    return element.match(this.filterName);
                })
            }
        },
        components: {
            appList : List
        }
    }
</script>

