import { createRouter, createWebHistory } from "vue-router";

import PresentationView from "../views/Presentation/PresentationView.vue";
import About from "../views/abouts/about.vue";
import Sponsor from "../views/abouts/sponsor.vue";
import Product from "../views/products/product.vue";
import AstroLLaMA from "../views/products/astrollama.vue";
import Hypothesis from "../views/products/hypothesis.vue";
import Embedding from "../views/products/embedding.vue";
import Research from "../views/researches/research.vue";
import Participants from "../views/peoples/participants.vue";
import Joinus from "../views/peoples/joinus.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: PresentationView,
    },
    
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/about/sponsor",
      name: "about-sponsor",
      component: Sponsor,
    },

    {
      path: "/products",
      name: "product",
      component: Product,
    },
    {
      path: "/products/astrollama/",
      name: "product-AstroLLaMA",
      component: AstroLLaMA,
    },
    {
      path: "/product/hypothesis",
      name: "product-HypothesisGeneration",
      component: Hypothesis,
    },
    {
      path: "/product/embedding",
      name: "product-ArxivEmbedding",
      component: Embedding,
    },

    {
      path: "/research",
      name: "research",
      component: Research,
    },

    {
      path: "/people/participants",
      name: "participants",
      component: Participants,
    },
    {
      path: "/people/joinus",
      name: "people-joinus",
      component: Joinus,
    },
  ],
});

export default router;
