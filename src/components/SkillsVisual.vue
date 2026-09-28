<template>
  <section class="py-24 bg-[#0B021A] relative overflow-hidden flex flex-col items-center border-t border-[#693B93]/20" id="skills">

    <!-- Starfield -->
    <div class="stars absolute inset-0 pointer-events-none" aria-hidden="true">
      <span v-for="s in stars" :key="s.id" class="star"
            :style="{ left: s.x + '%', top: s.y + '%', width: s.size + 'px', height: s.size + 'px', animationDelay: s.delay + 's', animationDuration: s.dur + 's' }"></span>
    </div>

    <!-- Title -->
    <div class="text-center z-20 mb-12 px-4 relative">
      <h2 class="text-3xl md:text-5xl font-light text-white mb-4 tracking-wide">
        I'm currently looking to join a <span class="text-[#A855F7] font-medium drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">cross-functional</span> team
      </h2>
      <p class="text-gray-300 text-sm md:text-lg font-light tracking-widest">
        that values improving people's lives through scalable architecture
      </p>
    </div>

    <!-- Space scene (aspect matches reference: ~1000 x 690) -->
    <div class="scene relative w-full max-w-6xl mx-auto">

      <!-- Rings, flowing lines, orbiting icons -->
      <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 690" preserveAspectRatio="xMidYMid meet">
        <defs>
          <!-- orbit paths (also used as motion paths) -->
          <path id="orbA" d="M70,507 a430,132 0 1,0 860,0 a430,132 0 1,0 -860,0" />
          <path id="orbB" d="M115,507 a385,122 0 1,0 770,0 a385,122 0 1,0 -770,0" />
          <path id="orbC" d="M160,507 a340,112 0 1,0 680,0 a340,112 0 1,0 -680,0" />
          <path id="orbD" d="M200,455 a300,100 0 1,0 600,0 a300,100 0 1,0 -600,0" />
          <linearGradient id="ringFade" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="#8B4FD0" stop-opacity="0.15" />
            <stop offset="1" stop-color="#8B4FD0" stop-opacity="0.95" />
          </linearGradient>
        </defs>

        <!-- Rings -->
        <g fill="none" stroke="url(#ringFade)" stroke-width="1.4">
          <use href="#orbA" class="ring" />
          <use href="#orbB" class="ring" style="animation-delay:1s" />
          <use href="#orbC" class="ring" style="animation-delay:2s" />
        </g>
        <g fill="none" stroke="#8B4FD0" stroke-opacity="0.25" stroke-width="1">
          <ellipse cx="500" cy="455" rx="300" ry="100" />
          <ellipse cx="500" cy="465" rx="290" ry="95" />
        </g>

        <!-- Lines from row 2 icons into the orb -->
        <g fill="none" stroke-width="1.2">
          <g stroke="#693B93" opacity="0.55">
            <path v-for="(p, i) in lines" :key="'t' + i" :d="p" />
          </g>
          <g class="flow" stroke="#D8B4FE" stroke-width="2" style="filter: drop-shadow(0 0 5px #A855F7);">
            <path v-for="(p, i) in lines" :key="'f' + i" :d="p" :style="{ animationDelay: i * -1.3 + 's' }" />
          </g>
        </g>

        <!-- Small icons drifting along the rings -->
        <g v-for="(o, i) in orbiters" :key="'o' + i" class="orbiter" opacity="0.7">
          <rect x="-11" y="-11" width="22" height="22" rx="4" fill="#3B1F5C" stroke="#8B4FD0" stroke-opacity="0.6" />
          <text text-anchor="middle" dominant-baseline="central" font-size="10" font-weight="700" fill="#D8B4FE">{{ o.label }}</text>
          <animateMotion :dur="o.dur + 's'" :begin="o.begin + 's'" repeatCount="indefinite" rotate="0">
            <mpath :href="'#' + o.path" />
          </animateMotion>
        </g>
      </svg>

      <!-- Row 1 bubbles -->
      <div class="absolute inset-0 pointer-events-none">
        <div v-for="(b, i) in row1" :key="'r1' + i" class="bubble" :style="{ left: b.x + '%', top: '6.8%', animationDelay: i * 0.25 + 's' }">
          <i v-if="b.fa" :class="[b.fa, b.color]" class="text-xl md:text-3xl"></i>
          <span v-else :class="b.color" class="font-semibold text-[10px] md:text-base">{{ b.text }}</span>
        </div>
        <!-- Row 2 bubbles -->
        <div v-for="(b, i) in row2" :key="'r2' + i" class="bubble" :style="{ left: b.x + '%', top: '15.4%', animationDelay: i * 0.3 + 's' }">
          <i v-if="b.fa" :class="[b.fa, b.color]" class="text-xl md:text-3xl"></i>
          <span v-else :class="b.color" class="font-semibold text-[9px] md:text-sm">{{ b.text }}</span>
        </div>

        <!-- Orb -->
        <div class="orb-wrap" style="left:50%; top:66%;">
          <div class="orb-glow"></div>
          <div class="orb">
            <div class="orb-shine"></div>
            <img src="../assets/sa-logo.png" alt="SA Logo" class="relative z-10 h-1/3 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsVisual',
  data() {
    return {
      stars: [],
      row1: [
        { x: 33.6, fa: 'fab fa-figma', color: 'text-pink-400' },
        { x: 38.9, fa: 'fab fa-react', color: 'text-cyan-400' },
        { x: 44.3, text: 'C', color: 'text-blue-400' },
        { x: 50, fa: 'fab fa-node-js', color: 'text-green-500' },
        { x: 55.1, text: 'Rx', color: 'text-purple-400' },
        { x: 60.4, fa: 'fab fa-js', color: 'text-yellow-300' },
        { x: 65.8, fa: 'fab fa-css3-alt', color: 'text-blue-500' }
      ],
      row2: [
        { x: 36.3, text: 'Xd', color: 'text-pink-500' },
        { x: 42.2, text: 'NEXT', color: 'text-gray-200' },
        { x: 47.2, text: 'G', color: 'text-purple-400' },
        { x: 52.7, text: 'Ai', color: 'text-orange-400' },
        { x: 58.4, text: 'express', color: 'text-gray-200' },
        { x: 63.8, text: 'mongo', color: 'text-green-400' }
      ],
      // curves: row 2 icons -> top of orb
      lines: [
        'M370,132 C400,300 480,330 492,372',
        'M425,132 C445,280 490,330 496,372',
        'M475,132 C480,280 497,330 499,372',
        'M535,132 C525,280 503,330 501,372',
        'M590,132 C560,280 512,330 504,372',
        'M645,132 C600,280 520,330 508,372'
      ],
      orbiters: [
        { label: 'Ai', path: 'orbA', dur: 60, begin: -8 },
        { label: 'in', path: 'orbA', dur: 60, begin: -38 },
        { label: 'JS', path: 'orbB', dur: 48, begin: -5 },
        { label: '<>', path: 'orbB', dur: 48, begin: -30 },
        { label: 'G', path: 'orbC', dur: 40, begin: -12 },
        { label: 'Xd', path: 'orbC', dur: 40, begin: -32 },
        { label: 'CSS', path: 'orbA', dur: 60, begin: -20 },
        { label: 'Fg', path: 'orbB', dur: 48, begin: -42 },
        { label: 'JS', path: 'orbD', dur: 34, begin: -4 },
        { label: 'Rx', path: 'orbD', dur: 34, begin: -22 }
      ]
    }
  },
  mounted() {
    // random on client only to avoid SSR hydration mismatch
    this.stars = Array.from({ length: 70 }, (_, id) => ({
      id,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.8 + 0.6,
      delay: Math.random() * 5,
      dur: 2.5 + Math.random() * 4
    }))
  }
}
</script>

