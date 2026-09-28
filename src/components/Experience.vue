<template>
  <section class="py-24 bg-[#0B021A] relative z-10" id="experience">
    <!-- Glow -->
    <div class="absolute top-1/2 left-0 w-[400px] h-[600px] bg-[#693B93]/10 blur-[150px] rounded-full z-0 pointer-events-none"></div>

    <div class="max-w-5xl mx-auto px-6 relative z-10">
      
      <!-- Header -->
      <div class="mb-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center md:justify-start">
            <span class="text-[#9857D3] font-mono text-xl mr-3">03.</span> Work Experience
          </h2>
          <p class="text-[#CCD6F6] text-sm md:text-base tracking-wide mt-2">My professional background and consulting history</p>
        </div>
        <div class="hidden md:block w-1/3 h-[1px] bg-[#9857D3]/20 mt-4"></div>
      </div>
      
      <!-- Vertical Timeline Layout -->
      <div class="relative border-l-2 border-[#693B93]/30 ml-4 md:ml-8 py-4 space-y-16">
        
        <div v-for="(job, index) in experience" :key="index" class="relative pl-10 md:pl-16 group">
          
          <!-- Timeline Node / Company Logo -->
          <div class="absolute -left-[25px] md:-left-[33px] bg-[#120524] rounded-full p-2 border-2 border-[#A855F7] w-[48px] h-[48px] md:w-[64px] md:h-[64px] flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all duration-300 z-10 overflow-hidden">
             <!-- Real Company Logo Image -->
             <img :src="job.logo" :alt="job.company + ' Logo'" class="w-full h-full object-contain rounded-full bg-white/5 p-1" />
          </div>
          
          <!-- Experience Card -->
          <div class="bg-gradient-to-br from-[#120524]/90 to-[#1A0A2E]/80 backdrop-blur-xl p-8 rounded-2xl border border-[#693B93]/30 hover:border-[#A855F7]/70 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(105,59,147,0.15)] transition-all duration-300">
            
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <div>
                <h3 class="text-2xl font-bold text-white tracking-wide">{{ job.title }}</h3>
                <h4 class="text-lg text-[#CCD6F6] font-medium mt-1">{{ job.company }}</h4>
              </div>
              
              <!-- Date Badge -->
              <div class="inline-flex items-center px-4 py-2 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/30 text-[#A855F7] text-xs font-mono font-bold tracking-widest whitespace-nowrap w-max">
                {{ job.date }}
              </div>
            </div>
            
            <p class="text-[#a8b2d1] text-[14px] leading-relaxed font-light mb-6">
              {{ job.description }}
            </p>
            
            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-2 mt-auto">
              <span v-for="(tech, i) in job.tech" :key="i" class="px-3 py-1 bg-[#0B021A] border border-[#693B93]/50 rounded text-xs text-[#CCD6F6] font-mono hover:border-[#A855F7] transition-colors cursor-default">
                {{ tech }}
              </span>
            </div>
            
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experience: [
        {
          company: 'Protiviti India Member Firm',
          title: 'Senior Consultant',
          date: 'Jun 2026 - Present',
          logo: 'https://www.google.com/s2/favicons?domain=protiviti.com&sz=128',
          description: 'Delivering massive-scale enterprise solutions across Sales Cloud, Service Cloud, and OmniStudio. Designing complex Salesforce business architectures and automating workflows to save hundreds of operational hours.',
          tech: ['Salesforce', 'Apex', 'LWC', 'OmniStudio']
        },
        {
          company: 'GetOnCRM Solutions Inc',
          title: 'Software Engineer',
          date: 'Jun 2025 - Jun 2026',
          logo: 'https://www.google.com/s2/favicons?domain=getoncrm.com&sz=128',
          description: 'Developed highly scalable Salesforce applications leveraging native Apex and LWC. Executed seamless cross-platform integrations using REST APIs for diverse enterprise clients spanning Service Cloud and Health Cloud.',
          tech: ['Sales Cloud', 'REST API', 'SOQL', 'LWC']
        },
        {
          company: 'Faveo Helpdesk',
          title: 'Associate Software Engineer',
          date: 'Nov 2022 - Apr 2025',
          logo: 'https://www.google.com/s2/favicons?domain=faveohelpdesk.com&sz=128',
          description: 'Engineered responsive client-facing web overlays utilizing modern frameworks including Vue.js and React. Built specialized Node.js microservices directly handling backend API sync protocols securely.',
          tech: ['Vue.js', 'React', 'Node.js', 'JavaScript']
        },
        {
          company: 'Yarikul Infotech',
          title: 'Summer Intern',
          date: 'Jun 2019 - Jul 2019',
          logo: 'https://www.google.com/s2/favicons?domain=yarikul.com&sz=128',
          description: 'Acquired foundational hands-on expertise building layout interfaces utilizing raw HTML, CSS, JavaScript, and Bootstrap. Assisted senior engineers in drafting scalable client web components.',
          tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript']
        }
      ]
    }
  }
}
</script>
