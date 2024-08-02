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
  <DefaultNavbar transparent/>
  <header class="">
    <div
      class="page-header min-vh-100"
      :style="{ 
        backgroundImage: `url(${background})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover' }"
    >
    <div class="card card-body blur shadow-blur mx-3 mx-md-9 mt-7">
      <Product />
    </div>
    </div>
      
  </Header>
  <DefaultFooter />
</template>
