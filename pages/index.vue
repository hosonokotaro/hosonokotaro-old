<template>
  <article>
    <div class="fv--area">
      <div class="fv--area-inner">
        <figure class="fv--fig-bg">
          <picture>
            <source media="(min-width: 768px)" srcset="/img/pic_kitaku.png">
            <source srcset="/img/pic_kitaku.png 2x">
            <img src="/img/pic_kitaku.png" alt="北区">
          </picture>
        </figure>
        <h2 class="fv--txt-ttl">
          <picture>
            <source media="(min-width: 768px)" srcset="~/assets/img/txt_kitaku_ttl.png">
            <source srcset="~/assets/img/txt_kitaku_ttl.png 2x">
            <img src="~/assets/img/txt_kitaku_ttl.png" alt="東京都北区赤羽">
          </picture>
        </h2>
        <p class="fv--txt-caption">
          <span class="fv--txt-line">東京都北区赤羽、北の玄関口。</span>
          <span class="fv--txt-line">戦後の労働者たちは夜勤明けに、赤羽の飲み屋街に集まり酒を飲んだという。</span>
          <span class="fv--txt-line">私は、そんな粗野な印象を残す街で、親子三世代に渡って生活をしている。</span>
        </p>
      </div>
    </div>
    <section class="sect--area">
      <div class="sect--area-inner">
        <h2 class="sect--ttl">Speak</h2>
        <ul class="sect--list-link">
          <li>
            <span class="mark--box-gray">Qiita</span><a href="https://qiita.com/hosono" target="_blank">https://qiita.com/hosono</a>
          </li>
        </ul>
        <dl class="sect--list-rireki">
          <dt>2018</dt>
          <dd>大手ラジオ局企画のwebサイト</dd>
          <dd>大手自動車メーカーLP多数</dd>
          <dd>アニメーション制作会社ブランドページ</dd>
          <dd>フリーランスとして独立</dd>
          <dt>2017</dt>
          <dd>大手ゲームプラットフォーム運営会社勤務</dd>
        </dl>
      </div>
    </section>
    <section class="sect--area">
      <h2>twitter</h2>
      <div class="area-twitter">
        <div class="wrap-twitter">
          <a class="twitter-timeline" data-lang="ja" data-height="667" data-theme="light" href="https://twitter.com/hosono_fe?ref_src=twsrc%5Etfw">Tweets by hosono_fe</a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>

@function responsiveSP($size) {
  @return calc((#{$size} / 750) * 100vw);
}

.fv {
  &--area {
    padding: 20px 40px 45px 40px;
    text-align: center;
    background: url(/img/pic_kitaku_bg.jpg) center center no-repeat;
    background-size: cover;
    &-inner {
      max-width: 768px;
      margin: 0 auto;
    }
    &--fig-bg {
      margin: 0;
    }
    & + .sect--area {
      padding-top: 35px;
    }
  }
  &--txt {
    &-ttl {
      line-height: 1;
      padding-top: 10px;
      +.fv--txt-caption {
        padding-top: 30px;
      }
    }
    &-caption {
      margin: 0 auto;
      line-height: 1.8;
      font-size: 14px;
      color: #fff;
    }
    &-line {
      display: block;
      +.fv--txt-line {
        padding-top: 20px;
      }
    }
  }
}

.sect {
  &--area {
    margin: 0 auto;
    padding: 0 40px;
    &-inner {
      max-width: 768px;
      margin: 0 auto;
    }
  }
  &--ttl {
    line-height: 1;
    font-size: 32px;
    font-style: italic;
    & + .sect--list-link {
      padding-top: 25px;
    }
  }
  &--list {
    &-link {
      +.sect--list-rireki {
        padding-top: 15px;
      }
    }
    &-rireki {
      dt {
        line-height: 1;
        font-size: 24px;
        font-weight: normal;
        + dd {
          padding-top: 15px;
        }
      }
      dd {
        line-height: 1;
        font-size: 14px;
        + dd {
          padding-top: 10px;
        }
        + dt {
          padding-top: 15px;
        }
      }
    }
  }
}

// p {
//   padding: 0 40px;
// }

// h3 {
//   & + p {
//     padding-top: 20px;
//   }
// }

// .area-twitter {
//   padding: 0 40px;
//   text-align: center;
// }

// .wrap-twitter {
// }
</style>

<script>
export default {};
</script>
