<script setup>
import { skills } from "../data/skills.js";
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-6">Skills</h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      <div
          v-for="skill in skills"
          :key="skill"
          class="bg-gray-100 border border-gray-200 px-3 py-2 rounded text-center hover:border-blue-500 hover:bg-blue-50"
      >
        {{ skill }}
      </div>
    </div>
  </section>
</template>
