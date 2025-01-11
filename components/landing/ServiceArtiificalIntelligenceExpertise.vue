<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const expertise = [
  {
    title: "AI/ML Strategy & Roadmap Development",
    description:
        " Define your goals for AI and machine learning. Identify the use cases that will have the biggest impact. Create a plan for successful AI and machine learning implementation.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Data Engineering & Preparation",
    description:
        "Collect, clean, and change data so it’s ready for training AI and machine learning models. Create strong data pipelines to help with fast data gathering and processing. Check the quality of the data and make sure it is secure and private.",
    icon: "bx:bx-cloud",
  },
  {
    title: "Model Development & Training",
    description:
        "Choose and use the right AI and machine learning algorithms, like deep learning, natural language processing, and computer vision. Train and adjust the models using modern techniques and tools. Check how well the models perform and find ways to improve them. ",
    icon: "bx:bx-mobile",
  },
  {
    title: "Model Deployment & Monitoring",
    description:
        "Deploy models in production environments so they work well with existing systems. Monitor how models perform in real time and retrain them when necessary to ensure accuracy. Set up strong monitoring and alert systems to spot and fix any potential problems.",
    icon: "bx:bxs-bot",
  },
  {
    title: "AI/ML Explainability & Governance",
    description:
        "Develop strategies to explain AI/ML model decisions. Ensure the ethical use of AI/ML technologies and establish governance frameworks that include data privacy and security measures.",
    icon: "bx:bx-network-chart",
  },
  {
    title: "Solution integration",
    description:
        "Integrate AI solution with customer tech stack to train and infer AI for enterprise usage. ",
    icon: "bx:bx-test-tube",
  },
];

const supportedSolutions = [
  {
    title: "Vision+ (CV)",
    description: "a type of artificial intelligence (AI) that allows computers to analyze visual data and understand objects and people in images and videos",
    folder: "ai",
    icons: "computer-vision.png",
    latestVersion: "",
    languages: [
      {
        name: "csharp",
        icons: "csharp-original.svg",
      },
      {
        name: "C++",
        icons: "cplusplus-original.svg",
      },
      {
        name: "C",
        icons: "c-original.svg",
      },
      {
        name: "javascript",
        icons: "javascript-original.svg",
      },
      {
        name: "typescript",
        icons: "typescript-original.svg",
      },
      {
        name: "python",
        icons: "python-original.svg",
      },

    ],
    platforms: [
      {
        name: "Windows 10, Windows 11, Windows Server 2018 and above",
        icons: "windows11-original.svg"
      },
      {
        name: "Linux",
        icons: "linux-original.svg"
      },
      {
        name: "Azure Cloud",
        icons: "azure-original.svg"
      },
      {
        name: "AWS Cloud",
        icons: "amazonwebservices-original-wordmark.svg"
      },
      {
        name: "Google Cloud",
        icons: "googlecloud-original.svg"
      },
      {
        name: "Tensor Flow",
        icons: "tensorflow-original.svg"
      },
      {
        name: "Pytorch",
        icons: "pytorch-original.svg"
      },
      {
        name: "Open CV",
        icons: "opencv-original.svg"
      },
    ],
    apps: [
      {
        name: "Healthcare",
        icons: "healthcare.png",
      },
      {
        name: "Manufacturing and Automation",
        icons: "manufacturing.png",
      },
      {
        name: "Autonomous Automotive",
        icons: "automotive-ai.png",
      },
      {
        name: "Security and surveillance",
        icons: "security.svg",
      },
      {
        name: "Smart farm",
        icons: "smart-farm.svg",
      },
    ],
  },
  {
    title: "NLP",
    description: "field of artificial intelligence (AI) that enables computers to understand, process, and communicate in human language. ",
    folder: "ai",
    icons: "nlp.png",
    latestVersion: "",
    languages: [
      {
        name: "csharp",
        icons: "csharp-original.svg",
      },
      {
        name: "C++",
        icons: "cplusplus-original.svg",
      },
      {
        name: "C",
        icons: "c-original.svg",
      },
      {
        name: "javascript",
        icons: "javascript-original.svg",
      },
      {
        name: "typescript",
        icons: "typescript-original.svg",
      },
      {
        name: "python",
        icons: "python-original.svg",
      },

    ],
    platforms: [
      {
        name: "Windows 10, Windows 11, Windows Server 2018 and above",
        icons: "windows11-original.svg"
      },
      {
        name: "Linux",
        icons: "linux-original.svg"
      },
      {
        name: "Azure Cloud",
        icons: "azure-original.svg"
      },
      {
        name: "AWS Cloud",
        icons: "amazonwebservices-original-wordmark.svg"
      },
      {
        name: "Google Cloud",
        icons: "googlecloud-original.svg"
      },
      {
        name: "Tensor Flow",
        icons: "tensorflow-original.svg"
      },
      {
        name: "Pytorch",
        icons: "pytorch-original.svg"
      },

    ],
    apps: [
      {
        name: "Data and Text Analytics",
        icons: "analytics.svg",
      },
      {
        name: "AI Assistant and Bot",
        icons: "ai-assisstant.svg",
      },
      {
        name: "Speech Recognition and Text to Speech",
        icons: "speech-recognition.svg",
      },

    ],
  },
  {
    title: "GPT",
    description: "Artificial intelligence (AI) models that can generate human-like text. GPT models are a type of large language model (LLM) that use deep learning to process and analyze large amounts of text data. ",
    folder: "ai",
    icons: "gpt-tech.png",
    latestVersion: "",
    languages: [
      {
        name: "csharp",
        icons: "csharp-original.svg",
      },
      {
        name: "Php",
        icons: "php-original.svg",
      },
      {
        name: "Ruby",
        icons: "ruby-original.svg",
      },
      {
        name: "javascript",
        icons: "javascript-original.svg",
      },
      {
        name: "typescript",
        icons: "typescript-original.svg",
      },
      {
        name: "python",
        icons: "python-original.svg",
      },
      {
        name: "Go",
        icons: "go-original.svg",
      },
      {
        name: "Java",
        icons: "java-original.svg",
      },

    ],
    platforms: [
      {
        name: "Windows 10, Windows 11, Windows Server 2018 and above",
        icons: "windows11-original.svg"
      },
      {
        name: "Linux",
        icons: "linux-original.svg"
      },
      {
        name: "Azure Cloud",
        icons: "azure-original.svg"
      },
      {
        name: "AWS Cloud",
        icons: "amazonwebservices-original-wordmark.svg"
      },
      {
        name: "Google Cloud",
        icons: "googlecloud-original.svg"
      },
      {
        name: "Tensor Flow",
        icons: "tensorflow-original.svg"
      },
      {
        name: "Pytorch",
        icons: "pytorch-original.svg"
      },

    ],
    apps: [
      {
        name: "Content Creation",
        icons: "content-creation.png",
      },
      {
        name: "Chatbots and virtual assistants",
        icons: "ai-assisstant.svg",
      },
      {
        name: "Customer service",
        icons: "ai-customer-service.svg",
      },
      {
        name: "Analytics",
        icons: "analytics.svg",
      },
      {
        name: "Realtime translations",
        icons: "translate.svg",
      },
    ],
  },
];


