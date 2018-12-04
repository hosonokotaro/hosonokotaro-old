<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">
          <picture>
            <source media="(min-width: 768px)" :srcset="topImagePath">
            <source :srcset="topImagePath + ' 2x'">
            <img :src="topImagePath" alt="TOP">
          </picture>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/work">
          <picture>
            <source media="(min-width: 768px)" :srcset="workImagePath">
            <source :srcset="workImagePath + ' 2x'">
            <img :src="workImagePath" alt="WORK">
          </picture>
        </nuxt-link>
      </li>
      <li>
        <a :href="mail">
          <picture>
            <source media="(min-width: 768px)" :srcset="contactImagePath">
            <source :srcset="contactImagePath + ' 2x'">
            <img :src="contactImagePath" alt="CONTACT">
          </picture>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
const imgTop = require('~/assets/img/txt_nav_top.png');
const imgTopActive = require('~/assets/img/txt_nav_top_active.png');
const imgWork = require('~/assets/img/txt_nav_work.png');
const imgWorkActive = require('~/assets/img/txt_nav_work_active.png');
const imgContact = require('~/assets/img/txt_nav_contact.png');
const imgContactActive = require('~/assets/img/txt_nav_contact_active.png');

export default {
  data() {
    return {
      mail: 'mailto:hosono1985@gmail.com',
    }
  },
  computed: {
    topImagePath() {
      if(this.$route.name !== 'index') {
        return imgTop
      } else {
        return imgTopActive
      }
    },
    workImagePath() {
      if(this.$route.name !== 'work') {
        return imgWork
      } else {
        return imgWorkActive
      }
    },
    contactImagePath() {
      if(this.$route.name !== 'contact') {
        return imgContact
      } else {
        return imgContactActive
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  @function responsiveSP($size) {
    @return calc((#{$size} / 750) * 100vw);
  }

  nav {
    position: sticky;
    top: 0;
    z-index: 1;
    height: responsiveSP(80);
    margin-top: responsiveSP(-10);
  }
  ul {
    display: flex;
    justify-content: center;
    height: 100%;
  }
  li {
    position: relative;
    +li {
      &::before {
        position: absolute;
        top: responsiveSP(-18);
        display: block;
        width: 1px;
        height: responsiveSP(115);
        background: #333;
        transform: rotate(45deg);
        content: '';
      }
    }
    a {
      display: inline-block;
      line-height: responsiveSP(80);
    }
  }
</style>
