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
            <div class="card bg-gray-300 mx-3 pb-3 pt-3">
            <div class="card-body sponsor-text pb-0">
              <h1 class="text-dark mb-4">Work with an amazing team</h1>
            </div>
            <div class="card-body sponsor-text">
              <h5>Join us</h5>
              <a href="https://discord.gg/PUR2FbFRZ4">
                <font-awesome-icon :icon="['fab', 'discord']" size="2xl" />
                discord.gg/PUR2FbFRZ4
              </a>
            </div>
            <div class="card-body sponsor-text">
              <h5>Follow us</h5>
              <a href="https://twitter.com/universe_tbd">
                <font-awesome-icon :icon="['fab', 'x-twitter']" size="2xl" />
                @universe_tbd
              </a>
            </div>
            <div class="card-body sponsor-text">
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
