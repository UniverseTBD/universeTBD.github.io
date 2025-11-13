<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  links: {
    type: Object,
    required: true
  },
  getArrowColor: {
    type: Function,
    required: true
  },
  getTextColor: {
    type: Function,
    required: true
  }
});

</script>
<template>
  <li class="nav-item dropdown dropdown-hover mx-2">
    <a
      role="button"
      class="nav-link ps-2 d-flex cursor-pointer align-items-center"
      :class="getTextColor()"
      :id="`dropdownMenu${props.name}`"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i
        class="material-icons opacity-6 me-2 text-md"
        :class="getTextColor()"
        >{{props.icon}}</i
      >
      {{props.name}}
      <img
        :src="getArrowColor()"
        alt="down-arrow"
        class="arrow ms-2 d-lg-block d-none"
      />
      <img
        :src="getArrowColor()"
        alt="down-arrow"
        class="arrow ms-1 d-lg-none d-block ms-auto"
      />
    </a>
    <div
      class="dropdown-menu ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
      aria-labelledby="`dropdownMenu${props.name}`"
    >
      <div class="row d-none d-lg-block">
        <div class="col-12 px-4 py-2">
          <div class="row">
            <div class="position-relative">
              <RouterLink
                v-for="link in props.links"
                :key="link.url"
                :to="{ name: link.url }"
                class="dropdown-item border-radius-md"
              >
                {{ link.name }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="d-lg-none">
        <RouterLink
          v-for="link in props.links"
          :key="link.url"
          :to="{ name: link.url }"
          class="dropdown-item border-radius-md"
        >
          {{ link.name }}
        </RouterLink>
      </div>
    </div>
  </li>
  <!-- End Navbar Group -->
</template>
