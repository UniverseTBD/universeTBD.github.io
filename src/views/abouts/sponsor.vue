<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import background from "@/assets/img/background.png";

//dep
import Typed from "typed.js";

const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  if (document.getElementById("typed")) {
    new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 60,
      startDelay: 300,
      loop: false,
      onComplete: function(self) {
        setTimeout(() => {
          const cursorElement = document.querySelector('.typed-cursor');
          if(cursorElement) cursorElement.style.animationIterationCount = '2';
          setTimeout(() => cursorElement && cursorElement.remove(), 1000);
        }, 200);
      }
    });
  }
});
</script>

<template>
  <DefaultNavbar transparent/>
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-100"
      :style="{ 
        backgroundImage: `url(${background})`, 
        backgroundAttachment: 'fixed', 
        backgroundPosition: 'center', 
        backgroundSize: 'cover' }"
    >
      <span class="mask bg-gradient-dark opacity-3"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9 text-center mx-auto my-auto">
            <h1 class="text-white">
              <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>About Our Sponsor</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
                We are extremely grateful to the Microsoft Accelerate Foundation Models Academic Research Initiative for providing our astronomy research group with 10,000 USD in Azure OpenAI credits. Access to advanced AI capabilities has greatly accelerated our work applying language models to automate analysis of astronomical literature.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-12 offset-md-0">
        <h2 class="mb-4">What is UniverseTBD</h2>
        <p class="mb-1">
          We are extremely grateful to the Microsoft Accelerate Foundation Models Academic Research Initiative for providing our astronomy research group with 10,000 USD in Azure OpenAI credits. Access to advanced AI capabilities has greatly accelerated our work applying language models to automate analysis of astronomical literature.
        </p>
        <p class="mb-0">
          We are a group of astronomers, machine learning enthusiasts,
          engineers, and enthusiasts, eminently human, coming from all over
          the world to make it happen. Our goal is to use foundation models to
          democratize Astronomy for everyone and expand our horizons on what's
          possible for the field moving forward.
        </p>
        <p class="mb-3">
          One of the big questions we want to answer is: can large language
          models come up with unique scientific insights and hypotheses? Stay
          fine-tuned.
        </p>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
