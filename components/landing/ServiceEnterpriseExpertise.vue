<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const expertise = [
  {
    title: "Custom Application Development",
    description:
        " We design, develop, and deploy tailored applications that meet your unique business requirements.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Cloud Computing",
    description:
        "We leverage cloud platforms to deliver scalable, cost-effective, and secure applications.",
    icon: "bx:bx-cloud",
  },
  {
    title: "Mobile Application Development",
    description:
        "We create engaging mobile experiences for both iOS and Android devices.",
    icon: "bx:bx-mobile",
  },
  {
    title: "Modern Framework and Language",
    description:
        " We choose multiple framework and programming language to achieve result",
    icon: "bx:bxs-bot",
  },
  {
    title: "Low latency and high performance datastore",
    description:
        "We combine high performance data store to improve performance for data across the company",
    icon: "bx:bx-network-chart",
  },
  {
    title: "Devops and Agile Development",
    description:
        "We employ agile methodologies and DevOps practices to accelerate development and ensure continuous delivery",
    icon: "bx:bx-test-tube",
  },
];

const supportedFramework = [
  {
    title: "Dotnet Core",
    description: "Our programming language are C# and F# which suitable for development of desktop, mobile and cloud application",
    folder: "dotnetcore",
    icons: "dotnetcore-original.svg",
    latestVersion: "8.0-LTS and 9.0-STS",
    languages: [
      {
        name: "csharp",
        icons: "csharp-original.svg",
      },
      {
        name: "fsharp",
        icons: "fsharp-original.svg",
      }

    ],
    platforms: [
      {
        name: "Android",
        icons: "android-original.svg"
      },
      {
        name: "MacOS and IOS",
        icons: "apple-original.svg"
      },
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
        name: "Docker",
        icons: "docker-original.svg"
      },

    ]
  },
  {
    title: "NodeJS",
    description: "Our programming language are Javascript and Typescript for most suitable for modern and robust development. Combine with multiple framework to achieve result",
    folder: "nodejs",
    icons: "nodejs-original.svg",
    latestVersion: "22.x and 23.x",
    languages: [
      {
        name: "javascript",
        icons: "javascript-original.svg",
      },
      {
        name: "typescript",
        icons: "typescript-original.svg",
      }

    ],
    platforms: [
      {
        name: "Android",
        icons: "android-original.svg"
      },
      {
        name: "MacOS and IOS",
        icons: "apple-original.svg"
      },
      {
        name: "Modern Windows",
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
        name: "Docker",
        icons: "docker-original.svg"
      },

    ],
  },
  {
    title: "MySQL",
    description: "MySQL is an open source relational database management system (RDBMS) that’s used to store and manage data. Its reliability, performance, scalability, and ease of use make MySQL a popular choice for developers",
    folder: "mysql",
    icons: "mysql-original.svg",
    latestVersion: "8.x",
    languages: [],
    platforms: [
      {
        name: "Modern Windows",
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


    ],
  },
  {
    title: "SQL Server",
    description: "SQL Server, developed by Microsoft, is a relational database management system (RDBMS) that stores and retrieves data requested by other software applications",
    folder: "microsoftsqlserver",
    icons: "microsoftsqlserver-original.svg",
    latestVersion: "2019 and 2022",
    languages: [],
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
        name: "Docker",
        icons: "docker-original.svg"
      },

    ],
  },
  {
    title: "MongoDB",
    description: "a document-oriented, non-relational database that stores data in JSON-like documents",
    folder: "mongodb",
    icons: "mongodb-original.svg",
    latestVersion: "8.x",
    languages: [],
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
        name: "Docker",
        icons: "docker-original.svg"
      },

    ],
  },
];


function getImage(folder, fileName) {
  try {
    const modules = import.meta.glob("@/assets/icons/**/*.svg", {eager: true, import: 'default'});
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

    <div>
      <div>
        <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
          <h2 class="font-bold text-3xl text-gray-800">Supported Framework and Datastore</h2>

          <v-row class="ma-2" dense>
            <v-col v-for="(item, i) in supportedFramework" :key="i" class="pa-3 d-flex flex-column" cols="12" md="5">
              <v-card class="elevation-5 flex d-flex flex-column fill-height" max-width="450px">
                <div>

                </div>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-avatar
                      class="ma-3"
                      rounded="0"
                      size="125"
                  >
                    <img :alt="item.title" :src="getImage(item.folder, item.icons)" style="max-height: 80px; "/>
                  </v-avatar>

                  <div>
                    <v-card-title class="text-h5">
                      {{ item.title }}
                    </v-card-title>

                    <v-card-subtitle>Latest</v-card-subtitle>
                    <v-card-subtitle>{{ item.latestVersion }}</v-card-subtitle>
                    <v-row class="ma-2" dense>
                      <v-col v-for="(lang,index2) in item.languages" :key="index2" class="pa-3 d-flex flex-column"
                             cols="12"
                             md="5">
                        <img :alt="lang.name" :src="getImage('',lang.icons)" :title="lang.name"
                             class="" style="max-height: 20px"/>
                      </v-col>
                    </v-row>


                  </div>


                </div>

                <v-row class="ma-2" dense>
                  <v-col v-for="(lang,index3) in item.platforms" :key="index3" class="d-flex flex-column"
                         cols="3" md="3" sm="3" xs="3">
                    <img :alt="lang.name" :src="getImage('',lang.icons)" :title="lang.name" style="max-height: 30px"/>
                  </v-col>
                </v-row>

                <v-divider class="mx-4 mb-1"></v-divider>

                <v-card-text class="flex">
                  <div class="justify-stretch">
                    {{ item.description }}
                  </div>
                </v-card-text>

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