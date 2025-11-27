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
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center mx-auto my-auto">
            <h1 class="text-white">
              Work with an amazing team
            </h1>
            <p 
              class="lead text-white px-3 mt-3" 
              :style="{ fontWeight: '500', textShadow: '2px 2px 2px black' }"
            >
              We welcome new folks on our Discord, where we encourage everyone to bring their ideas and
              join a vibrant community of peers and mentors.
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
                <font-awesome-icon :icon="['fab', 'x-twitter']" size="2xl" />
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
