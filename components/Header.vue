<template>
  <header class="l-header">
    <h1><nuxt-link to="/">WEB DEVELOPER >> HOSONO KOTARO</nuxt-link></h1>
    <nav>
      <ul>
        <li><nuxt-link to="/works">WORKS</nuxt-link></li>
        <li><nuxt-link to="/about">ABOUT</nuxt-link></li>
        <li><nuxt-link to="/contact">CONTACT</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  h1 {
    line-height: 0.7;
    a {
      color: #fff;
    }
  }
  ul {
    display: flex;
    justify-content: left;
  }
  li {
    a {
      display: inline-block;
      padding: 20px 0;
      font-weight: bold;
    }
    & + li {
      padding-left: 40px;
    }
  }
</style>
