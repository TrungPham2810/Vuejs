<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 ">
                <p>This is result: {{result}}</p>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        computed: {
            result(){
                return this.$store.state.result;
            }
        }
    }
</script>



