<template>
  <div class="bg-[#0B0410] min-h-screen font-sans text-white selection:bg-[#693B93] selection:text-white">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    
    <a href="#" id="moveTop" class="fixed right-6 bottom-6 z-50 p-4 border border-[#693B93] bg-[#0B0410] shadow-[0_0_15px_-3px_rgba(105,59,147,0.6)] rounded-full text-[#a855f7] text-2xl hover:bg-[#693B93] hover:text-white transition-all duration-300 hidden">
      <i class="fa-solid fa-arrow-up"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.addEventListener('scroll', () => {
      const moveTopBtn = document.getElementById('moveTop');
      if (moveTopBtn) {
        if(window.scrollY > 300) {
          moveTopBtn.classList.remove('hidden');
        } else {
          moveTopBtn.classList.add('hidden');
        }
      }
    });
    
    // Inject hardware-accelerated IntersectionObserver directly across all rendered trees globally.
    this.initializeScrollAnimationMatrix();
    this.bootDOMObserver();
  },
  methods: {
    bootDOMObserver() {
      // Binds watcher to layout to automatically grab dynamic routing loads
      const domWatcher = new MutationObserver(() => {
        this.initializeScrollAnimationMatrix();
      });
      domWatcher.observe(document.body, { childList: true, subtree: true });
    },
    initializeScrollAnimationMatrix() {
      // Find all unmapped high-level layout wrappers precisely
      const nodes = document.querySelectorAll('section:not(.reveal-bound), section .grid > div:not(.reveal-bound), section .grid > a:not(.reveal-bound)');
      if(nodes.length === 0) return;
      
      const intersectionEngine = new IntersectionObserver((payload) => {
        payload.forEach(node => {
          if (node.isIntersecting) {
            node.target.classList.add('reveal-active');
            // Slight delay then strip class mapping to free up massive GPU layout load and restore Tailwind hover utilities
            setTimeout(() => {
               node.target.classList.remove('reveal-base', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3');
            }, 1200);
            intersectionEngine.unobserve(node.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      
      nodes.forEach((element, i) => {
        // Tag to prevent duplicate mounting
        element.classList.add('reveal-bound', 'reveal-base');
        
        // Compute beautiful offset cascading mathematically based on sibling node locations
        if(i % 3 === 1) element.classList.add('reveal-delay-1');
        if(i % 3 === 2) element.classList.add('reveal-delay-2');
        
        intersectionEngine.observe(element);
      });
    }
  }
}
</script>