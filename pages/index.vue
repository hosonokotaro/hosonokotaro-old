<template>
  <article class="l-article">
    <div class="p-fv">
      <p>東京都北区。北の玄関口と言われるこの街は、戦後の労働者たちが犇めき合う、経済の坩堝のような街であった。<br>
      <br>
      北は鋳物の街、川口の工業地帯、区内は巨大印刷工場。労働者たちは夜勤明けに、赤羽の飲み屋街に集まり酒を飲んだという。</p>
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

<script>
export default {
  // directives: {
  //   scroll: {
  //     bind: (el) => {
  //       function f() {
  //         if(el.getBoundingClientRect().top === 0) {
  //           el.classList.add('is-top');
  //         } else {
  //           el.classList.remove('is-top');
  //         }
  //       }

  //       window.addEventListener('scroll', f);
  //     }
  //   }
  // }
}
</script>


<style lang="scss" scoped>

.p-fv {
  p {
    color: #fff;
  }
}

p {
  padding: 40px 40px 0 40px;
}

// .sticky {
//   position: sticky;
//   top: 0px;
//   background: #f66;
//   color: #fff;
//   &.is-top {
//     opacity: 0.5;
//   }
// }

</style>
