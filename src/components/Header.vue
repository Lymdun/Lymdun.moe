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
  position: sticky;
  top: 0;
  display: flex;
  justify-content: end;
  padding: 1rem;
  list-style: none;
  font-size: 1.3rem;
  background: hsl(254 22% 20% / .95);
  box-shadow: 5px 5px 5px #00000026;
}

@media (max-width: 768px) {
  header {
    font-size: 1.2rem;
  }
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  display: inline;
  margin: 0 2rem;
}

@media (max-width: 768px) {
  nav ul li {
    margin: 0 1rem;
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
  margin-left: 0.5rem;
}

</style>
<script setup>
</script>