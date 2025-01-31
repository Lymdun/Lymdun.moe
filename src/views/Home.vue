<template>
  <div class="home">
    <div class="home-intro-title">
      <h1>Lymdun.</h1>
      <p>Weeb C#/Java Developer</p>
    </div>
    <div class="about-socials">
      <span>FIND ME ON</span>
      <br />
      <div class="about-socials-items">
        <a href="mailto:contact@lymdun.moe" target="_blank"><font-awesome-icon icon="envelope" /></a>
        <a href="https://github.com/Lymdun" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
      </div>
    </div>
    <div class="home-intro-image">
      <img src="../assets/lymdun.png" alt="">
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: 'Home',
  components: {FontAwesomeIcon}
}
</script>

<style scoped>
.home-intro-title {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'Zen Maru Gothic', sans-serif;
  font-size: 2em;
  font-weight: 400;
}

.about-socials {
  text-align: center;
  line-height: 2em;
  font-size: 1.6em;
}

.about-socials a {
  margin: 0 0.75em;
}

.about-socials-items {
  display: flex;
  justify-content: center;
}

.home-intro-image {
  display: flex;
  justify-content: center;
}

.home-intro-image img {
  position: fixed;
  bottom: 0;
  height: auto;
  max-width: 100%;
  transform: scale(0.8);
}

@media (max-height: 868px) {
  .home-intro-title {
    font-size: 1.6em;
  }
  .about-socials {
    font-size: 1.4em;
  }
  .home-intro-image img {
    max-height: 45%;
    max-width: 70%;
  }
}

span, a:hover {
  color: #bf68f1;
}

a {
  color: white;
}
</style>
