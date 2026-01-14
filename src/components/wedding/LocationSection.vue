<template>
  <section class="location-section section">
    <div class="container">
      <h2 class="section-title">Location</h2>

      <div class="map-container">
        <!-- Replace with actual map iframe -->
        <div class="map-placeholder">
          <i class="fas fa-map-marker-alt"></i>
          <p>지도가 여기에 표시됩니다</p>
        </div>
      </div>

      <div class="address">
        <p>서울시 강남구 논현로 123</p>
        <p>더 채플앳 논현 3층</p>
        <p class="phone">02-123-4567</p>
      </div>

      <div class="transportation">
        <div class="transport-item">
          <div class="transport-icon">
            <i class="fas fa-subway"></i>
          </div>
          <div class="transport-details">
            <h3>지하철</h3>
            <p>7호선 논현역 3번 출구에서 도보 5분</p>
          </div>
        </div>

        <div class="transport-item">
          <div class="transport-icon">
            <i class="fas fa-bus"></i>
          </div>
          <div class="transport-details">
            <h3>버스</h3>
            <p>
              논현로사거리 하차: 143, 145, 146, 240, 341, 362, 241, 401, 406
            </p>
          </div>
        </div>

        <div class="transport-item">
          <div class="transport-icon">
            <i class="fas fa-car"></i>
          </div>
          <div class="transport-details">
            <h3>주차</h3>
            <p>건물 내 지하주차장 이용 가능 (2시간 무료)</p>
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
.location-section {
  background-color: var(--color-white);
  padding: 60px 0;
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
  color: var(--color-secondary);
  font-size: 0.9rem;
}

.map-placeholder i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--color-accent);
  display: block;
}

.address {
  text-align: center;
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

.address p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-secondary);
}

.phone {
  margin-top: 0.5rem !important;
  font-weight: 500;
  color: var(--color-primary) !important;
}

.transportation {
  margin-top: 2rem;
}

.transport-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed var(--color-border);
}

.transport-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.transport-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
}

.transport-icon i {
  color: var(--color-accent);
  font-size: 1.1rem;
}

.transport-details h3 {
  font-size: 1rem;
  margin-bottom: 0.3rem;
  font-family: var(--font-kr);
  font-weight: 500;
}

.transport-details p {
  font-size: 0.9rem;
  color: var(--color-secondary);
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 480px) {
  .location-section {
    padding: 40px 0;
  }

  .transport-details p {
    font-size: 0.85rem;
  }

  .transport-icon {
    width: 36px;
    height: 36px;
  }
}
</style>
