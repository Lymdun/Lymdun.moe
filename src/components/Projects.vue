<template>
  <section id="projects" class="projects" aria-labelledby="projects-title">
    <div class="section-heading">
      <div>
        <p class="eyebrow"><span class="registration-mark" aria-hidden="true"></span> 01 / SELECTED PROJECTS</p>
        <h2 id="projects-title">Built to be played.</h2>
      </div>
      <p class="section-intro">Different worlds.<br>Same curiosity.</p>
    </div>

    <div class="project-grid">
      <article id="astolfobot" class="project project-astolfo">
        <div class="project-visual astolfo-visual">
          <div class="window-header"><span>PROJECT / 001</span><span>DISCORD RPG</span></div>
          <div class="orbit orbit-one" aria-hidden="true"></div>
          <div class="orbit orbit-two" aria-hidden="true"></div>
          <div class="orbit-axis" aria-hidden="true"></div>
          <span class="orbital-star star-one" aria-hidden="true">+</span>
          <span class="orbital-star star-two" aria-hidden="true">+</span>
          <div class="discord-preview">
            <div class="preview-label"><span class="preview-dot" aria-hidden="true"></span> CHARACTER FILE <span>↗</span></div>
            <img src="../assets/astolfobot.png" alt="AstolfoBot's character profile in Discord, showing a character's class, attributes, and equipment" loading="lazy" width="540" height="324">
          </div>
          <div class="window-footer"><span>YOUR NEXT ADVENTURE, IN CHAT.</span><span aria-hidden="true">+ + +</span></div>
        </div>
        <div class="project-body">
          <div class="project-heading"><h3>AstolfoBot</h3><span class="project-number">01</span></div>
          <p class="project-category">A WORLD INSIDE YOUR SERVER</p>
          <p class="project-description">Summon a Fate servant, gear up, and challenge players or dungeons. A Discord RPG, right where your community already lives.</p>
          <div class="project-tags" aria-label="Project features"><span>Discord</span><span>Fate servants</span><span>RPG</span></div>
          <a class="project-link" href="https://top.gg/fr/bot/917838231788204062" target="_blank" rel="noopener noreferrer"><span>Discover AstolfoBot</span><span class="link-arrow" aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>
        </div>
      </article>

      <article id="fateful-bullet" class="project project-fateful">
        <div class="project-visual fateful-visual">
          <img class="fateful-art" src="../assets/fatefulbullet-keyart.png" alt="Fateful Bullet logo over an anime character overlooking a futuristic city" loading="lazy" width="920" height="430">
          <div class="art-shade" aria-hidden="true"></div>
          <div class="window-header"><span>PROJECT / 002</span><span>PC / STEAM</span></div>
          <div class="frame-corner corner-top" aria-hidden="true"></div>
          <div class="frame-corner corner-bottom" aria-hidden="true"></div>
          <div class="window-footer"><span>MOVE FAST. MAKE IT COUNT.</span><span aria-hidden="true">+ + +</span></div>
        </div>
        <div class="project-body">
          <div class="project-heading"><h3>Fateful Bullet</h3><span class="project-number">02</span></div>
          <p class="project-category">MOMENTUM MEETS ANIME</p>
          <p class="project-description">An anime third-person arena shooter, developed solo. Expressive movement and sharp combat, with every encounter a reason to keep moving.</p>
          <div class="project-tags" aria-label="Project features"><span>Arena shooter</span><span>Anime</span><span>Solo developed</span></div>
          <a class="project-link" href="https://store.steampowered.com/app/3055070/Fateful_Bullet/" target="_blank" rel="noopener noreferrer"><span>Explore on Steam</span><span class="link-arrow" aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped>
