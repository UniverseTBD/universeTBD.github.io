<script setup>
// example components
import TransparentBlogCard from "../../../../examples/cards/blogCards/TransparentBlogCard.vue";

//Vue Material Kit 2 components
import astrollama from "@/assets/img/product/astrollama.jpeg";
import hypo from "@/assets/img/product/hypo.jpeg";
import embed from "@/assets/img/product/embed.jpeg";

</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Check my latest blogposts</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :image="astrollama"
            title="AstroLLaMA"
            description="We construct a 7-billion-parameter model fine-tuned from LLaMA-2 using over 300,000 astronomy abstracts from arXiv"
            :action="{route: 'https://arxiv.org/abs/2309.06126', label: 'View on Arxiv', color: 'blue'}"
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :image="hypo"
            title="Hypothesis Generation"
            description="We enhance astronomy research by leveraging GPT-4 and advanced prompting, utilizing 1000 NASA papers."
            :action="{route: 'https://arxiv.org/abs/2306.11648', label: 'View on Arxiv', color: '#0000FF'}"
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :image="embed"
            title="Arxiv Embedding"
            description="We deem this dual-pronged approach to logit reshaping as STEER: Semantic Text Enhancement via Embedding Repositioning."
            :action="{route: 'https://arxiv.org/abs/2308.07645', label: 'View on Arxiv', color: '#0000FF'}"
          />
        </div>
      </div>
    </div>
  </section>
</template>
