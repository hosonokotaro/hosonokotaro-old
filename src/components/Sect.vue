<template>
  <section class="sect">
    <div class="sect__inner">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sect {
  position: relative;
  margin: 0 auto;
  padding: 40px 40px 0 40px;
  +.sect {
    &::before {
      display: block;
      width: 100%;
      height: 1px;
      margin: 0 auto 35px auto;
      background: #000;
      content: '';
    }
  }
  &__inner {
    max-width: 768px;
    margin: 0 auto;
  }
  &__ttl {
    line-height: 1;
    font-size: 32px;
    font-weight: normal;
    font-style: italic;
  }
}
</style>
