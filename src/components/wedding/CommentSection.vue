<template>
  <div class="nature-background-img">
    <h2>COMMENT</h2>
  </div>
  <section class="section">
    <div class="container">
      <p v-reveal class="fadeTarget">
        저희는 모든 분들께서 결혼 전시를<br />
        부담없이 편안한 마음으로 즐기시길 원합니다.
      </p>
      <p v-reveal class="fadeTarget">
        거리가 멀거나 방문이 어려우신<br />
        경우에는 모바일 전시회로 함께해 주셔도<br />
        감사한 마음입니다.
      </p>
      <p v-reveal class="fadeTarget">
        한 분 한 분의 귀한 걸음과<br />
        축복해 주시는 마음 잊지 않고<br />
        오래도록 간직하겠습니다.
      </p>
      <p v-reveal class="fadeTarget">진심으로 감사드립니다.</p>
    </div>
  </section>
</template>

<style scoped>
.section {
  background-color: var(--color-light);
  text-align: center;
}
.nature-background-img {
  width: 100%;
  height: 200px;
  position: relative;
}

.nature-background-img::after {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -30%);
  content: "";
  display: block;
  width: 100px;
  height: 70px;
  background-image: url("@/assets/title-deco.png");
}

h2 {
  font-family: var(--font-serif2);
  font-size: 32px;
  font-weight: 500;
  color: var(--color-red);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
}

p {
  text-align: right;
  font-family: var(--font-kr-serif);
  line-height: 180%;
  letter-spacing: 0.02rem;
  margin-bottom: 2rem;
}
</style>