.projects { padding: 90px 0 0; scroll-margin-top: 100px; }
.section-heading { display: flex; justify-content: space-between; align-items: flex-end; gap: 28px; margin-bottom: 40px; }
.eyebrow { display: flex; align-items: center; gap: 12px; margin: 0 0 19px; font-family: var(--mono, 'IBM Plex Mono', monospace); font-size: 10px; font-weight: 500; letter-spacing: .1em; }
.registration-mark { width: 9px; height: 9px; background: var(--accent, #c45532); }
.section-heading h2 { font-family: var(--display); margin: 0; font-size: clamp(24px, 2.6vw, 38px); font-weight: 400; line-height: 1.3; letter-spacing: -.055em; }
.section-intro { margin: 0 0 2px; color: var(--muted, #686a62); font-size: 14px; line-height: 1.5; text-align: right; }
.project-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; }
.project { display: flex; flex-direction: column; min-width: 0; scroll-margin-top: 100px; border: 1px solid var(--line, #bcbdaf); }
.project-visual { position: relative; overflow: hidden; height: 310px; border-bottom: 1px solid var(--line, #bcbdaf); background: #242c29; color: #e8e5d5; }
.window-header, .window-footer { position: absolute; z-index: 3; left: 19px; right: 19px; display: flex; justify-content: space-between; gap: 12px; font-family: var(--mono, 'IBM Plex Mono', monospace); font-size: 8px; line-height: 1.3; letter-spacing: .08em; }
.window-header { top: 17px; }
.window-footer { bottom: 17px; }
.astolfo-visual { background-image: linear-gradient(#adbd9a0b 1px, transparent 1px), linear-gradient(90deg, #adbd9a0b 1px, transparent 1px); background-size: 35px 35px; }
.orbit { position: absolute; border: 1px solid #bbbd8166; width: 340px; height: 340px; border-radius: 50%; right: -57px; top: 21px; transform: rotate(-25deg); }
.orbit-one::before { content: ''; position: absolute; width: 14px; height: 14px; background: #c2bd80; border-radius: 50%; top: 18px; left: 82px; box-shadow: 0 0 0 5px #242c29; }
.orbit-two { width: 257px; height: 257px; right: -16px; top: 62px; border-color: #bbbd812b; }
.orbit-axis { position: absolute; width: 410px; height: 1px; background: #bbbd813f; top: 165px; right: -40px; transform: rotate(-34deg); }
.orbital-star { position: absolute; color: #c2bd80; font-size: 20px; font-family: var(--mono, 'IBM Plex Mono', monospace); font-weight: 300; }
.star-one { left: 26px; top: 52px; }
.star-two { right: 24px; bottom: 45px; }
.discord-preview { position: absolute; display: flex; flex-direction: column; width: 73%; max-width: 370px; top: 19%; bottom: 17%; left: 8%; overflow: hidden; border: 1px solid #c3c7b874; background: #36393f; box-shadow: 12px 14px 0 #121a1940; }
.preview-label { display: flex; gap: 7px; align-items: center; padding: 8px 10px; background: #202522; color: #d2d4bb; font: 8px var(--mono, 'IBM Plex Mono', monospace); letter-spacing: .06em; border-bottom: 1px solid #c3c7b842; }
.preview-label > span:last-child { margin-left: auto; font-size: 11px; }
.preview-dot { width: 5px; height: 5px; background: #c2bd80; border-radius: 50%; }
.discord-preview img { display: block; flex: 1; min-height: 0; width: 100%; height: 0; object-fit: contain; }
.fateful-art { display: block; width: 100%; height: 100%; object-fit: contain; object-position: center; background: #111a28; transition: transform .7s ease; }
.project-fateful:hover .fateful-art { transform: scale(1.035); }
.art-shade { position: absolute; inset: 0; background: linear-gradient(180deg, #08142e54 0%, transparent 35%, transparent 60%, #111e3966 100%); }
.fateful-visual .window-header, .fateful-visual .window-footer { color: #fff; text-shadow: 0 1px 5px #16233b; }
.frame-corner { position: absolute; width: 20px; height: 20px; border-color: #fff9; border-style: solid; }
.corner-top { top: 46px; left: 19px; border-width: 1px 0 0 1px; }
.corner-bottom { bottom: 44px; right: 19px; border-width: 0 1px 1px 0; }
.project-body { display: flex; flex: 1; flex-direction: column; padding: 29px 29px 0; }
.project-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 15px; }
.project-heading h3 { margin: 0; font-size: clamp(29px, 2.7vw, 40px); font-weight: 500; line-height: 1.12; letter-spacing: -.02em; }
.project-number { padding-top: 5px; color: var(--muted, #686a62); font: 11px var(--mono, 'IBM Plex Mono', monospace); }
.project-category { margin: 12px 0 21px; color: var(--muted, #686a62); font: 9px/1.5 var(--mono, 'IBM Plex Mono', monospace); letter-spacing: .08em; }
.project-description { max-width: 440px; margin: 0; font-size: 15px; line-height: 1.7; color: #52574f; }
.project-tags { display: flex; flex-wrap: wrap; gap: 7px; margin: 25px 0 29px; }
.project-tags span { padding: 5px 7px; border: 1px solid var(--line, #bcbdaf); color: #5f645a; font: 9px/1.2 var(--mono, 'IBM Plex Mono', monospace); }
.project-link { display: flex; align-items: center; justify-content: space-between; gap: 15px; min-height: 68px; margin-top: auto; border-top: 1px solid var(--line, #bcbdaf); color: var(--ink, #171918); font-size: 14px; font-weight: 500; text-decoration: none; transition: color .2s; }
.link-arrow { display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; font-size: 23px; line-height: 1; transition: transform .2s, color .2s; }
.project-link:hover { color: var(--accent, #c45532); }
.project-link:hover .link-arrow { transform: translate(2px, -2px); }
.project-link:focus-visible { outline: 2px solid var(--accent, #c45532); outline-offset: 5px; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
@media (min-width: 1300px) { .project-visual { height: 345px; } .discord-preview { max-width: 400px; } }
@media (max-width: 1000px) and (min-width: 761px) { .project-visual { height: 255px; } .discord-preview { width: 80%; left: 6%; } .project-body { padding: 23px 20px 0; } .project-description { font-size: 14px; } .window-header, .window-footer { left: 13px; right: 13px; font-size: 7px; } }
@media (max-width: 760px) { .projects { padding: 58px 0 0; } .section-heading { gap: 15px; margin-bottom: 28px; align-items: flex-start; } .section-heading h2 { font-size: clamp(29px, 6vw, 42px); } .section-intro { display: none; } .eyebrow { margin-bottom: 15px; font-size: 9px; } .project-grid { grid-template-columns: minmax(0, 1fr); gap: 27px; } .project-visual { height: clamp(235px, 62vw, 350px); } .discord-preview { width: 74%; max-width: 385px; top: 19%; } .project-body { padding: 24px 21px 0; } .project-heading h3 { font-size: 32px; } .project-description { font-size: 14px; } .project-category { margin-bottom: 18px; } .project-tags { margin: 22px 0 24px; } .project-link { min-height: 62px; } }
@media (prefers-reduced-motion: reduce) { .fateful-art, .project-link, .link-arrow { transition: none; } .project-fateful:hover .fateful-art, .project-link:hover .link-arrow { transform: none; } }
</style>
