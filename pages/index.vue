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
            <span class="mark--box-gray">GitHub</span><a href="https://github.com/hosonokotaro/" target="_blank">https://github.com/hosonokotaro/</a>
          </li>
          <li>
            <span class="mark--box-gray">Qiita</span><a href="https://qiita.com/hosono" target="_blank">https://qiita.com/hosono</a>
          </li>
          <li>
            <span class="mark--box-gray">note</span><a href="https://note.mu/hosonokotaro" target="_blank">https://note.mu/hosonokotaro</a>
          </li>
        </ul>
      </div>
    </section>
    <section class="sect--area">
      <div class="sect--area-inner">
        <h2 class="sect--ttl">twitter</h2>
        <div class="sect--area-twitter">
          <a class="twitter-timeline" data-lang="ja" data-height="667" data-theme="light" href="https://twitter.com/hosono_fe?ref_src=twsrc%5Etfw">Tweets by hosono_fe</a>
        </div>
        <div class="sect--btn-twitter">
          <a href="https://twitter.com/hosono_fe?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-lang="ja" data-show-count="false">Follow @hosono_fe</a>
        </div>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>

.fv {
  &--area {
    margin: 20px 40px 0 40px;
    &-inner {
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
        background: #ccc;
        transform: skew(5deg);
        content: '';
      }
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
    &-twitter {
      padding: 5px;
      background: #f1f1f1;
      +.sect--btn-twitter {
        margin-top: 20px;
      }
    }
  }
  &--ttl {
    & + .sect--list-link {
      padding-top: 25px;
    }
    & + .sect--area-twitter {
      margin-top: 25px;
    }
  }
  &--list {
    &-link {
      line-height: 24px;
    }
  }
  &--btn {
    &-twitter {
    }
  }
}

</style>

<script>
export default {};
</script>
