<template>
  <div class="title-section light-bg">
    <h2>THANKS TO</h2>
  </div>
  <section class="section">
    <div class="container">
      <div class="thanksto-info">
        <p>
          저희는 모든 분들께서 결혼 전시를<br />
          부담없이 편안한 마음으로<br /> 즐기시길 원합니다.
        </p>
        <p>
          그럼에도 불구하고 <br />마음을 전하고자 하시는 분들을 위해<br />
          계좌번호를 기재하였습니다.<br />
          너그러운 마음으로 양해 부탁드립니다.
        </p>
      </div>

      <div class="contribution-container">
        <button class="accordion-header" @click="toggle('groom')">
          <h3>🤵 신랑 부모 측</h3>
          <span
            class="arrow"
            :class="{ 'is-active': activeSection === 'groom' }"
            >▼</span
          >
        </button>
        <div v-if="activeSection === 'groom'" class="accordion-content">
          <p>이동하 신한은행 110-448-854490</p>
          <p>박형옥 신한은행 110-347-358868</p>
        </div>
      </div>

      <div class="contribution-container">
        <button class="accordion-header" @click="toggle('bride')">
          <h3>👰 신부 부모 측</h3>
          <span
            class="arrow"
            :class="{ 'is-active': activeSection === 'bride' }"
            >▼</span
          >
        </button>
        <div v-if="activeSection === 'bride'" class="accordion-content">
          <p>나학수 광주은행 072-121-491155</p>
          <p>김용수 우리은행 1002-216-901646</p>
        </div>
      </div>

      <div class="contribution-container">
        <button class="accordion-header" @click="toggle('couple')">
          <h3>🤵 신랑 신부 측 👰</h3>
          <span
            class="arrow"
            :class="{ 'is-active': activeSection === 'couple' }"
            >▼</span
          >
        </button>
        <div v-if="activeSection === 'couple'" class="accordion-content">
          <p>이재인 토스뱅크 1000-8855-0663</p>
          <span class="text-sm">* 축의금 중 일부는 기부 할 예정입니다</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 현재 어떤 섹션이 열려 있는지 저장하는 변수 (null이면 모두 닫힘)
const activeSection = ref<string | null>(null);

// 클릭 시 열고 닫는 함수
const toggle = (section: string) => {
  if (activeSection.value === section) {
    activeSection.value = null; // 이미 열려있으면 닫기
  } else {
    activeSection.value = section; // 해당 섹션 열기
  }
};
</script>

<style scoped>
.thanksto-info {
  margin-bottom: 3rem;
}
.thanksto-info > p {
  font-family: var(--font-kr-serif);
  margin-bottom: 1rem;
}

.contribution-container {
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee; /* 구분선 추가 */
  font-family: var(--font-kr-serif);
}

.accordion-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.accordion-header h3 {
  margin: 0;
  font-size: 18px;
  line-height: 140%;
  font-weight: 700;
  letter-spacing: 1%;
  color: #333;
}

.arrow {
  font-size: 12px;
  transition: transform 0.3s ease;
  color: #999;
}

.arrow.is-active {
  transform: rotate(180deg); /* 열릴 때 화살표 회전 */
}

.accordion-content {
  padding: 12px 16px;
  background-color: #f9f9f9; /* 배경색으로 구분 */
  border-radius: 8px;
  margin-bottom: 12px;
}

.contribution-container p {
  font-size: 16px;
  line-height: 180%;
  font-weight: 400;
  margin: 0;
}

.text-sm {
  display: block;
  margin-top: 8px;
  font-size: 12px;
  color: var(--color-secondary);
  font-weight: 300;
}
</style>
