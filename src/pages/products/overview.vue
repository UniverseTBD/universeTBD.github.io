<template>
  <section>
    <div class="hero is-fullheight custom-background">
    <NavBar />
    <h1 class="page-title">Product Overview</h1>
      <div class="page-content page">
        <ProductPane :products="products"></ProductPane>
      </div>
    </div>
    <BottomPane />
    <Back2Top />
  </section>
</template>

  
<script>
import NavBar from '@/components/NavBar.vue';
import BottomPane from '@/components/BottomPane.vue';
import Back2Top from '@/components/Back2Top.vue';
import ProductPane from '@/components/ProductPane.vue';
import productData from '@/data/products.json';

export default {
    name: "ProductOverviewPage",
    components: {
    NavBar,
    BottomPane,
    ProductPane,
    Back2Top
},
data() {
        const productWithAbsoluteUrls = productData.map((figure) => ({
                                        ...figure,
                                        imageUrl: require(`@/assets/product/${figure.imageUrl}`)
        }));

        return {
          products: productWithAbsoluteUrls
        };
      }
  };
  </script>
  
  <style scoped>
  .product-intro {
    display: block;
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
  background-image: url("@/assets/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
}
.page-content {
background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
padding: 20px;
border-radius: 10px;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
.page-title {
  font-size: 36px;
  font-weight: bold;
  color: #f5f5f5; /* Change title color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin: 20px 0; /* Adjust the top and bottom margin as needed */
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
  