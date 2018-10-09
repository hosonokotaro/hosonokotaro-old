<template>
  <nav>
    <ul>
      <li><nuxt-link to="/works">WORKS</nuxt-link></li>
      <li><nuxt-link to="/contact">CONTACT</nuxt-link></li>
      <li><nuxt-link to="/about">ABOUT</nuxt-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    position: sticky;
    top: 0;
    z-index: 1;
  }
  ul {
    display: flex;
    justify-content: center;
  }
  li {
    position: relative;
    a {
      display: inline-block;
      padding: 20px 0;
      font-weight: bold;
    }
    & + li {
      padding-left: 40px;
      &::before {
        position: absolute;
        left: 25px;
        display: block;
        width: 1px;
        height: 100%;
        background: #333;
        transform: rotate(45deg);
        content: '';
      }
    }
  }
</style>
