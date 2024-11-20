<template>
  <div class="cadastro-container">
    <h2>Cadastro de Filmes</h2>
    <p>Preencha as informações abaixo para adicionar um novo filme à sua lista.</p>

    <div class="form-container">
      <div class="input-group">
        <label for="nome">Nome do Filme:</label>
        <input 
          type="text" 
          v-model="novoFilme.nome" 
          id="nome" 
          placeholder="Digite o nome do filme" 
        />
      </div>

      <div class="input-group">
        <label for="genero">Gênero:</label>
        <input 
          type="text" 
          v-model="novoFilme.genero" 
          id="genero" 
          placeholder="Digite o gênero" 
        />
      </div>

      <div class="input-group">
        <label for="nota">Nota:</label>
        <input 
          type="number" 
          v-model="novoFilme.nota" 
          id="nota" 
          placeholder="Digite a nota (0-10)" 
          min="0" 
          max="10"
        />
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
      if (
        this.novoFilme.nome.trim() &&
        this.novoFilme.genero.trim() &&
        this.novoFilme.nota >= 0 &&
        this.novoFilme.nota <= 10
      ) {
        this.$store.commit('adicionarFilme', { ...this.novoFilme });
        alert('Filme cadastrado com sucesso!');
        this.limparCampos();
      } else {
        alert('Preencha todos os campos corretamente.');
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

.form-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-group label {
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 1rem;
  color: #166088;
}

.input-group input {
  padding: 10px;
  border: 1px solid #c0d6df;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #ffffff;
}

.input-group input:focus {
  outline: none;
  border-color: #4a6fa5;
  box-shadow: 0 0 5px rgba(74, 111, 165, 0.5);
}

.btn-cadastrar {
  padding: 10px 20px;
  background-color: #4a6fa5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.btn-cadastrar:hover {
  background-color: #166088;
}
</style>