function getImage(folder, fileName) {
  try {
    const modules = import.meta.glob("@/assets/icons/**/*.{svg,png}", {eager: true, import: 'default'});
    const moduleKeys = Object.keys(modules)
    const fileSrc = moduleKeys.find(key => key.endsWith(fileName))

    return fileSrc ? modules[fileSrc] : ''
  } catch (err) {
    console.log(err)
  }
}


</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-3xl lg:text-3xl font-bold lg:tracking-tight">
      Transform your business with cutting-edge AI/ML solutions.
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

    <div>
      <div>
        <div class="flex flex-col gap-3 mx-auto max-w-6xl mt-16">
          <h2 class="font-bold text-3xl text-gray-800">Our AI solutions Technology</h2>

          <v-row class="ma-1" dense>
            <v-col v-for="(item, i) in supportedSolutions" :key="i" class="pa-3 d-flex flex-column" cols="12" md="4"
                   sm="3" xs="3">
              <v-card class="elevation-5 flex d-flex flex-column fill-height" max-width="400px">

                <div class="d-flex flex-no-wrap">
                  <v-avatar
                      class="ma-1"
                      rounded="0"
                      size="125"
                  >
                    <img :alt="item.title" :src="getImage(item.folder, item.icons)" style="height: 80px; "/>
                  </v-avatar>

                  <div>
                    <v-card-title class="text-h5">
                      {{ item.title }}
                    </v-card-title>

                    <v-card-subtitle>{{ item.latestVersion }}</v-card-subtitle>
                    <v-row class="" dense style="width:150px;">
                      <v-col v-for="(lang,index2) in item.languages" :key="index2" cols="4" md="4" sm="4" xs="4">
                        <img :alt="lang.name" :src="getImage('',lang.icons)" :title="lang.name"
                             class="" style="max-height: 30px;max-width: 30px;"/>
                      </v-col>
                    </v-row>
                  </div>
                </div>

                <v-divider class="mx-4 mb-1"></v-divider>

                <v-card-text class="flex">
                  <div class="justify-stretch">
                    {{ item.description }}
                  </div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>

                <v-card-subtitle>Platform</v-card-subtitle>
                <v-row class="ma-2" dense>
                  <v-col v-for="(lang,index3) in item.platforms" :key="index3" class="d-flex flex-column"
                         cols="4" md="4" sm="4" xs="4">
                    <img :alt="lang.name" :src="getImage('',lang.icons)" :title="lang.name" style="max-height: 30px"/>
                  </v-col>
                </v-row>

                <v-divider class="mx-4 mb-1"></v-divider>
                <v-card-subtitle>Application</v-card-subtitle>

                <v-row class="" dense>
                  <v-col v-for="(lang,index4) in item.apps" :key="index4" class="d-flex flex-column"
                         cols="12" md="12" sm="12" xs="12">

                    <div class="d-flex flex-no-wrap">
                      <v-avatar
                          class="ma-1"
                          rounded="0"
                          size="30">

                        <img :alt="lang.name" :src="getImage('',lang.icons)" :title="lang.name"
                             style="max-height: 30px;"/>

                      </v-avatar>
                      <div>
                        <v-card-subtitle class="ma-1">{{ lang.name }}</v-card-subtitle>
                      </div>
                    </div>
                  </v-col>
                </v-row>

                <v-divider class="mx-4 mb-1"></v-divider>


                <v-card-title>Action</v-card-title>

                <div class="px-4 mb-2">
                  <a href="https://calendly.com/nicko-bokongsemok/free-consulting" target="_blank">
                    <font-awesome-icon icon="fa-solid fa-computer"/>
                    Free Consulting
                  </a>

                </div>


              </v-card>


            </v-col>

          </v-row>

        </div>


      </div>
    </div>
  </section>


</template>

<style scoped>

</style>