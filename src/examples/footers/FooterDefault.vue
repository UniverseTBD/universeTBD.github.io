<script setup>
import logo from "@/assets/img/icon.jpg";
import navItems from "@/data/navigation.json";
import FooterGroup from "../footers/FooterGroup.vue";
import FooterLink from "../footers/FooterLink.vue";

defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "UniverseTBD",
      logo: logo,
      route: "/"
    })
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/company/universetbd/"
      },
      {
        icon: "fab fa-twitter",
        link: "https://twitter.com/universe_tbd"
      },
      {
        icon: "fab fa-github",
        link: "https://github.com/universeTBD"
      },
    ]
  },
});

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

</script>
<template>
  <footer class="footer pt-1 mt-1">
    <div class="py-5">
      <div class="container">
        <div class="row"> <!-- 添加一个包裹所有列的行 -->
          <div class="col-lg-6 ms-lg-5 text-center">
            <h4 class="mb-1">Thank you for your support</h4>
            <p class="lead mb-0">We choose to go to the moon!</p>
          </div>

          <div class="col-lg-3 ms-lg-n6 mt-2 text-center"> <!-- 修改列宽以适应布局 -->
            <img class="w-80" src="@/assets/img/logo/Microsoft.svg" alt="Logo" />
          </div>

          <div class="col-lg-3 ms-lg-n5 mt-2 text-center"> <!-- 修改列宽以适应布局 -->
            <img class="w-60" src="@/assets/img/logo/OpenAI.svg" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4 ms-auto">
          <div>
            <a :href="brand.route">
              <h6 class="font-weight-bolder mb-2">{{ brand.name }}</h6>
            </a>
          </div>
          <div>
            <div class="nav-item mb-3">
                <a
                  class="nav-link"
                  href="https://huggingface.co/universeTBD"
                  target="_blank">
                HuggingFace
              </a>
            </div>
            <ul class="d-flex flex-row ms-n3 nav">
              <li
                class="nav-item"
                v-for="{ icon, link } of socials"
                :key="link"
              >
                <a
                  class="nav-link pe-1"
                  :href="link"
                  target="_blank"
                >
                <font-awesome-icon :icon="icon" size="xl"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
          <!-- Iterate over navigation data. If data contains 'links' array, render a group
           else, render an individual link -->
          <template v-for="item in navItems" :key="item.name">
            <div class="col-md-2 col-sm-6 col-6 mb-4">
            <FooterGroup
              v-if="item.links"
              :name="item.name"
              :links="item.links"
            />
            <FooterLink
              v-else
              :name="item.name"
              :url="item.url"
              :isroot="true"
            />
            </div>
          </template>
        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              Do Not Go Gentle Into That Good Night <br>
              ©{{ new Date().getFullYear() }} UniverseTBD
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>