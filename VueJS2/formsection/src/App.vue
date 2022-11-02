<template>
  <div class="container">

    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 offset-sm-2">
          <h1 class="text-center">Form section for sky albert</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="text" id="email"
                   v-model.lazy.trim="userData.email"
                   class="form-control">
            <p>{{userData.email}}</p>
          </div>
          <div class="form-group">
            <label for="password">PassWord</label>
            <input type="text" id="password" class="form-control" v-model="userData.password">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" class="form-control" v-model="userData.age">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 offset-sm-2">
          <label for="message">Message</label>
          <textarea  id="message" class="form-control" rows="5" v-model="message"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 offset-sm-2 form-group">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" value="Send Mail" id="sendmail" v-model="sendEmail">
            <label class="form-check-label" for="sendmail">Send Mail</label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" value="Send Info Mail" id="send-info-mail" v-model="sendEmail">
            <label class="form-check-label" for="send-info-mail">Send InfoMail</label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" value="Cut Mail" id="cutmail" v-model="sendEmail">
            <label class="form-check-label" for="cutmail">Cut Mail</label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 offset-sm-2 form-group">
          <div class="form-check">
            <input type="radio" class="form-check-input" id="male" value="Male" v-model="gender">
            <label class="form-check-label" for="male">Male</label>
          </div>
          <div class="form-check">
            <input type="radio" class="form-check-input" id="female" value="Female" v-model="gender">
            <label class="form-check-label" for="female">Female</label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 offset-sm-2">
          <div class="form-group">
            <label for="priority">Priority</label>
            <select class="form-control" id="priority" v-model="priorityValue">
              <option v-for="(option, index) in priority" v-bind:key="option" v-bind:data="option">{{option}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <appCustomControl v-model="dataSwitch"></appCustomControl>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 offset-sm-2">
          <button class="btn btn-primary" @click.prevent="submited">Submit</button>
        </div>
      </div>

      <hr>
      <div class="row" v-if="isSubmit">
        <div class="col-xs-12 col-sm-8 offset-sm-2">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4>Your Data</h4>
            </div>
            <div class="panel-body">
              <p>Mail:{{userData.email}}</p>
              <p>Password:{{userData.password}}</p>
              <p>Age:{{userData.age}}</p>
              <p style="white-space: pre">Messages: {{message}}</p>
              <p>Send Mail?</p>
              <ul>
                <li v-for="(item,index) in sendEmail"  v-bind:data="item" v-bind:key="item">{{item}}</li>
              </ul>

              <p>Gender:{{gender}}</p>
              <p>Priority:{{priorityValue}}</p>
              <p>Switch:{{dataSwitch}}</p>
              <p>Is Submit:{{isSubmit}}</p>
            </div>
          </div>
        </div>
      </div>
    </form>

    <hr>
    <h1>Hoc phần Direction </h1>
    <p v-text="'ok di em'"></p>
    <span v-highlight="'green'">xxxxxx</span>
    <span v-highlight:test.delay="'green'">xxxxxx</span>
    <span v-local-custom:test.delay.blink="{mainColor:'red', secondColor:'yellow', delay:500}">test custom</span>
  </div>
</template>


<script>
  import CustomControl from "./components/CustomControl";
export default {
    directives: {
        'local-custom' : {
            bind(el,binding,vnode) {
                var delay = 0;
                if(binding.modifiers['delay']) {
                    delay = 3000;
                }
                if(binding.modifiers['blink']) {
                    let mainColor = binding.value.mainColor;
                    let secondColor = binding.value.secondColor;
                    let currentColor = mainColor;
                    setTimeout(() => {
                        setInterval(() => {
                            currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                            if(binding.arg == 'test') {
                                el.style.backgroundColor = currentColor;
                            } else {
                                el.style.color = currentColor;
                            }
                        }, binding.value.delay)

                    }, delay);
                } else {
                    setTimeout(() => {
                        if(binding.arg == 'test') {
                            el.style.backgroundColor = binding.value.mainColor;
                        } else {
                            el.style.color = binding.value.mainColor;
                        }
                    }, delay);
                }

            }
        }
    },
  name: 'app',
  data () {
    return {
        userData: {
            email:'',
            password:'',
            age:0
        },
        message:'Please enter some thing',
        sendEmail:[],
        gender:'Male',
        priority: ['High', 'Medium', 'Low'],
        priorityValue:'Low',
        dataSwitch:true,
        isSubmit:false
    }
  },
    methods: {
        submited: function () {
            this.isSubmit = true;
        }
    },
    components:{
      appCustomControl:CustomControl
    }
}
</script>

