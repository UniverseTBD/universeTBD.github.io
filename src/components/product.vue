<script setup>
// example components
import TransparentBlogCard from "../examples/cards/blogCards/TransparentBlogCard.vue";

//Vue Material Kit 2 components
import astropt from "@/assets/img/product/astropt.png";
import multimodal_universe from "@/assets/img/product/multimodal_universe.png";
import platonic_universe from "@/assets/img/product/prh_temp.png";

</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h3 class="mb-5">Our Latest Research</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :image="platonic_universe"
            title="The Platonic Universe"
            description="The Platonic Representation Hypothesis suggests different models converge toward the same view of reality. Using a 100TB+ Multimodal Universe astronomy dataset, we're proving larger models align into shared embedding spaces, revealing how machines truly learn."
            :tags="['NeurIPS 2025 ML4PS Spotlight']"
            :action="{route: 'https://github.com/UniverseTBD/platonic-universe', label: 'View on GitHub', color: 'success'}"
            :secondary-action="{route: 'https://arxiv.org/abs/2509.19453', label: 'Read the Paper', color: 'success'}"
            :image-route="{ path: '/research', hash: '#platonic-universe' }"
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :image="multimodal_universe"
            title="Multimodal Universe"
            description="We present the Multimodal Universe (MMU), a 100 TB collection of hundreds of millions of spectra, hyperspectral images, time series, and scientific metadata with ready-to-run benchmarks so researchers can build and evaluate foundation models using astronomical datasets."
            :tags="['NeurIPS 2024 B&D']"
            :action="{route: 'https://github.com/MultimodalUniverse/MultimodalUniverse', label: 'View on GitHub', color: 'success'}"
            :secondary-action="{route: 'https://arxiv.org/abs/2412.02527', label: 'Read the Paper', color: 'success'}"
            :image-route="{ path: '/research', hash: '#multimodal-universe' }"
          />
        </div>
        <div class="col-lg-4 col-sm-6">
          <TransparentBlogCard
            :image="astropt"
            title="AstroPT"
            description='AstroPT is a GPT model designed for astronomical applications, trained on millions of galaxy images, with plans to incorporate diverse astronomical data types to create a comprehensive "Large Observation Model" for astronomy.'
            :tags="['ICML 2024 AI for Science Spotlight']"
            :action="{route: 'https://github.com/Smith42/astroPT', label: 'View on GitHub', color: 'success'}"
            :secondary-action="{route: 'https://arxiv.org/abs/2405.14930v1', label: 'Read the Paper', color: 'success'}"
          />
        </div>
      </div>
    </div>
  </section>
</template>
