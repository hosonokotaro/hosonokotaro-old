<template>
  <article class="l-article">
    <div class="p-fv">
      <figure>
        <picture>
          <source media="(min-width: 768px)" srcset="~/assets/img/pic_kitaku.png">
          <source srcset="~/assets/img/pic_kitaku.png 2x">
          <img src="~/assets/img/pic_kitaku.png" alt="北区">
        </picture>
      </figure>
      <p>東京都北区。北の玄関口と言われるこの街は、戦後の労働者たちがひしめき合う、復興の坩堝であった。<br>
      <br>
      北は鋳物の街、川口の工業地帯、区内は巨大印刷工場。労働者たちは夜勤明けに、赤羽の飲み屋街に集まり酒を飲んだという。<br>
      <br>
      私の祖父、父は北区で生活をし、私もまた、北区で生まれ育った。<br>
      北区は私にとって、社会と接点を持つ最初の土地なのである。</p>
    </div>
    <section class="p-sect">
      <h2>A DAY</h2>
      <p>twitter</p>
    </section>
    <section class="p-sect">
      <h2>PICTURE</h2>
      <p>insta</p>
    </section>
  </article>
</template>

<style lang="scss" scoped>

.p-fv {
  p {
    color: #fff;
  }
  & + .p-sect {
    padding-top: 40px;
  }
}

figure {
  padding-top: 20px;
  text-align: center;
  & + p {
    padding-top: 20px;
  }
}

p {
  padding: 0 40px 40px 40px;
}

</style>

<script>
export default {
}
</script>
