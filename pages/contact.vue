<template>
  <article class="l-article">
    <section class="p-sect">
      <h2>CONTACT</h2>
      <dl>
        <dt>TWITTER</dt>
        <dd><a href="https://twitter.com/hosono_fe" target="_blank">@hosono_fe</a></dd>
        <dt>INSTAGRAM</dt>
        <dd><a href="https://www.instagram.com/hosono.k/" target="_blank">hosono.k</a></dd>
      </dl>
    </section>
  </article>
</template>

<style lang="scss" scoped>

h2 {
  & + dl {
    padding-top: 40px;
  }
}

dl {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px 20px;
  padding: 0 40px;
}

dt {
  font-weight: bold;
  text-align: right;
}

</style>
