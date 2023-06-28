<!--
Figure Grid Component
-->

<template>
    <div class="figure-grid">
      <div v-for="figure in figures" :key="figure.id" class="figure">
        <img :src="figure.imageUrl" :alt="figure.name">
        <h3>{{ figure.name }}</h3>
        <p>{{ figure.affiliation}}</p>
      </div>
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
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  .figure {
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: rgba(128, 128, 128, 0.5);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .figure:hover {
    transform: scale(1.05);
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
  </style>
  