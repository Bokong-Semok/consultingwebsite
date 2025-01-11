<script setup>

import {inject} from 'vue'

const globalIconStore = inject('globalIconStore')

const expertise = [
  {
    title: "Assess and Mitigate Cyber Risks",
    description:
        " We do threat modeling and risk Assessments for IT infrastructure and provide recommendation ",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Enhance Security Posture",
    description:
        "Implement and manage SIEM systems to detect and respond to security incidents in real-time; with deployment of endpoint security ",
    icon: "bx:bx-cloud",
  },
  {
    title: "Identity & Access Management (IAM)",
    description:
        "Implement multi-factor authentication (MFA) and other strong authentication methods to enhance security.",
    icon: "bx:bx-mobile",
  },
  {
    title: "Incident Response & Disaster Recovery",
    description:
        " Develop and test comprehensive incident response plans to minimize the impact of cyberattacks and ensure business continuity. ",
    icon: "bx:bxs-bot",
  },
  {
    title: "Security Awareness Training",
    description:
        " Raise overall security awareness among your workforce through interactive training modules and exercises.",
    icon: "bx:bx-network-chart",
  },

];


function getImage(folder, fileName) {
  try {
    // const modules = import.meta.glob("@/assets/icons/**/*.{svg,png}", {eager: true, import: 'default'});
    const modules = globalIconStore.allIcons;
    const moduleKeys = Object.keys(modules);
    const fileSrc = moduleKeys.find(key => key.endsWith(fileName));

    return fileSrc ? modules[fileSrc] : ''
  } catch (err) {
    console.log(err)
  }
}

</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-3xl lg:text-3xl font-bold lg:tracking-tight">
      Our expertises
    </h2>

  </div>
  <section id="expertise">
    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
      <div v-for="item of expertise" class="flex gap-4 items-start">
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
  </section>


</template>

<style scoped>

</style>