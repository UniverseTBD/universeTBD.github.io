<script setup>
//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import { useBodyClass } from "@/composables/useBodyClass";

//image
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
      :style="{ backgroundImage: 'url(/background.webp)' }"
    >
      <span class="mask bg-gradient-dark opacity-3"></span>
      <div class="container">
        <div class="row justify-content-center align-items-center mt-4 mt-lg-6">
          <div class="col-lg-10 text-center mx-auto my-auto">
            <div class="card page-card blur shadow-blur mx-3 mx-md-5 my-4 my-md-5">
              <div class="card-body">
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <DefaultFooter />
</template>
