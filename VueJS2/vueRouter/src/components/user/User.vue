<template>

    <div>
        <h1>User Management</h1>

        <button type="button" class="btn btn-danger" @click="backHome">Back To Home</button>
        <!--<button type="button" class="btn btn-warning" @click="goAdminDetail">Go To Admin Profile</button>-->
        <hr>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        methods: {
            backHome: function () {
                this.$router.push({name:'home_page'})
            },
            // goAdminDetail: function () {
            //     this.$router.push({name: 'user_detail', params: {id: 1}})
            // }
        }
    }
</script>