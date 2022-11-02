<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 offset-md-3 mt-5">
        <h1>Animations</h1>
        <hr>
        <hr>
        <button class="btn btn-block btn-primary" @click="show1 = !show1">Show Infomation</button>
        <br>
        <br>
        <select name="" id="" v-model="typeAnimation" class="form-control mb-4">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <transition v-bind:name="typeAnimation">
          <div class="alert alert-success" v-if="show1">
            This is some thing infomation
          </div>
        </transition>
        <br>
        <br>
        <hr>
        <button class="btn btn-block btn-primary" @click="show = !show">Show Infomation {{show}}</button>
        <br>
        <br>

        <transition name="slide" mode="out-in">
          <div class="alert alert-success" v-if="show" key="success">
            This is some thing infomation alert-success
          </div>
        </transition>
<!--        <transition name="fade">-->
<!--          <div class="alert alert-success" v-if="show">-->
<!--            This is some thing infomation-->
<!--          </div>-->
<!--        </transition>-->
<!--        <transition-->
<!--          appear-->
<!--          enter-active-class="animate__animated animate__shakeX"-->
<!--          leave-active-class="animate__animated animate__wobble"-->
<!--        >-->
<!--          <div class="alert alert-warning" v-show="show">-->
<!--            This is some thing infomation-->
<!--          </div>-->
<!--        </transition>-->

        <button class="btn btn-success" @click="status = !status">Add Or Remore</button>
        <br>
        <br>
        <transition
          appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
          @leave = "leave"
          @before-leave="beforeLeave"
        >
          <div style="width: 200px; height: 200px; background: red" v-if="status" key="status"></div>
        </transition>
        <hr>

        <button class="btn btn-primary"
        @click ="selectComponent == 'appSuccessAlert' ? selectComponent = 'appDangerAlert' : selectComponent = 'appSuccessAlert'"
        >Submit</button>
        <br>
        <br>
        <transition>
          <component :is="selectComponent"></component>
        </transition>

        <hr>
        <button class="btn btn-warning" @click="addItem">
          Add Item
        </button>
        <br>
        <br>
        <ul class="list-group">
          <transition-group name="slide">
            <li class="list-group-item"
                style="cursor: pointer"
                v-for="(number, index) in numbers"
                v-bind:key="number"
                @click="removeItem(index)">
              {{number}}
            </li>
          </transition-group>

        </ul>
      </div>
    </div>

  </div>
</template>


<script>
  import DangerAlert from './components/DangerAlert.vue';
  import SuccessAlert from './components/SuccessAlert.vue';
    export default {
        data() {
            return {
                status:false,
                show1:true,
                show:true,
                typeAnimation:'fade',
                eleWidth: 10,
                selectComponent: 'appSuccessAlert',
                numbers: [1,2,3,4,5,6,7]
            }
        },
        components: {
          appDangerAlert: DangerAlert,
          appSuccessAlert: SuccessAlert,
        },
        computed: {

        },
        methods: {
            addItem: function() {
                const pos = Math.floor(Math.random()*this.numbers.length);
                this.numbers.splice(pos,0, this.numbers.length + 1);
            },
            removeItem: function(pos) {
                this.numbers.splice(pos, 1);
            },
            beforeEnter: function(el) {
                console.log('beforeEnter');
                this.eleWidth = 100;
                el.style.width = this.eleWidth + 'px';
            },
            enter: function(el, done) {
                let point =1;
                const interval = setInterval(() => {
                    point ++;
                    el.style.width = (this.eleWidth + point*5) + 'px';
                    if(point > 40) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
                console.log('enter')
            },
            afterEnter: function() {
                console.log('afterEnter')
            },
            enterCancelled: function() {
                console.log('enterCancelled')
            },
            beforeLeave : function(el) {
                console.log('beforeLeave');
                this.eleWidth = 300;
                el.style.width = this.eleWidth + 'px';
            },
            leave : function (el, done) {
                console.log('leave');
                let point =1;
                const interval = setInterval(() => {
                    console.log(this.eleWidth);
                    point ++;
                    el.style.width = (this.eleWidth - point*5) + 'px';
                    if(point > 40 || this.eleWidth <= 0) {
                        this.eleWidth = 100;
                        clearInterval(interval);
                        done()
                    }
                }, 20);
            }
        }
    }
</script>

<style>
  /*enter*/
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity .5s;
  }
  /*leave*/
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave-active {
    transition: opacity .5s;
  }

  /*Slide transition*/
  .slide-enter {

  }
  .slide-enter-active {
    animation: slide-in .2s ease-out forwards;
    position: absolute;
  }

  .slide-leave-to {

  }
  .slide-leave-active {
    animation: slide-out .2s ease-out forwards;
  }

  @keyframes slide-in {
    from{
      transform: translateY(20px);
      opacity: 0;
    }
    to{
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from{
      transform: translateY(0);

    }
    to{
      transform: translateY(20px);
      opacity: 0;
    }
  }
</style>

