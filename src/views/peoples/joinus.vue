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
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    });
  }
});
</script>


<template>
  <DefaultNavbar transparent />
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
          <div class="col-lg-10 text-center mx-auto my-auto">
            <h1 class="text-white">
              Work with an amazing <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>team</h1>
              <h1>AI</h1>
            </div>
            <p 
              class="lead text-white px-3 mt-3" 
              :style="{ fontWeight: '500', textShadow: '2px 2px 2px black' }"
            >
              We are a group of scientists, machine learning researchers, engineers, and enthusiasts, eminently human from all over the world, united to achieve our shared vision.
            </p>
            <div class="card bg-gray-300 mx-3 pb-3 pt-3">
            <div class="card-body lead">
              <h5>Join us</h5>
              <a href="https://discord.gg/PUR2FbFRZ4">
                <font-awesome-icon :icon="['fab', 'discord']" size="2xl" />
                discord.gg/PUR2FbFRZ4
              </a>
            </div>
            <div class="card-body lead">
              <h5>Follow us</h5>
              <a href="https://twitter.com/universe_tbd">
                <font-awesome-icon :icon="['fab', 'twitter']" size="2xl" />
                @universe_tbd
              </a>
            </div>
            <div class="card-body lead">
              <h5>Contact us</h5>
              <a href="mailto:exec@universetbd.org">
                <font-awesome-icon :icon="['fas','envelope']" size="2xl" />
                exec@universetbd.org
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <DefaultFooter />
</template>
