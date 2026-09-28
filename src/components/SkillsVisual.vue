<template>
  <section class="space-section py-24 relative overflow-hidden flex flex-col items-center border-t border-[#693B93]/20" id="skills">

    <!-- Stars + shooting stars -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <span v-for="s in stars" :key="s.id" class="star"
            :style="{ left: s.x + '%', top: s.y + '%', width: s.size + 'px', height: s.size + 'px', background: s.color, boxShadow: '0 0 ' + s.size * 3 + 'px ' + s.color, animationDelay: s.delay + 's', animationDuration: s.dur + 's' }"></span>
      <span class="shoot" style="top:8%; left:70%; animation-delay:2s"></span>
      <span class="shoot" style="top:22%; left:92%; animation-delay:9s"></span>
      <span class="shoot" style="top:5%; left:40%; animation-delay:15s"></span>
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

    <div class="scene relative w-full max-w-6xl mx-auto">

      <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 690" preserveAspectRatio="xMidYMid meet">
        <defs>
          <path id="orbA" d="M70,507 a430,132 0 1,0 860,0 a430,132 0 1,0 -860,0" />
          <path id="orbB" d="M115,507 a385,122 0 1,0 770,0 a385,122 0 1,0 -770,0" />
          <path id="orbC" d="M160,507 a340,112 0 1,0 680,0 a340,112 0 1,0 -680,0" />
          <path id="orbD" d="M200,455 a300,100 0 1,0 600,0 a300,100 0 1,0 -600,0" />

          <linearGradient id="ringFade" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="#8B4FD0" stop-opacity="0.12" />
            <stop offset="1" stop-color="#A56BE8" stop-opacity="0.95" />
          </linearGradient>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#F5E1A4" /><stop offset="0.5" stop-color="#C99A3C" /><stop offset="1" stop-color="#7A5A1E" />
          </linearGradient>
          <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#5B8DEF" /><stop offset="1" stop-color="#1B2F6B" />
          </linearGradient>
          <radialGradient id="silver" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="#FFFFFF" /><stop offset="0.6" stop-color="#A9A3B8" /><stop offset="1" stop-color="#4A4560" />
          </radialGradient>
          <radialGradient id="moon" cx="0.35" cy="0.3" r="0.9">
            <stop offset="0" stop-color="#F1ECFA" /><stop offset="0.6" stop-color="#9C93B5" /><stop offset="1" stop-color="#2E2748" />
          </radialGradient>

          <!-- Communications satellite -->
          <g id="sat">
            <path d="M-4,-3.5 H4 V3.5 H-4 Z" fill="url(#gold)" stroke="#fff" stroke-opacity="0.4" stroke-width="0.4" />
            <path d="M-4,0 H-7 M4,0 H7" stroke="#C8C4D6" stroke-width="0.7" />
            <rect x="-19" y="-4.5" width="12" height="9" fill="url(#panel)" stroke="#9CC0FF" stroke-width="0.4" />
            <rect x="7" y="-4.5" width="12" height="9" fill="url(#panel)" stroke="#9CC0FF" stroke-width="0.4" />
            <path d="M-15,-4.5 V4.5 M-11,-4.5 V4.5 M-19,0 H-7 M15,-4.5 V4.5 M11,-4.5 V4.5 M7,0 H19" stroke="#9CC0FF" stroke-width="0.3" opacity="0.7" />
            <path d="M0,-3.5 V-6" stroke="#C8C4D6" stroke-width="0.5" />
            <ellipse cx="0" cy="-7" rx="3" ry="1.4" fill="#E6E2F0" />
            <circle r="0.9" fill="#FF5470" class="blink" />
          </g>
          <!-- Sputnik style -->
          <g id="sput">
            <path d="M0,0 L-13,-6 M0,0 L-13,6 M0,0 L13,-6 M0,0 L13,6" stroke="#C8C4D6" stroke-width="0.6" />
            <circle r="4" fill="url(#silver)" />
          </g>
          <!-- Cubesat -->
          <g id="cube">
            <rect x="-3" y="-3" width="6" height="6" fill="url(#gold)" stroke="#fff" stroke-opacity="0.4" stroke-width="0.3" />
            <rect x="-11" y="-2" width="7" height="4" fill="url(#panel)" stroke="#9CC0FF" stroke-width="0.3" />
            <rect x="4" y="-2" width="7" height="4" fill="url(#panel)" stroke="#9CC0FF" stroke-width="0.3" />
            <circle cx="0" cy="0" r="0.7" fill="#5CFFB0" class="blink" />
          </g>
          <!-- Moon -->
          <g id="moonbody"><circle r="7" fill="url(#moon)" /><circle cx="-2" cy="-1" r="1.4" fill="#000" opacity="0.15" /><circle cx="2.4" cy="2" r="1" fill="#000" opacity="0.15" /></g>
        </defs>

        <!-- Rings -->
        <g fill="none" stroke="url(#ringFade)" stroke-width="1.4">
          <use href="#orbA" class="ring" />
          <use href="#orbB" class="ring" style="animation-delay:1s" />
          <use href="#orbC" class="ring" style="animation-delay:2s" />
        </g>
        <use href="#orbA" fill="none" stroke="#D8B4FE" stroke-width="1.6" class="ring-scan" />
        <g fill="none" stroke="#8B4FD0" stroke-opacity="0.22" stroke-width="1">
          <ellipse cx="500" cy="455" rx="300" ry="100" />
          <ellipse cx="500" cy="465" rx="290" ry="95" />
        </g>

        <!-- Data lines into orb -->
        <g fill="none">
          <g stroke="#693B93" stroke-width="1.1" opacity="0.5">
            <path v-for="(p, i) in lines" :key="'t' + i" :d="p" />
          </g>
          <g class="flow" stroke="#D8B4FE" stroke-width="2.5" opacity="0.8">
            <path v-for="(p, i) in lines" :key="'f' + i" :d="p" :style="{ animationDelay: i * -1.3 + 's' }" />
          </g>
        </g>

        <!-- Orbiting objects: depth via scale + opacity (bottom = near, top = far) -->
        <g v-for="(o, i) in orbiters" :key="'o' + i">
          <animateMotion :dur="o.dur + 's'" :begin="o.begin + 's'" repeatCount="indefinite" :rotate="o.type === 'sat' || o.type === 'cube' ? 'auto' : '0'">
            <mpath :href="'#' + o.path" />
          </animateMotion>
          <g>
            <animateTransform attributeName="transform" type="scale" values="0.85;1.25;0.85;0.6;0.85" keyTimes="0;0.25;0.5;0.75;1" :dur="o.dur + 's'" :begin="o.begin + 's'" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.85;1;0.85;0.4;0.85" keyTimes="0;0.25;0.5;0.75;1" :dur="o.dur + 's'" :begin="o.begin + 's'" repeatCount="indefinite" />
            <g v-if="o.type === 'tech'">
              <rect x="-11" y="-11" width="22" height="22" rx="5" fill="#2A1745" stroke="#8B4FD0" stroke-opacity="0.7" />
              <text text-anchor="middle" dominant-baseline="central" font-size="9" font-weight="700" fill="#D8B4FE">{{ o.label }}</text>
            </g>
            <use v-else :href="'#' + o.type" :transform="'scale(' + o.s + ')'" />
          </g>
        </g>
      </svg>

      <!-- Bubbles + orb (HTML layer, orb hides the far side of orbits) -->
      <div class="absolute inset-0 pointer-events-none">
        <div v-for="(b, i) in row1" :key="'r1' + i" class="bubble" :style="{ left: b.x + '%', top: '6.8%', animationDelay: i * 0.25 + 's' }">
          <i v-if="b.fa" :class="[b.fa, b.color]" class="text-xl md:text-3xl"></i>
          <span v-else :class="b.color" class="font-semibold text-[10px] md:text-base">{{ b.text }}</span>
        </div>
        <div v-for="(b, i) in row2" :key="'r2' + i" class="bubble" :style="{ left: b.x + '%', top: '15.4%', animationDelay: i * 0.3 + 's' }">
          <i v-if="b.fa" :class="[b.fa, b.color]" class="text-xl md:text-3xl"></i>
          <span v-else :class="b.color" class="font-semibold text-[9px] md:text-sm">{{ b.text }}</span>
        </div>

        <div class="orb-wrap" style="left:50%; top:66%;">
          <div class="orb-glow"></div>
          <div class="orb">
            <div class="orb-swirl"></div>
            <div class="orb-rim"></div>
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
      lines: [
        'M370,132 C400,300 480,330 492,372',
        'M425,132 C445,280 490,330 496,372',
        'M475,132 C480,280 497,330 499,372',
        'M535,132 C525,280 503,330 501,372',
        'M590,132 C560,280 512,330 504,372',
        'M645,132 C600,280 520,330 508,372'
      ],
      // type: sat | sput | cube | moonbody | tech ; s = scale
      orbiters: [
        { type: 'sat', path: 'orbA', dur: 70, begin: -10, s: 1.1 },
        { type: 'sput', path: 'orbA', dur: 70, begin: -45, s: 1 },
        { type: 'moonbody', path: 'orbA', dur: 110, begin: -75, s: 1.3 },
        { type: 'tech', label: 'in', path: 'orbA', dur: 70, begin: -28 },
        { type: 'cube', path: 'orbB', dur: 52, begin: -6, s: 1.2 },
        { type: 'sat', path: 'orbB', dur: 52, begin: -34, s: 0.9 },
        { type: 'tech', label: 'JS', path: 'orbB', dur: 52, begin: -20 },
        { type: 'tech', label: '</>', path: 'orbB', dur: 52, begin: -44 },
        { type: 'sat', path: 'orbC', dur: 42, begin: -14, s: 0.8 },
        { type: 'cube', path: 'orbC', dur: 42, begin: -36, s: 1 },
        { type: 'tech', label: 'Xd', path: 'orbC', dur: 42, begin: -25 },
        { type: 'sput', path: 'orbD', dur: 34, begin: -8, s: 0.8 },
        { type: 'tech', label: 'Ai', path: 'orbD', dur: 34, begin: -24 }
      ]
    }
  },
  mounted() {
    const colors = ['#FFFFFF', '#E9D5FF', '#C4B5FD', '#BAE6FD', '#FDE68A']
    this.stars = Array.from({ length: 90 }, (_, id) => ({
      id,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.8 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 6,
      dur: 2.5 + Math.random() * 4
    }))
  }
}
</script>

