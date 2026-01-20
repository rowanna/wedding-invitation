<template>
  <section class="section">
    <div class="container">
      <div>
        <h2 class="">WEDDING EXHIBITION</h2>

        <div class="adress-container">
          <div>
            <h3>2026년 3월 7일 토요일 11시 - 15시</h3>
            <h3>인사동 마루아트센터 2층 오미갤러리</h3>
          </div>

          <div class="info-wrap">
            <div class="info">
              <i class="fas fa-map-marker-alt"></i>
              <p>서울특별시 종로구 인사동길 35-4</p>
              <p>마루아트센터 2층 오미갤러리</p>
            </div>

            <div class="info">
              <i class="fas fa-calendar"></i>
              <p>
                시간이 따로 정해져 있지 않지만 아래의 시간에 맞춰 방문을
                권장합니다.
              </p>
            </div>
          </div>

          <span>
            *11:00-13:00 (가족) <br />
            *13:00-15:00 (지인, 동료, 친구) <br />
          </span>
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

<style scoped>
.section {
  font-family: var(--font-serif2);
}
h2 {
  font-size: 36px;
  line-height: 120%;
  font-weight: 600;
  letter-spacing: 1%;
  margin-bottom: 3rem;
  font-family: var(--font-serif2);
  color: var(--color-red);
  padding: 1rem;
  border-top: 1px solid var(--color-red);
  border-bottom: 1px solid var(--color-red);
}
.adress-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 0 2rem;
  border-left: 1px solid var(--color-red);
  border-right: 1px solid var(--color-red);
}
.adress-container h3 {
  font-size: 18px;
  line-height: 140%;
  font-weight: 700;
  letter-spacing: 1%;
}
.info {
  margin-bottom: 1rem;
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
