<script setup>
// example components
import TransparentBlogCard from "../examples/cards/blogCards/TransparentBlogCard.vue";

//Vue Material Kit 2 components
import pfdr from "@/assets/img/product/pfdr.png";
import astropt from "@/assets/img/product/astropt.png";
import hypo from "@/assets/img/product/hypo.jpeg";
import multimodal_universe from "@/assets/img/product/multimodal_universe.png";

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
            :image="multimodal_universe"
            title="Multimodal Universe"
            description="The Multimodal Universe (MMU) is a huge 100TB dataset bringing together the largest collection of astronomical observations ever assembled to accelerate open AI and astronomy research. Think ImageNet, but for space 🚀."
            :action="{route: 'https://github.com/MultimodalUniverse/MultimodalUniverse', label: 'View on GitHub', color: 'success'}"
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :image="pfdr"
            title="Pathfinder"
            description='Pathfinder is an AI framework designed for astronomical literature review and knowledge discovery, using more than 300,000 peer-reviewed papers from the Astrophysics Data System. It incorporates advanced retrieval techniques and large language models to enable semantic searching of astronomy literature.'
            :action="{route: 'https://pfdr.app', label: 'View on Hugging Face', color: 'success'}"
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :image="astropt"
            title="AstroPT"
            description='AstroPT is a GPT model designed for astronomical applications, trained on millions of galaxy images, with plans to incorporate diverse astronomical data types to create a comprehensive "Large Observation Model" for astronomy.'
            :action="{route: 'https://arxiv.org/abs/2405.14930v1', label: 'View on arXiv', color: 'success'}"
          />
        </div>
      </div>
    </div>
  </section>
</template>
