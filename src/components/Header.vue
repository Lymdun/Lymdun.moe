<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/"><font-awesome-icon icon="house" /><span class="link-text">Home</span></router-link></li>
        <li><router-link to="/about"><font-awesome-icon icon="user" /><span class="link-text">About</span></router-link></li>
        <li><router-link to="/projects"><font-awesome-icon icon="code" /><span class="link-text">Projects</span></router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  top: 0;
  display: flex;
  justify-content: end;
  padding: 1em;
  list-style: none;
  font-size: 1.3em;
  background: hsl(254 22% 20% / .95);
  box-shadow: 5px 5px 5px #00000026;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  display: inline;
  margin: 0 2em;
}

@media (max-width: 768px) {
  nav ul li {
    margin: 0 1em;
  }
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

nav ul li:hover a, nav ul li:hover font-awesome-icon {
  color: #ccc;
}

.link-text {
  margin-left: 0.5em;
}

</style>
<script setup>
</script>