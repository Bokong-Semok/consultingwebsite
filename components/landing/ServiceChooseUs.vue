<script lang="ts" setup>
const whychooseus = [
  {
    title: "Experienced Team",
    description:
        "Our team of expert developers, architects, and consultants possess deep industry knowledge and a passion for innovation",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Agile Methodology",
    description:
        "We embrace agile development principles to ensure flexibility, collaboration, and rapid delivery of value.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Customer-Centric Approach",
    description:
        "We prioritize your business needs and objectives to deliver solutions that meet your specific requirements",
    icon: "bx:bxs-data",
  },
  {
    title: "Commitment to Excellence",
    description:
        " We are dedicated to providing exceptional service, exceeding your expectations, and building long-term partnerships.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Strong quality commitment",
    description:
        "Our development will test multiple times with TDD",
    icon: "bx:bxs-test-tube",
  },

];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Why choose Boksem Technologies as your technology partner
    </h2>

  </div>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of whychooseus" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon :name="item.icon" class="text-white"/>
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>