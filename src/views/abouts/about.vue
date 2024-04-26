<script setup>
import { ref, onMounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import background from "@/assets/img/background.png";

//dep
import Typed from "typed.js";

const body = document.getElementsByTagName("body")[0];

const isDesktop = ref(window.innerWidth > 1024);  // Initialize with the current viewport width

const updateDeviceType = () => {  
  isDesktop.value = window.innerWidth > 1024;
};

onMounted(() => {
  if (document.getElementById("typed")) {
    new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 60,
      startDelay: 300,
      loop: false,
      onComplete: function(self) {
        setTimeout(() => {
          const cursorElement = document.querySelector('.typed-cursor');
          if(cursorElement) cursorElement.style.animationIterationCount = '2';
          setTimeout(() => cursorElement && cursorElement.remove(), 1000);
        }, 200);
      }
    });
  }

  window.addEventListener('resize', updateDeviceType);  // Add the event listener to check viewport width changes
});

// Dynamically compute the style based on isDesktop ref
const computedStyle = ref({
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
});
if (isDesktop.value) {
  computedStyle.value.backgroundAttachment = 'fixed';
}
</script>


<template>
  <DefaultNavbar transparent/>
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-80"
      :style="computedStyle"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center mx-auto my-auto">
            <h1 class="text-white">
              <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>What is UniverseTBD</h1>
            </div>
            <p 
              class="lead text-white px-5 mt-3" 
              :style="{ fontWeight: '500', textShadow: '2px 2px 2px black' }"
            >
              What if we bridge Astronomy and Large Language Models to build 
              something truly unique that helps researchers and enthusiasts 
              think deeper about the great beyond?
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">

        <h2 class="mb-4 mt-4">Mission, Vision and Values</h2>
        <h4>Mission</h4>
        <p class="mb-1">UniverseTBD is a diverse community of scientists, AI researchers, 
          and enthusiasts united by our mission to democratise science for everyone.
        </p>

        <h4>Vision</h4>
        <p class="mb-1">Our vision is to revolutionize the way science is done, 
          making the universe of knowledge accessible to all. We aim to be the 
          go-to platform for science benchmarks, data, and reproducible research 
          while fostering a global community of curious minds engaged in groundbreaking 
          research and outreach..
        </p>
        
        <h4>Values</h4>
        <ul class="mb-1">
          <li>Openness</li>
          <li>Excellence with Purpose</li>
          <li>Fearless Experimentation</li>
          <li>Junior Leadership</li>
          <li>Transparency, Integrity, Grit, Empowerment, Rigour (TIGER)</li>
        </ul>
        
        <!-- <p class="mb-1">
          UniverseTBD is still in its early stages but has already built a 
          growing community of scientists and AI researchers interested in using 
          AI to advance science.
        </p>
        <p class="mb-1">
          UniverseTBD is committed to open science and open access. All of its 
          tools and methodologies are freely available to the public. The 
          organisation also publishes its research in open-access journals and 
          presents its work at open conferences.
        </p> -->

        <!-- <h2 class="mb-4 mt-4">What is UniverseTBD</h2>
        <p class="mb-1">
          Every great story starts with a "what if?". For UniverseTBD, "What 
          if we bridge Science and Foundation Models such as Large Language 
          Models (LLMs) to build something truly unique that helps researchers
          and enthusiasts think deeper about the great beyond?". Our very own 
          "one small step for LLM, a giant leap for Science."
        </p>
        <p class="mb-1">
          We are a group of scientists, machine learning enthusiasts, 
          engineers, and enthusiasts, eminently human, coming from all over 
          the world to make it happen. Our goal is to use Foundation & 
          Frontier Models to democratise Science for Everyone and expand our 
          horizons on what's possible for knowledge moving forward.
        </p>
        <p class="mb-1">
          One of the big questions we want to answer is: Can these models come
          up with novel scientific insights and hypotheses?
        </p> -->

        <h2 class="mb-4 mt-4">How it started</h2>
        <p class="mb-1">
          A fateful conference on data-driven astronomy at the Kavli Institute 
          for Theoretical Physics in March 2023 saw a bunch of humans (Jo Ciucă,
          Kartheik Iyer, Yuan-Sen Ting, Josh Peek) come together to talk about 
          current challenges in astronomy, coming at it from very different 
          perspectives.
        </p>
        <p class="mb-1">
          Amongst all these wonderful folk, Jo became immersed in the currents 
          of change sweeping across the natural language processing landscape of
          AI/ML, which has had limited intersection with astronomy. Throughout 
          the workshop, she convinced several of us of the incredible power 
          these models held in revolutionising the way we do astronomy across a 
          range of tasks often thought to be the exclusive domain of trained 
          astronomers.
        </p>
        <p class="mb-1">
          When we all went our separate ways, Jo travelled to San Francisco to 
          meet the developers of these models and dive deep into the currents of
          what was becoming known as large language models and explore their 
          possibilities.
        </p>
        <p class="mb-1">
          While talking over some late morning coffee at the Center for 
          Computational Astrophysics of the Flatiron Institute a few weeks 
          later, Kartheik and Jo decided to go all in and start an organisation 
          to pull together all the diverse people who had expressed an interest 
          in developing these foundational models and methodologies to learn, 
          explore, and synthesise knowledge beyond what individuals were capable
          of, assisted and augmented by Foundation Models.
        </p>
        <p class="mb-1">
          Kartheik had the brilliant insight to name the organisation 
          "UniverseTBD" to denote a universe to be decided by these 
          transformative changes. We knew of the possibilities but not what form
          it would ultimately take. Thus, UniverseTBD came to be in April 2023.
        </p>
        <p class="mb-1">
          In the early stages of UniverseTBD, Yuan-Sen led the team effort of 
          AstroLLaMA-1, the first specialised large language model for 
          astronomical research developed by Josh Nguyen. Together with Ernest 
          Perkowski, Rui Pan and Sandor Kruk, the team further developed the 
          chat version, AstroLLaMA-Chat, available at 
          <a href="https://huggingface.co/spaces/universeTBD/astrollama-7b-chat-alpha">
            huggingface.co
          </a>. 
          As of February 2024, we spun off the development of AstroLLaMA+ models
          to the team led by Yuan-Sen.
        </p>
        <p class="mb-1">
          For our next stage, on the funky spaceship steered by Jo, Sandor and 
          Kartheik, we will focus our efforts on open-source and community-led 
          projects. Stay fine-tuned for what's to come.
        </p>

        <h2 class="mb-4 mt-4">We start with Astronomy</h2>
        <p class="mb-1">
          Large language models (LLMs) powered by artificial intelligence are 
          emerging as promising tools to accelerate astronomical research. 
          Recent advances in natural language processing have produced LLMs 
          capable of comprehending scientific texts, summarising findings, and
          even formulating novel hypotheses.
        </p>
        <p class="mb-1">
          This research explores the potential of modern LLMs like GPT-4+ to 
          enhance astronomers' workflows through automating tedious tasks. We 
          investigate applying LLMs for literature reviews, surfacing insights
          from data, recognizing patterns in images, and generating 
          hypotheses.
        </p>
        <p class="mb-1">
          Early experiments suggest LLMs can extract key information from 
          papers, analyse data to reveal new findings, and propose directions 
          to explore. However, challenges remain in effectively prompting the 
          models and validating their outputs.
        </p>
        <p class="mb-1">
          Our research aims to develop best practices for integrating LLMs 
          into scientists’ toolkits to increase productivity and spur new 
          discoveries. Rather than replacing human experts, LLMs can remove 
          drudgery from tasks like reading papers and data analysis.
        </p>
        <p class="mb-1">
          This allows astronomers to focus their skills on higher-level 
          recognition and ideation to advance the frontiers of knowledge. With
          refined techniques for prompting and evaluating LLMs, these AI 
          systems show promise as collaborators in the astronomical research 
          process.
        </p>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
