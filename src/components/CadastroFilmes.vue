<template>
  <div class="cadastro-container">
    <h2>Cadastro de Filmes</h2>

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
  </div>
</template>

<script>
export default {
  name: 'CadastroFilmes',
  data() {
    return {
      novoFilme: {
        nome: '',
        genero: '',
        nota: ''
      }
    };
  },
  methods: {
    adicionarFilme() {
      if (this.novoFilme.nome && this.novoFilme.genero && this.novoFilme.nota) {
        // Adiciona o filme a uma lista (no Vuex, por exemplo)
        alert('Filme cadastrado com sucesso!');
        this.limparCampos();
      } else {
        alert('Preencha todos os campos.');
      }
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
  background-color: #f9f9f9;
  border-radius: 10px;
}

h2 {
  text-align: center;
  color: #333;
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
  color: #333;
}

.input-group input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
