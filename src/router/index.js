import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import CadastroFilmes from '@/components/CadastroFilmes.vue';
import ListagemFilmes from '@/components/ListagemFilmes.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cadastro', component: CadastroFilmes },
  { path: '/listagem', component: ListagemFilmes }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
