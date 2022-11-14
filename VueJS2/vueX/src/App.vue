<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 ">
          <h1>VueX</h1>

        <app-result/>
        <app-other/>
        <br>
        <app-counter/>
      </div>
    </div>
  </div>
</template>

<script>
    import AppCounter from "./components/Counter"
    import AppResult from "./components/Result"
    import AppOther from "./components/Other"

    export default {
        name: 'app',
        data() {
            return {

            }
        },
        components: {
            AppOther,
            AppCounter,
            AppResult
        }
    }
</script>

<style>

</style>

