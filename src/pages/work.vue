<template>
  <article>
  </article>
</template>

<script>
<style lang="scss" scoped>

.sect {
  padding-top: 40px;
  &__ttl {
    +.sect__list {
      padding-top: 15px;
    }
  }
  &__list-ttl {
    line-height: 1;
    font-size: 24px;
    font-weight: normal;
    +.sect__list-detail {
      padding-top: 15px;
    }
  }
  &__list-detail {
    line-height: 1;
    font-size: 14px;
    +.sect__list-detail {
      padding-top: 10px;
    }
    +.sect__list-ttl {
      padding-top: 25px;
    }
  }
}

</style>
