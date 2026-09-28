<template>
  <section class="py-24 bg-[#0B021A] relative overflow-hidden" id="faq">
    
    <!-- Ambient Background Glows -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-[#693B93]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#A855F7]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

    <div class="max-w-4xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <p class="text-[#A855F7] font-mono tracking-widest text-sm mb-4 uppercase">Queries Resolved</p>
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6 tracking-wide">Frequently Asked Questions</h2>
        <div class="w-20 h-1 bg-[#A855F7] mx-auto rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
      </div>

      <!-- FAQ Accordion Layout -->
      <div class="space-y-4 md:space-y-6">
        
        <div v-for="(faq, index) in faqs" :key="index" 
             class="bg-gradient-to-br from-[#120524] to-[#1A0A2E] border border-[#693B93]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#A855F7]/60 shadow-[0_0_20px_rgba(105,59,147,0.05)] cursor-pointer"
             @click="toggleFAQ(index)">
          
          <!-- Question Header Row -->
          <div class="w-full flex items-center justify-between p-6 md:p-8 select-none">
            <h3 class="text-base md:text-xl font-medium transition-colors duration-300 pr-4 leading-relaxed" 
                :class="activeIndex === index ? 'text-[#A855F7]' : 'text-white'">
              {{ faq.question }}
            </h3>
            <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300"
                 :class="activeIndex === index ? 'border-[#A855F7] bg-[#A855F7]/10' : 'border-[#693B93]/50 bg-transparent'">
               <i class="fas transition-transform duration-300 text-sm" 
                  :class="[activeIndex === index ? 'fa-minus text-[#A855F7] rotate-180' : 'fa-plus text-gray-400 rotate-0']"></i>
            </div>
          </div>
          
          <!-- Expandable Answer Body (Vue transitions handle smooth open state) -->
          <transition 
            name="accordion"
            @enter="start"
            @after-enter="end"
            @before-leave="start"
            @after-leave="end"
          >
            <div v-show="activeIndex === index" class="overflow-hidden">
              <div class="px-6 md:px-8 pb-6 md:pb-8 pt-2 border-t border-[#693B93]/20 text-[#a8b2d1] font-light leading-loose text-sm md:text-base">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </transition>
          
        </div>

      </div>

      <!-- Outro CTA Banner -->
      <div class="mt-16 text-center">
         <p class="text-gray-400 mb-6 font-light">Have a highly specific architectural question not listed here?</p>
         <router-link to="/#contact" class="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-[#693B93] hover:border-[#A855F7] text-white tracking-widest text-xs font-bold hover:bg-[#120524] transition-all">
           CONTACT ME DIRECTLY
         </router-link>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      activeIndex: 0, // Opens the first element automatically
      faqs: [
        {
          question: "What is your primary architectural technology stack?",
          answer: "I specialize deeply in the MERN stack (MongoDB, Express, React, Node.js) for executing high-performance standalone web applications. Alongside this, I wield profound, native expertise in Salesforce CRM architecture—engineering complex logic via Apex, Lightning Web Components (LWC), and OmniStudio pipelines."
        },
        {
          question: "Do you accept independent enterprise contracts or freelance consulting?",
          answer: "Absolutely. In parallel with my Senior Consultant position at Protiviti India, I actively partner with select external clients to architect bespoke digital solutions, resolve heavy systemic technical debt, and optimize cloud deployments."
        },
        {
          question: "How do you approach system reliability and deployment?",
          answer: "I follow strict, unyielding structural engineering principles. I don't deploy duct-tape fixes. Every single system component I author is engineered cross-functionally with robust backend data logic, highly secure REST API integrations, and scalable delivery pipelines built specifically to endure massive production traffic seamlessly."
        },
        {
          question: "What does your typical project development workflow look like?",
          answer: "It generally flows through four explicit vectors: 1) Initial Architectural Audit to define precise bounds. 2) Wireframing & Database Schema structuring. 3) Iterative Native Implementation with scheduled review gates. 4) Security testing and Live Deployment. My priority is flawless communication paired with rapid iteration velocity."
        },
        {
          question: "Are you available for international projects or remote collaborations?",
          answer: "Yes. I frequently interface with international enterprise teams and overseas clients spanning multiple timezones. I ensure transparent communication tracking and uninterrupted deployment cadences regardless of geographical constraints."
        }
      ]
    }
  },
  methods: {
    toggleFAQ(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null; // Close current if clicked again
      } else {
        this.activeIndex = index; // Open clicked index
      }
    },
    // Smooth transition hooks for the accordion height collapse
    start(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    end(el) {
      el.style.height = '';
    }
  }
}
</script>

<style scoped>
/* Smooth Accordion Height Transitions */
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.4s ease-in-out, opacity 0.4s ease-in-out;
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
