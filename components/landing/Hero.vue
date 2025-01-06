<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
          class="rounded-full transition-transform transform hover:scale-125"
          src="~/assets/img/hero.png"
          alt="Starship starts the engine"
          loading="eager"
          format="avif"
          width="512"
          height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Unlocking Business Potential Through Cutting-Edge Technology
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Boksem - Empowering Enterprise with AI, Blockchain & Beyond.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
            href="https://calendly.com/nicko-bokongsemok/free-consulting"
            target="_blank"
            rel="noopener"
        >Schedule a Free Consultation
        </LandingLink>

      </div>
    </div>
  </main>
</template>
