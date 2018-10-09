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
    padding: 1rem;
    background: #333;
    color: #fff;
  }
  .txt {
    text-align: center;
    color: #999;
  }
</style>
