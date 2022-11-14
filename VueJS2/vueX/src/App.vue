<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 ">
        <transition name="slide">
          <router-view/>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>


    export default {
        name: 'app',
        data() {
            return {}
        }
    }
</script>

<style>
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
      transform: translateX(20px);
      opacity: 0;
    }
    to{
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    from{
      transform: translateX(0);

    }
    to{
      transform: translateX(20px);
      opacity: 0;
    }
  }
</style>

