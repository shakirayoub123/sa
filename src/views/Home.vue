<template>
  <div class="overflow-x-hidden w-full relative bg-[#0B021A] max-w-[100vw]">
    <Navbar />
    <Header />
    <SkillsVisual />
    <Services />
    <Experience />
    <Certifications />
    <Portfolio />
    <Quotes />
    <FAQ />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Header from '../components/Header.vue'
import SkillsVisual from '../components/SkillsVisual.vue'
import Services from '../components/Services.vue'
import Experience from '../components/Experience.vue'
import Certifications from '../components/Certifications.vue'
import Portfolio from '../components/Portfolio.vue'
import Quotes from "@/components/Quotes.vue";
import FAQ from '../components/FAQ.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Quotes,
    FAQ,
    Header,
    SkillsVisual,
    Services,
    Experience,
    Certifications,
    Portfolio,
    Contact,
    Footer
  }
}
</script>