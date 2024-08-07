<script setup>
import FooterLink from "./FooterLink.vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  links: {
    type: Object,
    required: true
  },
});

</script>
<template>
    <h6 class="text-sm">{{ props.name }}</h6>
    <ul class="flex-column ms-n3 nav">
    <li class="nav-item" v-for="item of props.links" :key="item.name">
        <FooterLink :name="item.name" :url="item.url" :isroot="false"/>
    </li>
    </ul>
  <!-- End Footer Group -->
</template>