<script setup>
const benefits = [
  {
    title: "Streamline operations",
    description:
        "Automate workflows, reduce manual tasks, and improve efficiency across your organization.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Enhance customer experience",
    description:
        "Create intuitive and engaging applications that delight your customers and build lasting relationships.",
    icon: "bx:bx-cloud",
  },
  {
    title: "Gain a competitive edge",
    description:
        "Develop innovative solutions that differentiate your business, increase market share, and drive revenue growth",
    icon: "bx:bx-mobile",
  },
  {
    title: "Improve decision-making",
    description:
        " Leverage data-driven insights with powerful analytics and reporting tools.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Increase scalability and flexibility",
    description:
        " Build applications that can adapt to your evolving business needs and scale seamlessly as you grow.",
    icon: "bx:bx-network-chart",
  },

];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-2xl lg:text-2xl font-bold lg:tracking-tight">
      Our benefits
    </h2>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
      <div v-for="item of benefits" class="flex gap-4 items-start">
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
  </div>
</template>

<style scoped>

</style>