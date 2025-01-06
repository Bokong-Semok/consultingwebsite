<template>

  <div>
    <CalendlyInlineWidget v-bind="optionsCalendly" />
  </div>

</template>
<script lang="ts" setup>

const optionsCalendly = {
  url: 'https://calendly.com/nicko-bokongsemok/free-consulting',
}

</script>