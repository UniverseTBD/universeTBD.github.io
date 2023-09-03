<template>
  <div class="product-row">
    <div v-for="(product, index) in products" :key="index" class="product">
      <div class="product-content">
        <img :src="product.imageUrl" alt="Product Image" class="product-image" />
        <h2 class="product-name">{{ product.name }}</h2>
        <div class="links">
          <a :href="product.paperLink" target="_blank" class="link">Paper</a>
          <a :href="product.productLink" target="_blank" class="link">Product</a>
          <a :href="product.blogLink" target="_blank" class="link">Blog</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: Array, // An array of product objects with name, imageUrl, paperLink, productLink, and blogLink properties
  },
};
</script>

<style scoped>
.product-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px; /* Reduced the gap between panels */
  padding: 10px; /* Reduced the padding */
  background-color: #f7f7f7;
}

.product {
  flex: 1;
  width: calc(50% - 10px); /* Adjusted the width to fit two items per row on mobile */
  max-width: calc(33.33% - 10px); /* Adjusted the width to fit three items per row on larger screens */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
}

.product:hover {
  transform: translateY(-5px);
}

.product-content {
  padding: 10px; /* Reduced the padding */
  text-align: center;
}

.product-image {
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.product-name {
  font-size: 20px;
  margin: 10px 0;
  font-weight: bolder;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center; /* Center-align text on mobile */
}

.links {
  display: flex;
  justify-content: center;
  margin-top: 10px; /* Add some spacing between the name and links on mobile */
}

.link {
  text-decoration: none;
  color: #007bff;
  margin: 0 10px;
  font-weight: bolder;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.link:hover {
  text-decoration: underline;
  color: #0056b3;
}
</style>
