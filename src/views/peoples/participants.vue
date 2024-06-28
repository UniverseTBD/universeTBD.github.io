<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import background from "@/assets/img/background.png";

//dep
import Typed from "typed.js";

//sections
import AboutTeam from "./Sections/AboutTeam.vue";

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
  <DefaultNavbar transparent/>
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-100"
      :style="{ 
        backgroundImage: `url(${background})`, 
        backgroundAttachment: 'fixed', 
        backgroundPosition: 'center', 
        backgroundSize: 'cover' 
      }"
    >
      <span class="mask bg-gradient-dark opacity-3"></span>
      
      <div class="container">
        
        <div 
          class="row justify-content-center"
          :style="{ 
          backgroundPosition: 'center', 
          }"
        >
          <div class="col-lg-10 text-center mx-auto my-12">
            <h1 class="text-white">
              Work with an amazing <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>team</h1>
              <h1>AI</h1>
            </div>
            <p 
              class="lead text-white px-5 mt-3" 
              :style="{ fontWeight: '500', textShadow: '2px 2px 2px black' }"
            >
              We are a group of scientists, machine learning enthusiasts, engineers, and enthusiasts, eminently human from all over the world, united to achieve our shared vision.
            </p>
            <a href="https://discord.gg/PUR2FbFRZ4" class="btn bg-white text-dark" role="button">
               Join our Discord
            </a>
            <h6 class="text-white mb-2 mt-5">Find us on</h6>
            <div class="d-flex justify-content-center">
              <a href="https://twitter.com/universe_tbd"
                ><i class="fab fa-facebook text-lg text-white me-4"></i
              ></a>
              <a href="https://twitter.com/universe_tbd"
                ><i class="fab fa-instagram text-lg text-white me-4"></i
              ></a>
              <a href="https://twitter.com/universe_tbd"
                ><i class="fab fa-twitter text-lg text-white me-4"></i
              ></a>
              <a href="https://twitter.com/universe_tbd"
                ><i class="fab fa-google-plus text-lg text-white"></i
              ></a>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6" >
            <AboutTeam />
          </div>
        </div> 

      </div>
    </div>
    
  </header>
  <DefaultFooter />
</template>



