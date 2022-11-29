<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 ">
                <button class="btn btn-success" @click="increment">Increase xx</button>
                <button class="btn btn-danger" @click="decrement">Decrease xx</button>

                <hr>
                <input type="text" v-model="value">
                <p>Text test: {{value}}</p>
            </div>
        </div>
    </div>
</template>

<script>

    import  {mapMutations} from 'vuex';
    import  {mapActions} from 'vuex';
    export default {
        name: 'app',
        data() {
            return {

            }
        },
        computed: {
          value: {
              get() {
                  return this.$store.getters.value
              },
              set(value) {
                  this.$store.dispatch("updateValue", value)
              }
          }
        },
        methods: {
            // increment: function () {
            //     // this.$store.state.result++;
            //     this.$store.commit('incrementOp');
            // },
            // decrement: function () {
            //     this.$store.state.result--;
            // },
            ...mapMutations([
                'decrement'
            ]),
            ...mapActions([
                'increment', 'updateValue'
            ])

        }
    }
</script>



