<template>
  <footer class="bg-[#0B021A] pt-24 pb-8 relative z-20 mt-auto border-t border-[#693B93]/30">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Top Grid: Brand, Links, Contact -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-left">
        
        <!-- Brand / Intro -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-12 flex items-center justify-center p-1">
              <img src="../assets/sa-logo.png" alt="SA Logo" class="h-full w-full object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
            </div>
            <h3 class="text-xl text-white font-medium tracking-wide">Shakir Ayoub</h3>
          </div>
          <p class="text-[#CCD6F6] text-sm leading-relaxed max-w-sm">
            A Senior Salesforce Consultant and MERN Stack Developer crafting enterprise-scale architecture, intricate automations, and premium digital experiences worldwide.
          </p>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-6 tracking-wide text-sm uppercase font-mono">Platform</h4>
          <ul class="space-y-4 text-sm text-[#a8b2d1]">
            <li><a href="#about" class="hover:text-[#A855F7] transition-all transform hover:translate-x-1 inline-block">About Me</a></li>
            <li><a href="#skills" class="hover:text-[#A855F7] transition-all transform hover:translate-x-1 inline-block">Expertise Matrix</a></li>
            <li><a href="#portfolio" class="hover:text-[#A855F7] transition-all transform hover:translate-x-1 inline-block">App Portfolio</a></li>
            <li><a href="#testimonials" class="hover:text-[#A855F7] transition-all transform hover:translate-x-1 inline-block">Testimonials</a></li>
          </ul>
        </div>
        
        <!-- Socials -->
        <div>
          <h4 class="text-white font-semibold mb-6 tracking-wide text-sm uppercase font-mono">Connect</h4>
          <ul class="space-y-4 text-sm text-[#a8b2d1]">
            <li>
              <a href="https://github.com/shakirayoub123" target="_blank" class="hover:text-[#A855F7] transition-all transform hover:translate-x-1 inline-flex items-center gap-3">
                <i class="fa-brands fa-github text-lg"></i> GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/shakir-ayoub" target="_blank" class="hover:text-[#A855F7] transition-all transform hover:translate-x-1 inline-flex items-center gap-3">
                <i class="fa-brands fa-linkedin-in text-lg"></i> LinkedIn Check
              </a>
            </li>
            <li>
              <a href="mailto:shakirayoub0198@gmail.com" class="hover:text-[#A855F7] transition-all transform hover:translate-x-1 inline-flex items-center gap-3">
                <i class="fa-solid fa-envelope text-lg"></i> Direct Email
              </a>
            </li>
          </ul>
        </div>
        
      </div>

      <!-- The Massive S Logo -->
      <div class="flex justify-center mb-16 relative">
        <div class="absolute inset-0 bg-[#A855F7]/15 blur-[80px] rounded-full w-48 h-48 left-1/2 -translate-x-1/2"></div>
        <div class="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center relative z-10 transition-transform hover:scale-110 duration-500 cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
          <img src="../assets/sa-logo.png" alt="SA Logo" class="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
        </div>
      </div>

      <!-- Bottom Line -->
      <div class="border-t border-[#693B93]/30 pt-8 flex flex-col items-center">
        <p class="text-[#a8b2d1] text-[11px] font-mono tracking-widest uppercase text-center">
          Portfolio of <span class="text-[#A855F7]">Shakir Ayoub</span> &copy; {{ new Date().getFullYear() }}
        </p>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
