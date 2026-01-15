<script setup lang="ts">
import HeroSection from "@/components/wedding/HeroSection.vue";
import LocationSection from "@/components/wedding/LocationSection.vue";
import WayToComeSection from "@/components/wedding/WayToComeSection.vue";
import DateSection from "@/components/wedding/DateSection.vue";
</script>

<template>
  <HeroSection />
  <LocationSection />
  <WayToComeSection />
  <DateSection />
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
