<script setup>
const products = [
  {
    title: "Enterprise Software Development",
    description:
        "We help organizations of all sizes leverage technology to drive innovation, increase efficiency, and gain a competitive edge. Our expert team delivers customized solutions tailored to your unique business needs, from strategic planning and implementation to ongoing support and maintenance.",
    icon: "bx:bxs-briefcase",
    url: "/services/enterprise",
  },
  {
    title: "Blockchain solutions",
    description:
        "Explore the transformative potential of blockchain technology with our expert guidance. We provide comprehensive consulting services, including blockchain strategy development, proof-of-concept development, and secure blockchain implementation.",
    icon: "bx:bxs-window-alt",
    url: "/services/blockchain",
  },
  {
    title: "AI solutions",
    description:
        "Drive data-driven decisions and unlock new levels of business intelligence with our AI & Machine Learning solutions. Our experts help you leverage the power of AI to automate tasks, gain valuable insights, and achieve unprecedented levels of business growth.",
    icon: "bx:bxs-data",
    url: "/services/ai",
  },
  {
    title: "Cybersecurity & Risk Management",
    description:
        "Provides comprehensive cybersecurity solutions to safeguard your critical data and systems from cyberattacks, ensuring business continuity and protecting your brand reputation",
    icon: "bx:bxs-bot",
    url: "/services/cybersecurity",
  },

];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Services concept
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Our service starting from strategy and planning of your IT with focus on WHY, with continue of planning and
      development with focus of WHAT and HOW, and then end with operations and maintenance of your technology stacks.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of products" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon :name="item.icon" class="text-white"/>
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
        <p class="text-slate-500 mt-2 leading-relaxed">
          <NuxtLink :to="item.url" style="text-decoration: underline;">Learn More</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
