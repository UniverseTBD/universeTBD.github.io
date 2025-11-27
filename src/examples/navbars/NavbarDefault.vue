<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref, computed, onMounted, onUnmounted } from "vue";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

import NavbarGroup from './NavbarGroup.vue';
import NavbarLink from './NavbarLink.vue';
import navItems from "@/data/navigation.json";

import 'bootstrap'; //Fix mobile navbar. Not sure why we need to include this, something is missing from the material-kit demo forked for this website.

const router = useRouter();
let removeAfterEach;

// Close mobile menu on navigation
onMounted(() => {
  removeAfterEach = router.afterEach(() => {
    const navbarCollapse = document.getElementById('navigation');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navbarCollapse && navbarToggler) {
      // Check if menu is open (has 'show' class)
      if (navbarCollapse.classList.contains('show')) {
        // Close the menu by removing the show class
        navbarCollapse.classList.remove('show');
        // Update aria-expanded attribute
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

onUnmounted(() => {
  if (typeof removeAfterEach === "function") {
    removeAfterEach();
  }
});

const props = defineProps({
  action: {
    type: Object,
    default: null
  },
  transparent: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  darkText: {
    type: Boolean,
    default: false
  }
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

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

// set nav color on mobile && desktop

let textDark = ref(props.darkText);

const hasAction = computed(
  () => !!(props.action && props.action.route && props.action.label)
);
const actionIsExternal = computed(
  () => hasAction.value && /^https?:\/\//.test(props.action.route)
);
</script>
<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
        props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark
    }"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-0'
      "
    >
      <RouterLink
        class="navbar-brand d-none d-md-block"
        :class="[
          (props.transparent && textDark.value) || !props.transparent
            ? 'text-dark font-weight-bolder ms-sm-3'
            : 'text-white font-weight-bolder ms-sm-3'
        ]"
        :to="{ name: 'home' }"
        rel="tooltip"
        title="UniverseTBD"
        data-placement="bottom"
      >
        UniverseTBD
      </RouterLink>
      <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="
          props.transparent || props.dark
            ? 'text-white'
            : 'font-weight-bolder ms-sm-3'
        "
        to="/"
        rel="tooltip"
        title="UniverseTBD"
        data-placement="bottom"
      >
        UniverseTBD
      </RouterLink>
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div
        class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
        id="navigation"
      >
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <!-- Iterate over navigation data. If data contains 'links' array, render a group
           else, render an individual link -->
          <template v-for="item in navItems" :key="item.name">
            <NavbarGroup
              v-if="item.links"
              :name="item.name"
              :icon="item.icon"
              :links="item.links"
              :get-text-color="getTextColor"
              :get-arrow-color="getArrowColor"
            />
            <NavbarLink
              v-else
              :name="item.name"
              :icon="item.icon"
              :url="item.url"
              :get-text-color="getTextColor"
            />
          </template>
        </ul>
        <div
          v-if="hasAction"
          class="d-flex align-items-center justify-content-start justify-content-lg-end ms-lg-4 mt-3 mt-lg-0"
        >
          <a
            v-if="actionIsExternal"
            :href="props.action.route"
            class="btn btn-sm mb-0"
            :class="props.action.color || 'bg-gradient-success'"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ props.action.label }}
          </a>
          <RouterLink
            v-else
            :to="props.action.route"
            class="btn btn-sm mb-0"
            :class="props.action.color || 'bg-gradient-success'"
          >
            {{ props.action.label }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
