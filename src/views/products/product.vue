<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import background from "@/assets/img/background.png";
import Header from "../../examples/Header.vue";

// sections
import Product from "@/components/product.vue";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});

</script>

<template>
  <DefaultNavbar transparent />
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
      <div class="card card-body blur shadow-blur mx-3 mx-md-9 mt-7 mb-5">
        <Product />
      </div>
    </div>

  </header>
  <DefaultFooter />
</template>
