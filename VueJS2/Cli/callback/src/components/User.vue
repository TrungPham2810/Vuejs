<template>
    <div>
        <div class="row">
            <div class="col-sm-12 text-center">
                <p>I'm {{name}} and {{age}} year olds</p>
                <button @click="changeName" >Change My Name</button>
            </div>

        </div>
        <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-6">
                <!-- truyền prop 'name' có value bằng với thuộc tính name của component cha  -->
            <userDetail 
            :nameUser="name"
            :ageUser="age"
            :resetNameFn ="resetNameFn"
             @nameWasReset="name = $event"
             >
             </userDetail> 
   
        </div>
        <div class="col-xs-12 col-sm-6">
             <userEdit
               :ageUser="age"
               @changeAgeUser= "age = $event"
             ></userEdit>
        </div>
      </div>
      
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'
export default {
  name: 'app',
  data () {
    return {
      name: 'Trung',
      age: 18
    }
  },
  customOption: 'foo',
  methods:  {
    changeName: function() {
      // console.log(this.$options);
      //  console.log(this.$options.customOption);
        this.name = 'Hang'
    }, 
    resetNameFn: function() {
      this.name = 'Trung';
    }
  },
  components: {
    userDetail:UserDetail,
    userEdit : UserEdit
  }
}
</script>

<style scoped>
    .container {
        background: rgb(139, 206, 139);
    }
</style>
