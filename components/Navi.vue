<template>
  <nav>
    <ul>
      <li><nuxt-link to="/">TOP</nuxt-link></li>
      <li><nuxt-link to="/works">WORKS</nuxt-link></li>
      <li><nuxt-link to="/about">ABOUT</nuxt-link></li>
      <li><a :href="mail">CONTACT</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mail: 'mailto:hosono1985@gmail.com'
    }
  }
}
</script>


<style lang="scss" scoped>
  nav {
    position: sticky;
    top: 0;
    z-index: 1;
    border-bottom: 1px solid #333;
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
  .nuxt-link-exact-active {
    color: #000;
  }
</style>
