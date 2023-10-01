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

import Typed from "typed.js";

onMounted(() => {
  if (document.getElementById("typed")) {
    new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 60,
      startDelay: 300,
      loop: false,
      onComplete: function(self) {
        setTimeout(() => {
          const cursorElement = document.querySelector('.typed-cursor');
          if(cursorElement) cursorElement.style.animationIterationCount = '2';
          setTimeout(() => cursorElement && cursorElement.remove(), 1000);
        }, 200);
      }
    });
  }
});
</script>

<template>
  <DefaultNavbar transparent/>
  <header class="">
    <div
      class="page-header min-vh-100"
      :style="{ 
        backgroundImage: `url(${background})`, 
        backgroundAttachment: 'fixed', 
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
