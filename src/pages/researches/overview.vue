<template>
    <section>
      <div class="hero is-fullheight custom-background">
        <NavBar></NavBar>
      <div class="hero-body">
        <div class="container container-background">
          <h1 class="title">Welcome to <strong class="fancy-title">UniverseTBD</strong></h1>
          <h4 class="subtitle">
            Large language models (LLMs) powered by artificial intelligence are emerging as promising tools to accelerate astronomical research. Recent advances in natural language processing have produced LLMs capable of comprehending scientific texts, summarizing findings, and even formulating novel hypotheses. This research explores the potential of modern LLMs like GPT-3 and Codex to enhance astronomers' workflows through automating tedious tasks. We investigate applying LLMs for literature reviews, surfacing insights from data, recognizing patterns in images, and generating hypotheses. Early experiments suggest LLMs can extract key information from papers, analyze data to reveal new findings, and propose directions to explore. However, challenges remain in effectively prompting the models and validating their outputs. Our research aims to develop best practices for integrating LLMs into astronomers’ toolkits to increase productivity and spur new discoveries. Rather than replacing human astronomers, LLMs can remove drudgery from tasks like reading papers and data analysis. This allows astronomers to focus their skills on higher-level recognition and ideation to advance the frontiers of knowledge. With refined techniques for prompting and evaluating LLMs, these AI systems show promise as collaborators in the astronomical research process. 
          </h4>
          <b-button to="/home/about_overview" class="custom-button" type="is-rounded" outlined>
          <strong>Learn more about our research!</strong>
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
    name: 'ResearchOverviewPage',
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
    font-size: 20px;
    padding: 10px 20px;
    border-color: #fff;
  
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
    font-family: 'Times New Roman', Times, serif;
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