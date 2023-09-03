<template>
    <section>
      <div class="hero is-fullheight custom-background">
        <NavBar></NavBar>
      <div class="hero-body">
        <div class="container container-background">
          <h1 class="title"><strong class="fancy-title">AstroLLaMA</strong> - LLM for Astronomers!</h1>
          <h4 class="subtitle">AstroLLaMA, a 7 billion parameter model specialized for astronomy by fine-tuning the LLaMA-2 architecture on a dataset of over 300,000 arXiv astronomy abstracts. AstroLLaMA achieves a holdout perplexity 1.5 times lower than LLaMA-2, indicating robust alignment with astronomy literature. This astronomy focus enables promising applications like summarization of papers and conversational agents. By open sourcing AstroLLaMA, we hope to enable astronomy-specific NLP research. Overall, AstroLLaMA represents a step towards more capable AI systems tailored for academic disciplines like astronomy. Its performance on an astronomy benchmark highlights the potential of specialized large models.</h4>
          <a href="https://huggingface.co/universeTBD/astrollama">
          <b-button class="custom-button" type="is-rounded" outlined>
          <strong>Wanna play with AstroLLaMA?</strong>
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
    name: 'DailyArXivPage',
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
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
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