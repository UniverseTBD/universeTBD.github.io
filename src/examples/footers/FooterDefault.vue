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
        icon: "fab fa-x-twitter",
        link: "https://twitter.com/universe_tbd"
      },
      {
        icon: "fab fa-youtube",
        link: "https://www.youtube.com/@UniverseTBD"
      },
      {
        icon: "fab fa-github",
        link: "https://github.com/universeTBD"
      },
      {
        icon: "fab fa-discord",
        link: "https://discord.com/invite/CcPfhePkmT"
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
        <div class="row">
          <div class="col-12 text-center mb-3">
            <h6 class="text-uppercase text-secondary text-sm mb-0">Supported by</h6>
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col-4 col-lg-3 mt-3 text-center support-logo">
            <img class="w-100" src="@/assets/img/logo/huggingface.svg" alt="Hugging Face logo" />
          </div>
          <div class="col-4 col-lg-3 mt-3 text-center support-logo">
            <img class="w-100" src="@/assets/img/logo/Microsoft.svg" alt="Microsoft logo" />
          </div>
          <div class="col-4 col-lg-3 mt-3 text-center support-logo">
            <img class="w-100" src="@/assets/img/logo/OpenAI.svg" alt="OpenAI logo" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row justify-content-center text-center footer-links-row">
        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-10 mb-4 footer-connect d-flex flex-column align-items-center">
          <div>
            <h6 class="font-weight-bolder mb-1">Stay connected</h6>
            <p class="text-sm text-secondary mb-3">Never miss a research drop.</p>
          </div>
          <ul class="d-flex flex-row justify-content-center nav mb-0 gap-3">
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
                <font-awesome-icon :icon="icon" size="xl" />
              </a>
            </li>
          </ul>
        </div>
          <!-- Iterate over navigation data. If data contains 'links' array, render a group
           else, render an individual link -->
          <template v-for="item in navItems" :key="item.name">
            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-10 mb-4 footer-nav-column d-flex flex-column align-items-center">
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
              Built with love <span class="text-gradient text-primary">💜</span> · ©{{ new Date().getFullYear() }} UniverseTBD
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-links-row {
  row-gap: 2rem;
}

.footer-connect .nav-link {
  padding: 0.25rem;
}

.footer-nav-column,
.footer-connect {
  text-align: center;
}
</style>
