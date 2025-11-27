<script setup>
import CountTo from "@/components/ExactCountTo.vue";

defineProps({
  count: {
    type: Number,
    required: true,
  },
  suffix: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 4000,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    validator(value) {
      return [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
      ].includes(value);
    },
  },
  divider: {
    validator(value) {
      return ["vertical", "horizontal"].includes(value);
    },
  },
  display: {
    type: String,
    default: "",
  },
  start: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="text-center">
    <h1 :class="`text-gradient text-${color ?? 'success'}`">
      <template v-if="display">
        {{ display }}
      </template>
      <template v-else>
        <span class="counter-value">
          <CountTo
            :start-val="start"
            :end-val="count"
            :duration="duration"
            :use-easing="false"
            separator=""
          />
          <span v-if="suffix" class="counter-suffix">{{ suffix }}</span>
        </span>
      </template>
    </h1>
    <h5 class="mt-3">{{ title }}</h5>
    <p class="text-sm font-weight-normal">
      {{ description }}
    </p>
  </div>
  <hr :class="`${divider ? divider : ''} dark`" />
</template>

<style scoped>
.counter-value {
  display: inline-flex;
  align-items: center;
  gap: 0.1em;
}

.counter-suffix {
  font-size: 1em;
  letter-spacing: 0.04em;
}
</style>
