<script lang="js" setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

function getImage(fileName) {
  try {
    const modules = import.meta.glob('@/assets/leadership/*.{png,jpg}', {eager: true, import: 'default'})
    const moduleKeys = Object.keys(modules)
    const fileSrc = moduleKeys.find(key => key.endsWith(fileName))

    return fileSrc ? modules[fileSrc] : ''
  } catch (err) {
    console.log(err)
  }
}


const leadership = [
  {
    name: "Nicko Satria Utama",
    title: "CEO and Co-Founder",
    photo: "nicko-outdoor.jpg",
    description:
        "Nicko is the CEO and co-founder of Boksem Technologies. He has 20 years of experience in software\n" +
        "                  development and delivery across different industries. He has successfully led complex IT projects\n" +
        "                  around the world, focusing on Microsoft technologies, cloud solutions like Azure, AWS, and GCP, and\n" +
        "                  enterprise integrations. Recently, he has been exploring the potential of blockchain, Web 3.0, and\n" +
        "                  artificial intelligence (AI).",
    linkedin: "https://www.linkedin.com/in/nickotech2000/",
  },
  {
    name: "Airlangga Bhumintara Amitaba",
    title: "COO and Co-Founder",
    photo: "airlangga-indoor.jpg",
    description:
        "I have quite much experience in profesional fields. Starts form programmer, pre-sales and finally Business Manager.\n" +
        "In the future I would like to take career abroad, and after that I might back home and teaching for university",
    linkedin: "https://www.linkedin.com/in/airlanggaamitaba/",
  },


];

</script>

<template>
  <div>
    <div>
      <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
        <h2 class="font-bold text-3xl text-gray-800">Leadership Team</h2>

        <v-row class="ma-2" dense>
          <v-col v-for="(item, i) in leadership" :key="i" class="pa-3 d-flex flex-column" cols="12" md="5">
            <v-card class="elevation-5 flex d-flex flex-column fill-height" max-width="450px">
              <img :alt="item.name" :src="getImage(item.photo)" style="height: 250px; "/>

              <v-card-item>
                <v-card-title>{{ item.name }}</v-card-title>

                <v-card-subtitle>
                  <span class="me-1">{{ item.title }}</span>

                </v-card-subtitle>
              </v-card-item>

              <v-divider class="mx-4 mb-1"></v-divider>

              <v-card-text class="flex">
                <div class="justify-stretch">
                  {{ item.description }}
                </div>
              </v-card-text>

              <v-divider class="mx-4 mb-1"></v-divider>

              <v-card-title>Social Media</v-card-title>

              <div class="px-4 mb-2">
                <a :href="item.linkedin" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-linkedin"/>
                  Linkedin
                </a>

              </div>


            </v-card>


          </v-col>

        </v-row>

      </div>


    </div>
  </div>

</template>

<style scoped>

</style>