<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "javascript:;",
      color: "success",
      label: "Read more",
    }),
  },
  secondaryAction: {
    type: Object,
    default: null,
  },
  tags: {
    type: Array,
    default: () => [],
  },
});
</script>
<template>
  <div class="card card-plain">
    <div class="card-header p-0 position-relative">
      <a class="d-block blur-shadow-image">
        <img
          :src="image"
          :alt="title"
          class="img-fluid shadow border-radius-lg"
          loading="lazy"
        />
      </a>
    </div>
    <div class="card-body px-0">
      <div class="card-title-row">
        <h5 class="mb-0">
          <a :href="action.route" class="text-dark font-weight-bold">{{
            title
          }}</a>
        </h5>
        <div
          v-if="tags && tags.length"
          class="title-tags"
        >
          <span
            v-for="tag in tags"
            :key="tag"
            class="title-tags__badge"
          >
            {{ tag }}
          </span>
        </div>
      </div>
      <p>
        {{ description }}
      </p>
      <div class="d-flex flex-wrap gap-3">
        <a
          :href="action.route"
          class="text-sm icon-move-right"
          :class="`text-${action.color}`"
          >{{ action.label }}
          <i class="fas fa-arrow-right text-xs ms-1"></i>
        </a>
        <a
          v-if="secondaryAction"
          :href="secondaryAction.route"
          class="text-sm icon-move-right"
          :class="[
            secondaryAction.color
              ? `text-${secondaryAction.color}`
              : `text-${action.color}`,
          ]"
        >
          {{ secondaryAction.label }}
          <i class="fas fa-arrow-right text-xs ms-1"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-title-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.title-tags {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.15rem;
}

.title-tags__badge {
  display: inline;
  font-size: 0.64rem;
  letter-spacing: 0.08em;
  font-weight: 600;
  text-transform: uppercase;
  color: #bba7ff;
  text-shadow: none;
  white-space: normal;
}

@media (max-width: 575px) {
  .card-title-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .title-tags {
    align-items: flex-start;
  }
}
</style>
