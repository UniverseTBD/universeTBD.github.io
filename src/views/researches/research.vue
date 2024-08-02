<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import background from "@/assets/img/background.png";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");
});
</script>

<script>
export default {
  data() {
    return {
      arXivs: [
        {
          id: 7,
          title: "AstroPT: Scaling Large Observation Models for Astronomy",
          date: "May 23, 2024",
          authors: "Michael J. Smith, et al.",
          arxivId: "2405.14930",
          content: "This work presents AstroPT, an autoregressive pretrained transformer developed with astronomical use-cases in mind. The AstroPT models presented here have been pretrained on 8.6 million 512×512 pixel grz-band galaxy postage stamp observations from the DESI Legacy Survey DR8. We train a selection of foundation models of increasing size from 1 million to 2.1 billion parameters, and find that AstroPT follows a similar saturating log-log scaling law to textual models. We also find that the models' performances on downstream tasks as measured by linear probing improves with model size up to the model parameter saturation point. We believe that collaborative community development paves the best route towards realising an open source `Large Observation Model' -- a model trained on data taken from the observational sciences at the scale seen in natural language processing. To this end, we release the source code, weights, and dataset for AstroPT under the MIT license, and invite potential collaborators to join us in collectively building and researching these models."
        },
        {
          id: 6,
          title: "AstroLLaMA-Chat: Scaling AstroLLaMA with Conversational and Diverse Datasets",
          date: "Jan 3, 2024",
          authors: "Ernest Perkowski, et al.",
          arxivId: "2401.01916",
          content: "We explore the potential of enhancing LLM performance in astronomy-focused question-answering through targeted, continual pre-training. By employing a compact 7B-parameter LLaMA-2 model and focusing exclusively on a curated set of astronomy corpora -- comprising abstracts, introductions, and conclusions -- we achieve notable improvements in specialized topic comprehension. While general LLMs like GPT-4 excel in broader question-answering scenarios due to superior reasoning capabilities, our findings suggest that continual pre-training with limited resources can still enhance model performance on specialized topics. Additionally, we present an extension of AstroLLaMA: the fine-tuning of the 7B LLaMA model on a domain-specific conversational dataset, culminating in the release of the chat-enabled AstroLLaMA for community use. Comprehensive quantitative benchmarking is currently in progress and will be detailed in an upcoming full paper. The model, AstroLLaMA-Chat, is now available at this https URL, providing the first open-source conversational AI tool tailored for the astronomy community."
        },
        {
          id: 5,
          title: 'AstroLLaMA: Towards Specialized Foundation Models in Astronomy',
          date: 'Sep 12, 2023',
          authors: 'Tuan Dung Nguyen, et al.',
          arxivId: '2309.06126',
          content: 'Large language models excel in many human-language tasks but often falter in highly specialized domains like scholarly astronomy. To bridge this gap, we introduce AstroLLaMA, a 7-billion-parameter model fine-tuned from LLaMA-2 using over 300,000 astronomy abstracts from arXiv. Optimized for traditional causal language modeling, AstroLLaMA achieves a 30% lower perplexity than Llama-2, showing marked domain adaptation. Our model generates more insightful and scientifically relevant text completions and embedding extraction than state-of-the-arts foundation models despite having significantly fewer parameters. AstroLLaMA serves as a robust, domain-specific model with broad fine-tuning potential. Its public release aims to spur astronomy-focused research, including automatic paper summarization and conversational agent development.',
        },
        {
          id: 4,
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
          id: 2,
          title: 'Harnessing the Power of Adversarial Prompting and Large Language Models for Robust Hypothesis Generation in Astronomy',
          date: 'Jun 20, 2023',
          authors: 'Ioana Ciucă, et al.',
          arxivId: '2306.11648',
          content: 'This study investigates the application of Large Language Models (LLMs), specifically GPT-4, within Astronomy. We employ in-context prompting, supplying the model with up to 1000 papers from the NASA Astrophysics Data System, to explore the extent to which performance can be improved by immersing the model in domain-specific literature. Our findings point towards a substantial boost in hypothesis generation when using in-context prompting, a benefit that is further accentuated by adversarial prompting. We illustrate how adversarial prompting empowers GPT-4 to extract essential details from a vast knowledge base to produce meaningful hypotheses, signaling an innovative step towards employing LLMs for scientific research in Astronomy.',
        },
        {
          id: 1,
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
        <div>
          <div class="col-lg-9 text-center mx-auto mt-8 mb-3">
            <h2 class="text-white">Our Research</h2>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="container">
            <div v-for="arXiv in arXivs" :key="arXiv.id" class="card my-4" >
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
                  <font-awesome-icon :icon="['fas', 'fa-arrow-right']"/>
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