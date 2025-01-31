<template>
  <div>
    <div class="about-wrapper">
      <div class="about">
        <div class="title">
          <span>Who I Am</span>
        </div>
        Heya! My online name is <span>Lymdun</span>. I enjoy developing in C#/Java, but I also have experience in Dart.
        Here's an overview of my skills:
        <br /><br />
        <li><span>Back-end</span>: C#, Unity3D, Java, Spring Boot, Keycloak, Algolia, Nakama, Firebase..</li>
        <li><span>Ops</span>: Kubernetes, Agones, Docker, Elastic suite..</li>
        Moreover, I also had fun in some AI projects with <span>Keras</span> (mostly CNN stuff). I have some experience in web front-end with <span>Vue.js</span>, but I must say I'm more of a back-end/software guy!
        <br /><br />
        Besides coding, several other activities that bring me joy!
        <li>Playing <span>violin</span> or <span>piano</span></li>
        <li>Building <span>gunpla</span> models</li>
        <li><span>Honkai Star Rail</span> & <span>Arknights</span></li>
        <br />
        I also published two games in my free-time, <span>Alteros Online</span> (3D MMORPG, still WIP but demo available) and <span>AstolfoBot</span>, a Discord bot with more than <strong>2 millions</strong> users, you can find more on my <router-link to="/projects"><span class="link-text">Projects</span></router-link> pages!
      </div>
      <img src="@/assets/about-image.png" class="about-image" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 2em 6em 4em;
}

@media (max-width: 768px) {
  .about-wrapper {
    flex-direction: column;
    padding: 2em 1em;
  }
}

.about {
  align-items: center;
  font-size: 1.5em;
  line-height: 1.8em;
}

span {
  color: #bf68f1;
}

.about .title {
  font-size: 2em;
  text-align: center;
  padding-bottom: 1.2em;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.about-image {
  height: 24em;
  width: auto;
  object-fit: contain;
  padding-top: 5em;
  padding-left: 3em;
  max-height: 40vh;
  filter: drop-shadow(3px 1px 1px black);
  animation: float 2s ease-in infinite;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #bf68f1;
}

</style>