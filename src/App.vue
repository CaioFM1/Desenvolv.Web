<template>
  <header>
    <img alt="Nova logo" class="logo" src="./assets/nova-logo.jpg" width="125" height="125" />
  </header>

  <main>
    <CadastroFilmes />
  </main>
</template>

<script setup>
import CadastroFilmes from './components/CadastroFilmes.vue';
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  max-width: 150px;
  height: auto;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
