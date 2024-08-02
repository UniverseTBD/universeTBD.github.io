<script setup>
// example components
import TransparentBlogCard from "../examples/cards/blogCards/TransparentBlogCard.vue";

//Vue Material Kit 2 components
import astropt from "@/assets/img/product/astropt.png";
import astrollama from "@/assets/img/product/astrollama.jpeg";
import hypo from "@/assets/img/product/hypo.jpeg";
import embed from "@/assets/img/product/embed.jpeg";

</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h3 class="mb-5">Our Latest Achievements</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :image="astropt"
            title="AstroPT"
            description="AstroPT is an autoregressive pretrained transformer developed for astronomical use-cases, and V1.0 has been trained on 8.6 million galaxy postage stamp observations from the DESI Legacy Survey DR8."
            :action="{route: 'https://arxiv.org/abs/2405.14930v1', label: 'View on arXiv', color: 'success'}"
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :image="astrollama"
            title="AstroLLaMA"
            description="We construct a 7-billion-parameter model fine-tuned from LLaMA-2 using over 300,000 astronomy abstracts from arXiv."
            :action="{route: 'https://arxiv.org/abs/2309.06126', label: 'View on arXiv', color: 'success'}"
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :image="hypo"
            title="Hypothesis Generation"
            description="We show that through adversarial prompting, foundation model can benefit from longer context, leading to more robust scientific hypothesis generation."
            :action="{route: 'https://arxiv.org/abs/2306.11648', label: 'View on arXiv', color: 'success'}"
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :image="embed"
            title="Arxiv Embedding"
            description="We deem this dual-pronged approach to logit reshaping as STEER: Semantic Text Enhancement via Embedding Repositioning."
            :action="{route: 'https://arxiv.org/abs/2308.07645', label: 'View on arXiv', color: 'success'}"
          />
        </div>
      </div>
    </div>
  </section>
</template>
