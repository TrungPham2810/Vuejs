<template>
    <div>
        <h1>User Page</h1>
        <hr>
        <button type="button" class="btn btn-danger" @click="backHome">Back To Home</button>
    </div>
</template>

<script>
    export default {
        methods: {
            backHome: function () {
                this.$router.push('/')
            }
        }
    }
</script>