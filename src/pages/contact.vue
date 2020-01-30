<template>
  <article>
    <SectInner>
      <h2 class="sect__ttl">
        Contact
      </h2>
      <figure class="sect__pic">
        <picture>
          <source media="(min-width: 768px)" srcset="/img/pic_hosono.jpg">
          <source srcset="/img/pic_hosono.jpg 2x">
          <img src="/img/pic_hosono.jpg" alt="細野" class="sect__pic-img">
        </picture>
      </figure>
      <h3 class="sect__ttl-name">
        HOSONO KOTARO
      </h3>
      <p class="sect__txt-detail">
        <ruby>細野 広太郎<rt>ほその こうたろう</rt></ruby><br>
        1985年生まれ<br>
        <br>
        東京でフロントエンドエンジニアとして、ミレニアル世代のフリーランスとして活動している。<br>
        <br>
        大手企業などのサイトを受託案件として多数手がける。個人としては、アニメーション制作会社、個人経営の本屋さんのサイトも手がける。<br>
        <br>
        好きな言葉は「<ruby>色即是空<rt>しきそくぜくう</rt></ruby>」<br>
        <br>
        <a :href="mail"><img class="sect__pic-mail" src="~/assets/img/pic_mail.png" alt="Mail"></a>
      </p>
    </SectInner>
  </article>
</template>

<script lang="ts">
import SectInner from '~/components/Sect.vue'

export default {
  components: {
    SectInner
  },
  data () {
    return {
      mail: 'mailto:hosono1985@gmail.com'
    }
  }
}
</script>

<style lang="scss" scoped>
.sect {
  &__ttl {
    +.sect__pic {
      padding-top: 20px;
    }
  }

  &__ttl-name {
    line-height: 1;
    font-size: 1.8rem;
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
    font-size: 1rem;
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
      font-size: 1.4rem;
    }
  }
}
</style>
