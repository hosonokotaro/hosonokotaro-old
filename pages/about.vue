<template>
  <article class="l-article">
    <section class="p-sect">
      <h2>ABOUT</h2>
      <figure>
        <picture>
          <source media="(min-width: 768px)" srcset="/img/pic_hosono.jpg 2x">
          <source srcset="/img/pic_hosono.jpg 2x">
          <img src="/img/pic_hosono.jpg" alt="細野">
        </picture>
        <div class="c-box-hukidasi">
          <span>とても眩しいです</span>
        </div>
        <figcaption class="u-mark">富士山山頂にて</figcaption>
      </figure>
      <p><ruby>細野<rt>ほその</rt></ruby><ruby>広太郎<rt>こうたろう</rt></ruby><br>
      1985年生まれ<br>
      <br>
      東京でWEB開発を生業に、ミレニアル世代のフリーランスとして活動している。<br>
      <br>
      大手企業などのサイトを受託案件として多数手がける。個人としては、アニメーション制作会社、個人経営の本屋さんのサイトも手がける。<br>
      <br>
      座右の銘は「<ruby>色即是空<rt>しきそくぜくう</rt></ruby>」<br>
      <br>
      <a href="https://twitter.com/hosono_fe?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-lang="ja" data-show-count="false">Follow @hosono_fe</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </p>
    </section>
  </article>
</template>

<style lang="scss" scoped>

figure {
  padding: 0 40px;
  text-align: center;
  img {
    width: 100%;
    height: calc(100vw - 80px);
    object-fit: cover;
    border-radius: 100%;
    @media screen and (min-width: 768px) {
      width: 500px;
      height: 500px;
    }
  }
  .c-box-hukidasi {
    top: 15%;
    right: 10%;
    transform: rotate(8deg);
    @media screen and (min-width: 768px) {
      right: calc(50% - 250px);
    }
  }
  & + p {
    padding-top: 40px;
  }
}

p {
  padding: 0 40px 0 40px;
}

</style>
