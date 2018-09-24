<template>
  <footer class="l-footer">
    <div class="txt">&copy;{{ years() }} HOSONO KOTARO</div>
  </footer>
</template>

<script>
export default {
  methods: {
    years() {
      let date = new Date();
      return date.getFullYear();
    }
  }
}
</script>


<style scoped>
  .txt {
    text-align: center;
  }
</style>
