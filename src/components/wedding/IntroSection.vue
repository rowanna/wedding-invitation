<template>
  <section
    class="intro-section"
    :class="{ 'fade-out': isFaded }"
    @click="startFade"
  >
    <div class="container">
      <div
        class="intro-content"
      >
        <img
          src="@/assets/intro-image.png"
          alt="Wedding Couple"
          class="couple-image"
     v-reveal
        />

        <div class="intro-names-container">
          <div class="groom">
            <span class="role">GROOM</span>
            <p class="name">이재인</p>
            <p class="description"><strong>이동하 박형옥</strong>의 장남</p>
          </div>
          <img src="@/assets/between.png" alt="" class="groom-image" />
          <div class="bride">
            <span class="role">BRIDE</span>
            <p class="name">나원지</p>
            <p class="description"><strong>나학수 김용수</strong>의 장녀</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isFaded = ref(false);
const isDownFaded = ref(false);

const startFade = () => {
  isFaded.value = true;
};

// Auto-fade after 3 seconds
onMounted(() => {
  setTimeout(startFade, 3000);

});
</script>

<style scoped>
.intro-section {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  min-height: 150vw;
  min-width: 100vw;
  width: 100%;
  height: 100%;
  max-width: 400px;
  background-color: var(--color-light);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 1s ease-out;
  opacity: 1;
  overflow: hidden;
}

.intro-section.fade-out {
  opacity: 0;
  pointer-events: none;
}

.fadeUptoDownTarget {
  transition: transform 1s ease-out;
  transform: translate(0, -50%);
  opacity: 0;
}
.fadeUptoDownTarget.fade-down {
  opacity: 1;
  transform: translate(0, 0);
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro-content {
  text-align: center;
  width: 100%;
}

.couple-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  scale: 1.2;
}
.intro-names-container {
  position: relative;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 27px;
}
.intro-names-container > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4rem;
}
.intro-names-container > div {
  width: 100%;
  font-family: var(--font-kr-serif);
}
.role {
  font-size: 0.8rem;
  font-family: var(--font-serif);
  color: var(--color-red);
}
.name {
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 10%;
}
.description {
  font-size: 0.8rem;
  color: var(--color-secondary);
}
.description strong {
  font-size: 0.9rem;
}
</style>
