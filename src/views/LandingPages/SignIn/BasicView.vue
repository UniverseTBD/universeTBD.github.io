<script setup>
import { onMounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import background from "@/assets/img/background.png";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});

import Typed from "typed.js";

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
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage: `url(${background})`
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <!-- <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
              >
              </div>
              
            </div>
          </div>
        </div> -->
        <div class="row">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              <span id="typed"></span>
            </h1>
            <div id="typed-strings">
              <p>UniverseTBD</p>
            </div>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500', textShadow: '2px 2px 2px black' }">
              Do not go gentle into that good night.
            </p>
          </div>
        </div>
      </div>
      <!-- <footer class="footer position-absolute bottom-2 py-2 w-100">
        <div class="container">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-12 col-md-6 my-auto">
              <div
                class="copyright text-center text-sm text-white text-lg-start"
              >
                © {{ new Date().getFullYear() }}, made with
                <i class="fa fa-heart" aria-hidden="true"></i> by
                <a
                  href="https://www.creative-tim.com"
                  class="font-weight-bold text-white"
                  target="_blank"
                  >Creative Tim</a
                >
                for a better web.
              </div>
            </div>
            <div class="col-12 col-md-6">
              <ul
                class="nav nav-footer justify-content-center justify-content-lg-end"
              >
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com"
                    class="nav-link text-white"
                    target="_blank"
                    >Creative Tim</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/presentation"
                    class="nav-link text-white"
                    target="_blank"
                    >About Us</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/blog"
                    class="nav-link text-white"
                    target="_blank"
                    >Blog</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/license"
                    class="nav-link pe-0 text-white"
                    target="_blank"
                    >License</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> -->


    </div>
  </Header>
</template>
