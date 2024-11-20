<template>
  <div class="home-container">
    <header class="hero-section">
      <h1>Bem-vindo ao Gerenciador de Filmes</h1>
      <p>Cadastre e gerencie seus filmes favoritos de forma simples e prática.</p>
      <div class="hero-buttons">
        <router-link to="/cadastro" class="btn-primary">Cadastrar Filme</router-link>
        <router-link to="/listagem" class="btn-secondary">Ver Listagem</router-link>
      </div>
    </header>

    <section class="features-section">
      <h2>Funcionalidades</h2>
      <div class="features-grid">
        <div class="feature-item">
          <i class="fas fa-film"></i>
          <h3>Cadastro de Filmes</h3>
          <p>Adicione detalhes como nome, gênero e nota para seus filmes.</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-list"></i>
          <h3>Listagem Completa</h3>
          <p>Veja todos os filmes cadastrados e gerencie suas informações.</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-filter"></i>
          <h3>Filtro Personalizado</h3>
          <p>Encontre filmes rapidamente utilizando filtros intuitivos.</p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2024 Gerenciador de Filmes. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
/* Base Styles */
.home-container {
  font-family: 'Arial', sans-serif;
  color: #4f6d7a;
  line-height: 1.6;
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #4a6fa5, #166088);
  color: white;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero-section p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.btn-primary {
  padding: 10px 20px;
  background-color: #c0d6df;
  color: #166088;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.btn-primary:hover {
  background-color: #dbe9ee;
  color: #4a6fa5;
}

.btn-secondary {
  padding: 10px 20px;
  background-color: #166088;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn-secondary:hover {
  background-color: #4a6fa5;
}

/* Features Section */
.features-section {
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;
}

.features-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #4a6fa5;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.feature-item {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.feature-item i {
  font-size: 2rem;
  color: #166088;
  margin-bottom: 10px;
}

.feature-item h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #4f6d7a;
}

.feature-item p {
  color: #666;
}

/* Footer */
.footer {
  text-align: center;
  padding: 20px;
  background: #4f6d7a;
  color: white;
}
</style>
