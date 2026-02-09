<template>
  <div class="title-section">
    <h2>COMMENT</h2>
  </div>
  <section class="section">
    <div class="container">
      <div class="comment">
        <p v-reveal class="fadeTarget">
          결혼식은 인사동 갤러리에서 저희의<br />
          이야기를 담은 작은 전시회로 진행됩니다.
        </p>

        <p v-reveal class="fadeTarget">
          별도의 식순 없이 자유롭게 관람 가능하며,<br />
          오전 11시부터 오후 3시 사이에<br />
          편하신 시간에 방문해 주세요.
        </p>
				<span v-reveal class="fadeTarget">
				11-13시 까지는 가족 및 친척,
13-15시 까지는 친구 및 지인 방문을 권장드립니다.
</span>
      </div>

      <div class="comment-last">
        <p v-reveal class="fadeTarget">
          저희는 모든 분들께서 결혼 전시를<br />
          부담없이 편안한 마음으로<br />즐기시길 원합니다.
        </p>
        <p v-reveal class="fadeTarget">
          거리가 멀거나 방문이 어려우신<br />
          경우에는 모바일 전시회로 함께해 주셔도<br />
          감사한 마음입니다.
        </p>
        <p v-reveal class="fadeTarget">
          한 분 한 분의 귀한 걸음과<br />
          축복해 주시는 마음 잊지 않고<br />
          오래도록 간직하겠습니다.
        </p>
        <p v-reveal class="fadeTarget">진심으로 감사드립니다.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  text-align: center;
}
p {
  text-align: right;
  font-family: var(--font-kr-serif);
  line-height: 180%;
  letter-spacing: 0.02rem;
  margin: 1rem 0;
}
.comment {
  padding: 2rem 0;
  border-top: 1px solid var(--color-red);
  border-bottom: 1px solid var(--color-red);
}
.comment-last {
  padding: 2rem 0;
}
.comment p {
  text-align: left;
}
</style>
