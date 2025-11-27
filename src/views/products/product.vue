<script setup>
//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import { useBodyClass } from "@/composables/useBodyClass";

//image
import background from "@/assets/img/background.png";
import Header from "../../examples/Header.vue";

// sections
import Product from "@/components/product.vue";

useBodyClass(["presentation-page", "bg-gray-200"]);

</script>

<template>
  <DefaultNavbar transparent />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-100 parallax-bg"
      :style="{ backgroundImage: `url(${background})` }"
    >
      <span class="mask bg-gradient-dark opacity-3"></span>
      <div class="card card-body blur shadow-blur mx-3 mx-md-9 mt-7 mb-5">
        <Product />
      </div>
    </div>

  </header>
  <DefaultFooter />
</template>
