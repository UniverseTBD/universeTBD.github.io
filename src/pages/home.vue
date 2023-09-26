<template>
  <section>
    <div class="hero is-fullheight custom-background">
    <NavBar></NavBar>
    <div class="hero-body">
      <div class="container container-background">
        <h1 class="title">Welcome to <strong class="fancy-title">UniverseTBD</strong></h1>
        <h4 class="subtitle"> We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard; because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one we intend to win, and the others, too.</h4>
        <h4 class="subtitle align-right">-John F. Kennedy, "We Choose to Go to the Moon", Sep 12, 1962</h4>
        <b-button to="/home/about_overview" class="custom-button" type="is-rounded" outlined>
        <strong>Learn more about UniverseTBD</strong>
        </b-button>
        <!-- Content of the home page -->
      </div>
    </div>
    </div>
    <ProductPane :products="products"></ProductPane>
    <BottomPane></BottomPane>
    <Back2Top></Back2Top>
</section>
  
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Back2Top from "@/components/Back2Top.vue";
import BottomPane from "@/components/BottomPane.vue";
import ProductPane from "@/components/ProductPane.vue";
import productData from "@/data/products.json"

export default {
  name: 'HomePage',
  components: {
    Back2Top,
    NavBar,
    BottomPane,
    ProductPane
  },
  data(){
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
@import 'animate.css';

.hero {
  background-color: #000;
  display: flex;
  justify-content: flex-start;
}


.custom-background {
  background-image: url("@/assets/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.custom-button {
    font-size: 15px;
    text-align: center;
    margin: auto;
    display: block;
    background: none;
    color: #fff;
    border-color: #fff;
    animation: fadeIn;
    animation-duration: 2s;
}

.title {
  font-size: 20px;
  color: #fff;

  animation: fadeIn;
  animation-duration: 2s;
}

.subtitle {
  font-size: 15px;
  font-family: fantasy;
  font-weight: bolder;
  font-style: oblique;
  color: #fff;

  animation: fadeIn;
  animation-duration: 2s;
}

.navbar-element {
    font-weight: bold;
    color: #fff
}

.fancy-title {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 900;
  font-size: 30px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.container-background{
  padding: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.5);
}

.align-right{
    text-align: right;
}

</style>