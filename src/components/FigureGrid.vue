<!--
Figure Grid Component
-->

<template>
  <div class="figure-grid">
    <a v-for="figure in figures" :key="figure.id" :href="figure.websiteUrl" class="figure" target="_blank" rel="noopener noreferrer">
      <div>
      <img :src="figure.imageUrl" :alt="figure.name" class="figure-image">
      <h3>
        {{ figure.name }}
      </h3>
      <p>
        {{ figure.affiliation }}
      </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['figures']
};
</script>
  
<style scoped>
  .figure-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .figure {
    text-align: center;
    padding: 10px;
    border: 5px solid #ccc;
    border-radius: 5px;
    background-color: rgba(128, 128, 128, 0.7);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .figure:hover {
    transform: scale(1.02);
  }
  
  .figure img {
    max-width: 100%;
    height: auto;
  }
  
  .figure h3 {
    color:#fff;
    font-weight: bolder;
    font-size: x-large;
    margin: 10px 0;
  }
  
  .figure p {
    color:#fff;
    font-weight: bolder;
    font-size: x-large;
    margin: 0;
  }

  .bio-window {
  top: 0%;
  left: 100%;
  width: 500px;
  padding: 10px;
  background-color: none;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
}

.figure-image {
  max-width: 100%;
  height: auto;
  max-height: 200px; /* Set a fixed height for the images */
}
</style>
  