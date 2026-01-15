<template>
  <div class="nature-background-img">
    <h2>COMMENT</h2>
  </div>
  <section class="section">
    <div class="container">
      <p>
        저희는 모든 분들께서 결혼 전시를<br />
        부담없이 편안한 마음으로 즐기시길 원합니다.<br />
        <br />
        거리가 멀거나 방문이 어려우신<br />
        경우에는 모바일 전시회로 함께해 주셔도<br />
        감사한 마음입니다.<br />
        <br />
        한 분 한 분의 귀한 걸음과<br />
        축복해 주시는 마음 잊지 않고<br />
        오래도록 간직하겠습니다.<br />
        <br />
        진심으로 감사드립니다.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.section {
  background-color: var(--color-light);
  text-align: center;
}
.nature-background-img {
  width: 100%;
  height: 339px;
  background-image: url("@/assets/date.png");
  background-size: cover;
  background-position: center;
  position: relative;
}

h2 {
  font-family: var(--font-serif);
  font-size: 32px;
  font-weight: 500;
  color: var(--color-white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

p {
  text-align: right;
}
</style>
