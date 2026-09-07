<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const selectedSection = computed(() => route.hash)
</script>
<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="header-inner page-width">
      <RouterLink to="/" class="wordmark" aria-label="Lymdun home">
        <svg class="brand-mark" viewBox="0 0 44 44" aria-hidden="true">
          <circle cx="22" cy="22" r="19" fill="none" stroke="currentColor" stroke-width="2" />
          <path d="M15 10v23h17v-6H21V10z" fill="currentColor" />
          <path d="M3 38 38 3" stroke="var(--paper)" stroke-width="5" />
          <path d="M3 38 38 3" stroke="var(--accent)" stroke-width="2" />
        </svg>
        <span>LYMDUN<span class="wordmark-domain">.MOE</span></span>
      </RouterLink>
      <nav aria-label="Main navigation">
        <RouterLink to="/#projects" :aria-current="selectedSection === '#projects' ? 'location' : undefined"><span class="nav-index">01</span> Projects</RouterLink>
        <RouterLink to="/#links" :aria-current="selectedSection === '#links' ? 'location' : undefined"><span class="nav-index">02</span> Links</RouterLink>
        <a class="contact-link" href="mailto:contact@lymdun.moe">Get in touch <span class="arrow" aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.site-header { border-top: 4px solid var(--ink); border-bottom: 1px solid var(--line); }
.header-inner { min-height: 86px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.wordmark { display: flex; align-items: center; gap: 12px; font-family: var(--brand); font-size: 19px; font-weight: 700; letter-spacing: -.04em; }
.brand-mark { width: 38px; }
.wordmark-domain { font-weight: 400; }
nav { display: flex; align-items: center; gap: 40px; font-size: 14px; font-weight: 500; }
nav a { min-height: 44px; display: flex; align-items: center; gap: 10px; transition: color .2s; }
nav a:hover, nav a[aria-current] { color: var(--accent); }
.nav-index { font: 9px var(--mono); color: var(--muted); }
.contact-link { margin-left: 20px; }
.contact-link .arrow { font-size: 23px; margin-left: 16px; }
@media (max-width: 650px) {
  .header-inner { min-height: 74px; gap: 12px; }
  .wordmark { font-size: 16px; gap: 8px; }
  .brand-mark { width: 32px; }
  nav { gap: 22px; }
  .nav-index, .contact-link { display: none; }
}
@media (max-width: 380px) { .wordmark-domain { display: none; } nav { gap: 16px; } }
</style>
