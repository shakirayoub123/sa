<template>
  <div>
    <!-- Global Main Navbar -->
    <nav class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0B021A]/90 border-b border-[#693B93]/30 transition-all duration-300"
         :class="{'translate-y-0': showNavbar, '-translate-y-[120%]': !showNavbar}">
      <div class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <router-link to="/" class="flex-shrink-0 cursor-pointer block group">
          <img src="../assets/sa-logo.png" alt="Shakir Ayoub Logo" class="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform duration-300" />
        </router-link>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-12 text-sm font-medium text-gray-300">
          <li><router-link to="/" class="hover:text-purple-400 transition-colors">Home</router-link></li>
          <li><router-link to="/about" class="hover:text-purple-400 transition-colors">About</router-link></li>
          <li><router-link to="/#services" class="hover:text-purple-400 transition-colors">Services</router-link></li>
          <li><router-link to="/#portfolio" class="hover:text-purple-400 transition-colors">Projects</router-link></li>
          <li><router-link to="/#contact" class="hover:text-purple-400 transition-colors">Contact</router-link></li>
          <li>
            <a href="/Shakir_Ayoub_B.docx" target="_blank" download class="px-5 py-2 rounded-full border border-[#A855F7] text-[#A855F7] hover:bg-[#A855F7] hover:text-white transition-colors duration-300 font-bold tracking-wider text-xs shadow-[0_0_10px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]">
              RESUME
            </a>
          </li>
        </ul>

        <!-- Mobile Hamburger Toggle -->
        <button class="md:hidden flex items-center justify-center p-3 text-2xl text-gray-300 hover:text-white transition-colors relative z-[100]" @click="toggleMenu" aria-label="Toggle Menu">
          <i class="fas fa-bars pointer-events-none"></i>
        </button>
      </div>
    </nav>
    
    <!-- Mobile Sidebar -->
    <div :class="isOpen ? 'translate-x-0' : 'translate-x-full'" class="fixed inset-y-0 right-0 z-[60] w-64 bg-[#0B021A]/95 backdrop-blur-xl border-l border-[#693B93]/50 shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col">
      <div class="flex justify-end p-6">
        <i class="fas fa-times text-2xl cursor-pointer text-gray-400 hover:text-purple-400" @click="toggleMenu"></i>
      </div>
      <ul class="flex flex-col space-y-8 px-8 text-lg font-medium text-gray-300">
        <li><router-link to="/" @click="toggleMenu" class="hover:text-purple-400">Home</router-link></li>
        <li><router-link to="/about" @click="toggleMenu" class="hover:text-purple-400">About</router-link></li>
        <li><router-link to="/#services" @click="toggleMenu" class="hover:text-purple-400">Services</router-link></li>
        <li><router-link to="/#portfolio" @click="toggleMenu" class="hover:text-purple-400">Projects</router-link></li>
        <li><router-link to="/#contact" @click="toggleMenu" class="hover:text-purple-400">Contact</router-link></li>
        <li class="pt-4 border-t border-[#693B93]/30">
           <a href="/Shakir_Ayoub_B.docx" target="_blank" download @click="toggleMenu" class="inline-block px-8 py-3 rounded-full bg-[#A855F7] text-white font-bold tracking-widest text-sm shadow-[0_0_20px_rgba(168,85,247,0.4)]">
             DOWNLOAD RESUME
           </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false,
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      // Always show at absolute top
      if (currentScrollPosition < 60) {
        this.showNavbar = true
      } else if (currentScrollPosition > this.lastScrollPosition) {
        // Scrolling down -> slide out to maximize viewport
        this.showNavbar = false
      } else {
        // Scrolling up -> drop back in
        this.showNavbar = true
      }
      this.lastScrollPosition = currentScrollPosition
    },
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
