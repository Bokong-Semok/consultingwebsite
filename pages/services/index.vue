<template>
  <LandingContainer>
    <LandingHeaderService></LandingHeaderService>
    <LandingService></LandingService>

  </LandingContainer>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

useHead({
  title: "Service - Boksem Techology"
});
</script>