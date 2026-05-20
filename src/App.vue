<template>
  <router-view />
</template>


<script>
import Head from './components/Head.vue';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import Catalog from './pages/Catalog.vue';
export default {
  components: { Nav, Head, Footer, Catalog },
}
</script>


<style lang="scss">
$maincolor: #fff;
$textColor: #000;
$additionColor: #FFC800;
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&family=Montserrat:wght@400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f8f5ef;
  color: $textColor;
 font-family:
    "Caprasimo",
    "Montserrat",
    Arial,
    sans-serif;
  font-weight: 400;
  font-size: 1em;
  color: $textColor;
  line-height: 1.6;
 
}

a {
  color: #2C2825;
  text-decoration: none;

  &:hover {
    color: #bfc21a;
  } 
}
.container {
  @media(min-width: 1500px) {
    width: 1300px;
    margin: 0 auto;
  }
   @media(max-width: 1500px) and  (min-width: 900px){
    width: 90%;
    margin: 0 auto;
  }
   @media(max-width: 900px) {
    width: 95%;
    margin: 0 15px;
  }
  @media (max-width: 480px) {
  .container {
    width: 100%;
    padding: 0 10px;
  }
}
  
}

</style>



