<template>
    <section>
      <div class="hero is-fullheight custom-background">
        <NavBar></NavBar>
      <div class="hero-body">
        <div class="container container-background">
          <h1 class="title">About Our <strong class="fancy-title">Sponsor</strong></h1>
          <h4 class="subtitle">We are extremely grateful to the Microsoft Accelerate Foundation Models Academic Research Initiative for providing our astronomy research group with 10,000 USD in Azure OpenAI credits. Access to advanced AI capabilities has greatly accelerated our work applying language models to automate analysis of astronomical literature.</h4>
          <b-button to="/home/about_overview" class="custom-button" type="is-rounded" outlined>
          <strong>We are happy to discuss further funding opportunities.</strong>
          </b-button>
          <!-- Content of the home page -->
        </div>
      </div>
      </div>
      <BottomPane></BottomPane>
      <Back2Top></Back2Top>
  </section>
    
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  import Back2Top from "@/components/Back2Top.vue";
  import BottomPane from "@/components/BottomPane.vue";
  
  export default {
    name: 'AboutSponsorPage',
    components: {
      Back2Top,
      NavBar,
      BottomPane
    }
  };
  </script>
  
  <style scoped>
  @import 'animate.css';
  
  .hero {
    background-color: #000;
    justify-content: flex-start;
  }
  
  
  .custom-background {
    background-image: url("@/assets/background.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .custom-button {
    background: none;
    color: #fff;
    font-size: 32px;
    padding: 10px 20px;
    border-color: #fff;
  
    animation: fadeIn;
    animation-duration: 2s;
  }
  
  .title {
    font-size: 81px; /* Increase the font size */
    color: #fff;
  
    animation: fadeIn;
    animation-duration: 2s;
  }
  
  .subtitle {
    font-size: 32px; /* Increase the font size */
    font-family: fantasy;
    font-weight: bolder;
    color: #fff;
  
    animation: fadeIn;
    animation-duration: 2s;
  }
  
  .navbar-element {
      font-size: 36px;
      font-weight: bold;
      color: #fff
  }
  
  .fancy-title {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 900;
    font-size: 120px;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .container-background{
      background-color: rgba(0, 0, 0, 0.5);
      padding: 20px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  }
  
  .align-right{
      text-align: right;
  }
  @media screen and (max-width: 1200px) {
  .custom-button {
    font-size: 20px;
    padding: 10px 20px;
  }

  .title {
    font-size: 40px;
  }

  .subtitle {
    font-size: 25px;
  }

  .navbar-element {
    font-size: 20px;
  }

  .fancy-title {
    font-weight: 900;
    font-size: 60px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .container-background{
      padding: 10px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

}
  </style>