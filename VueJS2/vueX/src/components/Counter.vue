<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 ">
                <button class="btn btn-success" @click="increment">Increase</button>
                <button class="btn btn-danger" @click="decrement">Decrease</button>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'app',
        data() {
            return {

            }
        },
        methods: {
            increment: function () {
                this.$store.state.result++;
            },
            decrement: function () {
                this.$store.state.result--;
            },
        }
    }
</script>



