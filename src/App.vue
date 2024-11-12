<template>
  <div>
    <header>
      <img alt="Nova logo" class="logo" src="./assets/nova-logo.jpg" width="125" height="125" />
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/cadastro">Cadastro de Filmes</router-link>
        <router-link to="/listagem">Listagem de Filmes</router-link>
      </nav>
    </header>
    
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
header {
  line-height: 1.5;
  text-align: center;
  padding: 1rem;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
  max-width: 150px;
  height: auto;
}

nav {
  margin-bottom: 1rem;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

nav a.router-link-active {
  font-weight: bold;
  color: #007bff;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0;
  }
}
</style>
