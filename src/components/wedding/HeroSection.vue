<template>
  <div class="bg-[#fef0e5] px-[23px] py-[23px] text-right">
    <span
      class="font-['Epilogue'] font-light text-sm leading-[120%] tracking-[0.1em]"
      >March 7th, 2026</span
    >
  </div>
  <section class="bg-[#fef0e5] py-[60px]">
    <div class="container">
      <div class="flex flex-col gap-[60px]">
        <div
          class="mobile-text-wrap text-[40px] leading-[120%] tracking-[-0.01em] font-bold"
        >
          <span
            >같이 밥 먹고<br />
            나란히 하루를 걷는<br />
          </span>
          <span class="typingText">식구가 됩니다.</span>
        </div>

        <div
          class="mobile-couple-name-wrap text-[28px] leading-[120%] text-center tracking-[-0.01em]"
        >
          <span class="inline-block px-[10px]">🤵 이재인</span>
          <span class="inline-block px-[10px]">❣️</span>
          <span class="inline-block px-[10px]">나원지 👰</span>
        </div>

        <div class="leading-[150%] mb-[24px]">
          <p>
            결혼식은 인사동 갤러리에서 저희의 <br />이야기를 담은 작은 전시회로
            진행됩니다.
          </p>
          <br />
          <p>
            별도의 식순 없이 자유롭게 관람 가능하며, <br />오전 11시부터 오후
            3시 사이에 <br />
            편하신 시간에 방문해 주세요.
          </p>
        </div>
      </div>

      <div>
        <div class="mobile-cta-wrap flex gap-[16px]">
          <button
            class="mobile-cta font-bold rounded-[100px] px-[24px] py-[10px] border-[2px] bg-[#FEE1CC] border-[#0d0500] text-center shadow-[0px_2px_2px_rgba(13,5,0,0.15)] [box-shadow:inset_0px_4px_0px_rgba(255,255,255,0.2),inset_0px_-5px_0px_rgba(13,5,0,0.15)]"
          >
            안내사항
          </button>
          <button
            class="mobile-cta font-bold rounded-[100px] px-[24px] py-[10px] border-[2px] bg-[#F2F2F2] border-[#0d0500] text-center shadow-[0px_2px_2px_rgba(13,5,0,0.15)] [box-shadow:inset_0px_4px_0px_rgba(255,255,255,0.2),inset_0px_-5px_0px_rgba(13,5,0,0.15)]"
          >
            광주-서울 버스 신청하기
          </button>
        </div>

        <div class="mt-[64px]">
          <img
            src="@/assets/hero-image.png"
            alt="Wedding Couple"
            class="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.typingText {
  white-space: pre;
  position: relative;
  color: transparent;
}

.typingText::before {
  content: "식구가 됩니다.";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #0d0500;
  overflow: hidden;
  border-right: 1px solid #0d0500;
  animation:
    typing 4s steps(7) infinite,
    blink 0.5s step-end infinite alternate;
}

@keyframes typing {
  0% {
    width: 0%;
  }
  70% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.mobile-cta-wrap {
  flex-direction: column;
}
.mobile-text-wrap {
  font-size: 34px;
}
.mobile-couple-name-wrap {
  font-size: 24px;
}
.mobile-couple-name-wrap span {
  padding: 0 5px;
}
</style>
