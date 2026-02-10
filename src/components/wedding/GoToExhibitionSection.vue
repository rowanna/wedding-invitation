<template>
  <div class="nature-background-img">
    <div class="text-wrap">
      <h2>
        모바일<br />
        결혼전시회 보러가기
      </h2>
      <p>
        참여가 어려운 분들을 위해<br />
        모바일로 결혼전시를 준비했습니다.
      </p>
      <button
        @click="goToExhibition"
        class="mobile-cta font-bold rounded-[100px] px-[24px] py-[10px] border-[2px] bg-[#FEE1CC] border-[#0d0500] text-center shadow-[0px_2px_2px_rgba(13,5,0,0.15)] [box-shadow:inset_0px_4px_0px_rgba(255,255,255,0.2),inset_0px_-5px_0px_rgba(13,5,0,0.15)]"
      >
        바로가기
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const goToExhibition = () => {
  window.open("https://withspace.com/exhibitionDetail.do?menuNum=2000&idx=3802", "_blank");
};
</script>

<style scoped>
.nature-background-img {
  width: 100%;
  height: 417px;
  background-image: url("@/assets/welcome.png");
  background-size: cover;
  background-position: center;
  position: relative;
}
.text-wrap {
  position: absolute;
  bottom: 23px;
  left: 23px;
}
h2 {
  font-size: 36px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -1%;
  /* color: var(--color-white); */
  margin-bottom: 20px;
}
p {
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 24px;
}
</style>
