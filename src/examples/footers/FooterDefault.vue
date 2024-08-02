<script setup>
import logo from "@/assets/img/icon.jpg";
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
        icon: '<i class="fa fa-smile-o text-lg opacity-8"></i>',
        link: "https://huggingface.co/universeTBD"
      },
      {
        icon: '<i class="fab fa-linkedin text-lg opacity-8"></i>',
        link: "https://www.linkedin.com/company/universetbd/"
      },
      {
        icon: '<i class="fab fa-twitter text-lg opacity-8"></i>',
        link: "https://twitter.com/universe_tbd"
      },
      {
        icon: '<i class="fab fa-github text-lg opacity-8"></i>',
        link: "https://github.com/universeTBD/universeTBD.github.io"
      },
    ]
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      route: String
    },
    default: () => [
      {
        name: "About",
        items: [
          {
            name: "About Us",
            route: "/about/"
          },
          {
            name: "Sponsor",
            route: "/about/sponsor"
          },
        ]
      },
      {
        name: "Product",
        items: [
          { 
            name: "Product", 
            route: "/products" },
          {
            name: "AstroLLaMA",
            route: "/products/astrollama/"
          },
          {
            name: "Hypothesis Generation",
            route: "/product/hypothesis"
          },
          {
            name: "Arxiv Embedding",
            route: "/product/embedding"
          }
        ]
      },
      {
        name: "Research",
        items: [
          {
            name: "Research",
            route: "/research"
          },
        ]
      },
      {
        name: "People",
        items: [
          {
            name: "Participants",
            route: "/people/participants"
          },
          {
            name: "Contact Us",
            route: "/people/joinus"
          },
        ]
      }
    ]
  }
});
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
              <h6 class="font-weight-bolder mb-4">{{ brand.name }}</h6>
            </a>
          </div>
          <div>
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
                  v-html="icon"
                >
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-md-2 col-sm-6 col-6 mb-4"
          v-for="{ name, items } of menus"
          :key="name"
        >
          <h6 class="text-sm">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <RouterLink class="nav-link" :to="item.route">
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

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