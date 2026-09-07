<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Projects from '@/components/Projects.vue'
import OrbitalScene from '@/components/OrbitalScene.vue'
import '@/assets/home.css'
const paused = ref(false)
const reducedMotion = ref(false)
let motionQuery
function syncMotionPreference() {
  reducedMotion.value = motionQuery.matches
  if (reducedMotion.value) paused.value = true
}
onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  syncMotionPreference()
  motionQuery.addEventListener('change', syncMotionPreference)
})
onUnmounted(() => motionQuery?.removeEventListener('change', syncMotionPreference))
const links = [
  { number: '01', name: 'GitHub', label: 'Code & open source', value: '@Lymdun', url: 'https://github.com/Lymdun', icon: ['fab', 'github'] },
  { number: '02', name: 'X / Twitter', label: 'Notes from the journey', value: '@Lymdun_Sama', url: 'https://x.com/Lymdun_Sama', icon: ['fab', 'x-twitter'] },
  { number: '03', name: 'Email', label: 'Start a conversation', value: 'contact@lymdun.moe', url: 'mailto:contact@lymdun.moe', icon: 'envelope' }
]
</script>
<template>
  <main id="main">
    <section id="top" class="intro page-width" aria-labelledby="site-title">
      <div class="intro-registration mono">
        <span><span class="registration-cross" aria-hidden="true">✳</span> INDEPENDENT DEVELOPER / FRANCE</span>
        <span class="registration-right">PERSONAL SPACE <span class="registration-divider">/</span> VOL. 01</span>
      </div>
      <div class="masthead">
        <h1 id="site-title">LYMDUN<span class="title-period">.</span></h1>
        <div class="masthead-note">
          <div class="spectrum" aria-hidden="true"><i></i><i></i><i></i></div>
          <p>Code.<br>Create.<br>Explore.</p>
        </div>
      </div>
      <div class="observation">
        <div class="observation-top mono">
          <span><span class="small-dot" aria-hidden="true"></span> A WINDOW INTO MY WORLD</span>
          <span class="observation-id">LM / OBSERVATORY — 001</span>
        </div>
        <div class="orbital-art"><OrbitalScene :paused="paused" /></div>
        <div class="observation-copy">
          <span class="hero-kicker mono">DRIVEN BY CURIOSITY</span>
          <h2>Ideas into<br><span>orbit.</span></h2>
          <p>Games, code, and things worth creating.<br>A few projects from my corner of the universe.</p>
          <RouterLink to="/#projects" class="hero-cta">Explore my projects <span class="arrow" aria-hidden="true">↗</span></RouterLink>
        </div>
        <div class="observation-bottom mono">
          <span class="observation-caption"><span class="spectrum" aria-hidden="true"><i></i><i></i><i></i></span> KEEP LOOKING BEYOND.</span>
          <span v-if="reducedMotion" class="motion-preference" title="Animation is disabled to respect your reduced motion preference">REDUCED MOTION</span>
          <button v-else class="motion-toggle" :aria-pressed="paused" aria-label="Pause orbital animation" @click="paused = !paused"><span class="motion-icon" aria-hidden="true">{{ paused ? '▷' : 'Ⅱ' }}</span>{{ paused ? 'MOTION PAUSED' : 'PAUSE MOTION' }}</button>
        </div>
        <span class="corner corner-tl" aria-hidden="true"></span><span class="corner corner-tr" aria-hidden="true"></span><span class="corner corner-bl" aria-hidden="true"></span><span class="corner corner-br" aria-hidden="true"></span>
      </div>
      <div class="intro-bottom mono"><span>SMALL BEGINNINGS. OPEN POSSIBILITIES.</span><RouterLink to="/#links">ESTABLISH A CONNECTION <span class="arrow" aria-hidden="true">↓</span></RouterLink></div>
    </section>
    <div class="page-width"><Projects /></div>
    <section id="links" class="connections" aria-labelledby="links-title">
      <div class="page-width">
        <div class="connection-heading">
          <div><span class="section-kicker mono"><b>02</b> / OPEN CHANNELS</span><h2 id="links-title">Let's connect<span>.</span></h2></div>
          <p>Follow the projects, explore the code,<br>or simply say hello.</p>
          <svg viewBox="0 0 80 80" class="connection-symbol" aria-hidden="true"><circle cx="40" cy="40" r="34" fill="none" stroke="currentColor"/><circle cx="40" cy="40" r="23" fill="none" stroke="currentColor"/><circle cx="40" cy="40" r="12" fill="none" stroke="currentColor"/><path d="M40 0v80M0 40h80" stroke="currentColor"/><circle cx="40" cy="40" r="4" fill="currentColor"/></svg>
        </div>
        <div class="link-grid">
          <a v-for="link in links" :key="link.name" :href="link.url" :target="link.url.startsWith('https') ? '_blank' : undefined" :rel="link.url.startsWith('https') ? 'noopener noreferrer' : undefined" class="channel">
            <div class="channel-top"><font-awesome-icon :icon="link.icon" aria-hidden="true"/><span class="mono">CH / {{ link.number }}</span></div>
            <p class="channel-label mono">{{ link.label }}</p><h3>{{ link.name }}</h3>
            <div class="channel-bottom"><span>{{ link.value }}</span><span class="arrow" aria-hidden="true">↗</span></div>
          </a>
        </div>
        <div class="connection-foot mono"><span>THREE CHANNELS. ONE HUMAN.</span><span>TRANSMISSION ENDS HERE <span aria-hidden="true">■</span></span></div>
      </div>
    </section>
  </main>
</template>
