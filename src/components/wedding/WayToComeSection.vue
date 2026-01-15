<template>
  <section class="section">
    <div class="container">
      <h2>오시는 길</h2>

      <div class="info-container">
        <h3>🚉 대중교통</h3>
        <p>
          안국역 6번출구 도보 5분 <br />
          (건물 입구에 코끼리베이글 인사동점이 있습니다)
        </p>
        <span>* 안내요원이 배치되어 길안내 예정입니다.</span>
      </div>
      <div class="info-container">
        <h3>🅿️ 주차장 정보</h3>
        <p>
          인사동 특성상 주차 공간이 매우 제한적입니다.<br />
          건물 내 주차장은 제공되지 않으며,<br />
          대중교통 이용을 권장합니다.<br /><br />

          자차 이용시에는 인근 유료주차장을<br />
          이용해주시기 바랍니다.
        </p>
        <br />
        <div class="small-info">
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
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.section {
  background-color: var(--color-light);
  text-align: center;
}
.info-container {
  margin-bottom: 24px;
}
h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 24px;
}

h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
}
.info-container p {
  font-weight: 500;
}
.info-container span {
  font-size: 12px;
}
.small-info {
  margin-top: 24px;
  font-size: 14px;
  line-height: 150%;
  font-weight: 300;
}
.small-info h4 {
  font-weight: 500;
}
</style>
