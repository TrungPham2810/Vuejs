<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 ">
                <p>This is result: {{tenResult}}</p>
                <p>This is result: {{nameResult}}</p>
            </div>
        </div>
    </div>
</template>

<script>

    import  {mapGetters} from "vuex"
    export default {
        // computed: {
        //     tenResult() {
        //         return this.$store.getters.tenResult;
        //     },
        //     nameResult() {
        //         return this.$store.getters.nameResult;
        //     }
        // }
        // dấu ... là thể hiện cú phám của ES6 có nghĩa là thêm những dữ liệu này vào trong mảng computed
        computed: {
            ...mapGetters(['tenResult', 'nameResult'])
        }

    }
</script>



