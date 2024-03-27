<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import background from "@/assets/img/background.png";

//dep
import Typed from "typed.js";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    });
  }
});
</script>

<script>
export default {
  data() {
    return {
      arXivs: [
        {
          id: 1,
          title: 'AstroLLaMA: Towards Specialized Foundation Models in Astronomy',
          date: 'Sep 12, 2023',
          authors: 'Tuan Dung Nguyen, et al.',
          arxivId: '2309.06126',
          content: 'WLarge language models excel in many human-language tasks but often falter in highly specialized domains like scholarly astronomy. To bridge this gap, we introduce AstroLLaMA, a 7-billion-parameter model fine-tuned from LLaMA-2 using over 300,000 astronomy abstracts from arXiv. Optimized for traditional causal language modeling, AstroLLaMA achieves a 30% lower perplexity than Llama-2, showing marked domain adaptation. Our model generates more insightful and scientifically relevant text completions and embedding extraction than state-of-the-arts foundation models despite having significantly fewer parameters. AstroLLaMA serves as a robust, domain-specific model with broad fine-tuning potential. Its public release aims to spur astronomy-focused research, including automatic paper summarization and conversational agent development.',
        },
        {
          id: 2,
          title: 'Adversarial Fine-Tuning of Language Models: An Iterative Optimisation Approach for the Generation and Detection of Problematic Content',
          date: 'Aug 26, 2023',
          authors: 'Charles O\'Neill, et al.',
          arxivId: '2308.13768',
          content: 'In this paper, we tackle the emerging challenge of unintended harmful content generation in Large Language Models (LLMs) with a novel dual-stage optimisation technique using adversarial fine-tuning. Our two-pronged approach employs an adversarial model, fine-tuned to generate potentially harmful prompts, and a judge model, iteratively optimised to discern these prompts. In this adversarial cycle, the two models seek to outperform each other in the prompting phase, generating a dataset of rich examples which are then used for fine-tuning. This iterative application of prompting and fine-tuning allows continuous refinement and improved performance. The performance of our approach is evaluated through classification accuracy on a dataset consisting of problematic prompts not detected by GPT-4, as well as a selection of contentious but unproblematic prompts. We show considerable increase in classification accuracy of the judge model on this challenging dataset as it undergoes the optimisation process. Furthermore, we show that a rudimentary model \texttt{ada} can achieve 13% higher accuracy on the hold-out test set than GPT-4 after only a few rounds of this process, and that this fine-tuning improves performance in parallel tasks such as toxic comment identification.',
        },
        {
          id: 3,
          title: 'Steering Language Generation: Harnessing Contrastive Expert Guidance and Negative Prompting for Coherent and Diverse Synthetic Data Generation',
          date: 'Aug 15, 2023',
          authors: 'Charles O\'Neill, et al.',
          arxivId: '2308.07645',
          content: 'Large Language Models (LLMs) hold immense potential to generate synthetic data of high quality and utility, which has numerous applications from downstream model training to practical data utilisation. However, contemporary models, despite their impressive capacities, consistently struggle to produce both coherent and diverse data. To address the coherency issue, we introduce contrastive expert guidance, where the difference between the logit distributions of fine-tuned and base language models is emphasised to ensure domain adherence. In order to ensure diversity, we utilise existing real and synthetic examples as negative prompts to the model. We deem this dual-pronged approach to logit reshaping as STEER: Semantic Text Enhancement via Embedding Repositioning. STEER operates at inference-time and systematically guides the LLMs to strike a balance between adherence to the data distribution (ensuring semantic fidelity) and deviation from prior synthetic examples or existing real datasets (ensuring diversity and authenticity). This delicate balancing act is achieved by dynamically moving towards or away from chosen representations in the latent space. STEER demonstrates improved performance over previous synthetic data generation techniques, exhibiting better balance between data diversity and coherency across three distinct tasks: hypothesis generation, toxic and non-toxic comment generation, and commonsense reasoning task generation. We demonstrate how STEER allows for fine-tuned control over the diversity-coherency trade-off via its hyperparameters, highlighting its versatility.',
        },
        {
          id: 4,
          title: 'Harnessing the Power of Adversarial Prompting and Large Language Models for Robust Hypothesis Generation in Astronomy',
          date: 'Jun 20, 2023',
          authors: 'Ioana Ciucă, et al.',
          arxivId: '2306.11648',
          content: 'This study investigates the application of Large Language Models (LLMs), specifically GPT-4, within Astronomy. We employ in-context prompting, supplying the model with up to 1000 papers from the NASA Astrophysics Data System, to explore the extent to which performance can be improved by immersing the model in domain-specific literature. Our findings point towards a substantial boost in hypothesis generation when using in-context prompting, a benefit that is further accentuated by adversarial prompting. We illustrate how adversarial prompting empowers GPT-4 to extract essential details from a vast knowledge base to produce meaningful hypotheses, signaling an innovative step towards employing LLMs for scientific research in Astronomy.',
        },
        {
          id: 5,
          title: 'Galactic ChitChat: Using Large Language Models to Converse with Astronomy Literature',
          date: 'Apr 12, 2023',
          authors: 'Ioana Ciucă, et al.',
          arxivId: '2304.05406',
          content: "We demonstrate the potential of the state-of-the-art OpenAI GPT-4 large language model to engage in meaningful interactions with Astronomy papers using in-context prompting. To optimize for efficiency, we employ a distillation technique that effectively reduces the size of the original input paper by 50\%, while maintaining the paragraph structure and overall semantic integrity. We then explore the model's responses using a multi-document context (ten distilled documents). Our findings indicate that GPT-4 excels in the multi-document domain, providing detailed answers contextualized within the framework of related research findings. Our results showcase the potential of large language models for the astronomical community, offering a promising avenue for further exploration, particularly the possibility of utilizing the models for hypothesis generation.",
        }
      ],
    };
  },
};
</script>

