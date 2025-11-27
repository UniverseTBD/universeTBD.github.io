<script setup>
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
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
            <h1 class="text-white">Our Discord</h1>
            <p
              class="lead text-white px-3 mt-3"
              :style="{ fontWeight: '500', textShadow: '2px 2px 2px black' }"
            >
              We keep things lightweight: just one welcome thread, our project channels, and a set of
              clear rules so you can plug into UniverseTBD without navigating a maze of rooms.
            </p>
            <div class="card bg-gray-300 mx-3 pb-3 pt-3">
              <div class="card-body lead text-dark text-start">
                <p class="mb-0">
                  We are a global team, so the server is where we share quick wins, roadmaps, open
                  questions, and spin up new projects between releases. Say hi, drop a link you are
                  excited about, or sit back and listen until you are ready to jump in. Mike Smith
                  (CfA/Harvard) is our Open Community Lead—he keeps the lights on and moderates for
                  kindness and clarity.
                </p>
              </div>
              <div class="card-body pt-0">
                <a
                  class="btn btn-dark px-4"
                  href="https://discord.gg/CcPfhePkmT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Our Discord
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
