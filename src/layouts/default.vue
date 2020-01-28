<template>
  <div>
    <Header />
    <Navi />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Navi from '~/components/Navi.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Navi,
    Footer
  }
}
</script>
