<template>
  <footer>
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
  footer {
    padding: 20px 0;
    border-top: 1px solid #333;
  }
  .txt {
    text-align: center;
    color: #000;
  }
</style>
