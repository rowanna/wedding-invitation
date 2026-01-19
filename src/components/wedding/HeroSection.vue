<template>
  <section class="">
    <div class="container">
      <h1 class="title">WEDDING<br />EXHIBITION</h1>

      <div class="hero-image-wrap">
        <div class="deco-img">
          <img src="@/assets/deco-img.png" alt="Deco Image" />
        </div>
        <img src="@/assets/hero-image.png" alt="Wedding Couple" />
      </div>

      <button class="btn">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScZzG_AiXnZ7VKa66BoOdhH6wQHxXaXNLOCF4_0t1GhV5XkGw/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          >광주-서울 교통편 신청</a
        >
      </button>

      <div class="info-wrap">
        <!-- <div class="deco-img">
          <img src="@/assets/deco-img.png" alt="Deco Image" />
        </div> -->
        <div class="info">
          <img class="info-deco" src="@/assets/info-deco.png" alt="Deco Image" />
          <p>2026. 03. 07 SAT<br />11:00 - 15:00</p>
          <p>인사동 마루아트센터<br />2층 오미갤러리</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
section {
  background-color: var(--color-main-bg-light);
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-size: 48px;
  color: var(--color-red);
  font-family: var(--font-serif2);
  line-height: 100%;
  margin-bottom: 32px;
}

.hero-image-wrap {
  margin-bottom: 32px;
  position: relative;
}
.deco-img {
  position: absolute;
  bottom: 0px;
  right: -40px;
        animation: dudungsil 2s linear infinite;
  transform-origin: center;

}
@keyframes dudungsil {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}
.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  gap: 7.96px;
  width: 202px;
  height: 53px;
  border: 1.5px solid #191715;
  margin-bottom: 32px;
  position: relative;
}
.btn::after {
  content: "";
  display: block;
  width: 20px;
  height: 14px;
  background-image: url("@/assets/arrow.png");
}
.btn:active {
  border-color: var(--color-red);
  color: var(--color-red);
}

.info-wrap {
  position: relative;
  width: 300px;
  height: 220px;
  margin-bottom: 32px;
}


.info-wrap .info {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  font-family: var(--font-en);
  font-weight: 300;
  line-height: 120%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.info-wrap .info img {
  width: 36px;
  margin-bottom: 20px;
      animation: rotate 10s linear infinite;
  transform-origin: center;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.info-wrap .info p:last-child {
  font-family: var(--font-kr);
  font-size: 16px;
  line-height: 150%;
  font-weight: 500;
}

</style>