<style scoped>
.space-section {
  background:
    radial-gradient(ellipse 60% 40% at 15% 20%, rgba(88, 40, 160, 0.28), transparent 70%),
    radial-gradient(ellipse 50% 40% at 88% 70%, rgba(30, 60, 150, 0.22), transparent 70%),
    radial-gradient(ellipse 70% 50% at 50% 95%, rgba(120, 60, 200, 0.25), transparent 70%),
    #0B0616;
}
.scene { aspect-ratio: 1000 / 690; }

/* Stars */
.star { position: absolute; border-radius: 9999px; opacity: 0.2; animation: twinkle 4s ease-in-out infinite; will-change: transform, opacity; transform: translateZ(0); }
@keyframes twinkle { 0%, 100% { opacity: 0.1; transform: scale(0.8) translateZ(0); } 50% { opacity: 0.95; transform: scale(1.3) translateZ(0); } }

/* Shooting stars: brief streak, long pause */
.shoot {
  position: absolute; width: 90px; height: 1.5px; opacity: 0;
  background: linear-gradient(90deg, transparent, #fff);
  transform: rotate(-35deg);
  animation: shoot 18s linear infinite;
}
@keyframes shoot {
  0% { opacity: 0; transform: rotate(-35deg) translateX(0); }
  2% { opacity: 1; }
  7% { opacity: 0; transform: rotate(-35deg) translateX(-320px); }
  100% { opacity: 0; transform: rotate(-35deg) translateX(-320px); }
}

/* Rings */
.ring { animation: ringPulse 5s ease-in-out infinite alternate; will-change: opacity; }
@keyframes ringPulse { from { opacity: 0.55; } to { opacity: 1; } }
.ring-scan { stroke-dasharray: 40 1400; opacity: 0.6; animation: scan 14s linear infinite; will-change: stroke-dashoffset; stroke-width: 2.2px; }
@keyframes scan { to { stroke-dashoffset: -1440; } }

/* Satellite beacon */
.blink { animation: blink 1.6s steps(1) infinite; will-change: opacity; }
@keyframes blink { 50% { opacity: 0.1; } }

/* Data flow */
.flow path { stroke-dasharray: 6 60; animation: dashFlow 4s linear infinite; will-change: stroke-dashoffset; }
@keyframes dashFlow { to { stroke-dashoffset: -198; } }

/* Bubbles */
.bubble {
  position: absolute; width: 4.3%; aspect-ratio: 1; transform: translate(-50%, -50%) translateZ(0);
  border-radius: 9999px; background: #1E1830;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 18px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  animation: bob 5s ease-in-out infinite; will-change: transform;
}
@keyframes bob { 0%, 100% { transform: translate(-50%, -50%) translateY(0) translateZ(0); } 50% { transform: translate(-50%, -50%) translateY(-6px) translateZ(0); } }

/* Orb: planet-like core */
.orb-wrap { position: absolute; width: 17.6%; aspect-ratio: 1; transform: translate(-50%, -50%) translateZ(0); animation: orbFloat 7s ease-in-out infinite; will-change: transform; }
@keyframes orbFloat { 0%, 100% { transform: translate(-50%, -50%) translateY(0) translateZ(0); } 50% { transform: translate(-50%, -50%) translateY(-10px) translateZ(0); } }
.orb-glow {
  position: absolute; inset: -50%; border-radius: 9999px;
  background: radial-gradient(circle, rgba(139, 79, 208, 0.55) 0%, rgba(90, 40, 150, 0.25) 40%, transparent 70%);
  animation: glow 5s ease-in-out infinite alternate; will-change: transform, opacity; transform: translateZ(0);
}
@keyframes glow { from { transform: scale(0.92) translateZ(0); opacity: 0.7; } to { transform: scale(1.1) translateZ(0); opacity: 1; } }
.orb {
  position: relative; width: 100%; height: 100%; border-radius: 9999px; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  background: radial-gradient(circle at 35% 30%, #7C4CC0 0%, #43257F 45%, #1B0E44 100%);
  box-shadow: 0 0 70px rgba(139, 79, 208, 0.55), 0 0 0 1px rgba(216, 180, 254, 0.25);
}
/* slowly rotating cloud bands */
.orb-swirl {
  position: absolute; inset: -20%; border-radius: 9999px; opacity: 0.35; mix-blend-mode: soft-light;
  background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.7), transparent 25%, rgba(200,150,255,0.6) 50%, transparent 70%, rgba(255,255,255,0.5), transparent);
  animation: spin 40s linear infinite; will-change: transform; transform: translateZ(0);
}
@keyframes spin { from { transform: rotate(0deg) translateZ(0); } to { transform: rotate(360deg) translateZ(0); } }
/* atmosphere + terminator shadow */
.orb-rim {
  position: absolute; inset: 0; border-radius: 9999px;
  background: radial-gradient(circle at 30% 25%, transparent 45%, rgba(10, 4, 30, 0.75) 100%);
  box-shadow: inset 0 0 30px rgba(216, 180, 254, 0.45), inset -10px -14px 40px rgba(168, 105, 235, 0.35);
}
.orb-shine {
  position: absolute; top: 7%; left: 18%; width: 45%; height: 20%; border-radius: 50%;
  background: rgba(255, 255, 255, 0.14); filter: blur(5px); transform: rotate(-22deg);
}

@media (prefers-reduced-motion: reduce) {
  .star, .shoot, .ring, .ring-scan, .flow path, .bubble, .orb-wrap, .orb-glow, .orb-swirl, .blink { animation: none; }
}
</style>