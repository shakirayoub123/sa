<template>
  <header class="relative min-h-screen flex flex-col justify-between bg-[#0B021A] overflow-hidden pt-24" id="header">
    
    <!-- Starfield Layer -->
    <div class="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
      <span v-for="s in stars" :key="s.id" class="star"
            :style="{ left: s.x + '%', top: s.y + '%', width: s.size + 'px', height: s.size + 'px', animationDelay: s.delay + 's', animationDuration: s.dur + 's' }"></span>
    </div>

    <!-- Central Glow Layer -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-700/20 blur-[130px] rounded-full z-0 pointer-events-none"></div>

    <!-- Hero Content -->
    <div class="flex-grow flex flex-col items-center justify-center relative z-10 w-full px-4">
      
      <!-- Top Graphic & Text Block -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-20 max-w-3xl w-full">
        
        <!-- Avatar with Glow -->
        <div class="relative flex-shrink-0 flex items-end justify-center w-48 sm:w-56 md:w-64 h-64 sm:h-72 md:h-80 mx-auto md:mx-0">
          <div class="absolute inset-0 bg-purple-600/40 blur-[60px] rounded-full scale-110 z-0 pointer-events-none"></div>
          <img src="../assets/hero-photo.png" alt="Shakir Ayoub" class="relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_0_15px_rgba(105,59,147,0.4)] transition-transform duration-500 hover:scale-105" style="mask-image: linear-gradient(to bottom, black 70%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);" />
        </div>
        
        <!-- Aesthetic Text -->
        <div class="text-center md:text-left relative z-10 mt-6 md:mt-0 px-4 md:px-0 w-full max-w-sm md:max-w-none mx-auto md:mx-0">
          <div class="relative mb-3 flex items-center justify-center md:justify-start">
            <svg class="absolute -top-6 -left-12 w-10 h-10 text-gray-400 opacity-60 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 10c0-4.418 5.373-8 12-8 2.378 0 4.59.507 6.42 1.37M21.42 3.37L22 7l-3.63-.58"></path>
            </svg>
            <p class="text-gray-300 text-sm tracking-wide">Hello! I Am <span class="text-purple-500 font-medium tracking-widest text-base">Shakir Ayoub</span></p>
          </div>
          
          <p class="text-gray-400 text-sm tracking-wide mb-2">A Full-Stack & Salesforce Developer who</p>
          <h2 class="text-white text-4xl md:text-5xl font-light leading-tight tracking-wide mb-4">
            Architects scalable<br/>
            cloud <span class="relative inline-block px-1">
              solutions
              <svg class="absolute inset-0 w-full h-full text-purple-500 scale-125 transform -rotate-2" fill="none" viewBox="0 0 100 40" stroke="currentColor" stroke-width="1.5">
                <ellipse cx="50" cy="20" rx="45" ry="18"></ellipse>
              </svg>
            </span>
          </h2>
          <p class="text-gray-400 text-xs md:text-sm max-w-sm leading-relaxed">Delivering enterprise applications across the MERN stack and Salesforce cloud ecosystems.</p>
        </div>
      </div>

      <!-- Main Text -->
      <div class="space-y-6 max-w-3xl mx-auto text-center w-full relative z-10 px-4 md:px-6">
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-white mb-2 tracking-wide break-words">
          I'm a MERN & Salesforce Developer<span class="font-light">|</span>
        </h1>
        <p class="text-sm md:text-base text-gray-400 font-light tracking-wide mb-8 px-2">
          Currently a Senior Consultant at <span class="text-blue-400 whitespace-nowrap"><i class="fa-solid fa-cloud mr-1"></i>Protiviti India</span>
        </p>
        
        <p class="text-base md:text-lg text-gray-300 leading-relaxed font-light mt-8 px-2 md:px-0 max-w-2xl mx-auto">
          A passionate Developer with 3+ years of expertise spanning the MERN Stack (MongoDB, Express, React, Node.js) alongside extensive Salesforce mastery in LWC, Apex, and OmniStudio. I build scalable, secure digital products that create an equilibrium between user needs and business goals.
        </p>
      </div>
    </div>
    
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      stars: []
    }
  },
  mounted() {
    this.stars = Array.from({ length: 90 }, (_, id) => ({
      id,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.8,
      delay: Math.random() * 5,
      dur: 2.5 + Math.random() * 4
    }))
  }
}
</script>

<style scoped>
.star {
  position: absolute;
  border-radius: 9999px;
  background: #E9D5FF;
  opacity: 0.2;
  animation: twinkle 4s ease-in-out infinite;
}
@keyframes twinkle {
  0%, 100% { opacity: 0.1; transform: scale(0.8); }
  50%      { opacity: 1; transform: scale(1.3); }
}
</style>
