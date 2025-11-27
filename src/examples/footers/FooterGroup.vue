<script setup>
import FooterLink from "./FooterLink.vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  links: {
    type: Array,
    required: true
  },
});

</script>
<template>
  <div class="footer-group text-center">
    <h6 class="text-sm mb-2">{{ props.name }}</h6>
    <ul class="flex-column nav footer-group__list">
      <li class="nav-item" v-for="item of props.links" :key="item.name">
        <FooterLink :name="item.name" :url="item.url" :isroot="false" />
      </li>
    </ul>
  </div>
  <!-- End Footer Group -->
</template>

<style scoped>
.footer-group__list {
  padding-left: 0;
  margin-bottom: 0;
  align-items: center;
}

.footer-group__list :deep(.nav-link) {
  padding: 0.25rem 0;
  text-align: center;
}
</style>
