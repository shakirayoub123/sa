<template>
  <section class="py-24 bg-[#0B021A] border-t border-[#693B93]/20 relative z-10" id="services">
    <!-- Ambient Space Glow -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-[#693B93]/5 blur-[200px] rounded-full z-0 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Header -->
      <div class="mb-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center md:justify-start">
            <span class="text-[#9857D3] font-mono text-xl mr-3">02.</span> My Services
          </h2>
          <p class="text-[#CCD6F6] text-sm md:text-base tracking-wide mt-2">Specialized robust technical capabilities</p>
        </div>
        <div class="hidden md:block w-1/3 h-[1px] bg-[#9857D3]/20 mt-4"></div>
      </div>
      
      <!-- Dynamic Bento Box UI Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto md:auto-rows-[minmax(260px,auto)]">
        
        <div v-for="(service, index) in services" :key="index" 
             :class="service.bentoClass"
             class="group relative overflow-hidden bg-gradient-to-br from-[#120524]/80 to-[#1A0A2E]/90 backdrop-blur-3xl border border-[#693B93]/30 rounded-3xl p-8 hover:border-[#A855F7]/80 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all duration-500">
          
          <!-- Massive Background Icon Watermark (Retained for visual aesthetic) -->
          <i :class="service.icon" class="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 text-[150px] md:text-[200px] text-[#A855F7] opacity-[0.03] group-hover:scale-110 group-hover:opacity-[0.08] transition-all duration-700 pointer-events-none transform -rotate-12"></i>
          
          <div class="relative z-10 h-full flex flex-col">
            <!-- Exact Corporate Logo Badge & Tag -->
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-2xl bg-[#0B021A] border border-[#A855F7]/30 flex items-center justify-center shadow-lg shadow-[#A855F7]/10 flex-shrink-0 overflow-hidden p-2.5">
                <img :src="service.logo" :alt="service.title + ' Logo'" class="w-full h-full object-contain filter drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]" />
              </div>
              <p class="text-[#A855F7] text-[10px] md:text-[11px] font-mono tracking-widest uppercase font-bold">{{ service.tag }}</p>
            </div>
            
            <!-- Body Content -->
            <h3 class="text-2xl font-semibold text-white mb-3 tracking-wide">{{ service.title }}</h3>
            <p class="text-[#a8b2d1] text-[14px] font-light leading-relaxed mb-8 flex-grow">
              {{ service.description }}
            </p>
            
            <!-- Quick Link CTA -->
            <div class="mt-auto">
              <a href="#contact" class="inline-flex items-center gap-2 text-gray-400 group-hover:text-[#A855F7] font-medium text-sm transition-colors duration-300 font-mono tracking-wider">
                 INITIATE <i class="fas fa-arrow-right text-xs group-hover:translate-x-2 transition-transform duration-300"></i>
              </a>
            </div>
          </div>
          
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          title: 'MERN Stack Engineering',
          tag: 'Full-Stack Ecosystem',
          icon: 'fas fa-layer-group',
          logo: 'https://www.google.com/s2/favicons?domain=react.dev&sz=128',
          description: 'End-to-end custom web applications built on MongoDB, Express, React/Vue, and Node.js. Optimized for massive structural backend scale, exceptionally secure authentication, and seamless front-end interactive experiences.',
          bentoClass: 'md:col-span-2 md:row-span-1' // Wide horizontal box
        },
        {
          title: 'Salesforce Architecture',
          tag: 'Enterprise CRM Consulting',
          icon: 'fas fa-cloud',
          logo: 'https://www.google.com/s2/favicons?domain=salesforce.com&sz=128',
          description: 'Deep and comprehensive Salesforce optimization. Architecting robust enterprise solutions utilizing custom Apex triggers, lightweight LWC interfaces, complex OmniStudio workflows, and executing hyper-secure scalable third-party API REST integrations directly into your proprietary CRM.',
          bentoClass: 'md:col-span-1 md:row-span-2' // Tall vertical pillar box
        },
        {
          title: 'Technical SEO Optimization',
          tag: 'Performance Analytics',
          icon: 'fas fa-chart-line',
          logo: 'https://www.google.com/s2/favicons?domain=search.google.com&sz=128',
          description: 'Executing technical audits, structural semantic markup alignment, Core Web Vitals acceleration, and mobile-first logic.',
          bentoClass: 'md:col-span-1 md:row-span-1' // Small box
        },
        {
          title: 'Domain & Cloud Deployments',
          tag: 'Infrastructure pipelines',
          icon: 'fas fa-server',
          logo: 'https://www.google.com/s2/favicons?domain=vercel.com&sz=128',
          description: 'Seamless cloud application deployment architectures operating across AWS & Vercel alongside complete custom domain mapping, DNS config routing, and automated SSL provisioning.',
          bentoClass: 'md:col-span-1 md:row-span-1' // Small box
        }
      ]
    }
  }
}
</script>