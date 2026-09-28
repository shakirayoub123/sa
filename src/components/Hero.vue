<template>
  <section class="relative mt-24 overflow-hidden">

    <!-- BACKGROUND GRADIENT DECORATIONS -->
    <div class="absolute top-0 -left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
    <div class="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full blur-2xl opacity-30"></div>

    <div class="relative flex flex-col-reverse md:flex-row items-center gap-14 md:gap-24">

      <!-- LEFT CONTENT -->
      <div class="flex-1 space-y-6 animate-slideUp">

        <p class="text-sm tracking-widest text-blue-600 font-semibold uppercase">
          Salesforce · Vue.js · OmniStudio Developer
        </p>

        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
          Crafting <span class="text-blue-600">Modern Experiences</span><br />
          & Scalable Salesforce Solutions
        </h1>

        <p class="text-gray-600 text-lg max-w-xl">
          I specialize in building robust OmniStudio applications, Salesforce integrations,
          and clean, modern UIs powered by Vue.js & TailwindCSS.
        </p>

        <div class="flex gap-4 pt-3">
          <a
              href="#projects"
              class="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition-all"
          >
            🚀 View My Work
          </a>

          <a
              href="#contact"
              class="px-6 py-3 border font-medium rounded-xl hover:bg-gray-100 transition-all"
          >
            📩 Contact Me
          </a>
        </div>
      </div>

      <!-- RIGHT IMAGE AREA -->
      <div class="flex-1 flex justify-center animate-fadeInSlow">
        <div
            class="relative h-56 w-56 md:h-64 md:w-64 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-blue-400 to-blue-600 p-1 shadow-xl"
        >
          <div class="rounded-full bg-white h-full w-full overflow-hidden">
            <!-- Replace with your real image -->
            <img
                src="/your-photo.png"
                alt="Shakir"
                class="h-full w-full object-cover"
            />
          </div>

          <!-- Glow ring -->
          <div class="absolute inset-0 rounded-full border border-white/30 blur-xl"></div>
        </div>
      </div>

    </div>
  </section>
</template>
