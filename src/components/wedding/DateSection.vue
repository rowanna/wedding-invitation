<template>
  <div class="nature-background-img">
    <h2>DATE</h2>
  </div>
  <section class="section">
    <div class="container">
      <h3>
        2026년 3월 7일 토요일<br />
        오전 11시 ~ 오후 3시
      </h3>

      <p>
        시간이 따로 정해져 있지 않지만<br />
        아래의 시간에 맞춰 방문을 권장합니다. <br />
        *11:00-13:00 (가족) <br />
        *13:00-15:00 (지인, 동료, 친구) <br />
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

h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 36px;
}
p {
  font-weight: 300;
  font-size: 14px;
}
</style>
