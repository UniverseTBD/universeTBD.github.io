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
            <div class="card bg-gray-300 mx-3">
              <div class="card-body sponsor-text text-dark text-start">
                <h1 class="text-dark mb-4">Our community is open</h1>
                <p>
                  We encourage new folks to bring their ideas and join a vibrant community of peers and mentors. We keep things lightweight: just one welcome thread, our project channels, and a set of clear rules so you can plug into UniverseTBD without navigating a maze of rooms.
                </p>
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

<style scoped>
.sponsor-text {
  padding: 2.25rem 2.75rem;
  font-size: 1.1rem;
  line-height: 1.65;
}

.sponsor-text p,
.sponsor-text ul,
.sponsor-text ol,
.sponsor-text li,
.sponsor-text a {
  font-size: inherit;
  line-height: inherit;
}

@media (min-width: 768px) {
  .sponsor-text {
    padding: 2.75rem 4rem;
  }
}
</style>
