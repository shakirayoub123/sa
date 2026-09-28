<script setup>
import { projects } from "../data/projects.js";
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold mb-6">Projects</h2>

    <div class="grid md:grid-cols-2 gap-6">
      <div
          v-for="p in projects"
          :key="p.title"
          class="border rounded-lg p-5 shadow-sm hover:shadow-md"
      >
        <h3 class="text-lg font-semibold">{{ p.title }}</h3>

        <p class="text-gray-600 text-sm mt-2">
          {{ p.description }}
        </p>

        <div class="flex flex-wrap gap-2 mt-3">
          <span
              v-for="t in p.tech"
              :key="t"
              class="text-xs px-2 py-1 bg-gray-100 rounded"
          >
            {{ t }}
          </span>
        </div>

        <div class="flex gap-4 mt-4 text-sm">
          <a
              v-if="p.github"
              :href="p.github"
              target="_blank"
              class="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
              v-if="p.live"
              :href="p.live"
              target="_blank"
              class="text-blue-600 hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
