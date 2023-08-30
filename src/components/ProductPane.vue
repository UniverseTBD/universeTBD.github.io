<template>
  <div
    class="panel"
    :class="{ 'panel-expanded': isExpanded }"
    @mouseover="expandPanel"
    @mouseleave="collapsePanel"
  >
    <div class="panel-header">
      <h3>{{ product.title }}</h3>
    </div>
    <div class="panel-content">
      <p>{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    expandPanel() {
      this.isExpanded = true;
    },
    collapsePanel() {
      this.isExpanded = false;
    },
  },
};
</script>

<style scoped>
.panel {
  width: 30%;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.panel:hover {
  transform: scale(1.1);
}

.panel-expanded {
  width: 40%;
}

.panel-header {
  text-align: center;
}

.panel-content {
  margin-top: 10px;
}

h3 {
  font-size: 20px;
  font-weight: bold;
}

p {
  color: #555;
}
@media screen and (max-width: 1200px) {
  .panel {
    width: 50%!important;
    border-radius: 4px!important;
    padding: 20px!important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)!important;
  }
  h3 {
    font-size: 18px;
  }
  .panel-content p{
    font-size: 14px;
  }
}
</style>
