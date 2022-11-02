export const productMixin = {
  data () {
    return {
      products:['Iphone', 'Samsung', 'Nokia', 'Motorola', 'Oppo', 'LG', 'Sony', 'Howei', 'Xaomi'],
      filterProduct:'',

    }
  },
  created() {
    console.log('created productMixin!');
  },
  computed: {
    filterProducts() {
      return this.products.filter((element) => {
        return element.match(this.filterProduct);
      })
    }
  }
}
