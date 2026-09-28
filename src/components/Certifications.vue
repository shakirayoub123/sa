<template>
  <section class="py-24 bg-[#0B021A] relative overflow-hidden" id="certifications">
    
    <!-- Decorative Layout BG -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-[#693B93]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      
      <!-- Split Header Layout -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <p class="text-[#A855F7] font-mono tracking-widest text-sm mb-4 uppercase">Verified Expertise</p>
          <h2 class="text-3xl md:text-5xl font-bold text-white tracking-wide">Global Certifications</h2>
          <div class="w-20 h-1 bg-[#A855F7] mt-6 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
        </div>
        
        <!-- Salesforce Trailhead Link -->
        <div class="backdrop-blur-xl bg-[#120524]/60 border border-blue-500/30 px-6 py-4 rounded-2xl flex items-center gap-4 flex-shrink-0">
           <i class="fab fa-salesforce text-blue-400 text-3xl"></i>
           <div>
             <p class="text-white font-bold tracking-wide">Trailblazer Rank: <span class="text-yellow-400">Ranger</span></p>
             <a href="#" class="text-blue-400 text-xs font-mono hover:underline">View Official Trailhead Profile &rarr;</a>
           </div>
        </div>
      </div>

      <!-- Certifications Badge Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
         
         <a v-for="(cert, index) in certifications" :key="index" :href="cert.image" target="_blank"
            class="relative group bg-gradient-to-br from-[#120524] to-[#1A0A2E] border border-[#693B93]/30 rounded-3xl p-8 hover:border-[#A855F7] transition-all duration-300 hover:-translate-y-2 box-border cursor-pointer flex flex-col h-full shadow-[0_0_20px_rgba(105,59,147,0.1)] overflow-hidden">
            
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
            
            <!-- Icon & Action Banner -->
            <div class="flex items-center justify-between mb-8 relative z-10 w-full border-b border-[#693B93]/20 pb-6">
               <div class="w-14 h-14 rounded-full flex items-center justify-center border-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] bg-[#0B021A]"
                    :class="cert.color === 'blue' ? 'border-blue-500' : 'border-green-500'">
                 <i v-if="cert.type === 'salesforce'" class="fab fa-salesforce text-blue-400 text-2xl"></i>
                 <i v-else-if="cert.type === 'mern'" class="fab fa-js text-green-500 text-2xl"></i>
                 <i v-else class="fas fa-certificate text-yellow-400 text-2xl"></i>
               </div>
               
               <!-- Hover-activated Download/View Text -->
               <div class="text-[#A855F7] text-xs font-mono flex flex-col items-end opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <span class="tracking-widest mb-1">VIEW AUTHENTIC</span>
                  <i class="fas fa-external-link-alt"></i>
               </div>
            </div>

            <!-- Content Body -->
            <div class="mb-6 relative z-10 flex-grow">
               <h4 class="text-white font-bold text-xl leading-tight mb-2 group-hover:text-white transition-colors">{{ cert.name }}</h4>
               <p class="text-gray-400 text-xs font-mono tracking-widest uppercase mb-4">{{ cert.issuer }}</p>
               <p class="text-[#a8b2d1] text-[13.5px] font-light leading-relaxed">{{ cert.desc }}</p>
            </div>
            
            <!-- Footer Locked to Bottom -->
            <div class="flex items-center justify-between mt-auto px-2 pt-4 border-t border-[#693B93]/20 shadow-[0_-15px_20px_-10px_rgba(18,5,36,1)]">
               <span class="text-xs text-[#A855F7] font-mono tracking-widest uppercase"><i class="fas fa-file-contract mr-1 opacity-70"></i> Certificate Attached</span>
               <i class="fas fa-check-circle text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]"></i>
            </div>
         </a>

      </div>

      <!-- Simulated GitHub Contribution Analytics Component -->
      <div class="bg-[#120524]/80 backdrop-blur-md border border-[#693B93]/30 p-8 md:p-10 rounded-3xl shadow-[-20px_20px_60px_rgba(11,2,26,0.8)] overflow-hidden relative">
         <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-4">
               <i class="fab fa-github text-3xl text-white"></i>
               <h3 class="text-2xl font-bold text-white border-l border-[#693B93]/50 pl-4">Commit Vector Activity</h3>
            </div>
            <p class="text-[#A855F7] font-mono text-sm hidden md:block">952 Contributions in the last year</p>
         </div>

         <!-- Scrollable Wrapper for Mobile -->
         <div class="w-full overflow-x-auto pb-4 custom-scroll">
            <div class="flex gap-2" style="min-width: 800px;">
               <!-- Generating columns of data blocks (7 days per column logic) -->
               <div v-for="col in 40" :key="col" class="flex flex-col gap-2">
                 <div v-for="day in 7" :key="day" 
                      class="w-4 h-4 rounded-[3px] transition-colors duration-500"
                      :class="getCommitColor(col, day)">
                 </div>
               </div>
            </div>
         </div>
      </div>

    </div>
  </section>
</template>

<script>
// Webpack Engine Local Assets Link Resolution
import imgDev1 from '@/assets/img.png';
import imgOmni from '@/assets/img_1.png';
import imgAdmin from '@/assets/img_2.png';
import imgPhp from '@/assets/php-mysql.jpg';
import imgReact from '@/assets/react.png';

export default {
  name: 'Certifications',
  data() {
    return {
      certifications: [
        {
          name: "JavaScript (Basic)",
          issuer: "HackerRank",
          type: "mern",
          color: "green",
          desc: "Validated proficiency in core JavaScript fundamentals, data structures, and ES6+ operational logic.",
          image: imgDev1
        },
        {
          name: "Problem Solving (Basic)",
          issuer: "HackerRank",
          type: "mern",
          color: "green",
          desc: "Demonstrated strong algorithmic thinking and capability to solve complex associative data structure constraints natively.",
          image: imgOmni
        },
        {
          name: "React (Basic)",
          issuer: "HackerRank",
          type: "mern",
          color: "green",
          desc: "Certified mastery of React fundamentals including state management, component lifecycles, and hooks execution.",
          image: imgAdmin
        },
        {
           name: "Frontend Specialist Architecture",
           issuer: "React Ecosystem",
           type: "mern",
           color: "green",
           desc: "Advanced frontend web orchestration deploying reactive UI components against scalable APIs.",
           image: imgReact
        },
        {
           name: "PHP & MySQL Infrastructure",
           issuer: "Spoken Tutorial (IIT Bombay)",
           type: "mern",
           color: "green",
           desc: "Comprehensive certification covering traditional backend web orchestration and relational database architecture.",
           image: imgPhp
        }
      ]
    }
  },
  methods: {
    // Generates a random realistic Github grid distribution favoring dark/empty blocks with sporadic intense commit days
    getCommitColor(col, day) {
      const rand = Math.random();
      // Empty gap (blends into the card bg)
      if (rand > 0.6) return 'bg-[#1A0A2E]'; 
      // Tier 1 (Light green activity)
      if (rand > 0.3) return 'bg-[#0e4429]';
      // Tier 2 (Medium green activity)
      if (rand > 0.1) return 'bg-[#006d32]';
      // Tier 3 (High green activity)
      if (rand > 0.03) return 'bg-[#26a641]';
      // Tier 4 (Maximum activity / Neon green glow)
      return 'bg-[#39d353] shadow-[0_0_8px_rgba(57,211,83,0.4)]';
    }
  }
}
</script>

<style scoped>
.custom-scroll::-webkit-scrollbar {
  height: 6px;
}
.custom-scroll::-webkit-scrollbar-track {
  background: #0B021A;
  border-radius: 10px;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #693B93;
  border-radius: 10px;
}
</style>
