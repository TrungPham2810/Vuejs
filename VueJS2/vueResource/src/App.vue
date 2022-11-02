<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2">
        <h1>Vue Resource</h1>
        <div class="form-group">
          <input type="text" v-model="user.username" class="form-control"/>
        </div>
        <div class="form-group">
          <input type="email" v-model="user.email" class="form-control"/>
        </div>
        <button class="btn btn-success" @click="submit">Submit</button>

        <hr>
        <br>
        <input type="text" v-model="node">
        <br>
        <button class="btn btn-warning" @click="getAllUser">Get All Data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="(user, index) in users" v-bind:key="index">{{user.username}} + {{user.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        user: {
            username:'',
            email:''
        },
        users: [],
        resource: {},
        node:'data'
    }
  },
    methods: {
        submit: function () {
            // console.log(this.user);
            // this.$http.post('', this.user).then(response => {
            //     console.log('success');
            //     console.log(response)
            // }, error => {
            //     console.log('false');
            //     console.log(error)
            // })
            // bthg dùng save có sẵn của this.$resource
            // this.resource.save({}, this.user);

            // nhưng cũng có thể custome cái khác để có thể mở rộng phương thức lưu dữ liệu POST
            // như ở đây createItem vẫn là method POST nhưng sẽ đc lưu vào url user.json
            this.resource.createItem({node:this.node},this.user);
        },
        getAllUser: function () {
            // this.$http.get('').then(response => {
            //    return response.json();
            // }).then(data=> {
            //     const newArr = [];
            //     for(let i in data) {
            //         newArr.push(data[i]);
            //     }
            //     console.log(data);
            //     console.log(newArr);
            //     this.users = newArr;
            // });
            console.log(this.node);
            this.resource.getNoteData({node:this.node}).then(response => {
                   return response.json();
                }).then(data=> {
                    const newArr = [];
                    for(let i in data) {
                        newArr.push(data[i]);
                    }
                    console.log(data);
                    console.log(newArr);
                    this.users = newArr;
                });
        }
    },
    created() {
      const customActions = {
          createItem: {
              method: 'POST', url: '{node}.json',

          },
          getNoteData:{method:'GET'}
      };
      this.resource = this.$resource('{node}.json', {}, customActions);
    }
}
</script>

