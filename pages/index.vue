<template>
  <article class="l-article">
    <div class="area-fv">
      <div class="inner">
        <figure class="box-fig">
          <picture>
            <source media="(min-width: 768px)" srcset="~/assets/img/pic_kitaku.png">
            <source srcset="~/assets/img/pic_kitaku.png 2x">
            <img src="~/assets/img/pic_kitaku.png" alt="北区">
          </picture>
        </figure>
        <h2 class="txt-ttl">
          <picture>
            <source media="(min-width: 768px)" srcset="~/assets/img/txt_kitaku_ttl.png">
            <source srcset="~/assets/img/txt_kitaku_ttl.png 2x">
            <img src="~/assets/img/txt_kitaku_ttl.png" alt="東京都北区赤羽">
          </picture>
        </h2>
        <p class="box-caption">
          <span class="txt">東京都北区赤羽、北の玄関口。</span>
          <span class="txt">戦後の労働者たちは夜勤明けに、赤羽の飲み屋街に集まり酒を飲んだという。</span>
          <span class="txt">私は、そんな粗野な印象を残す街で、親子三世代に渡って生活をしている。</span>
        </p>
      </div>
    </div>
    <section class="p-sect">
      <h2>Speak</h2>
      <ul class="c-list">
        <li>
          <span class="u-mark">Qiita</span><a href="https://qiita.com/hosono" target="_blank">https://qiita.com/hosono</a>
        </li>
      </ul>
    </section>
    <section class="p-sect">
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

.area-fv {
  padding: 40px;
  text-align: center;
  background: url(~/assets/img/pic_kitaku_bg.jpg) no-repeat;
  background-size: cover;
  .box-fig {
  }
  .txt-ttl {
    +.box-caption {
      padding-top: 30px;
    }
  }
  .box-caption {
    max-width: calc(590px / 2);
    margin: 0 auto;
    text-align: left;
    color: #fff;
    line-height: 1.8;
    .txt {
      display: block;
      +.txt {
        padding-top: 20px;
      }
    }
  }
}


// .area-fv {
//   padding-bottom: 40px;
//   background: #333;
//   & + .p-sect {
//     padding-top: 40px;
//   }
//   p {
//     color: #fff;
//   }
//   .inner {
//     max-width: 768px;
//     margin: 0 auto;

//   }
// }

// .u-mark {
//   & + a {
//     margin-left: 5px;
//   }
// }

// figure {
//   padding-top: 20px;
//   text-align: center;
//   +p {
//     padding-top: 20px;
//   }
// }

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
