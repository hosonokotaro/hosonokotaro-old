<template>
  <article>
    <div class="fv">
      <div class="fv__inner">
        <figure class="fv__fig-bg">
          <picture>
            <source media="(min-width: 768px)" srcset="/img/pic_kitaku.png">
            <source srcset="/img/pic_kitaku.png 2x">
            <img src="/img/pic_kitaku.png" alt="北区">
          </picture>
        </figure>
        <h2 class="fv__txt-ttl">
          <picture>
            <source media="(min-width: 768px)" srcset="~/assets/img/txt_kitaku_ttl.png">
            <source srcset="~/assets/img/txt_kitaku_ttl.png 2x">
            <img src="~/assets/img/txt_kitaku_ttl.png" alt="東京都北区赤羽">
          </picture>
        </h2>
        <p class="fv__txt-caption">
          <span class="fv__txt-line">東京都北区赤羽、北の玄関口。</span>
          <span class="fv__txt-line">戦後の労働者たちは夜勤明けに、赤羽の飲み屋街に集まり酒を飲んだという。</span>
          <span class="fv__txt-line">私は、そんな粗野な印象を残す街で、親子三世代に渡って生活をしている。</span>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
<style lang="scss" scoped>
.fv {
  margin: 40px 40px 0 40px;
  +.sect {
    padding-top: 35px;
  }
  &__inner {
    position: relative;
    max-width: 768px;
    margin: 0 auto;
    text-align: center;
    background: url(/img/pic_kitaku_bg.jpg) top 30% center no-repeat;
    background-size: cover;
    &::before {
      position: absolute;
      top: 0;
      z-index: -1;
      display: block;
      width: 100%;
      height: 100%;
      background: #eee;
      transform: skew(5deg);
      content: '';
    }
  }
  &__fig-bg {
    margin: 0;
  }
  &__txt-ttl {
    padding-top: 20px;
    line-height: 1;
    +.fv__txt-caption {
      padding-top: 30px;
    }
  }
  &__txt-caption {
    margin: 0 auto;
    line-height: 1.8;
    font-size: 14px;
    color: #fff;
  }
  &__txt-line {
    display: block;
    +.fv__txt-line {
      padding-top: 20px;
    }
  }
}

.twitter {
  padding: 5px;
  background: #f1f1f1;

  &__btn {
    margin-top: 20px;
  }
}

.sect {
  &__ttl {
    line-height: 1;
    font-size: 32px;
    font-weight: 400;
    font-style: italic;

    & + .sect__list-link {
      padding-top: 25px;
    }

    & + .twitter {
      margin-top: 25px;
    }
  }

  &__list-link {
    line-height: 24px;
  }
}

</style>