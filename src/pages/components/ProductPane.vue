<template>
    <div>
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
    props: ['product']
};
</script>

<style scoped>
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
</style>