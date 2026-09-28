<template>
  <section class="py-24 bg-[#0B021A] text-gray-300 w-full border-t border-[#693B93]/20 relative z-10" id="about">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-800/10 blur-[130px] rounded-full z-0 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Top Grid: Image + About Info -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <!-- Image Section -->
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-[#693B93] rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
          <img src="../assets/IMG_20230312_001125_915.jpg" alt="Shakir Ayoub" class="relative rounded-2xl w-full object-cover shadow-[0_0_40px_rgba(105,59,147,0.3)] border border-[#693B93]/50" />
        </div>
        
        <!-- Content Section -->
        <div class="space-y-6 text-lg">
          <h2 class="text-3xl md:text-5xl font-medium text-white mb-8">About <span class="text-purple-400">Me</span></h2>
          
          <p class="leading-relaxed text-gray-400 font-light">
            I'm a <span class="text-purple-400 font-medium">Salesforce Developer</span> with 3+ years of experience in Salesforce customization and platform development.
            Proficient in LWC, Apex, OmniStudio workflows, and seamless integrations using REST APIs. I'm currently working as a Senior Consultant at Protiviti India Member Firm, continually pushing boundaries in enterprise software delivery.
          </p>

          <!-- Custom Tabs using Vue state -->
          <div class="flex flex-wrap gap-8 mt-10 border-b border-[#693B93]/30 pb-2">
            <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
              :class="activeTab === tab.id ? 'text-white border-purple-500' : 'text-gray-500 border-transparent hover:text-gray-300'"
              class="text-lg font-medium border-b-2 pb-2 transition-all duration-300 uppercase tracking-widest text-sm">
              {{ tab.name }}
            </button>
          </div>

          <!-- Tab Content -->
          <div class="pt-6 min-h-[300px]">
            
            <!-- Skills Tab -->
            <div v-show="activeTab === 'skills'" class="animate-fadeIn">
              <h3 class="text-xl font-medium text-white mb-4">Core</h3>
              <div class="flex flex-wrap gap-3 mb-8">
                <span v-for="(language, index) in programmingLanguages" :key="'lang-'+index" 
                  class="px-5 py-2 bg-[#1A0B2E] text-purple-200 border border-[#693B93] rounded-md text-sm font-medium hover:bg-[#693B93] hover:text-white transition-all shadow-[0_0_10px_rgba(105,59,147,0.2)]">
                  {{ language }}
                </span>
              </div>
              <h3 class="text-xl font-medium text-white mb-4">Tools</h3>
              <div class="flex flex-wrap gap-3">
                <span v-for="(tool, index) in toolsList" :key="'tool-'+index" 
                  class="px-5 py-2 bg-[#0B021A] text-gray-300 border border-white/20 rounded-md text-sm font-medium hover:border-purple-400 hover:text-purple-300 transition-all">
                  {{ tool }}
                </span>
              </div>
            </div>

            <!-- Education Tab -->
            <div v-show="activeTab === 'education'" class="animate-fadeIn grid grid-cols-1 gap-4">
              <div v-for="(education, index) in educationDetails" :key="'edu-'+index" 
                class="bg-gradient-to-br from-[#2C1250] to-[#120524] border border-[#693B93]/60 p-6 rounded-xl hover:shadow-[0_0_30px_rgba(105,59,147,0.5)] transition-all">
                <h4 class="text-lg font-medium text-white">{{ education.heading }}</h4>
                <p class="text-purple-400 text-sm mt-2 mb-1 tracking-widest uppercase">{{ education.period }}</p>
                <p class="text-gray-400 font-light text-sm">{{ education.details }}</p>
              </div>
            </div>

            <!-- Experience Tab -->
            <div v-show="activeTab === 'experience'" class="animate-fadeIn space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scroll">
              
              <div class="bg-gradient-to-br from-[#2C1250] to-[#120524] border border-[#693B93]/60 p-6 rounded-xl hover:shadow-[0_0_30px_rgba(105,59,147,0.5)] transition-all">
                <h4 class="text-xl font-medium text-white mb-1">Protiviti India Member Firm</h4>
                <p class="text-purple-400 text-xs font-semibold uppercase tracking-widest mb-3">Senior Consultant (Jun 2026 - Present)</p>
                <p class="text-gray-300 leading-relaxed font-light text-sm">
                  Delivering enterprise solutions across Sales Cloud, Service Cloud, and OmniStudio. Developing scalable solutions using Apex, LWC, Flows, and OmniStudio components.
                </p>
              </div>
              
              <div class="bg-gradient-to-br from-[#2C1250] to-[#120524] border border-[#693B93]/60 p-6 rounded-xl hover:shadow-[0_0_30px_rgba(105,59,147,0.5)] transition-all">
                <h4 class="text-xl font-medium text-white mb-1">GetOnCRM Solutions Inc</h4>
                <p class="text-purple-400 text-xs font-semibold uppercase tracking-widest mb-3">Software Engineer (Jun 2025 - Jun 2026)</p>
                <p class="text-gray-300 leading-relaxed font-light text-sm">
                  Customized Salesforce applications using Apex, LWC, Flows, and SOQL. Built integrations with external systems via REST API across Service and Health Clouds.
                </p>
              </div>

              <div class="bg-gradient-to-br from-[#2C1250] to-[#120524] border border-[#693B93]/60 p-6 rounded-xl hover:shadow-[0_0_30px_rgba(105,59,147,0.5)] transition-all">
                <h4 class="text-xl font-medium text-white mb-1">Faveo</h4>
                <p class="text-purple-400 text-xs font-semibold uppercase tracking-widest mb-3">Associate Software Engineer (Nov 2022 - Apr 2025)</p>
                <p class="text-gray-300 leading-relaxed font-light text-sm">
                  Built responsive user interfaces with LWC, JavaScript, Vue.js, and React. Created custom API services using Node.js for external data sync and operations.
                </p>
              </div>
              
              <div class="bg-gradient-to-br from-[#2C1250] to-[#120524] border border-[#693B93]/60 p-6 rounded-xl hover:shadow-[0_0_30px_rgba(105,59,147,0.5)] transition-all">
                <h4 class="text-xl font-medium text-white mb-1">Yarikul Infotech</h4>
                <p class="text-purple-400 text-xs font-semibold uppercase tracking-widest mb-3">Summer Intern (Jun 2019 - Jul 2019)</p>
                <p class="text-gray-300 leading-relaxed font-light text-sm">
                  Acquired hands-on expertise in HTML, CSS, JavaScript, and Bootstrap frameworks. Successfully built responsive UI models for core client web components and academic projects.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      activeTab: 'skills',
      tabs: [
        { id: 'skills', name: 'Skills' },
        { id: 'education', name: 'Education' },
        { id: 'experience', name: 'Experience' }
      ],
      programmingLanguages: [
        'MongoDB', 'Express.js', 'React.js', 'Node.js',
        'Apex', 'Lightning Web Components (LWC)', 'Aura',
        'Salesforce Sales/Service/Health Cloud',
        'OmniScript', 'Integration Procedures', 'DataRaptors', 'FlexCards',
        'JavaScript', 'Vue.js', 'SOQL', 'SOSL', 'Batch Apex', 'REST APIs', 'Webhooks'
      ],
      toolsList: [
        'Data Loader', 'Visual Studio Code', 'Developer Console', 'Git', 'Postman'
      ],
      educationDetails: [
        { heading: 'MIET Jammu', period: '2016 - 2020', details: 'BTech In Computer Science' }
      ],
    };
  }
}
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.4s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

.custom-scroll::-webkit-scrollbar {
  width: 5px;
}
.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background: #693B93;
  border-radius: 4px;
}
</style>