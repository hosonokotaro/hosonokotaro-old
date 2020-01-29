<template>
  <article>
    <SectInner>
      <h2 v-if="error.statusCode === 404" class="sect__ttl">
        404 NOT FOUND
      </h2>
      <h2 v-else class="sect__ttl">
        ERROR
      </h2>
      <div class="sect__link">
        <nuxt-link to="/">
          BACK TO /
        </nuxt-link>
      </div>
    </SectInner>
  </article>
</template>

<script lang="ts">
import SectInner from '~/components/Sect.vue'

export default {
  components: {
    SectInner
  },
  props: {
    error: {
      type: Object,
      default: () => ({
        message: '',
        path: '',
        statusCode: 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sect__link {
  padding-top: 15px;
}
</style>
