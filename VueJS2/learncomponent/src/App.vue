<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-outline-danger" @click="selectComponent = 'appCard'">Card</button>
          <button class="btn btn-outline-danger" @click="selectComponent = 'appAbout'">About</button>
          <button class="btn btn-outline-danger" @click="selectComponent = 'appContact'">Contact</button>
         
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div>
            <p>{{selectComponent}}</p>
          </div>
          <keep-alive>
             <component :is="selectComponent">
              <h2 slot="title">Car {{ title }}</h2>
            <p slot="content">This is my car</p>
            <p>ok di em</p>
          </component>
          </keep-alive>
       
          <!-- <appCard>
            <h2 slot="title">Car {{ title }}</h2>
            <p slot="content">This is my car</p>
            <p>ok di em</p>
          </appCard> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";

export default {
  data() {
    return {
      
      title: "Title App",
      selectComponent:'appCard',
    };
  },
  components: {
    appCard: Card,
    appContact: Contact,
    appAbout: About,
  
  },
};
</script>

<style scoped>
</style>
