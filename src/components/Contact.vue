<template>
  <section class="py-24 bg-[#0B021A] border-t border-[#693B93]/20 relative z-10" id="contact">
    
    <!-- Central Bottom Glow for logo area -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[500px] bg-purple-600/20 blur-[130px] rounded-[50%] z-0 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <!-- Top Message from Graphic -->
      <div class="text-center mb-16">
        <h2 class="text-2xl md:text-4xl font-light text-white mb-2">
          I'm currently looking to join a <span class="text-[#a855f7]">cross-functional</span> team
        </h2>
        <p class="text-sm md:text-base text-gray-400 font-light track-wide mt-2">
          that values improving people's lives through accessible design or development.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start max-w-5xl mx-auto">
        
        <!-- Contact Info -->
        <div class="space-y-8">
          <h2 class="text-3xl font-medium text-white mb-2">Let's Connect</h2>
          <p class="text-lg text-gray-400 font-light leading-relaxed">
            Have a project in mind? Or just want to say hi? I'll try my best to get back to you!
          </p>
          
          <div class="space-y-4 pt-4">
            <a href="mailto:shakirayoub0198@gmail.com" class="block text-gray-300 hover:text-purple-400 transition-colors text-lg font-light">
              shakirayoub0198@gmail.com
            </a>
            <a href="tel:+917006354926" class="block text-gray-300 hover:text-purple-400 transition-colors text-lg font-light">
              +91-7006354926
            </a>
            <p class="text-gray-300 text-lg font-light">
              Noida, UP
            </p>
          </div>
          
          <div class="flex space-x-6 pt-6">
            <a href="https://github.com/shakirayoub123" target="_blank" class="text-gray-400 hover:text-purple-400 transition-colors">
              <i class="fa-brands fa-github text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/shakir-ayoub-412a30147/" target="_blank" class="text-gray-400 hover:text-purple-400 transition-colors">
              <i class="fa-brands fa-linkedin text-2xl"></i>
            </a>
            <a href="https://stackoverflow.com/users/18450548/shakir-ayoub" target="_blank" class="text-gray-400 hover:text-purple-400 transition-colors">
              <i class="fa-brands fa-stack-overflow text-2xl"></i>
            </a>
            <a href="https://www.hackerrank.com/shakirayoubbhat?hr_r=1" target="_blank" class="text-gray-400 hover:text-purple-400 transition-colors">
              <i class="fa-brands fa-hackerrank text-2xl"></i>
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-gradient-to-br from-[#2C1250] to-[#120524] p-8 md:p-10 rounded-2xl border border-[#693B93]/50 shadow-[0_0_30px_rgba(105,59,147,0.3)] relative">
          <form @submit.prevent="handleSubmit" name="contactForm" v-if="!formSubmitted" class="space-y-6">
            <div>
              <input type="text" v-model="form.name" placeholder="Your Name" required class="w-full bg-[#1A0B2E] border border-[#693B93] rounded-md px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors placeholder-gray-500 font-light text-sm">
            </div>
            <div>
              <input type="email" v-model="form.email" placeholder="Your Email" required class="w-full bg-[#1A0B2E] border border-[#693B93] rounded-md px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors placeholder-gray-500 font-light text-sm">
            </div>
            <div>
              <textarea v-model="form.message" rows="5" placeholder="Your Message" required class="w-full bg-[#1A0B2E] border border-[#693B93] rounded-md px-4 py-3 text-white focus:outline-none focus:border-purple-400 transition-colors placeholder-gray-500 resize-none font-light text-sm"></textarea>
            </div>
            <button type="submit" class="w-full py-3 bg-[#693B93] hover:bg-[#8B5CF6] text-white rounded-md font-medium tracking-widest transition-all text-sm uppercase">
              Send Message
            </button>
          </form>
          
          <!-- Success Message -->
          <div v-else class="flex flex-col items-center justify-center p-8 text-center h-[350px]">
            <div class="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-3xl mb-4 shadow-[0_0_20px_0_rgba(168,85,247,0.3)] animate-pulse">
              <i class="fas fa-check"></i>
            </div>
            <h3 class="text-2xl font-medium text-white mb-2">Message Sent!</h3>
            <p class="text-gray-400 font-light text-sm">Thank you for reaching out. I'll get back to you shortly.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'

export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      formSubmitted: false,
    }
  },
  methods: {
    async handleSubmit() {
      try {
        // 1. Standard Firebase Backup
        await addDoc(collection(db, "portfolioContact"), { 
          name: this.form.name, 
          email: this.form.email, 
          message: this.form.message, 
          datetime: Timestamp.now() 
        })

        // 2. Automated Email Delivery via FormSubmit
        await fetch("https://formsubmit.co/ajax/shakirayoub0198@gmail.com", {
          method: "POST",
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({
              name: this.form.name,
              email: this.form.email,
              message: this.form.message,
              _subject: `New Portfolio Lead from ${this.form.name}`
          })
        });
        
        this.formSubmitted = true;
        this.form = { name: '', email: '', message: '' };
        
        setTimeout(() => {
          this.formSubmitted = false;
        }, 5000);
      } catch (error) {
        console.error("Error submitting form:", error)
        alert('There was an issue submitting your message. Please try again.')
      }
    }
  }
}
</script>