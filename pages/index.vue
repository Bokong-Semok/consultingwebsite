<script setup>
definePageMeta({
  layout: "landing",
});

useHead({
  title: "Front page - Boksem Techology"
});
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
    <LandingFeatures></LandingFeatures>
    <LandingLogos></LandingLogos>
    <LandingCta></LandingCta>
  </LandingContainer>
</template>
