<template>
  <div class="bg-[#0B021A] min-h-screen text-white pt-24 md:pt-32 flex flex-col overflow-x-hidden">
    <!-- Inherits the exact same global navigation -->
    <Navbar />
    
    <div class="flex-grow w-full max-w-6xl mx-auto px-6 mb-24 mt-8 md:mt-16" v-if="project">
       
       <!-- Back Navigation Button -->
       <router-link to="/#portfolio" class="inline-flex items-center text-[#A855F7] hover:text-white transition-colors mb-10 group text-sm font-mono tracking-widest uppercase">
          <i class="fas fa-arrow-left mr-3 group-hover:-translate-x-1 transition-transform"></i> Return to Portfolio
       </router-link>

       <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <!-- Main Visual/Display Content Side -->
          <div class="lg:col-span-8">
             <div class="rounded-[2rem] overflow-hidden border border-[#693B93]/40 shadow-[0_0_40px_rgba(105,59,147,0.2)] bg-[#120524] relative group">
                <img :src="project.image" :alt="project.name" class="w-full h-auto max-h-[500px] object-cover bg-[#0B021A]">
                <!-- Subtle Gradient overlay overlaying bottom edge -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#120524] via-transparent to-transparent opacity-80 pointer-events-none"></div>
             </div>

             <div class="mt-8 md:mt-12 w-full">
                 <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-wide break-words">{{ project.name }}</h1>
                 <div class="w-16 md:w-24 h-[3px] bg-[#A855F7] mb-8 md:mb-10 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
                 
                 <div class="text-[#a8b2d1] text-base md:text-lg lg:text-xl font-light leading-relaxed md:leading-loose space-y-6">
                    <p class="drop-shadow-sm">{{ project.description }}</p>
                 </div>
             </div>
          </div>

          <!-- Structural Specifications & Live Routing Sidebar -->
          <div class="lg:col-span-4 relative mt-8 lg:mt-0 w-full hover:z-20">
             <div class="bg-gradient-to-b from-[#120524]/90 to-[#0B021A]/80 backdrop-blur-2xl border border-[#693B93]/40 p-6 md:p-8 rounded-2xl md:rounded-3xl sticky top-32 shadow-[0_0_30px_rgba(105,59,147,0.1)]">
                
                <h3 class="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 border-b border-[#693B93]/30 pb-4 md:pb-6 flex items-center justify-between">
                   System Specs <i class="fas fa-microchip text-[#A855F7]/80"></i>
                </h3>
                
                <div class="mb-10">
                   <p class="text-[11px] md:text-xs text-[#A855F7] font-mono tracking-widest uppercase mb-4 opacity-80 gap-0">Core Technologies Architecture</p>
                   <ul class="flex flex-wrap gap-2 md:gap-3">
                     <li v-for="tool in project.tools.split(', ')" :key="tool" class="px-4 py-2 bg-[#0B021A]/80 border border-[#693B93]/50 rounded-full text-xs md:text-sm text-[#CCD6F6] font-medium shadow-inner hover:border-[#A855F7] hover:text-white transition-colors cursor-default">
                        {{ tool }}
                     </li>
                   </ul>
                </div>
                
                <!-- Action Deployment Matrix -->
                <div class="space-y-4 pt-4 border-t border-[#693B93]/20">
                   <a v-if="project.live" :href="project.live" target="_blank" class="w-full flex items-center justify-center gap-4 py-4 md:py-5 bg-[#A855F7] rounded-xl text-white font-bold tracking-widest text-sm hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(168,85,247,0.4)] relative overflow-hidden group">
                     <div class="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                     <span class="relative z-10 block">LAUNCH LIVE</span>
                     <i class="fas fa-external-link-alt relative z-10 block"></i>
                   </a>
                   
                   <a v-if="project.code" :href="project.code" target="_blank" class="w-full flex items-center justify-center gap-4 py-4 md:py-5 bg-transparent border-2 border-[#693B93]/60 hover:border-[#A855F7] rounded-xl text-white font-bold tracking-widest text-sm hover:bg-[#120524] transition-all relative overflow-hidden group">
                     <span class="relative z-10 block">READ SOURCE</span>
                     <i class="fab fa-github text-lg relative z-10 block"></i>
                   </a>
                   
                   <!-- Private Codebase Fallback Disclaimer -->
                   <div v-if="!project.code" class="text-center w-full px-4 py-4 bg-yellow-900/10 border border-yellow-600/30 rounded-xl flex items-center gap-3">
                      <i class="fas fa-lock text-yellow-500/80"></i>
                      <p class="text-xs text-yellow-200/60 font-light text-left leading-relaxed">Enterprise Architecture block. Source strictly internal to active infrastructure.</p>
                   </div>
                </div>

             </div>
          </div>
       </div>

    </div>

    <!-- Redundant Error Escape State -->
    <div class="flex-grow flex items-center justify-center" v-else>
       <div class="text-center p-12 bg-[#120524] border border-[#693B93]/30 rounded-3xl backdrop-blur-xl">
         <i class="fas fa-unlink text-6xl text-gray-600 mb-6 block"></i>
         <h2 class="text-3xl font-bold text-gray-300 mb-6">404: System Architecture Not Found</h2>
         <router-link to="/#portfolio" class="px-8 py-3 rounded-full bg-[#A855F7] text-white font-bold tracking-widest text-sm hover:opacity-90">OVERRIDE & SECURE RETURN</router-link>
       </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { data } from '@/data'

export default {
  name: 'ProjectDetail',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      project: null
    }
  },
  created() {
    // Acquire active component logic array dynamically matching data pool id metric
    const id = parseInt(this.$route.params.id);
    this.project = data.items.find(item => item.id === id);
    
    // Automatically reset visual offset bounds to prevent inherit routing overlaps
    window.scrollTo(0, 0);
  },
  watch: {
    '$route.params.id'(newId) {
       this.project = data.items.find(item => item.id === parseInt(newId));
       window.scrollTo(0, 0);
    }
  }
}
</script>
