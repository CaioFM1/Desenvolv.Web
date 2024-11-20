<template>
  <div class="listagem-container">
    <h2>Listagem de Filmes</h2>
    <p>Abaixo está a lista de filmes cadastrados. Você pode filtrar ou remover filmes conforme necessário.</p>

    <div class="filter-container">
      <label for="filtro">Filtrar por Gênero:</label>
      <input 
        type="text" 
        v-model="filtroGenero" 
        id="filtro" 
        placeholder="Digite o gênero" 
      />
    </div>

    <ul v-if="filmesFiltrados.length > 0" class="film-list">
      <li v-for="(filme, index) in filmesFiltrados" :key="index" class="film-item">
        <div class="film-info">
          <strong>{{ filme.nome }}</strong> - {{ filme.genero }} - Nota: <span class="film-rating">{{ filme.nota }}</span>
        </div>
        <button @click="removerFilme(index)" class="btn-remover">Remover</button>
      </li>
    </ul>

    <p v-else class="no-films-message">Nenhum filme encontrado para o filtro atual.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ListagemFilmes',
  data() {
    return {
      filtroGenero: ''
    };
  },
  computed: {
    ...mapGetters(['obterFilmes']),
    filmesFiltrados() {
      return this.obterFilmes.filter(filme =>
        filme.genero.toLowerCase().includes(this.filtroGenero.toLowerCase())
      );
    }
  },
  methods: {
    removerFilme(index) {
      if (confirm('Tem certeza de que deseja remover este filme?')) {
        this.$store.commit('removerFilme', index);
      }
    }
  }
};
</script>

<style scoped>
.listagem-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #dbe9ee;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #4a6fa5;
  margin-bottom: 10px;
}

p {
  text-align: center;
  color: #4f6d7a;
  margin-bottom: 20px;
}

.filter-container {
  margin-bottom: 20px;
}

.filter-container input {
  width: 100%;
  padding: 10px;
  border: 1px solid #c0d6df;
  border-radius: 5px;
  background-color: #ffffff;
}

.filter-container input:focus {
  outline: none;
  border-color: #4a6fa5;
  box-shadow: 0 0 5px rgba(74, 111, 165, 0.5);
}

.film-list {
  list-style: none;
  padding: 0;
}

.film-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border: 1px solid #c0d6df;
  border-radius: 5px;
}

.film-info {
  color: #166088;
  font-size: 1rem;
}

.film-rating {
  font-weight: bold;
  color: #4a6fa5;
}

.btn-remover {
  padding: 5px 15px;
  background-color: #4f6d7a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
}

.btn-remover:hover {
  background-color: #166088;
}

.no-films-message {
  text-align: center;
  color: #4f6d7a;
}
</style>
