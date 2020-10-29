<template>
  <div id="photos">
    <!-- <img v-for="(item, index) in data" :key="index" :src="item.thumbnailUrl" /> -->
    <h1 v-text="data.title" />
    <div id="wrapper">
      <div class="left">
        <button v-on:click="shown = !shown">Description</button>
        <p v-show="shown" v-text="data.explanation" />
      </div>
      <div class="img-container">
        <img :src="data.url" />
        <p class="copyright"> &copy; {{ data.copyright }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const ApiKey = "7Cw7Ej1pmAPbERm7AlvlirfNCtJiftCI0rEwHyZm";
//const nasaLink = "https://api.nasa.gov/planetary/apod?api_key=";

export default {
  name: "PhotosTemplate",
  data() {
    return {
      data: [],
      shown: false
    };
  },
  mounted() {
    //axios.get("http://jsonplaceholder.typicode.com/photos/")
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${ApiKey}`)
      .then(response => {
        //this.data = [...response.data].slice(0, 25);
        this.data = response.data;
        console.log(this.data);
      })
      .catch(err => {
        console.log("Error: " + err);
      });
  }
};
</script>

<style scoped>
#wrapper {
  background-color: #888888;
  display: flex;
  max-height: 700px;
  margin: 0 auto;
  padding: 0;
}
.left {
  margin: 0 auto;
  min-width: 215px;
}
button {
  margin: 0 auto;
}

.img-container {
  margin: 0 auto;
  max-width: 80%;
  max-height: 100%;
}

img {
  max-width: 100%;
  max-height: 100%;
}

h1 {
  
  font-size: 3rem;
}

p {
  color: #ffffff;
  max-width: 700px;
  margin: 10px 30px;
  text-align: left;
  max-height: 450px;
  overflow: auto;
}
</style>
