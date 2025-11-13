<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    default: 120,
  },
  repeat: {
    type: Boolean,
    default: false,
  },
});

const visibleText = ref("");
const cursorOpacity = ref(1);
let intervalId;
let cursorIntervalId;

const startTyping = () => {
  let index = 0;
  visibleText.value = "";

  intervalId = setInterval(() => {
    visibleText.value += props.text.charAt(index);
    index += 1;

    if (index === props.text.length) {
      clearInterval(intervalId);
      if (props.repeat) {
        setTimeout(startTyping, props.speed * 5);
      }
    }
  }, props.speed);
};

onMounted(() => {
  startTyping();
  cursorIntervalId = setInterval(() => {
    cursorOpacity.value = cursorOpacity.value === 1 ? 0.15 : 1;
  }, 650);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
  clearInterval(cursorIntervalId);
});

watch(
  () => props.text,
  () => {
    clearInterval(intervalId);
    clearInterval(cursorIntervalId);
    cursorOpacity.value = 1;
    startTyping();
    cursorIntervalId = setInterval(() => {
      cursorOpacity.value = cursorOpacity.value === 1 ? 0.15 : 1;
    }, 650);
  }
);
</script>

<template>
  <span class="typewriter" aria-live="polite">
    <span class="sr-only">{{ text }}</span>
    <span aria-hidden="true" class="typewriter-placeholder">{{ text }}</span>
    <span aria-hidden="true" class="typewriter-content">
      {{ visibleText }}
      <span class="cursor" :style="{ opacity: cursorOpacity }"></span>
    </span>
  </span>
</template>

<style scoped>
.typewriter {
  position: relative;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.typewriter-placeholder {
  visibility: hidden;
  white-space: nowrap;
}

.typewriter-content {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
}

.cursor {
  display: inline-block;
  width: 0.25ch;
  height: 1em;
  margin-left: 0.12ch;
  border-radius: 2px;
  background: rgba(236, 241, 255, 0.8);
  box-shadow: 0 0 8px rgba(90, 200, 250, 0.25);
  transition: opacity 0.25s ease;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
