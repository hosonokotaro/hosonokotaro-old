<template>
  <article class="l-article">
    <section class="p-sect">
      <h2>WORKS</h2>
      <h3>2018</h3>
      <ul>
        <li>大手ラジオ局企画のwebサイト</li>
        <li>大手自動車メーカーLP多数</li>
        <li>アニメーション制作会社ブランドページ</li>
      </ul>
      <h3>2017</h3>
      <ul>
        <li>赤羽の絵本屋さんの<a href="http://www.aoneko-shobou.jp" target="_blank">webサイト</a></li>
      </ul>
      <h3 v-if="isRepos">REPOS</h3>
      <ul v-if="isRepos">
        <li><a href="https://github.com/hosonokotaro" target="_blank">GitHub</a></li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      isRepos: false
    }
  }
}
</script>


<style lang="scss" scoped>

img {
  max-width: 100%;
}

ul {
  padding: 20px 40px 0 40px;

  & + h3 {
  padding-top: 40px;
}

}

li {
  & + li {
    padding-top: 5px;
  }
}

</style>
