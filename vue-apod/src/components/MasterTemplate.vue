<template>
  <div id="app">
     <header>
      <nav id="navigation">
        <ul>
          <li
            v-for="(page, index) in ContentData.pages"
            :key="index"
            :class="{ active: index == CurrentPageIndex }"
          >
            <a href="#" v-on:click="CurrentPageIndex = index">{{
              page.metaData.name
            }}</a>
          </li>
        </ul>
      </nav>
    </header>
   <main>
      <article>
        <!-- <h1 v-text="currentPage(CurrentPageIndex).content.header"></h1> -->
        <!-- <input v-model="currentPage(CurrentPageIndex).content.header" type="text" /> -->
        <div
          v-if="
            currentPage(CurrentPageIndex).metaData.template == 'page'
          "
        >
          <img
            class="page-image"
            :src="currentPage(CurrentPageIndex).content.image"
            :alt="currentPage(CurrentPageIndex).content.header"
          />
          <div class="text" v-html="currentPage(CurrentPageIndex).content.text">
            Text content Here
          </div>
        </div>
        <PhotosTemplate
          v-if="currentPage(CurrentPageIndex).metaData.template == 'APOD'"
        />
      </article>
    </main>
    <FooterTemplate/>
  </div>
</template>
<script>
import ContentData from "../data/content-data"
import axios from "axios";

const ApiKey = "7Cw7Ej1pmAPbERm7AlvlirfNCtJiftCI0rEwHyZm";

import FooterTemplate from "./FooterTemplate.vue";
import PhotosTemplate from "./PhotosTemplate.vue";

export default {
  name: "MasterTemplate",
  components: { FooterTemplate, PhotosTemplate },
  data() {
    return {
      data: [],
      ContentData,
      CurrentPageIndex: 0
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
  },
  methods: {
    currentPage(CurrentPageIndex) {
      return ContentData.pages[CurrentPageIndex];
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  padding: 1vw;
  font-size: 4vw;
  line-height: 1.4;
  background-color: #888888;
}
/* BTN */
button {
  height: 75px;
	display:inline-block;
	background-color:transparent;
	border-radius:5px;
	border:2px solid #707070;
	cursor:pointer;
	color:#ffffff;
	font-size:28px;
	padding:17px 31px;
	text-decoration:none;
	text-shadow:0px 0px 0px #ffffff;
    
    
}
button:hover {
	background-color:transparent;
    box-shadow: 1px 1px 2px 0px #7a7a7a;
    border:2px solid #c9c9c9;
}
button:active {
	position:relative;
	top:1px;
}/* BTN */


article.newsItem {
  padding: 2rem;
  background-color: #ffccff;
}
article.newsItem + article.newsItem {
  margin-top: 1rem;
}
article.newsItem h3 {
  margin: 0;
  font-size: 2rem;
}
.newsItem .date {
  font-style: italic;
}
.newsItem .teaser {
  margin: 1rem 0;
  font-weight: 800;
}
#navigation ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
#navigation ul li a {
  display: block;
  display:inline-block;
	background-color:transparent;
	border-radius:5px;
	border:2px solid #707070;
	cursor:pointer;
	color:#ffffff;
	font-size:28px;
	padding:17px 31px;
	text-decoration:none;
	text-shadow:0px 0px 0px #ffffff;
}

#navigation ul li a:hover {
background-color:transparent;
    box-shadow: 1px 1px 2px 0px #7a7a7a;
    border:2px solid #c9c9c9;
}
#navigation ul li.active a {
  background-color:transparent;
    box-shadow: 1px 1px 2px 0px #7a7a7a;
    border:2px solid #c9c9c9;
}
footer {
  margin-top: 2rem;
  border-top: 2px solid #9944ff;
}
.text {
  margin: 2rem 0;
}
.text p:last-child {
  margin-bottom: 0;
}
.text p:first-child {
  margin-top: 0;
}
main,
nav,
footer {
  margin: 0 auto;
  max-width: 1600px;
}
@media (min-width: 640px) {
  body {
    font-size: 1rem;
  }
  #navigation ul {
    display: flex;
  }
  #navigation ul li {
    width: 31%;
  }
  #navigation ul li + li {
    margin-left: 3.5%;
  }
}
@media (min-width: 768px) {
  .newsItem .text-wrapper {
    display: flex;
  }
  .newsItem .image-wrapper {
    width: 50%;
  }
  .newsItem .text {
    width: 50%;
    padding: 0 2rem;
    margin: 0;
  }
  .newsItem .text p:first-child {
    margin-top: 0;
  }
  #root > .text {
    column-count: 2;
  }
}
@media (min-width: 1024px) {
  #root > .text {
    column-count: 3;
  }
}
</style>
