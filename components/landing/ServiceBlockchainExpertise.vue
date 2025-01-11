<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const expertise = [
  {
    title: "Strategic Roadmap Development",
    description:
        " Set clear business objectives that align with blockchain solutions. Conduct feasibility studies and market analysis. Create a detailed implementation roadmap with timelines and resource allocation.nts.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Custom Blockchain Development",
    description:
        "We create custom blockchain applications tailored to your needs, utilizing platforms like Ethereum and Hyperledger Fabric. Our focus is on scalability, security, and interoperability. ",
    icon: "bx:bx-cloud",
  },
  {
    title: "Smart Contract Development",
    description:
        "Automate self-executing contracts to enhance business processes and ensure legal compliance. ",
    icon: "bx:bx-mobile",
  },
  {
    title: "Tokenization Services",
    description:
        "Tokenize assets such as real estate, art, and securities for improved liquidity and ownership transparency. Provide guidance on token standards (ERC-20, ERC-721) and ensure regulatory compliance.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Blockchain Integration",
    description:
        "Effectively integrate blockchain technology with existing IT systems and applications. Utilize APIs and other integration methods to ensure smooth data flow.",
    icon: "bx:bx-network-chart",
  },
  {
    title: "Regulatory Compliance",
    description:
        "Advise on and ensure compliance with relevant blockchain regulations (e.g., KYC/AML, data privacy).",
    icon: "bx:bx-test-tube",
  },
];

const supportedBlockchain = [
  {
    title: "Ethereum",
    description: "Ethereum is a decentralized, public blockchain platform that allows users to create and run applications without a middleman. It's made up of a peer-to-peer network that uses a cryptocurrency",
    folder: "blockchain",
    icons: "ethereum.svg",
    latestVersion: "",
    languages: [],
    platforms: [
      {
        name: "csharp",
        icons: "csharp-original.svg",
      },
      {
        name: "javascript",
        icons: "javascript-original.svg",
      },
      {
        name: "solidity",
        icons: "solidity-original.svg",
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


    ],
    apps: [
      {
        name: "web 3.0, Gaming, Social Media",
        icons: "web3.png",
      },
      {
        name: "NFT Market",
        icons: "nft.png",
      },
      {
        name: "Physical and Virtual Marketplace",
        icons: "retailer.png",
      },
      {
        name: "Decentralized Financial",
        icons: "wallet.png",
      },
    ],
  },
  {
    title: "Hyperledger",
    description: "Hyperledger is a collection of open-source projects that create the frameworks, tools, and standards for building blockchain-based applications and distributed ledgers",
    folder: "blockchain",
    icons: "hyperledger.svg",
    latestVersion: "",
    languages: [],
    platforms: [
      {
        name: "csharp",
        icons: "csharp-original.svg",
      },
      {
        name: "javascript",
        icons: "javascript-original.svg",
      },
      {
        name: "java",
        icons: "java-original.svg",
      },
      {
        name: "python",
        icons: "python-original.svg",
      },
      {
        name: "go",
        icons: "go-original.svg",
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


    ],
    apps: [
      {
        name: "Supply Chain ",
        icons: "supply-chain.png",
      },
      {
        name: "Decentralized Financial Transaction",
        icons: "financial-statement.png",
      },
      {
        name: "Identity Verification ",
        icons: "id-verify.png",
      },
      {
        name: "Healthcare management",
        icons: "healthcare.png",
      },
    ],
  },
  {
    title: "Solana",
    description: "Solana is a blockchain platform which uses a proof-of-stake mechanism to provide smart contract functionality",
    folder: "blockchain",
    icons: "solana-sol-logo.svg",
    latestVersion: "",
    languages: [],
    platforms: [
      {
        name: "javascript",
        icons: "javascript-original.svg",
      },
      {
        name: "rust",
        icons: "rust-original.svg",
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


    ],
    apps: [
      {
        name: "DApps Gaming ",
        icons: "dapps-gaming.png",
      },
      {
        name: "Decentralized Financial Transaction",
        icons: "financial-statement.png",
      },
      {
        name: "Payment and Payment Gateway",
        icons: "payment-gateway.svg",
      },
      {
        name: "NFT marketplace",
        icons: "nft.png",
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
        <div class="flex flex-col gap-3 mx-auto max-w-6xl mt-16">
          <h2 class="font-bold text-3xl text-gray-800">Our Supported Blockchain Technology</h2>

          <v-row class="ma-2" dense>
            <v-col v-for="(item, i) in supportedBlockchain" :key="i" class="pa-3 d-flex flex-column" cols="12" md="4"
                   sm="3" xs="3">
              <v-card class="elevation-5 flex d-flex flex-column fill-height" max-width="400px">

                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-avatar
                      class="ma-3"
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
                    <v-row class="ma-2" dense>
                      <v-col v-for="(lang,index2) in item.languages" :key="index2" class="pa-3 d-flex flex-column"
                      >
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
                         cols="3" md="3" sm="3" xs="3">
                    <img :alt="lang.name" :src="getImage('',lang.icons)" :title="lang.name" style="max-height: 30px"/>
                  </v-col>
                </v-row>

                <v-divider class="mx-4 mb-1"></v-divider>
                <v-card-subtitle>Application</v-card-subtitle>

                <v-row class="ma-2" dense>
                  <v-col v-for="(lang,index4) in item.apps" :key="index4" class="d-flex flex-column"
                         cols="12" md="12" sm="12" xs="12">

                    <div class="d-flex flex-no-wrap">
                      <v-avatar
                          class="ma-3"
                          rounded="0"
                          size="30">

                        <img :alt="lang.name" :src="getImage('',lang.icons)" :title="lang.name"
                             style="max-height: 30px;"/>

                      </v-avatar>
                      <div>
                        <v-card-subtitle class="ma-3">{{ lang.name }}</v-card-subtitle>
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