<template>
    <div class="cadastro-container">
      <h2>Cadastro de Filmes</h2>
  
      <div v-if="filmes.length === 0" class="empty-list">
        <p>Não há filmes cadastrados. Cadastre um novo abaixo!</p>
      </div>
  
      <div class="form-container">
        <div class="input-group">
          <label for="nome">Nome do Filme:</label>
          <input type="text" v-model="novoFilme.nome" id="nome" placeholder="Digite o nome do filme" />
        </div>
  
        <div class="input-group">
          <label for="genero">Gênero:</label>
          <input type="text" v-model="novoFilme.genero" id="genero" placeholder="Digite o gênero" />
        </div>
  
        <div class="input-group">
          <label for="nota">Nota:</label>
          <input type="number" v-model="novoFilme.nota" id="nota" placeholder="Digite a nota" />
        </div>
  
        <button @click="adicionarFilme" class="btn-cadastrar">Cadastrar Filme</button>
      </div>
  
      <ul v-if="filmes.length > 0" class="film-list">
        <li v-for="(filme, index) in filmes" :key="index" class="film-item">
          <span>{{ filme.nome }} - {{ filme.genero }} - Nota: {{ filme.nota }}</span>
          <button @click="removerFilme(index)" class="btn-remover">Remover</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        novoFilme: {
          nome: '',
          genero: '',
          nota: ''
        },
        filmes: []
      };
    },
    methods: {
      adicionarFilme() {
        if (this.novoFilme.nome && this.novoFilme.genero && this.novoFilme.nota) {
          this.filmes.push({ ...this.novoFilme });
          this.limparCampos();
        } else {
          alert('Preencha todos os campos.');
        }
      },
      removerFilme(index) {
        this.filmes.splice(index, 1);
      },
      limparCampos() {
        this.novoFilme = { nome: '', genero: '', nota: '' };
      }
    }
  };
  </script>
  
  <style scoped>
  .cadastro-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #1b1b1b;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: #fff;
  }
  
  h2 {
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
  }
  
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
  }
  
  .input-group label {
    margin-bottom: 5px;
    font-size: 1rem;
    color: #d3d3d3;
  }
  
  .input-group input {
    padding: 10px;
    border: 1px solid #333;
    background-color: #2c2c2c;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
  }
  
  .input-group input::placeholder {
    color: #888;
  }
  
  .btn-cadastrar {
    padding: 10px;
    background-color: #fff;
    color: #1b1b1b;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .btn-cadastrar:hover {
    background-color: #e0e0e0;
  }
  
  .film-list {
    margin-top: 20px;
    list-style-type: none;
    padding: 0;
  }
  
  .film-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #333;
    border: 1px solid #555;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .film-item span {
    font-size: 1rem;
    color: #fff;
  }
  
  .btn-remover {
    padding: 5px 10px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn-remover:hover {
    background-color: #c82333;
  }
  
  .empty-list {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.1rem;
    color: #888;
  }
  </style>
  