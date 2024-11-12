// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    filmes: [] // Armazena os filmes cadastrados
  },
  mutations: {
    adicionarFilme(state, filme) {
      state.filmes.push(filme);
    },
    removerFilme(state, index) {
      state.filmes.splice(index, 1);
    }
  },
  getters: {
    obterFilmes: state => state.filmes
  }
});
