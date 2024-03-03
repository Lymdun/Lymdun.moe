<template>
  <footer>
    <p>Copyright &copy; 2024. Made with <font-awesome-icon icon="heart" style="color: red"/> by Lymdun</p>
    <p><a href="https://github.com/Lymdun/Lymdun.moe" target="_blank">Source code</a></p>
  </footer>
</template>


<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  padding: 0 8em;
  list-style: none;
  background-color: #1a1726;
  color: #c7c7c7;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

@media (max-width: 768px) {
  footer {
    padding: 0 1em;
  }
}

a {
  color: #dcdcdc;
}
</style>
<script setup>
</script>