<style scoped>
.scene { aspect-ratio: 1000 / 690; }

/* Stars */
.star {
  position: absolute;
  border-radius: 9999px;
  background: #E9D5FF;
  opacity: 0.2;
  animation: twinkle 4s ease-in-out infinite;
}
@keyframes twinkle {
  0%, 100% { opacity: 0.1; transform: scale(0.8); }
  50%      { opacity: 0.9; transform: scale(1.3); }
}

/* Rings breathe */
.ring { animation: ringPulse 5s ease-in-out infinite alternate; }
@keyframes ringPulse {
  from { opacity: 0.55; }
  to   { opacity: 1; }
}

/* Energy flowing from icons into the orb */
.flow path {
  stroke-dasharray: 6 60;
  stroke-dashoffset: 0;
  animation: dashFlow 4s linear infinite;
}
@keyframes dashFlow { to { stroke-dashoffset: -198; } }

/* Tech bubbles */
.bubble {
  position: absolute;
  width: 4.3%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  border-radius: 9999px;
  background: #221B33;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 18px rgba(168, 85, 247, 0.15);
  animation: bob 5s ease-in-out infinite;
}
@keyframes bob {
  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
  50%      { transform: translate(-50%, -50%) translateY(-6px); }
}

/* Orb */
.orb-wrap {
  position: absolute;
  width: 17.6%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  animation: orbFloat 7s ease-in-out infinite;
}
@keyframes orbFloat {
  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
  50%      { transform: translate(-50%, -50%) translateY(-10px); }
}
.orb-glow {
  position: absolute;
  inset: -45%;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(139, 79, 208, 0.55) 0%, rgba(90, 40, 150, 0.25) 40%, transparent 70%);
  animation: glow 5s ease-in-out infinite alternate;
}
@keyframes glow {
  from { transform: scale(0.92); opacity: 0.7; }
  to   { transform: scale(1.1);  opacity: 1; }
}
.orb {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 85%, #6B3FA0 0%, #3D2278 45%, #2A1665 100%);
  box-shadow: 0 0 60px rgba(139, 79, 208, 0.5), inset 0 -20px 40px rgba(168, 105, 235, 0.35);
}
.orb-shine {
  position: absolute;
  top: 6%;
  left: 18%;
  width: 50%;
  height: 22%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  filter: blur(4px);
  transform: rotate(-20deg);
}

@media (prefers-reduced-motion: reduce) {
  .star, .ring, .flow path, .bubble, .orb-wrap, .orb-glow { animation: none; }
}
</style>