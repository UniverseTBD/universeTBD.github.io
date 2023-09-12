<template>
    <section>
      <div class="hero is-fullheight custom-background">
        <NavBar></NavBar>
      <div class="hero-body">
        <div class="container container-background">
          <h1 class="title">Welcome to <strong class="fancy-title">UniverseTBD</strong></h1>
          <h4 class="subtitle">
            Join the top minds in AI and astronomy as we build the future of space exploration. UniverseTBD is an international collaboration creating powerful large language models designed to accelerate discoveries for the astronomy research community. Our goal is to enhance how researchers use AI to unlock the mysteries of the universe. We need your unique talents on this inspiring mission. At UniverseTBD, you can collaborate with experts across fields to create AI that furthers space science and benefits all humanity. Let's reach for the MOON together!
          </h4>
          <a href="https://forms.gle/1g4AJXtT3wyHgbmAA">
          <b-button class="custom-button" type="is-rounded" outlined>
          <strong>Join Us!</strong>
          </b-button>
          </a>
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
    name: 'JoinusPage',
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