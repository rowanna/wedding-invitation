<template>
    <div class="title-section">
    <h2>THANKS TO</h2>
  </div>
  <section class="section light-bg">
    <div class="container">
      
        <div class="contribution-container">
          <h3>🤵신랑 부모 측</h3>
          <p>
            이동하 신한은행 110-448-854490<br />
            박형옥 신한은행 110-347-358868
          </p>
        </div>
        <div class="contribution-container">
          <h3>👰신부 부모 측</h3>
          <p>
            나학수 광주은행 072-121-491155<br />
            김용수 우리은행 1002-216-901646
          </p>
        </div>
        <div class="contribution-container">
          <h3>👰신랑 신부 측🤵</h3>
          <p>이재인 토스뱅크 1000-8855-0663</p>
          <span class="text-sm">* 축의금 중 일부는 기부 할 예정입니다</span>
        </div>

    

    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic goes here
</script>

<style scoped>

.contribution-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
    font-family: var(--font-kr-serif);
}
.contribution-container h3 {
  font-size: 18px;
  line-height: 140%;
  font-weight: 700;
  letter-spacing: 1%;
}
.contribution-container p {
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
}
.contribution-container span {
  font-size: 12px;
  line-height: 150%;
  color: var(--color-secondary);
  font-weight: 300;
}
</style>
