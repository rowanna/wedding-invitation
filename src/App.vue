<script setup lang="ts">
import HeroSection from "@/components/wedding/HeroSection.vue";
import LocationSection from "@/components/wedding/LocationSection.vue";
import WayToComeSection from "@/components/wedding/WayToComeSection.vue";
import DateSection from "@/components/wedding/DateSection.vue";
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
  <LocationSection />
  <WayToComeSection />
  <DateSection />
  <MealSection />
  
  <ContributionSection />
  <GoToExhibitionSection />
</template>

<style>
.section {
  padding: 110px 0;
}
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 23px;
}
</style>
