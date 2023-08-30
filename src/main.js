import Vue from 'vue';
import App from './App.vue';
import HomePage from '@/pages/home.vue';

import ParticipantsPage from '@/pages/peoples/participants.vue';
import JoinusPage from '@/pages/peoples/joinus.vue';

import ProductOverviewPage from '@/pages/products/overview.vue'
import DailyArXivPage from '@/pages/products/dailyarxiv.vue';
import HypothesisPage from '@/pages/products/hypothesis.vue';
import EmbeddingPage from '@/pages/products/embedding.vue';

import ResearchOverviewPage from '@/pages/researches/overview.vue';
import ResearchIndexPage from '@/pages/researches/index.vue';

import AboutOverviewPage from '@/pages/abouts/overview.vue';
import AboutSponsorPage from '@/pages/abouts/sponsor.vue';

import VueRouter from 'vue-router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(VueRouter);
Vue.use(Buefy);

Vue.config.productionTip = false;

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },

  {
    path: '/home/participants',
    name: 'participants',
    component: ParticipantsPage
  },
  {
    path: '/home/joinus',
    name: 'joinus',
    component: JoinusPage
  },

  {
    path: '/home/product_overview',
    name: 'product_overview',
    component: ProductOverviewPage
  },
  {
    path: '/home/dailyarxiv',
    name: 'dailyarxiv',
    component: DailyArXivPage
  },
  {
    path: '/home/hypothesis',
    name: 'hypothesis',
    component: HypothesisPage
  },
  {
    path: '/home/embedding',
    name: 'embedding',
    component: EmbeddingPage
  },

  {
    path: '/home/research_overview',
    name: 'research_overview',
    component: ResearchOverviewPage
  },
  {
    path: '/home/research_index',
    name: 'research_index',
    component: ResearchIndexPage
  },

  {
    path: '/home/about_overview',
    name: 'about_overview',
    component: AboutOverviewPage
  },
  {
    path: '/home/about_sponsor',
    name: 'about_sponsor',
    component: AboutSponsorPage
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

new Vue({
  router, // Add the router instance to the Vue app
  render: h => h(App)
}).$mount('#app');
