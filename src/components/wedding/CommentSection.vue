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
import { ref, onMounted } from "vue";

const isActive = ref(false);
const targetElement = ref(null);
let observer = null;

onMounted(() => {
  // rootMargin: '상단 우측 하단 좌측' 순서
  // 하단에서 1/3(33%) 지점을 기준으로 삼기 위해 하단 마진을 -33%로 설정합니다.
  const options = {
    root: null, // 브라우저 뷰포트 기준
    rootMargin: '0px 0px -33% 0px', 
    threshold: 0 // 대상 요소가 1픽셀이라도 기준선에 닿으면 실행
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 요소가 화면 2/3 지점 위로 올라왔을 때
        isActive.value = true;
        // 한 번만 실행하고 싶다면 관찰을 중단할 수 있습니다.
        // observer.unobserve(entry.target);
      } else {
        // 다시 아래로 내려가면 클래스를 제거하고 싶을 경우
        isActive.value = false;
      }
    });
  };

  observer = new IntersectionObserver(callback, options);

  if (targetElement.value) {
    observer.observe(targetElement.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
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
