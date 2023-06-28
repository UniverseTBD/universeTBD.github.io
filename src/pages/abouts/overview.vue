<template>
    <section>
      <div class="hero is-fullheight custom-background">
        <NavBar></NavBar>
      <div class="hero-body">
        <div class="container container-background">
          <h1 class="title">Welcome to <strong class="fancy-title">UniverseTBD</strong></h1>
          <h4 class="subtitle">We may give a more detailed self-introduction here!</h4>
          <b-button to="/home/about_overview" class="custom-button" type="is-rounded" outlined>
          <strong>Learn more about UniverseTBD</strong>
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
  import NavBar from "../components/NavBar.vue";
  import Back2Top from "../components/Back2Top.vue";
  import BottomPane from "../components/BottomPane.vue";
  
  export default {
    name: 'AboutOverviewPage',
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
    background-image: url("../assets/background.png");
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
    font-style: oblique;
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
    font-family: 'Times New Roman', Times, serif;
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
  
  </style>