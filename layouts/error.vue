<template>
  <div class="p-project">
    <h1 v-if="error.statusCode === 404">404 NOT FOUND</h1>
    <h1 v-else>ERROR</h1>
    <nuxt-link to="/">BACK TO /</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error'],
}
</script>