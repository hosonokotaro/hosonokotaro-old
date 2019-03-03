<template>
  <article>
    <div class="sect--area">
      <h2 v-if="error.statusCode === 404" class="sect--ttl">404 NOT FOUND</h2>
      <h2 v-else class="sect--ttl">ERROR</h2>
      <div class="sect--link">
        <nuxt-link to="/">BACK TO /</nuxt-link>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: ['error'],
}
</script>

<style lang="scss" scoped>
  .sect {
    &--area {
      padding-top: 25px;
    }
    &--ttl {
      +.sect--link {
        padding-top: 15px;
      }
    }
  }
</style>
