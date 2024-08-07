<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  isroot: {
    type: Boolean,
    required: true
  }
});

</script>
<template>
    <RouterLink
    :key="props.url"
    :to="{ name: props.url}"
    class="nav-link"><h6 v-if="props.isroot" class="text-sm">
        {{ props.name }}
    </h6>
    <span v-else>
        {{ props.name }}
    </span>
    </RouterLink>
<!-- End Footer Link -->
</template>