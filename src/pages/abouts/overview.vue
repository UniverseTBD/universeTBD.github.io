<template>
    <section>
      <div class="hero is-fullheight custom-background">
        <NavBar></NavBar>
      <div class="hero-body">
        <div class="container container-background">
          <h1 class="title">What is <strong class="fancy-title">UniverseTBD</strong> ? </h1>
          <h4 class="subtitle">
            Every great story starts with a "what if?". For UniverseTBD, "What if we bridge Astronomy and Large Language Models to build something truly unique that helps researchers and enthusiasts think deeper about the great beyond?". Our very own "one small step for LLM, a giant leap for Astronomy." 
          </h4>
          <h4 class="subtitle">
            We are a group of astronomers, machine learning enthusiasts, engineers, and enthusiasts, eminently human, coming from all over the world to make it happen. Our goal is to use foundation models to democratize Astronomy for everyone and expand our horizons on what's possible for the field moving forward. One of the big questions we want to answer is: can large language models come up with unique scientific insights and hypotheses? Stay fine-tuned.
          </h4>
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
    background-image: url("@/assets/background.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .custom-button {
    background: none;
    color: #fff;
    border-color: #fff;
    font-size: 20px;
    padding: 10px 20px;
    animation: fadeIn;
    animation-duration: 2s;
  }
  
  .title {
    font-size: 30px;
    color: #fff;
  
    animation: fadeIn;
    animation-duration: 2s;
  }
  
  .subtitle {
    font-size: 16px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
  
    animation: fadeIn;
    animation-duration: 2s;
  }
  
  .navbar-element {
    font-size: 20px;
    font-weight: bold;
    color: #fff
  }
  
  .fancy-title {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 900;
    font-size: 50px;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .container-background{
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  }
  
  .align-right{
      text-align: right;
  }
  </style>