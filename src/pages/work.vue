<template>
  <article>
    <SectInner>
      <h2 class="sect__ttl">Work</h2>
      <dl class="sect__list">
        <dt class="sect__list-ttl">2019</dt>
        <dd class="sect__list-detail">大手金融会社にてサイト改修</dd>
        <dt class="sect__list-ttl">2018</dt>
        <dd class="sect__list-detail">大手ラジオ局企画のwebサイト</dd>
        <dd class="sect__list-detail">大手自動車メーカーLP多数</dd>
        <dd class="sect__list-detail">アニメーション制作会社ブランドページ</dd>
        <dd class="sect__list-detail">フリーランスとして独立</dd>
        <dt class="sect__list-ttl">2017</dt>
        <dd class="sect__list-detail">地元、赤羽の絵本屋さんの<a href="http://aoneko-shobou.jp/" target="_blank">webサイト</a>制作</dd>
        <dd class="sect__list-detail">大手ゲームプラットフォーム運営会社勤務</dd>
      </dl>
    </SectInner>
  </article>
</template>

<script>
import SectInner from '~/components/Sect.vue';

export default {
  components: {
    SectInner
  }
}
</script>

<style lang="scss" scoped>

.sect {
  &__ttl {
    +.sect__list {
      padding-top: 15px;
    }
  }
  &__list-ttl {
    line-height: 1;
    font-size: 24px;
    font-weight: normal;
    +.sect__list-detail {
      padding-top: 15px;
    }
  }
  &__list-detail {
    line-height: 1;
    font-size: 14px;
    +.sect__list-detail {
      padding-top: 10px;
    }
    +.sect__list-ttl {
      padding-top: 25px;
    }
  }
}

</style>
