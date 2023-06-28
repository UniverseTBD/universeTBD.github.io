<template>
    <section>
    <div class="page hero is-fullheight custom-background">
    <NavBar/>
    <div class="product-intro">
      <div class="panel" v-for="product in products" :key="product.id">
        <ProductPane :product="product"/>
      </div>
    </div>
    </div>
    <BottomPane/>
    <Back2Top/>
    </section>
</template>
  
<script>
import NavBar from '../components/NavBar.vue';
import BottomPane from '../components/BottomPane.vue';
import Back2Top from '../components/Back2Top.vue';
import ProductPane from '../components/ProductPane.vue';

export default {
    name: "ProductOverviewPage",
    components: {
        NavBar,
        BottomPane,
        ProductPane,
        Back2Top
    },
    data() {
      return {
        products: [
          {
            id: 1,
            title: "Product 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: 2,
            title: "Product 2",
            description: "Nulla facilisi. Donec euismod tortor sit amet diam congue varius.",
          },
          {
            id: 3,
            title: "Product 3",
            description: "Suspendisse vel mauris a ante fermentum dapibus eu ac mi.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .product-intro {
    display: flex;
    justify-content: space-between;
  }
  
  .panel {
    width: 30%;
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .custom-background {
  background-image: url("../assets/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
}
  </style>
  