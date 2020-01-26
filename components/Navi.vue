<template>
  <nav class="navi">
    <ul class="navi__list">
      <li class="navi__item">
        <nuxt-link to="/" class="navi__link">
          <picture>
            <source media="(min-width: 768px)" :srcset="topImagePath">
            <source :srcset="topImagePath + ' 2x'">
            <img :src="topImagePath" alt="TOP">
          </picture>
        </nuxt-link>
      </li>
      <li class="navi__item">
        <nuxt-link to="/work/" class="navi__link">
          <picture>
            <source media="(min-width: 768px)" :srcset="workImagePath">
            <source :srcset="workImagePath + ' 2x'">
            <img :src="workImagePath" alt="WORK">
          </picture>
        </nuxt-link>
      </li>
      <li class="navi__item">
        <nuxt-link to="/contact/" class="navi__link">
          <picture>
            <source media="(min-width: 768px)" :srcset="contactImagePath">
            <source :srcset="contactImagePath + ' 2x'">
            <img :src="contactImagePath" alt="CONTACT">
          </picture>
        </nuxt-link>
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

.navi {
  position: sticky;
  top: 0;
  z-index: 1;
  height: 40px;
  margin: -5px 40px 0 40px;
  border-bottom: 1px solid #000;
}
.navi__list {
  display: flex;
  justify-content: center;
  height: 100%;
}
.navi__item {
  position: relative;
  +.navi__item {
    &::before {
      position: absolute;
      top: -9px;
      display: block;
      width: 1px;
      height: calc(115px / 2);
      background: #333;
      transform: rotate(45deg);
      content: '';
    }
  }
}
.navi__link {
  display: inline-block;
  line-height: 40px;
}
</style>
