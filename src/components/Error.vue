<template>
  <main id="main" class="lost-signal page-width">
    <p class="mono">404 / OUT OF RANGE</p>
    <h1>Signal lost.</h1>
    <p>This page is somewhere beyond our orbit.<br>Let's get you back to familiar ground.</p>
    <RouterLink to="/">Return home <span aria-hidden="true">↗</span></RouterLink>
  </main>
</template>
<style scoped>
.lost-signal { padding-block: 120px; }
.mono { color: var(--accent); }
h1 { font-size: clamp(64px, 12vw, 150px); letter-spacing: -.075em; margin: 15px 0 25px; }
p { line-height: 1.8; }
a { display: inline-flex; margin-top: 35px; padding: 16px 25px; gap: 50px; background: var(--ink); color: var(--paper); }
a:hover { background: var(--accent); }
</style>
