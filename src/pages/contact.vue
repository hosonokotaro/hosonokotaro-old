<template>
  <article>
  </article>
</template>

<script>
export default {
  data() {
    return {
      mail: 'mailto:hosono1985@gmail.com',
    }
  },
}
</script>

<style lang="scss" scoped>
.sect {
  padding-top: 40px;

  &__ttl {
    +.sect__pic {
      padding-top: 20px;
    }
  }

  &__ttl-name {
    line-height: 1;
    font-size: 18px;
    text-align: center;
    +.sect__txt-detail {
      padding-top: 30px;
    }
  }

  &__pic {
    position: relative;
    width: 180px;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      width: 240px;
    }
    &-img {
      width: 100%;
      height: 180px;
      border-radius: 50%;
      overflow: hidden;
      object-fit: cover;
      @media screen and (min-width: 768px) {
        height: 240px;
      }
    }
    +.sect__ttl-name {
      padding-top: 15px;
    }
    &-mail {
      width: 25px;
    }
  }

  &__txt {
    position: absolute;
    top: 20%;
    right: -10%;
    padding: 5px;
    font-size: 10px;
    transform: rotate(20deg);
    background: #fcfcfc;
    &::after {
      position: absolute;
      bottom: -6px;
      left: calc(50% - 6px);
      display: block;
      width: 12px;
      height: 12px;
      background: #fcfcfc;
      content: '';
      transform: rotate(45deg);
    }
    &-detail {
      line-height: 23px;
      font-size: 14px;
    }
  }
}
</style>
