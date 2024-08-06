<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import Product from "@/components/product.vue";

// image
import background from "@/assets/img/background.png";

// hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});

const isDesktop = ref(window.innerWidth > 1024);
const updateDeviceType = () => { 
  isDesktop.value = window.innerWidth > 1024;
};
onMounted(() => {
  window.addEventListener('resize', updateDeviceType);
});

// computed
const computedStyle = ref({
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
});
if (isDesktop.value) {
  computedStyle.value.backgroundAttachment = 'fixed';
}
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
        <div class="row">
          <div class="col-lg-9 text-center mx-auto my-auto">
            <h1 class="text-white">
            UniverseTBD
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500', textShadow: '2px 2px 2px black' }">
              Do not go gentle into that good night.
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
