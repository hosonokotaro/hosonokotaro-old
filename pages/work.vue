<template>
  <article>
    <section class="sect--area">
      <div class="sect--area-inner">
        <h2 class="sect--ttl">Work</h2>
        <dl class="sect--list-rireki">
          <dt>2018</dt>
          <dd>大手ラジオ局企画のwebサイト</dd>
          <dd>大手自動車メーカーLP多数</dd>
          <dd>アニメーション制作会社ブランドページ</dd>
          <dd>フリーランスとして独立</dd>
          <dt>2017</dt>
          <dd>地元、赤羽の絵本屋さんの<a href="http://aoneko-shobou.jp/" target="_blank">webサイト</a>制作</dd>
          <dd>大手ゲームプラットフォーム運営会社勤務</dd>
        </dl>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>

.sect {
  &--area {
    padding-top: 25px;
  }
  &--ttl {
    +.sect--list-rireki {
      padding-top: 15px;
    }
  }
  &--list {
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
          padding-top: 25px;
        }
      }
    }
  }
}

</style>
