<template>
  <section class="py-32 bg-[#0B021A] relative" id="testimonials">
    
    <!-- Deep Ambient Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#693B93]/5 blur-[200px] rounded-full z-0 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Section Header -->
      <div class="mb-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center md:justify-start">
            <span class="text-[#9857D3] font-mono text-xl mr-3">04.</span> Client Feedback
          </h2>
          <p class="text-[#CCD6F6] text-sm md:text-base tracking-wide mt-2">What people say about working with me</p>
        </div>
        
        <!-- Navigation Buttons (Desktop) -->
        <div class="hidden md:flex space-x-4 mt-6 md:mt-0">
          <button @click="scrollLeft" class="w-12 h-12 rounded-full border border-[#693B93]/50 flex items-center justify-center text-white hover:bg-[#693B93]/30 hover:-translate-x-1 transition-all">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button @click="scrollRight" class="w-12 h-12 rounded-full border border-[#693B93]/50 flex items-center justify-center text-white hover:bg-[#693B93]/30 hover:translate-x-1 transition-all">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <!-- Testimonials Slider Container -->
      <div class="relative -mx-6 px-6 md:mx-0 md:px-0">
        <div ref="slider" class="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scroll-bar pb-8 pt-4">
          
          <!-- Individual Card (Takes exactly 1/3 width on desktop minus gap) -->
          <div v-for="(testimonial, index) in testimonials" :key="index"
               class="snap-start w-[85vw] md:w-[calc(33.333%-1rem)] flex-shrink-0 flex flex-col group relative bg-gradient-to-br from-[#1A0B2E]/90 to-[#120524]/60 backdrop-blur-xl p-8 rounded-2xl border border-[#693B93]/20 shadow-[0_10px_30px_-15px_rgba(2,5,20,0.8)] hover:-translate-y-2 transition-all duration-300">
            
            <!-- Animated Border Glow on Hover -->
            <div class="absolute inset-0 rounded-2xl border border-[#A855F7] opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
            
            <!-- Top section (Quote Icon & Stars) -->
            <div class="flex justify-between items-start mb-6">
              <i class="fas fa-quote-left text-3xl text-[#9857D3]/40 group-hover:text-[#9857D3] transition-colors duration-300"></i>
              <div class="flex space-x-1">
                <i v-for="n in 5" :key="n" class="fas fa-star text-[10px] text-yellow-500/80"></i>
              </div>
            </div>
            
            <!-- Testimonial Body -->
            <p class="text-[#CCD6F6] text-[14.5px] leading-relaxed mb-8 flex-grow">
              "{{ testimonial.feedback }}"
            </p>
            
            <!-- Client Info -->
            <div class="flex items-center mt-auto border-t border-white/5 pt-6">
              <!-- Client Avatar Initial -->
              <div class="w-12 h-12 rounded-full min-w-[3rem] bg-gradient-to-tr from-[#9857D3] to-[#2C1250] border border-white/10 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_10px_rgba(152,87,211,0.4)] mr-4">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm">{{ testimonial.name }}</h4>
                <p class="text-[#9857D3] text-xs font-mono mt-1">{{ testimonial.role }}</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
      
      <!-- Navigation Buttons (Mobile) -->
      <div class="flex md:hidden justify-center space-x-6 mt-4">
        <button @click="scrollLeft" class="w-12 h-12 rounded-full border border-[#693B93]/50 flex items-center justify-center text-white active:bg-[#693B93]/50 transition-all">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button @click="scrollRight" class="w-12 h-12 rounded-full border border-[#693B93]/50 flex items-center justify-center text-white active:bg-[#693B93]/50 transition-all">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  name: 'Quotes',
  methods: {
    scrollLeft() {
      if (this.$refs.slider) {
        this.$refs.slider.scrollBy({ left: -this.$refs.slider.offsetWidth, behavior: 'smooth' });
      }
    },
    scrollRight() {
      if (this.$refs.slider) {
        this.$refs.slider.scrollBy({ left: this.$refs.slider.offsetWidth, behavior: 'smooth' });
      }
    }
  },
  data() {
    return {
      testimonials: [
        {
          feedback: "Shakir's expertise in Salesforce architecture fundamentally transformed our workflows. His implementation of LWC and OmniStudio was flawless, automating countless hours of manual work. Easily one of the most reliable technical consultants I've worked with.",
          name: "Sarah Jenkins",
          role: "Director of Operations"
        },
        {
          feedback: "Incredible full-stack capabilities! Shakir was able to completely architect and deploy our web platform using the MERN stack with highly secure authentication. Not only is the app blazing fast, but his UI layouts are beautiful.",
          name: "Marcus Aurelius",
          role: "CTO, Tech Startup"
        },
        {
          feedback: "Extremely detail-oriented, highly communicative, and profoundly dedicated. Whether it was building complex Apex triggers or integrating our third-party REST APIs smoothly, Shakir consistently delivered scalable, secure solutions.",
          name: "David Chen",
          role: "Lead Project Manager"
        },
        {
          feedback: "Our transition to Health Cloud seemed daunting until Shakir took charge. His deep understanding of custom objects, Flows, and data migration made the entire operation completely seamless. A true Salesforce expert.",
          name: "Elena Rodriguez",
          role: "Healthcare Admin"
        },
        {
          feedback: "Working with Shakir is always a breeze. He bridges the gap perfectly between highly complex backend Node.js logic and beautifully fluid front-end React interactions. You rarely find a developer this well-rounded.",
          name: "James Bennett",
          role: "Product Owner"
        },
        {
          feedback: "Shakir was instrumental in building out our Adobe Acrobat integration via webhook endpoints. His Apex code was remarkably clean, completely test-covered, and fully documented.",
          name: "Aisha Patel",
          role: "Engineering Lead"
        },
        {
          feedback: "He completely optimized our custom portals on Experience Cloud. By rewriting sluggish visualforce pages into lightning-fast LWC components, he increased our user engagement metrics by almost 40%.",
          name: "Michael Chang",
          role: "VP of Digital Experience"
        },
        {
          feedback: "A fantastic problem solver. We had a massive database architecture issue haunting our MongoDB clusters, and Shakir debugged and reconstructed our data models natively within days. Highest recommendation.",
          name: "Sophia Martinez",
          role: "Backend Architect"
        },
        {
          feedback: "Shakir brings a rare combination of enterprise-grade consulting strategy and hands-on coding firepower. He didn't just write code; he proactively identified edge cases we hadn't even thought of yet.",
          name: "Robert Hughes",
          role: "Startup Founder"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Optional specific overrides */
</style>
