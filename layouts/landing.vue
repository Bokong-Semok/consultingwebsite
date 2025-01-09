<template>
  <LandingNavbar></LandingNavbar>
  <slot></slot>
  <LandingFooter></LandingFooter>
</template>
<script setup>
const route = useRoute()

useHead({
  meta: [{property: 'og:title', content: `${route.meta.title}`}]
})

</script>