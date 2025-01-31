<template>
  <div class="projects">
    <div class="title">
      <span>My Projects</span>
    </div>
    <div class="projects-wrapper">
      <div class="project">
        <img src="../assets/alteros.jpg" alt="">
        <span>Alteros Online</span> is a 3D MMORPG I'm working on alone since 2017, made thanks to the <span>Unity3D</span> engine.
        Even though it is still in an alpha state, most features are already working ; Multiplayer, quests, battles, AIs, guilds, groups, and much more!
        <br />
        Please feel free to download it and give it a try with your friends!
        <div class="project-links">
          <a href="https://alteros-online.com/" target="_blank"><font-awesome-icon icon="globe" />Website</a>
          <a href="https://alteros-online.com/download/" target="_blank"><font-awesome-icon icon="download" />Demo</a>
          <a href="https://alteros-online.com/press/" target="_blank"><font-awesome-icon icon="file-code" />Press Kit</a>
        </div>
      </div>
      <div class="project">
        <img src="../assets/astolfobot.png" alt="">
        <span>AstolfoBot</span> is a Discord bot written in <span>C#</span> similar to a RPG game, with +200 characters, battle system, gambling system and more.
        I've made this bot in late 2018 as a side-project, and reached more than <span>2 millions</span> users across <span>15.000</span> Discord servers.
        <div class="project-links">
          <a href="https://top.gg/fr/bot/917838231788204062" target="_blank"><font-awesome-icon icon="download" />Demo</a>
        </div>
      </div>
      <div class="project">
        Although it is not a solo project like the two others, I've done several contributions to the open-source project <span>Mirage</span>.
        It is a high-level networking library made in <span>C#</span> for <span>Unity3D</span>, made for ease of use and high performance.
        <br />
        Feel free to contact me if you need help implementing <span>Mirage</span> in your project!
        <div class="project-links">
          <a href="https://github.com/MirageNet/Mirage" target="_blank"><font-awesome-icon :icon="['fab', 'github']" />Code</a>
        </div>
      </div>
    </div>
    <div class="more">
      <span>OPEN-SOURCE CONTRIBUTIONS</span>
      <br />
      <div class="more-github">
        <a href="https://github.com/Lymdun" target="_blank"><font-awesome-icon :icon="['fab', 'github']" size="2xl" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped>
.projects {
  padding: 2em;
  align-items: center;
  font-size: 1.4em;
  line-height: 1.6em;
}

.title {
  font-size: 2em;
  text-align: center;
  padding-bottom: 1.2em;
}

.projects-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 16px;;
}

.project {
  max-width: 40%;
  padding: 1.6em;
  margin: 0.5em 1em 2em;
  border: 1px solid #c7c7c7;
  text-align: justify;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.project:hover {
  transform: translateY(-4px);
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.4);
}

@media (max-width: 1268px) {
  .project {
    max-width: 100%;
  }
}

.project img {
  margin-bottom: 1rem;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  box-shadow: 5px 5px 5px #00000026;
}

.project-links {
  display: flex;
  justify-content: center;
  padding: 0.5em 0.5em;
}

.project-links a {
  display: flex;
  align-items: center;
  padding: 0.3em 1.2em;
  margin: 0 1rem;
  border: 1px solid #564F6F;
  border-radius: 14px;
  background-color: #564F6F;
  text-decoration: none;
  color: #c7c7c7;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
}

.project-links a:hover {
  background-color: #bf68f1;
}

.project-links a font-awesome-icon {
  margin-right: 0.5em;
}

.more {
  text-align: center;
  padding: 1em 0 1em;
}

.more-github {
  margin: 0.7em;
}

.more-github a {
  color: white;
}

span, .more-github a:hover {
  color: #bf68f1;
}
</style>