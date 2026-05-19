<template>
  <div class="container">
    <Nav />
    <Head />
    <Footer />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Head from '../components/Head.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Nav,
    Head,
    Footer
  }
}
</script>