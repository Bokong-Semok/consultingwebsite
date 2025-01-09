<template>
  <div class="about">
    <LandingContainer>
      <LandingSectionhead>
        <template v-slot:title>About us</template>
        <template v-slot:desc>Boksem Technology (Bokongsemok Future Technology LTD)</template>
      </LandingSectionhead>
      <LandingAboutInformation></LandingAboutInformation>
      <LandingAboutLeadership></LandingAboutLeadership>
    </LandingContainer>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "landing",
});

useHead({
  title: "About - Boksem Techology"
});

</script>