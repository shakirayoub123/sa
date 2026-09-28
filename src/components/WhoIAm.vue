<template>
  <div class="space-y-24 md:space-y-32 py-10 relative z-10 w-full max-w-6xl mx-auto px-6">
     
     <!-- 1. Epic Page Header -->
     <div class="text-center mt-8 md:mt-12 relative z-10">
        <p class="text-[#A855F7] font-mono tracking-widest text-sm md:text-base mb-6 uppercase">/// About Me</p>
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-wide leading-tight">
          Systems engineered for scale, <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#CCD6F6]">designed for humans.</span>
        </h1>
     </div>

     <!-- 2. Clean Avatar & Bio Split (No badge overlap) -->
     <section class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        <!-- Photo Side (Clean, no overlap) -->
        <div class="lg:col-span-4 relative group lg:order-1 order-2">
           <!-- Subtle backdrop shadow -->
           <div class="absolute inset-0 bg-[#A855F7]/20 rounded-3xl transform rotate-3 scale-105 transition-transform duration-700 blur border border-[#693B93]/20"></div>
           <div class="relative bg-[#120524] border border-[#693B93]/40 rounded-3xl overflow-hidden shadow-2xl z-10 p-2">
              <img src="../assets/hero-photo.png" alt="Shakir Ayoub" class="w-full h-auto object-cover rounded-2xl bg-gradient-to-t from-[#0B021A] to-[#1A0A2E]" style="max-height: 550px; object-position: top;" />
           </div>
        </div>

        <!-- Text Side -->
        <div class="lg:col-span-8 space-y-8 lg:order-2 order-1">
            <h2 class="text-3xl lg:text-4xl font-bold text-white tracking-wide border-l-4 border-[#A855F7] pl-6">Who I Am</h2>
            <div class="text-[#a8b2d1] text-lg lg:text-xl font-light leading-relaxed space-y-6">
               <p>I am a highly specialized Software Developer currently operating out of Noida, India, bringing over 3 years of rigorous, direct expertise traversing the MERN Stack and Salesforce ecosystems.</p>
               <p>My career has been dedicated to constructing high-performance digital infrastructure for critical corporate layers. From weaving highly intricate frontend web overlays to engineering complex backend API microservices, my core objective is to actively stabilize and optimize sophisticated workflows.</p>
               <p>Because to me, software engineering isn't simply about logical syntax—it's about seamlessly bridging the violent gap between heavy, data-intensive architecture and fluid, frictionless human experiences.</p>
            </div>
            
            <!-- Quick Stats in Bio -->
            <div class="flex flex-wrap gap-10 pt-6 border-t border-[#693B93]/20">
               <div>
                 <h4 class="text-4xl font-bold text-white mb-2">40<span class="text-[#A855F7]">+</span></h4>
                 <p class="text-[#A855F7] text-[10px] md:text-xs font-mono tracking-widest uppercase font-bold">Projects</p>
               </div>
               <div>
                 <h4 class="text-4xl font-bold text-white mb-2">15<span class="text-[#A855F7]">+</span></h4>
                 <p class="text-[#A855F7] text-[10px] md:text-xs font-mono tracking-widest uppercase font-bold">Clients</p>
               </div>
               <div>
                 <h4 class="text-4xl font-bold text-white mb-2">3<span class="text-[#A855F7]">+</span></h4>
                 <p class="text-[#A855F7] text-[10px] md:text-xs font-mono tracking-widest uppercase font-bold">Years Exp</p>
               </div>
            </div>
        </div>
     </section>

     <!-- 3. NEW: The Core Tech Ecosystem (Chips/Badges layout) -->
     <section class="relative z-10 bg-gradient-to-b from-[#120524] to-[#0B021A] border border-[#693B93]/30 rounded-[2.5rem] p-10 md:p-16 text-center shadow-[0_0_40px_rgba(105,59,147,0.1)]">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-12 tracking-wide">The Architectural Ecosystem</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
           <!-- Salesforce Block -->
           <div class="bg-[#0B021A] border border-[#693B93]/40 p-8 rounded-2xl hover:border-[#A855F7] hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 hover:-translate-y-1">
              <i class="fas fa-cloud text-4xl text-blue-400 mb-6 block"></i>
              <h4 class="text-white font-bold mb-2 text-lg">Salesforce CRM</h4>
              <p class="text-[#a8b2d1] text-xs font-light tracking-wide leading-relaxed">Apex, LWC, OmniStudio</p>
           </div>
           
           <!-- Node Block -->
           <div class="bg-[#0B021A] border border-[#693B93]/40 p-8 rounded-2xl hover:border-[#A855F7] hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 hover:-translate-y-1">
              <i class="fab fa-node-js text-4xl text-green-400 mb-6 block"></i>
              <h4 class="text-white font-bold mb-2 text-lg">Backend Scale</h4>
              <p class="text-[#a8b2d1] text-xs font-light tracking-wide leading-relaxed">Node.js, Express, REST</p>
           </div>

           <!-- Vue/React Block -->
           <div class="bg-[#0B021A] border border-[#693B93]/40 p-8 rounded-2xl hover:border-[#A855F7] hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 hover:-translate-y-1">
              <i class="fab fa-vuejs text-4xl text-emerald-500 mb-6 block"></i>
              <h4 class="text-white font-bold mb-2 text-lg">Frontend Systems</h4>
              <p class="text-[#a8b2d1] text-xs font-light tracking-wide leading-relaxed">Vue.js, React, Tailwind</p>
           </div>
           
           <!-- Database Block -->
           <div class="bg-[#0B021A] border border-[#693B93]/40 p-8 rounded-2xl hover:border-[#A855F7] hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 hover:-translate-y-1">
              <i class="fas fa-database text-4xl text-yellow-500 mb-6 block"></i>
              <h4 class="text-white font-bold mb-2 text-lg">Data Flow</h4>
              <p class="text-[#a8b2d1] text-xs font-light tracking-wide leading-relaxed">MongoDB, SOQL, Firebase</p>
           </div>
        </div>
     </section>

     <!-- 4. Academic & Professional Journey Split -->
     <section class="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        <!-- Education -->
        <div class="backdrop-blur-xl bg-[#120524]/60 border border-[#693B93]/30 p-10 md:p-12 rounded-3xl flex flex-col justify-between">
           <div>
             <div class="flex items-center justify-between mb-8 pb-6 border-b border-[#693B93]/30">
                <h3 class="text-2xl font-bold text-white tracking-wide">Academic Roots</h3>
                <i class="fas fa-graduation-cap text-3xl text-[#A855F7] opacity-80"></i>
             </div>
             <p class="text-[#a8b2d1] text-lg font-light leading-relaxed mb-6">
               My engineering foundation was forged with a highly rigorous Bachelors of Technology (B.Tech) in Computer Science. 
             </p>
             <p class="text-[#a8b2d1] text-lg font-light leading-relaxed">
               This intense academic focus fueled my evolution from algorithmic theory directly into massive real-world API development and commercial CRM architecture.
             </p>
           </div>
        </div>

        <!-- Career -->
        <div class="backdrop-blur-xl bg-[#120524]/60 border border-[#693B93]/30 p-10 md:p-12 rounded-3xl flex flex-col justify-between">
           <div>
             <div class="flex items-center justify-between mb-8 pb-6 border-b border-[#693B93]/30">
                <h3 class="text-2xl font-bold text-white tracking-wide">Consulting Impact</h3>
                <i class="fas fa-briefcase text-3xl text-[#A855F7] opacity-80"></i>
             </div>
             <p class="text-[#a8b2d1] text-lg font-light leading-relaxed mb-6">
               My technical journey rapidly evolved from architecting scalable web overlays at Faveo to orchestrating flawlessly stable integration ecosystems at GetOnCRM. 
             </p>
             <p class="text-[#a8b2d1] text-lg font-light leading-relaxed">
               Today, I aggressively operate as a Senior Consultant at <span class="text-white font-medium">Protiviti India</span>—untangling deep infrastructural debt for elite enterprise organizations.
             </p>
           </div>
        </div>
     </section>

     <!-- 5. Things You Should Know (Principles and Ethos) -->
     <section class="relative z-10 pb-20">
        <div class="absolute top-1/2 right-1/2 translate-x-1/2 w-[700px] h-[400px] bg-[#693B93]/15 blur-[150px] rounded-full z-0 pointer-events-none"></div>

        <h2 class="text-center text-3xl md:text-4xl font-bold text-white mb-12 tracking-wide relative z-10">Things You Should Know About Me</h2>
        <div class="backdrop-blur-3xl bg-[#0B021A]/70 border border-[#693B93]/40 p-10 md:p-16 rounded-3xl shadow-[0_0_50px_rgba(105,59,147,0.15)] relative z-10 max-w-4xl mx-auto text-center">
           
           <div class="space-y-6">
             <p class="text-[#a8b2d1] text-lg md:text-xl font-light leading-relaxed">
               I don't blindly follow the coding crowd—I follow absolute structural engineering principles. Right is right, even when applying messy architectural fixes is exponentially easier, and wrong is wrong, especially when it involves overriding secure deployment protocols. 
             </p>
             <p class="text-[#a8b2d1] text-lg md:text-xl font-light leading-relaxed">
               If you are facing immense architectural scaling bias, heavy infrastructural challenges, or you simply need a specialized consultant with the absolute analytical prowess to natively untangle your technical debt—I’m literally one text away. No drama. Just absolute, reliable logic. Because when I code a solution, I build it to outlast conventions.
             </p>
             <div class="pt-10">
               <router-link to="/#contact" class="inline-flex items-center gap-4 px-12 py-5 bg-transparent border border-[#A855F7] text-white hover:bg-[#A855F7] font-bold tracking-widest text-sm md:text-base rounded-full transition-colors duration-500">
                 LET'S BUILD SOMETHING
               </router-link>
             </div>
           </div>
        </div>
     </section>

  </div>
</template>

<script>
export default {
  name: 'WhoIAm'
}
</script>
