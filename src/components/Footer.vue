<template>
  <footer class="footer">
    <div class="footer__copyright">
      &copy;{{ fullYear() }} HOSONO KOTARO
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    fullYear (): number {
      return new Date().getFullYear()
    }
  }
})
</script>>

<style lang="scss" scoped>
.footer {
  margin: 40px 40px 0 40px;
  padding: 20px 0;
  border-top: 1px solid #333;

  &__copyright {
    text-align: center;
    color: #000;
  }
}
</style>
