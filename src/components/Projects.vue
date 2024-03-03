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
          <a href="https://alteros-online.com/" target="_blank">Website</a>
          <a href="https://alteros-online.com/download/" target="_blank">Demo</a>
          <a href="https://alteros-online.com/press/" target="_blank">Press Kit</a>
        </div>
      </div>
      <div class="project">
        <img src="../assets/astolfobot.png" alt="">
        <span>AstolfoBot</span> is a Discord bot written in <span>C#</span> similar to a RPG game, with +200 characters, battle system, gambling system and more.
        I've made this bot in late 2018 as a side-project, and reached more than <span>2 millions</span> users across <span>15.000</span> Discord servers.
        <div class="project-links">
          <a href="https://top.gg/fr/bot/917838231788204062" target="_blank">Demo</a>
        </div>
      </div>
      <div class="project">
        Although it is not a solo project like the two others, I've done several contributions to the open-source project <span>Mirage</span>.
        It is a high-level networking library made in <span>C#</span> for <span>Unity3D</span>, made for ease of use and high performance.
        <br />
        Feel free to contact me if you need help implementing <span>Mirage</span> in your project!
        <div class="project-links">
          <a href="https://github.com/MirageNet/Mirage" target="_blank">Code</a>
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
  margin: 0.5em 1em 1em;
  border: 1px solid #c7c7c7;
  text-align: justify;
}

@media (max-width: 768px) {
  .project {
    max-width: 100%;
  }
}

.project img {
  margin-bottom: 1rem;
  width: 100%;
  height: 350px;
  object-fit: cover;
  box-shadow: 5px 5px 5px #00000026;
}

.project-links {
  display: flex;
  justify-content: center;
  padding: 0.5em 0.5em;
}

.project-links a {
  padding: 0.1em 1em;
  margin: 0 1rem;
  border: 1px solid #564F6F;
  border-radius: 14px;
  background-color: #564F6F;
  text-decoration: none;
  color: #c7c7c7;
}

.project-links a:hover {
  background-color: #bf68f1;
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