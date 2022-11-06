<template>
    <div>
        <h1>User Edit {{id}}</h1>

        <p>Info</p>
        <ul>
            <li>Locate: {{$route.query.locate}}</li>
            <li>Browser: {{$route.query.browser}}</li>
        </ul>
        <!--<button class="btn btn-warning" @click="goEdit">Edit id {{id}}</button>-->
        <router-link :to="`/user/edit/2`" tag="button" class="btn btn-warning" active-class="active"><a class="nav-link">Edit id 2</a></router-link>
        <hr>
        <button class="btn btn-primary" @click="status = true">Sonething</button>
        <div style="height:700px"></div>

        <div id="xxxx">xxxxxx</div>
        <div style="height:700px"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                status:false
            }
        },
        methods: {
            goEdit : function () {
                this.$router.go();
            }
        },
        watch: {
            $route : function (to, form) {
                this.id = to.params.id;
            }
        },
        beforeRouteLeave: function (to, form, next) {
            if(this.status) {
                next();
            } else {
                if(confirm('Are you sure? Any data will not save.')) {
                    next();
                } else {
                    return false;
                }
            }
        }
    }
</script>