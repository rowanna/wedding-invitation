<template>
  <section class="section">
    <div class="container">
      <div>
        <span class="point-text">WEDDING EXHIBITION</span>
        <h2>Meal & Catering</h2>

        <div class="meal-container">
          <h3>🍽️ 식사</h3>
          <p>
            장수하늘소 인사동점<br />
            (서울 종로구 인사동길 34-1) 도보 1분
          </p>
          <span>* 메뉴는 한우 불고기 전골과 육회가 제공됩니다.</span>
        </div>
        <div class="meal-container">
          <h3>🍽️ 케이터링</h3>
          <p>전시장에 비건 케이터링이 제공됩니다.</p>
          <span
            >* 간단한 핑거푸드, 다과 및 커피와 주스가 구비되어 있습니다.</span
          >
          <span>* 관람하시면서 편하게 드세요.</span>
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
  color: var(--color-accent);
  line-height: 150%;
}
h2 {
  font-size: 36px;
  line-height: 120%;
  font-weight: 600;
  letter-spacing: 1%;
  margin-bottom: 24px;
}
.meal-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}
.meal-container h3 {
  font-size: 18px;
  line-height: 140%;
  font-weight: 700;
  letter-spacing: 1%;
}
.meal-container p {
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
}
.meal-container span {
  font-size: 12px;
  line-height: 150%;
  color: var(--color-secondary);
  font-weight: 300;
}
</style>
