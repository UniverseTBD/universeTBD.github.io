<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import TypewriterText from "@/components/TypewriterText.vue";
import { useBodyClass } from "@/composables/useBodyClass";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import Product from "@/components/product.vue";

// image
import background from "@/assets/img/background.png";

useBodyClass(["presentation-page", "bg-gray-200"]);

const isDesktop = ref(false);

// computed
const computedStyle = ref({
  backgroundImage: `url(${background})`,
  backgroundPosition: "center -10%",
  backgroundSize: "cover",
});

const updateDeviceType = () => {
  if (typeof window === "undefined") return;
  isDesktop.value = window.innerWidth > 1024;

  if (isDesktop.value) {
    computedStyle.value.backgroundAttachment = "fixed";
  } else {
    delete computedStyle.value.backgroundAttachment;
  }
};

onMounted(() => {
  updateDeviceType();
  window.addEventListener("resize", updateDeviceType);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateDeviceType);
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-80"
      :style="computedStyle"
      loading="lazy"
    >
      <div class="container">
        <div class="row hero-content">
          <div class="col-lg-9 text-center mx-auto my-auto">
            <h1 class="text-white">
              <TypewriterText text="UniverseTBD" :speed="110" />
            </h1>
            <p
              class="lead text-white px-5 mt-3 tagline"
              :style="{ fontWeight: '500', textShadow: '2px 2px 2px black' }"
            >
              Where the universe goes multiplayer.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationCounter />
    <Product />
  </div>

  <DefaultFooter />
</template>

<style scoped>
.tagline {
  font-size: clamp(1.3rem, 2.5vw, 1.85rem);
  line-height: 1.4;
}

.hero-content {
  min-height: 60vh;
  align-items: flex-start;
}
</style>
