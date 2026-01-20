<script setup lang="ts">
import HeroSection from "@/components/wedding/HeroSection.vue";
import LocationSection from "@/components/wedding/LocationSection.vue";
import WayToComeSection from "@/components/wedding/WayToComeSection.vue";
// import DateSection from "@/components/wedding/DateSection.vue";
import MealSection from "@/components/wedding/MealSection.vue";
import CommentSection from "@/components/wedding/CommentSection.vue";
import ContributionSection from "@/components/wedding/ContributionSection.vue";
import GoToExhibitionSection from "@/components/wedding/GoToExhibitionSection.vue";
import IntroSection from "@/components/wedding/IntroSection.vue";
</script>

<template>
  <IntroSection />
  <HeroSection />
  <CommentSection />
  <GoToExhibitionSection />
  <LocationSection />
  <WayToComeSection />
  // <DateSection />
  <MealSection />
  <ContributionSection />
</template>

// <script setup lang="ts">
// import { onMounted } from "vue";

// onMounted(() => {
//   window.scrollTo(0, 0);
// });
// </script>

