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

        <div class="way-info-container">
          <div class="way-info-wrap">
            <h3>🚉 대중교통</h3>
            <p>안국역 6번출구 도보 5분</p>
            <span>(건물 입구에 코끼리베이글 인사동점이 있습니다)</span>
            <span>* 안내요원이 배치되어 길안내 예정입니다.</span>
          </div>
          <div class="way-info-wrap">
            <h3>🅿️ 주차장 정보</h3>
            <p>
              인사동 특성상 주차 공간이 매우 제한적입니다.<br />
              건물 내 주차장은 제공되지 않으며,<br />
              대중교통 이용을 권장합니다.<br /><br />
            </p>
            <span
              >자차 이용시에는 인근 유료주차장을<br />
              이용해주시기 바랍니다.</span
            >
          </div>
          <div class="way-info-wrap">
            <h4>🚗 근처 주차장 안내</h4>
            <ul>
              <li>SK건설빌딩 주차장 (도보 3분)</li>
              <li>안녕인사동 주차장 (도보 3분)</li>
              <li>파킹프라자 인사동점 (도보 3분)</li>
            </ul>
            <span>주차비 1만원을 지원해드립니다.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  font-family: var(--font-serif2);
  padding-top: 110px;
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
  font-family: var(--font-kr);
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

.way-info-container {
  margin: 2rem 0;
  padding: 1rem;
  border-top: 1px solid var(--color-red);
  border-bottom: 1px solid var(--color-red);
}
.way-info-wrap {
  border-bottom: 1px solid #666;
  padding: 1rem 0;
  margin: 1rem 0;
}
.way-info-wrap:last-child {
  border-bottom: none;
}

.way-info-wrap h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.way-info-wrap h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 12px;
}
.way-info-wrap p {
  font-weight: 500;
}
.way-info-wrap li {
  font-size: 0.8rem;
}
.way-info-wrap span {
  font-size: 0.7rem;
}
</style>
