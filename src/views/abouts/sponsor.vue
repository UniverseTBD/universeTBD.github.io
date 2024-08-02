<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import background from "@/assets/img/background.png";

const body = document.getElementsByTagName("body")[0];
</script>

<template>
  <DefaultNavbar transparent/>
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-100"
      :style="{ 
        backgroundImage: `url(${background})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover' }"
    >
      <span class="mask bg-gradient-dark opacity-3"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9 text-center mx-auto my-auto">
              <h1 class="text-white">About Our Sponsors</h1>
            <p 
              class="lead text-white px-5 mt-3" 
              :style="{ fontWeight: '500', textShadow: '2px 2px 2px black' }"
            >
                We are extremely grateful to the Microsoft Accelerate Foundation Models Academic Research Initiative and OpenAI API Researcherv Access Program for providing amout of  OpenAI credits. Access to advanced AI capabilities has greatly accelerated our work applying language models to automate analysis of astronomical literature.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <DefaultFooter />
</template>
