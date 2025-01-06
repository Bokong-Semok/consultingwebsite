<script setup>
const features = [
  {
    title: "Enterprise IT Strategy & Consulting",
    description:
      "Develop and implement comprehensive IT strategies aligned with business goals",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Blockchain Technology Integration",
    description:
      "Design and deploy secure, scalable, and transparent blockchain solution",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "AI & Machine Learning Solutions",
    description:
      "Develop and implement AI/ML models for predictive analytics, automation, and personalized customer experiences ",
    icon: "bx:bxs-data",
  },
  {
    title: "Cloud Computing & Migration",
    description:
      "Migrate to cloud platforms (AWS, Azure, GCP), optimize cloud costs, and enhance security.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Cybersecurity & Risk Management",
    description:
      "Mitigate cybersecurity risks, implement robust security measures, and ensure data privacy.",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Data Analytics & Business Intelligence",
    description:
      "Collect, analyze, and visualize data to gain valuable insights into business performance.",
    icon: "bx:bxs-user",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      We combine cutting edge technology and business mindset to help you drive innovation for you and your business.
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      We develop, integrate and maintain your technology needs while your team focus on the business innovation.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
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
