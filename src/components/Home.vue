<template>
    <div class="home-container">
      <h1>Bem-vindo ao Gerenciador de Filmes</h1>
      
      <div class="button-container">
        <router-link to="/cadastro" class="nav-button">Ir para Cadastro de Filmes</router-link>
        <router-link to="/listagem" class="nav-button">Ir para Listagem de Filmes</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  };
  </script>
  
  <style scoped>
  .home-container {
    text-align: center;
    padding: 20px;
  }
  
  .button-container {
    margin-top: 20px;
  }
  
  .nav-button {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1rem;
  }
  
  .nav-button:hover {
    background-color: #0056b3;
  }
  </style>
  