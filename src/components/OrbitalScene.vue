<script setup>
defineProps({ paused: Boolean })
const ticks = Array.from({ length: 72 }, (_, i) => i * 5)
const stars = Array.from({ length: 65 }, (_, i) => ({ x: (i * 137.508) % 800, y: (i * 79.73) % 610, r: i % 7 === 0 ? 1.5 : .7 }))
</script>

<template>
  <svg class="orbital-scene" :class="{ paused }" viewBox="0 0 800 610" fill="none" aria-hidden="true">
    <defs>
      <radialGradient id="atmosphere"><stop stop-color="#97b6a6" stop-opacity=".16"/><stop offset="1" stop-color="#8cbdb1" stop-opacity="0"/></radialGradient>
      <radialGradient id="planet-light" cx=".26" cy=".22" r=".83"><stop stop-color="#f2ecce"/><stop offset=".34" stop-color="#cac4a8"/><stop offset=".65" stop-color="#777b69"/><stop offset=".9" stop-color="#30372e"/><stop offset="1" stop-color="#1e2723"/></radialGradient>
      <linearGradient id="planet-shade" x1="0" y1="0" x2="1" y2=".8"><stop stop-color="#222b24" stop-opacity="0"/><stop offset=".5" stop-color="#19221e" stop-opacity=".15"/><stop offset="1" stop-color="#131a17" stop-opacity=".97"/></linearGradient>
      <linearGradient id="planet-rim" x1=".12" y1=".08" x2=".86" y2=".9"><stop stop-color="#f1e8c4" stop-opacity=".85"/><stop offset=".48" stop-color="#acd4bf" stop-opacity=".28"/><stop offset="1" stop-color="#94b6a1" stop-opacity="0"/></linearGradient>
      <filter id="planet-texture"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="4" seed="8"/><feColorMatrix type="saturate" values="0"/><feBlend in="SourceGraphic" mode="multiply"/></filter>
      <clipPath id="planet-clip"><circle cx="420" cy="303" r="139"/></clipPath>
      <linearGradient id="trajectory"><stop stop-color="#d3bd76" stop-opacity=".1"/><stop offset=".5" stop-color="#e9ddac"/><stop offset="1" stop-color="#d3bd76" stop-opacity=".1"/></linearGradient>
    </defs>
    <circle cx="420" cy="303" r="300" fill="url(#atmosphere)"/>
    <g fill="#c9cebb"><circle v-for="(star, i) in stars" :key="i" :cx="star.x" :cy="star.y" :r="star.r" :opacity="i % 3 === 0 ? .6 : .23"/></g>
    <g stroke="#889784" stroke-opacity=".19">
      <path d="M420 17v566M109 303h622"/><circle cx="420" cy="303" r="247"/><circle cx="420" cy="303" r="199" stroke-dasharray="2 7"/>
      <circle cx="420" cy="303" r="273" stroke-dasharray="1 10"/>
    </g>
    <g stroke="#a9ae95" stroke-opacity=".55">
      <path v-for="(angle, i) in ticks" :key="angle" :d="`M420 49v${i % 3 === 0 ? 9 : 4}`" :transform="`rotate(${angle} 420 303)`"/>
    </g>
    <ellipse cx="420" cy="303" rx="315" ry="109" transform="rotate(-34 420 303)" stroke="#b8b79b" stroke-opacity=".4"/>
    <ellipse cx="420" cy="303" rx="179" ry="239" transform="rotate(28 420 303)" stroke="#8cbdb1" stroke-opacity=".15"/>
    <g clip-path="url(#planet-clip)">
      <circle cx="420" cy="303" r="139" fill="url(#planet-light)"/>
      <circle cx="420" cy="303" r="139" fill="#ceceb5" filter="url(#planet-texture)" opacity=".46"/>
      <g class="planet-clouds" stroke="#e9e5c8" stroke-linecap="round">
        <path d="M259 266c45-24 67-25 96-13s39 9 65-2 56-15 81-8 51 9 83-3M263 333c30-14 51-12 74-2s39 14 68 8 36-20 61-22 62 12 107 1M300 391c37-9 60-1 83 4s62 1 105-11" stroke-width="7" opacity=".13"/>
        <path d="M274 272c47-16 69-12 89-4s41 5 60-3 40-9 64-5M301 339c20-5 29 1 44 7s33 9 50 4M451 320c30-7 51 8 84 4M322 392c31-5 48 9 73 7" stroke-width="1.2" opacity=".29"/>
        <path d="M345 218c15-11 32-10 37-3s-7 13-15 9-2-9 7-8M426 356c21-17 45-15 49-3s-17 18-24 10 3-13 12-9" stroke-width="2" opacity=".16"/>
      </g>
      <circle cx="420" cy="303" r="139" fill="url(#planet-shade)"/>
      <path d="M245 294c85-69 186-96 318-60M270 368c112-44 214-51 328-9M303 415c70-10 144 0 204 21" stroke="#d1d0b1" stroke-opacity=".13" stroke-width="1"/>
    </g>
    <circle cx="420" cy="303" r="139" stroke="#d9dcc0" stroke-opacity=".45"/>
    <circle cx="420" cy="303" r="140.5" stroke="url(#planet-rim)" stroke-width="2"/>
    <circle cx="420" cy="303" r="144" stroke="url(#planet-rim)" stroke-opacity=".24"/>
    <path d="M170 432c-60-2-54-61 60-143S515 118 617 148" stroke="url(#trajectory)" stroke-width="1.5"/>
    <path class="trajectory-signal" d="M170 432c-60-2-54-61 60-143S515 118 617 148" stroke="#f0df9f" stroke-width="2" stroke-linecap="round" stroke-dasharray="1 27 45 700" stroke-opacity=".7"/>
    <g class="orbiting-satellite"><circle cx="420" cy="56" r="6" fill="#e1dcc1"/><circle cx="420" cy="56" r="12" stroke="#e1dcc1" stroke-opacity=".5"/></g>
    <g stroke="#d5b867"><path d="M616 136v24m-12-12h24"/><circle cx="616" cy="148" r="3" fill="#d5b867"/></g>
    <g stroke="#899581" stroke-width=".75"><path d="M528 388l53 53h101M216 208h69l45 45"/><circle cx="528" cy="388" r="3"/><path d="M119 115v14m-7-7h14M709 475v14m-7-7h14"/></g>
    <g fill="#adb29d" font-family="monospace" font-size="8" letter-spacing="1.8">
      <text x="584" y="457">UNEXPLORED POSSIBILITIES</text><text x="177" y="196">A POINT OF DEPARTURE</text>
      <text x="406" y="29">000°</text><text x="702" y="307">090°</text><text x="406" y="594">180°</text>
    </g>
    <path d="M407 303h26m-13-13v26" stroke="#e5e3cf" stroke-opacity=".35"/>
  </svg>
</template>

<style scoped>
.orbital-scene { width: 100%; height: 100%; overflow: visible; }
.orbiting-satellite { transform-origin: 420px 303px; animation: orbit 100s linear infinite; }
.planet-clouds { transform-origin: 420px 303px; animation: cloud-drift 48s ease-in-out -15s infinite alternate; }
.trajectory-signal { animation: trajectory-signal 36s linear -9s infinite; }
.paused :is(.orbiting-satellite, .planet-clouds, .trajectory-signal) { animation-play-state: paused; }
@keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes cloud-drift { from { transform: translate(-18px, -3px) rotate(-4deg); } to { transform: translate(18px, 3px) rotate(4deg); } }
@keyframes trajectory-signal { to { stroke-dashoffset: -773; } }
@media (prefers-reduced-motion: reduce) {
  .orbiting-satellite, .planet-clouds, .trajectory-signal { animation: none; }
}
</style>
