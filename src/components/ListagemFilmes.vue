<template>
    <div class="listagem-container">
      <h2>Listagem de Filmes</h2>
      
      <ul v-if="filmes.length > 0">
        <li v-for="(filme, index) in filmes" :key="index" class="film-item">
          {{ filme.nome }} - {{ filme.genero }} - Nota: {{ filme.nota }}
          <button @click="removerFilme(index)" class="btn-remover">Remover</button>
        </li>
      </ul>
      
      <p v-else>Não há filmes cadastrados.</p>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'ListagemFilmes',
    computed: {
      ...mapGetters(['obterFilmes']),
      filmes() {
        return this.obterFilmes;
      }
    },
    methods: {
      removerFilme(index) {
        this.$store.commit('removerFilme', index);
      }
    }
  };
  </script>
  