<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Contact</template>
      <template v-slot:desc>We are here to help you success</template>
    </LandingSectionhead>
    <LandingScheduleForm/>
  </LandingContainer>
</template>
