<template>
  <section class="py-32 bg-[#0B021A] relative" id="portfolio">
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="mb-20">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center">
          <span class="text-[#9857D3] font-mono text-xl mr-3">03.</span> Some Things I've Built
        </h2>
        <div class="w-full h-[1px] bg-[#9857D3]/20 mt-4 max-w-sm"></div>
      </div>

      <!-- Projects List -->
      <div class="flex flex-col space-y-32">
        <div 
          v-for="(item, index) in items" 
          :key="item.id" 
          class="relative grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
        >
          
          <!-- Image Container (Spans columns 1-7 for odd, 6-13 for even) -->
          <div class="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden group shadow-2xl z-0 md:row-start-1"
               :class="index % 2 === 0 ? 'md:col-start-1 md:col-end-8' : 'md:col-start-6 md:col-end-13'">
            
            <!-- Beautiful background glow behind image -->
            <div class="absolute inset-0 bg-[#A855F7]/20 mix-blend-screen group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none"></div>
            
            <router-link :to="'/project/' + item.id" class="block w-full h-full relative cursor-pointer">
              <!-- Dark gradient overlay to match Figma exact aesthetic -->
              <div class="absolute inset-0 bg-gradient-to-tr from-[#120524]/70 to-[#693B93]/20 z-10 group-hover:opacity-60 transition-opacity duration-500"></div>
              <img :src="item.image" :alt="item.name" class="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 transition-all duration-500" />
            </router-link>
          </div>
          
          <!-- Text Overlapping Container (Spans columns 6-13 for odd, 1-8 for even) -->
          <div class="relative z-20 mt-8 md:mt-0 pointer-events-none md:row-start-1"
               :class="index % 2 === 0 ? 'md:col-start-6 md:col-end-13 md:text-right' : 'md:col-start-1 md:col-end-8 md:text-left'">
            
            <p class="text-[#9857D3] font-mono tracking-widest text-[13px] mb-2 uppercase">Featured Project</p>
            <router-link :to="'/project/' + item.id" class="text-[#FFFFFF] text-2xl md:text-3xl font-bold mb-6 hover:text-[#A855F7] transition-colors pointer-events-auto cursor-pointer inline-block">{{ item.name }}</router-link>
            
            <!-- Description Glass Box perfectly matching Figma overlapping shadows -->
            <div class="bg-gradient-to-br from-[#120524]/98 to-[#1A0B2E]/95 backdrop-blur-xl p-6 md:p-8 rounded-lg shadow-[-10px_20px_40px_rgba(2,5,20,0.8)] border border-[#693B93]/30 pointer-events-auto">
              <p class="text-[#CCD6F6] text-[15px] leading-relaxed">{{ item.description }}</p>
            </div>
            
            <!-- Tools List -->
            <ul class="flex flex-wrap font-mono text-[13px] text-[#A855F7] mt-6 gap-x-5 gap-y-2 pointer-events-auto"
                :class="index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'">
              <li v-for="tool in item.tools.split(', ')" :key="tool" class="hover:text-white transition-colors cursor-default whitespace-nowrap">{{ tool }}</li>
            </ul>
            
            <!-- Links (GitHub / External) -->
            <div class="flex items-center mt-6 space-x-6 pointer-events-auto"
                 :class="index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'">
              <a v-if="item.code" :href="item.code" class="text-[#CCD6F6] hover:text-[#A855F7] transition-all transform hover:-translate-y-1">
                <i class="fa-brands fa-github text-2xl"></i>
              </a>
              <a v-if="item.live" :href="item.live" target="_blank" class="text-[#CCD6F6] hover:text-[#A855F7] transition-all transform hover:-translate-y-1">
                <i class="fa-solid fa-arrow-up-right-from-square text-xl mb-1"></i>
              </a>
            </div>

          </div>
          
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { data } from '@/data'

export default {
  name: 'Portfolio',
  data() {
    return {
      items: data.items,
    };
  },
};
</script>

<style scoped>
/* Scoped overrides if needed, styling handled primarily by Tailwind via classes above */
</style>