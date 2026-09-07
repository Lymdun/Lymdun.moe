<template>
  <footer class="site-footer">
    <div class="footer-inner page-width">
      <div class="footer-main">
        <div class="footer-signature">
          <RouterLink class="footer-wordmark" to="/#top" aria-label="Lymdun, back to top">LYMDUN<span aria-hidden="true">.</span></RouterLink>
          <p>Always curious.<br>Still creating.</p>
        </div>
        <RouterLink class="back-to-top" to="/#top"><span>Back to top</span><span aria-hidden="true">↑</span></RouterLink>
      </div>
      <div class="footer-meta">
        <span>© {{ currentYear }} LYMDUN</span>
        <a href="https://github.com/Lymdun/Lymdun.moe" target="_blank" rel="noopener noreferrer">View source <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer { background: var(--paper, #e8e5d5); color: var(--ink, #171918); }
.footer-inner { border-top: 1px solid var(--line, #bcbdaf); }
.footer-main { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 38px 0 41px; }
.footer-signature { display: flex; align-items: center; gap: 31px; }
.footer-wordmark { color: inherit; font-family: var(--brand); font-size: 33px; line-height: 1; font-weight: 600; letter-spacing: -.065em; text-decoration: none; }
.footer-wordmark > span { color: var(--accent, #c45532); }
.footer-signature p { margin: 0; color: var(--muted, #686a62); font-size: 12px; line-height: 1.5; }
.back-to-top { display: flex; align-items: center; gap: 21px; color: inherit; font-size: 12px; text-decoration: none; }
.back-to-top > span:last-child { display: grid; place-items: center; width: 35px; height: 35px; border: 1px solid var(--line, #bcbdaf); font-size: 21px; transition: background .2s, color .2s; }
.back-to-top:hover > span:last-child { background: var(--ink, #171918); color: var(--paper, #e8e5d5); }
.footer-meta { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 17px 0 23px; border-top: 1px solid var(--line, #bcbdaf); color: var(--muted, #686a62); font: 9px/1.5 var(--mono, 'IBM Plex Mono', monospace); letter-spacing: .04em; }
.footer-meta a { display: inline-flex; align-items: center; gap: 12px; color: inherit; text-decoration: none; }
.footer-meta a:hover { color: var(--accent, #c45532); }
a:focus-visible { outline: 2px solid var(--accent, #c45532); outline-offset: 6px; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
@media (max-width: 760px) { .footer-main { padding: 29px 0; } .footer-signature { display: block; } .footer-wordmark { font-size: 28px; } .footer-signature p { margin-top: 11px; font-size: 11px; } .back-to-top { gap: 12px; font-size: 11px; } .footer-meta { padding-bottom: 20px; font-size: 8px; } }
@media (prefers-reduced-motion: reduce) { .back-to-top > span:last-child { transition: none; } }
</style>
