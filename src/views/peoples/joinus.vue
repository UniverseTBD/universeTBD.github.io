<script setup>
//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import { useBodyClass } from "@/composables/useBodyClass";

useBodyClass(["about-us", "bg-gray-200"]);
</script>


<template>
  <DefaultNavbar transparent />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-100 parallax-bg"
      :style="{ backgroundImage: 'url(/background.webp)' }"
    >
      <span class="mask bg-gradient-dark opacity-3"></span>
      <div class="container">
        <div class="row justify-content-center align-items-center mt-4 mt-lg-6">
          <div class="col-lg-10 text-center mx-auto my-auto">
            <div class="card page-card blur shadow-blur mx-3 mx-md-5 my-4 my-md-5 text-dark text-start">
              <div class="card-body page-card-body">
                <h1 class="text-dark mb-4">Work with an amazing team</h1>
                <div class="mb-4">
                  <h5>Join us</h5>
                  <a href="https://discord.gg/PUR2FbFRZ4">
                    <font-awesome-icon :icon="['fab', 'discord']" size="2xl" />
                    discord.gg/PUR2FbFRZ4
                  </a>
                </div>
                <div class="mb-4">
                  <h5>Follow us</h5>
                  <a href="https://twitter.com/universe_tbd">
                    <font-awesome-icon :icon="['fab', 'x-twitter']" size="2xl" />
                    @universe_tbd
                  </a>
                </div>
                <div>
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
    </div>
  </header>
  <DefaultFooter />
</template>
