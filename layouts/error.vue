<template>
  <article>
    <div class="sect">
      <h2 v-if="error.statusCode === 404" class="sect__ttl">404 NOT FOUND</h2>
      <h2 v-else class="sect__ttl">ERROR</h2>
      <div class="sect__link">
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
.sect__link {
  padding-top: 15px;
}
</style>
