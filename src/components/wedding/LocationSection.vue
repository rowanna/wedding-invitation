<template>
  <section class="section">
    <div class="container">
      <div>
        <span class="point-text">WEDDING EXHIBITION</span>
        <h2 class="">Location</h2>

        <div class="adress-container">
          <h3>
            인사동 마루아트센터 2층<br />
            오미갤러리
          </h3>
          <p>
            서울특별시 종로구 인사동길 35-4<br />
            마루아트센터 2층 오미갤러리
          </p>
          <span>* 공간이 협소한 관계로 화환은 정중히 사양합니다.</span>
        </div>
        <div class="map-container w-full mb-[40px]">
          <div class="map-placeholder">
            <i class="fas fa-map-marker-alt"></i>
            <p>지도가 여기에 표시됩니다</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic goes here
</script>

<style scoped>
.point-text {
  font-size: 16px;
  font-family: var(--font-serif);
  color: var(--color-red);
  line-height: 150%;
}
h2 {
  font-size: 36px;
  line-height: 120%;
  font-weight: 600;
  letter-spacing: 1%;
  margin-bottom: 24px;
}
.adress-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}
.adress-container h3 {
  font-size: 18px;
  line-height: 140%;
  font-weight: 700;
  letter-spacing: 1%;
}
.adress-container p {
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
}
.adress-container span {
  font-size: 13px;
  line-height: 150%;
  color: var(--color-secondary);
}
.map-container {
  width: 100%;
  height: 200px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.map-placeholder {
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}

.map-placeholder i {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}
</style>
