<template>
  <div id="app">
    <appHeader :items="items"></appHeader>
    <appNewItem @itemAdded="addItem"></appNewItem>
    <appItemslayout :items="items" @removeItem="removeItem"></appItemslayout>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3 mt-2">
          <div class="alert alert-info">Info: click on a item to delete;</div>
          <div
            class="alert alert-danger"
            role="alert"
            v-if="items.length == maxItems"
          >
            <strong>Ban da nhap het {{ maxItems }} luot trong ngay</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemsLayout from "./components/ItemsLayout.vue";
import NewItem from "./components/NewItem.vue";
import Header from "./components/Header.vue";
export default {
  name: "app",
  data() {
    return {
      items: [
        // 'I love You',
        // 'Hello World',
        // 'Goodbye',
      ],
      maxItems: 10,
    };
  },
  components: {
    appItemslayout: ItemsLayout,
    appNewItem: NewItem,
    appHeader: Header,
  },
  methods: {
    addItem: function (item) {
      if (this.items.length < this.maxItems) {
        if (this.items.includes(item)) {
          alert("Item exist, please enter another value");
        } else {
          this.items.push(item);
        }
      }
    },
    removeItem: function (index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

