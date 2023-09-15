<template>
  <section>
    <div class="page hero is-fullheight custom-background">
    <NavBar/>
      <div class="container">
        <div v-for="blog in blogs" :key="blog.id" class="card">
          <BlogCard :blog="blog"/>
        </div>
      </div>
  </div>
  <BottomPane/>

  </section>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import BottomPane from '@/components/BottomPane.vue';
import BlogCard from '@/components/BlogCard.vue';

export default {
  name: "ResearchIndexPage",
  components: {
    NavBar,
    BottomPane,
    BlogCard
  },
  data() {
    return {
      blogs: [
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
        }
        // Add more blogs as needed
      ],
    };
  },
};
</script>

<style scoped>
.card {
  max-width: 70%;  /* Set maximum width */
  margin: auto;      /* Center the card */
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}


.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

.custom-background {
  background-image: url("@/assets/background.png");
  background-size: auto;
  background-attachment: fixed;  /* 使背景图像固定 */
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
}
@media screen and (max-width: 1200px) {
  .card {
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    margin-bottom: 1.5rem;
    max-width: 100%; /* Set maximum width */
  }

  .card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
  .container{
    width: 95%;
  }
}
</style>
