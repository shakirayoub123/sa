<template>
  <div class="bg-[#0B021A] min-h-screen text-white pt-40 md:pt-48 lg:pt-56 flex flex-col">
     <!-- Global Primary Navigation -->
     <Navbar />
     
     <!-- The dedicated Who I Am section takes over the page view -->
     <div class="flex-grow flex items-start mb-24">
        <WhoIAm />
     </div>
     
     <!-- Reusing the Master Footer so the page doesn't abruptly end -->
     <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import WhoIAm from '../components/WhoIAm.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'About',
  components: {
    Navbar,
    WhoIAm,
    Footer
  }
}
</script>
