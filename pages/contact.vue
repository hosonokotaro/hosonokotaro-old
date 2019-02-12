<template>
  <article>
    <section class="sect--area">
      <div class="sect--area-inner">
        <h2 class="sect--ttl">Contact</h2>
        <figure class="sect--pic-my">
          <picture>
            <source media="(min-width: 768px)" srcset="/img/pic_hosono.jpg">
            <source srcset="/img/pic_hosono.jpg 2x">
            <img src="/img/pic_hosono.jpg" alt="細野">
          </picture>
          <figcaption class="sect--txt-my">とても眩しいですし。</figcaption>
        </figure>
        <h3 class="sect--ttl-my">HOSONO KOTARO</h3>
        <p class="my--txt-detail"><ruby>細野 広太郎<rt>ほその こうたろう</rt></ruby><br>
          1985年生まれ<br>
          <br>
          東京でフロントエンドエンジニアとして、ミレニアル世代のフリーランスとして活動している。<br>
          <br>
          大手企業などのサイトを受託案件として多数手がける。個人としては、アニメーション制作会社、個人経営の本屋さんのサイトも手がける。<br>
          <br>
          好きな言葉は「<ruby>色即是空<rt>しきそくぜくう</rt></ruby>」<br>
          <br>
          <a :href="mail"><img class="my--pic-mail" src="~/assets/img/pic_mail.png" alt="Mail"></a>
        </p>
      </div>
    </section>
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
  &--area {
    padding-top: 25px;
  }
  &--ttl {
    &-my {
      line-height: 1;
      font-size: 18px;
      text-align: center;
      +.my--txt-detail {
        padding-top: 30px;
      }
    }
    +.sect--pic-my {
      padding-top: 20px;
    }
  }
  &--pic {
    &-my {
      position: relative;
      width: 180px;
      margin: 0 auto;
      @media screen and (min-width: 768px) {
        width: 240px;
      }
      img {
        width: 100%;
        height: 180px;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
        @media screen and (min-width: 768px) {
          height: 240px;
        }
      }
      +.sect--ttl-my {
        padding-top: 15px;
      }
    }
  }
  &--txt {
    &-my {
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
    }
  }
}

.my--txt-detail {
  line-height: 23px;
  font-size: 14px;
}

.my--pic-mail {
  width: 25px;
}

</style>
