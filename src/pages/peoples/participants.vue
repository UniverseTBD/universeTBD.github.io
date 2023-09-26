<template>
    <section>
      <div class="page hero is-fullheight custom-background" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <NavBar></NavBar>
        <h1>{{ pageTitle }}</h1>
        <FigureGrid :figures="figures"></FigureGrid>
      </div>
      <BottomPane></BottomPane>
      <Back2Top></Back2Top>
    </section>
  </template>
    
  <script>
    import NavBar from "@/components/NavBar.vue"; 
    import FigureGrid from "@/components/FigureGrid.vue";
    import Back2Top from "@/components/Back2Top.vue";
    import BottomPane from "@/components/BottomPane.vue";
    import figuresData from "@/data/figures.json"; // Import the JSON data
    
    export default {
      name: "ParticipantsPage",
      components: {
        NavBar,
        FigureGrid,
        Back2Top,
        BottomPane
      },
      data() {
        const figuresWithAbsoluteUrls = figuresData.map((figure) => ({
                                        ...figure,
                                        imageUrl: require(`@/assets/people/${figure.imageUrl}`),
                                        websiteUrl: figure.websiteUrl.startsWith('http')
                                                    ? figure.websiteUrl
                                                    : `http://${figure.websiteUrl}`,
        }));

        return {
          pageTitle: 'Main Participants',
          backgroundImage: require('@/assets/background.png'),
          figures: figuresWithAbsoluteUrls
        };
      }
    };
    </script>
    
    <style scoped>
    .page {
      background-color: #000;
      padding: 20px;
      border-radius: 10px;
      text-align: left!important;
      background-size: cover;
      background-position: center;
    }
    
    .page h1 {
      color: #fff;
      font-weight: bolder;
      font-size: 40px;
      margin-bottom: 20px;
      text-align: center!important;
    }
  
    .logo {
    height: 90px; /* Adjust the desired width */
    width: auto; /* Maintain aspect ratio */
  }
  
  .logo-text {
    font-size: 36px;
    font-weight: bold;
    color: #fff
  }
  
  .custom-navbar {
    font-size: 36px; /* Adjust the font size to your desired value */
    /* Additional styles for the navbar */
  }
  
  .navbar-element {
      font-size: 36px;
      font-weight: bold;
      color: #fff
  }
  </style>
    