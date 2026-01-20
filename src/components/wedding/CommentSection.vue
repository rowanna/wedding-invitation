<template>
  <div class="nature-background-img">
    <h2>COMMENT</h2>
  </div>
  <section class="section">
    <div class="container">
      <p 
        ref="targetElement"
        :class="{
        'fadeUptoDownTarget': true,
        'fade-down' : isActive
    }">
        저희는 모든 분들께서 결혼 전시를<br />
        부담없이 편안한 마음으로 즐기시길 원합니다.
      </p>
            <p>
        거리가 멀거나 방문이 어려우신<br />
        경우에는 모바일 전시회로 함께해 주셔도<br />
        감사한 마음입니다.
            </p>
            <p>
            한 분 한 분의 귀한 걸음과<br />
        축복해 주시는 마음 잊지 않고<br />
        오래도록 간직하겠습니다.
            </p>
            <p>
            진심으로 감사드립니다.
            </p>
            
    </div>
  </section>
</template>

<script setup lang="ts">
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// 1. 상태값 타입 추론 (boolean)
const isActive = ref<boolean>(false);

// 2. DOM 요소 타입 정의 (HTMLDivElement 또는 null)
// 만약 div가 아니라면 HTMLElement로 범용적으로 설정할 수 있습니다.
const targetElement = ref<HTMLDivElement | null>(null);

// 3. Observer 타입 정의 (IntersectionObserver 또는 null)
let observer: IntersectionObserver | null = null;

onMounted(() => {
  // rootMargin: 상단 우측 하단 좌측 순서
  const options: IntersectionObserverInit = {
    root: null, // 브라우저 뷰포트 기준
    rootMargin: '0px 0px -33% 0px', 
    threshold: 0 
  };

  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        isActive.value = true;
      } else {
        isActive.value = false;
      }
    });
  };

  // 인스턴스 생성
  observer = new IntersectionObserver(callback, options);

  // 4. 관찰 시작 (targetElement가 존재할 때만)
  if (targetElement.value) {
    observer.observe(targetElement.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div ref="targetElement" :class="{ 'is-active': isActive }">
    감시 대상 요소
  </div>
</template>
</script>

<style scoped>
.section {
  background-color: var(--color-light);
  text-align: center;
}
.nature-background-img {
  width: 100%;
  height: 200px;
  position: relative;
}


.nature-background-img::after{
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -30%);
  content: "";
  display: block;
  width: 100px;
  height: 70px;
  background-image: url("@/assets/title-deco.png");
}


h2 {
  font-family: var(--font-serif2);
  font-size: 32px;
  font-weight: 500;
  color: var(--color-red);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
}

p {
  text-align: right;
  font-family: var(--font-kr-serif);
  line-height: 180%;
  letter-spacing: .02rem;
  margin-bottom: 2rem;
}
</style>
