<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import background from "@/assets/img/background.png";

//sections
import AboutTeam from "./Sections/AboutTeam.vue";

const body = document.getElementsByTagName("body")[0];

//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");
});
</script>

<template>
  <DefaultNavbar transparent/>
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-100"
      :style="{ 
        backgroundImage: `url(${background})`, 
        backgroundAttachment: 'fixed', 
        backgroundPosition: 'center', 
        backgroundSize: 'cover' 
      }">
      <span class="mask bg-gradient-dark opacity-3"></span>
      <div class="container col-lg-10 mx-auto my-12">
        <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6" >
            <AboutTeam />
        </div>
      </div>
    </div>
    
  </header>
  <DefaultFooter />
</template>



