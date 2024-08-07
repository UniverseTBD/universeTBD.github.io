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
  url: {
    type: String,
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
    <RouterLink
      :key="props.url"
      :to="{ name: props.url }"
      class="nav-link ps-2 d-flex cursor-pointer align-items-center"
      :class="getTextColor()"
    >
      <i
        class="material-icons opacity-6 me-2 text-md"
        :class="getTextColor()"
        >{{props.icon}}</i
      >
      {{props.name}}
    </RouterLink>
  </li>
  <!-- End Navbar Link -->
</template>