<template>
  <DefaultNavbar transparent/>
  <header class="">
    <div
      class="page-header min-vh-100"
      :style="{ 
        backgroundImage: `url(${background})`, 
        backgroundAttachment: 'fixed', 
        backgroundPosition: 'center', 
        backgroundSize: 'cover' }"
    >
      <span class="mask bg-gradient-dark opacity-3"></span>
      
      <div class="container">
        
        <!-- Section 1: Header Text and Icons -->
        <div 
          class="row justify-content-center"
          :style="{ 
          backgroundPosition: 'center', 
          }"
        >
          <div class="col-lg-9 text-center mx-auto my-9">
            <h1 class="text-white">
              Work with an amazing <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>team</h1>
              <h1>AI</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              We are a group of scientists, machine learning enthusiasts, engineers, and enthusiasts, eminently human from all over the world, united to achieve our shared vision.
            </p>
            <a href="https://forms.gle/1g4AJXtT3wyHgbmAA" class="btn bg-white text-dark" role="button">
               Join us
            </a>
            <h6 class="text-white mb-2 mt-5">Find us on</h6>
            <div class="d-flex justify-content-center">
              <a href="https://twitter.com/universe_tbd"
                ><i class="fab fa-facebook text-lg text-white me-4"></i
              ></a>
              <a href="https://twitter.com/universe_tbd"
                ><i class="fab fa-instagram text-lg text-white me-4"></i
              ></a>
              <a href="https://twitter.com/universe_tbd"
                ><i class="fab fa-twitter text-lg text-white me-4"></i
              ></a>
              <a href="https://twitter.com/universe_tbd"
                ><i class="fab fa-google-plus text-lg text-white"></i
              ></a>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="container">
            <div v-for="arXiv in arXivs" :key="arXiv.id" class="card mb-3 mt-2" >
              <div class="card-header mb-0">
                <h4>{{ arXiv.title }}</h4>
                <span class="h6">{{ arXiv.authors }}</span>
              </div>
              <div class="card-body mb-0">
                <ul class="list-unstyled mt-n4 mb-2">
                  <li>{{ arXiv.date }}</li>
                  <li>ArXiv ID: {{ arXiv.arxivId }}</li>
                </ul>
                <p class="text-lg mb-2">{{ arXiv.content }}</p>
                <a
                  :href="'https://arxiv.org/abs/' + arXiv.arxivId" 
                  class="text-success icon-move-right"
                  >View on arXiv
                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div> <!-- End of .container -->
    </div> <!-- End of .page-header -->
    
  </header>
  <DefaultFooter />
</template>