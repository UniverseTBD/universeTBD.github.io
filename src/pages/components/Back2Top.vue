<template>
  <div>
    <button class="back-to-top" @click="scrollToTop">
      <i class="fas fa-arrow-up"></i>
      Back to Top
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 10px;
  padding: 15px 30px;
  background-color: #f5f5f5;
  color: #000;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 24px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 900;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0.5;
}

.back-to-top:hover {
  background-color: #d0d0d0;
}

.back-to-top i {
  margin-right: 5px;
}
</style>