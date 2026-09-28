<template>
  <div class="bg-[#0B0410] min-h-screen font-sans text-white selection:bg-[#693B93] selection:text-white">
    <router-view></router-view>
    
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
  }
}
</script>