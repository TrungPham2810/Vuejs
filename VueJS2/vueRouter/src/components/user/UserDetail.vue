<template>
    <div>
        <h1>User Detail </h1>
        <span>User ID {{ id }} </span>
        <hr>
        <!--<button class="btn btn-warning" @click="goEdit">Edit id {{id}}</button>-->

        <router-link :to="link" tag="button" class="btn btn-warning" active-class="active"><a class="nav-link">Edit</a></router-link>
        <!--<router-link :to="`edit/${id}`" tag="button" class="btn btn-warning" active-class="active"><a class="nav-link">Edit id {{id}}</a></router-link>-->

    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                link: {
                    name:'user_edit',
                    params:{id:this.$route.params.id},
                    query:{locate:'vi', browser:'chrome'},
                    hash:'#xxxx'
                }
            }
        },
        methods: {
            goEdit : function () {
                this.$router.push(`edit/${this.id}`)
            }
        },
        watch: {
            $route : function (to, form) {
                this.id = to.params.id;
                console.log(form.params.id);
                console.log(to.params.id);

            }
        },
        beforeRouteEnter: function (to, from, next) {
            if(true) {
                next();
            } else {
                next(false);
            }
        }
    }
</script>