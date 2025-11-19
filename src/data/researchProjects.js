import astroptLogo from "@/assets/img/product/astropt.png";
import prhLogo from "@/assets/img/product/prh_temp.png";
import multimodalUniverseLogo from "@/assets/img/product/multimodal_universe.png";
import utbdLogo from "@/assets/img/logo/utbd_blue_transparent_bg.png";
import pathfinderLogo from "@/assets/img/logo/pfdr.png";

export const researchProjects = [
  {
    id: 9,
    title: "The Platonic Universe: Do Foundation Models See the Same Sky?",
    date: "Sep 25, 2025",
    authors: "Kshitij Duraphe, Michael J. Smith, Shashwat Sourav, John F. Wu, UniverseTBD",
    image: prhLogo,
    researchLabel: "Interpretability",
    impact: [
      "NeurIPS 2025 ML4PS Spotlight",
      "Platonic Representation Hypothesis",
      "Cross-modal alignment",
    ],
    content:
      "We test the Platonic Representation Hypothesis (PRH) in astronomy by measuring representational convergence across a range of foundation models trained on different data types. Using spectroscopic and imaging observations from JWST, HSC, Legacy Survey, and DESI, we compare representations from vision transformers, self-supervised models, and astronomy-specific architectures via mutual k-nearest neighbour analysis. We observe consistent scaling: representational alignment generally increases with model capacity across our tested architectures, supporting convergence toward a shared representation of galaxy astrophysics. Our results suggest that astronomical foundation models can use pre-trained general-purpose architectures, allowing us to capitalise on the broader machine learning community's already-spent computational investment.",
    arxivId: "2509.19453",
    ctas: [
      { label: "Read the paper", route: "https://arxiv.org/abs/2509.19453" },
      { label: "View on GitHub", route: "https://github.com/UniverseTBD/platonic-universe" },
      {
        label: "Explore on Hugging Face",
        route: "https://huggingface.co/collections/UniverseTBD/the-platonic-universe",
      },
      { label: "Join on Discord", route: "https://discord.gg/CcPfhePkmT" },
    ],
  },
  {
    id: 8,
    slug: "multimodal-universe",
    title:
      "The Multimodal Universe: Enabling Large-Scale Machine Learning with 100 TB of Astronomical Scientific Data",
    date: "Nov 13, 2024",
    authors: "The Multimodal Universe Collaboration",
    image: multimodalUniverseLogo,
    researchLabel: "Blue Skies",
    impact: ["NeurIPS 2024 B&D", "100 TB multimodal data", "Open datasets"],
    arxivId: "2412.02527",
    content:
      "We present the Multimodal Universe, a NeurIPS 2024 Benchmarks & Datasets paper that assembles 100TB of astronomical observations to accelerate machine learning for the sciences. Hundreds of millions of multi-channel and hyper-spectral images, spectra, time series, and structured metadata are packaged with ready-to-run benchmark tasks that reflect common astrophysics workflows. The scale and diversity of MMU unlock the development of genuinely multimodal foundation models for astronomy, and every script, access recipe, and leaderboard is openly published for the community.",
    ctas: [
      { label: "Read the paper", route: "https://arxiv.org/abs/2412.02527" },
      { label: "View on GitHub", route: "https://github.com/MultimodalUniverse/MultimodalUniverse" },
      { label: "Explore on Hugging Face", route: "https://huggingface.co/MultimodalUniverse" },
      { label: "Join on Discord", route: "https://discord.gg/Yq44ywKbya" },
    ],
  },
  {
    id: 7,
    title: "AstroPT: Scaling Large Observation Models for Astronomy",
    date: "May 23, 2024",
    authors:
      "Michael J. Smith, Ryan J. Roberts, Marc Huertas-Company, Eirini Angeloudi, Gosia Siudek, Ginés Martínez Solaeche, Victor Alonso, Ashod Khederlarian, Sogol Sanjaripour",
    arxivId: "2405.14930",
    image: astroptLogo,
    researchLabel: "Interpretability",
    impact: [
      "ICML 2024 AI for Science Spotlight",
      "2.1B parameters",
      "8.6M DESI images",
    ],
    content:
      "This work presents AstroPT, an autoregressive pretrained transformer developed with astronomical use-cases in mind. The AstroPT models presented here have been pretrained on 8.6 million 512×512 pixel grz-band galaxy postage stamp observations from the DESI Legacy Survey DR8. We train a selection of foundation models of increasing size from 1 million to 2.1 billion parameters, and find that AstroPT follows a similar saturating log-log scaling law to textual models. We also find that the models' performances on downstream tasks as measured by linear probing improves with model size up to the model parameter saturation point. We believe that collaborative community development paves the best route towards realising an open source `Large Observation Model' -- a model trained on data taken from the observational sciences at the scale seen in natural language processing. To this end, we release the source code, weights, and dataset for AstroPT under the AGPLv3.0 license, and invite potential collaborators to join us in collectively building and researching these models.",
    ctas: [
      { label: "Read the paper", route: "https://arxiv.org/abs/2405.14930" },
      { label: "View on GitHub", route: "https://github.com/Smith42/astroPT" },
      { label: "Explore on Hugging Face", route: "https://huggingface.co/Smith42/astroPT_v2.0" },
      { label: "Join on Discord", route: "https://discord.gg/NvtuJFV7rQ" },
    ],
  },
  {
    id: 8,
    title: "AstroLLaVA: Towards the Unification of Astronomical Data and Natural Language",
    date: "Apr 2025",
    authors:
      "Sharaf Zaman, Michael J. Smith, Pranav Khetarpal, Rishabh Chakrabarty, Michele Ginolfi, Marc Huertas-Company, Maja Jabłońska, Sandor Kruk, Matthieu Le Lain, Sergio José Rodríguez Méndez, Dimitrios Tanoglidis",
    arxivId: "2504.08583",
    image: utbdLogo,
    researchLabel: "Interpretability",
    impact: ["SCI-FM@ICLR 2025", "30k astro images", "Open weights"],
    content:
      "We present AstroLLaVA, a vision-language model for astronomy that enables natural dialogue with astronomical imagery. LLaVA is fine-tuned on ~30k images with captions and question-answer pairs sourced from NASA’s Astronomy Picture of the Day, the European Southern Observatory, and Hubble, enabling both image captioning and astronomical visual question answering. The released weights, code, and training set demonstrate strong performance on a bespoke benchmark and outline a roadmap for aligning general astronomical data with large language models.",
    ctas: [
      { label: "Read the paper", route: "https://arxiv.org/abs/2504.08583" },
      { label: "Explore the dataset", route: "https://huggingface.co/datasets/UniverseTBD/AstroLLaVA_convos" },
      { label: "Join on Discord", route: "https://discord.gg/CcPfhePkmT" },
    ],
  },
  {
    id: 12,
    title: "AstroCoder: AI Documentation for ASCL Repositories",
    date: "Beta — 2024",
    authors:
      "Nolan Koblischke, Mugdha Polimera, Maja Jablonska, David Hendriks, Sergi Blanco-Cuaresma, Hilke Reckman, Ioana Ciucă, UniverseTBD",
    image: utbdLogo,
    researchLabel: "Research Tools",
    impact: ["Beta", "AI documentation", "Astronomical repos"],
    content:
      "AstroCoder auto-generates documentation for 2,270 repositories in the Astrophysics Source Code Library, pairing an AI chatbot (bottom-right) with semantic search so scientists can discover and learn tooling faster. Each repo summary is generated by large language models, and the assistant guides users through install steps or troubleshooting while flagging that AI content may contain inaccuracies. All source code remains owned by the original authors, and the project is supported by the Microsoft Accelerate Foundation Models Research program.",
    summaryLabel: "Description",
    ctas: [{ label: "Open AstroCoder", route: "https://nolank.ca/astrocoder/" }],
  },
  {
    id: 10,
    title: "Sparks of Science: Hypothesis Generation Using Structured Paper Data",
    date: "Apr 2025",
    authors:
      "Charles O'Neill, Tirthankar Ghosal, Roberta Răileanu, Mike Walmsley, Thang Bui, Kevin Schawinski, Ioana Ciucă",
    arxivId: "2504.12976",
    image: utbdLogo,
    researchLabel: "Collaborative AI",
    impact: ["HypoGen dataset", "Bit-Flip-Spark schema", "LLM hypothesis generation"],
    content:
      "Generating novel and creative scientific hypotheses is a cornerstone in achieving Artificial General Intelligence. Large language and reasoning models have the potential to aid in the systematic creation, selection, and validation of scientifically informed hypotheses. However, current foundation models often struggle to produce scientific ideas that are both novel and feasible. One reason is the lack of a dedicated dataset that frames Scientific Hypothesis Generation (SHG) as a Natural Language Generation (NLG) task. In this paper, we introduce HypoGen, the first dataset of approximately 5500 structured problem-hypothesis pairs extracted from top-tier computer science conferences structured with a Bit-Flip-Spark schema, where the Bit is the conventional assumption, the Spark is the key insight or conceptual leap, and the Flip is the resulting counterproposal. HypoGen uniquely integrates an explicit Chain-of-Reasoning component that reflects the intellectual process from Bit to Flip. We demonstrate that framing hypothesis generation as conditional language modelling, with the model fine-tuned on Bit-Flip-Spark and the Chain-of-Reasoning (and where, at inference, we only provide the Bit), leads to improvements in the overall quality of the hypotheses. Our evaluation employs automated metrics and LLM judge rankings for overall quality assessment. We show that by fine-tuning on our HypoGen dataset we improve the novelty, feasibility, and overall quality of the generated hypotheses.",
    ctas: [
      { label: "Read the paper", route: "https://arxiv.org/abs/2504.12976" },
      { label: "Explore the dataset", route: "https://huggingface.co/datasets/UniverseTBD/hypogen-dr1" },
    ],
  },
  {
    id: 11,
    title:
      "Pathfinder: A Semantic Framework for Literature Review and Knowledge Discovery in Astronomy",
    date: "Aug 2, 2024",
    authors: "Kartheik G. Iyer, Mikaeel Yunus, Charles O'Neill, et al.",
    image: pathfinderLogo,
    researchLabel: "Research Tools",
    impact: [
      "Astrophysical Journal",
      "Semantic literature search",
      "LLM-powered synthesis",
    ],
    content:
      "The exponential growth of astronomical literature poses significant challenges for researchers navigating and synthesizing general insights or even domain-specific knowledge. Pathfinder is a machine learning framework that powers semantic literature search with natural language, pairing state-of-the-art large language models with a corpus of 350,000 peer-reviewed ADS papers. It couples advanced retrieval techniques with LLM-based synthesis so scientists can search by semantic context, while time-based and citation-based weighting schemes handle jargon, named entities, and temporal drift. Custom benchmarks spanning single-paper and multi-paper tasks plus detailed case studies demonstrate the system's versatility. Beyond review workflows, Pathfinder reformats answers for different audiences, visualizes research landscapes, and tracks the impact of observatories and methodologies, helping researchers at every career stage explore the literature.",
    ctas: [
      { label: "Read the paper", route: "https://arxiv.org/abs/2408.01556" },
      { label: "Explore the app", route: "https://pfdr.app" },
    ],
  },
  {
    id: 6,
    title: "AstroLLaMA-Chat: Scaling AstroLLaMA with Conversational and Diverse Datasets",
    date: "Jan 3, 2024",
    authors: "Ernest Perkowski, Rui Pan, Tuan Dung Nguyen, et al.",
    arxivId: "2401.01916",
    researchLabel: "Collaborative AI",
    content:
      "We explore the potential of enhancing LLM performance in astronomy-focused question-answering through targeted, continual pre-training. By employing a compact 7B-parameter LLaMA-2 model and focusing exclusively on a curated set of astronomy corpora -- comprising abstracts, introductions, and conclusions -- we achieve notable improvements in specialized topic comprehension. While general LLMs like GPT-4 excel in broader question-answering scenarios due to superior reasoning capabilities, our findings suggest that continual pre-training with limited resources can still enhance model performance on specialized topics. Additionally, we present an extension of AstroLLaMA: the fine-tuning of the 7B LLaMA model on a domain-specific conversational dataset, culminating in the release of the chat-enabled AstroLLaMA for community use. Comprehensive quantitative benchmarking is currently in progress and will be detailed in an upcoming full paper. The model, AstroLLaMA-Chat, is now available at this https URL, providing the first open-source conversational AI tool tailored for the astronomy community.",
    ctas: [
      { label: "Read the paper", route: "https://arxiv.org/abs/2401.01916" },
      { label: "Join on Discord", route: "https://discord.gg/CcPfhePkmT" },
    ],
  },
  {
    id: 5,
    title: "AstroLLaMA: Towards Specialized Foundation Models in Astronomy",
    date: "Sep 12, 2023",
    authors: "Tuan Dung Nguyen, Yuan-Sen Ting, Ioana Ciucă, et al.",
    arxivId: "2309.06126",
    researchLabel: "Collaborative AI",
    content:
      "Large language models excel in many human-language tasks but often falter in highly specialized domains like scholarly astronomy. To bridge this gap, we introduce AstroLLaMA, a 7-billion-parameter model fine-tuned from LLaMA-2 using over 300,000 astronomy abstracts from arXiv. Optimized for traditional causal language modeling, AstroLLaMA achieves a 30% lower perplexity than Llama-2, showing marked domain adaptation. Our model generates more insightful and scientifically relevant text completions and embedding extraction than state-of-the-arts foundation models despite having significantly fewer parameters. AstroLLaMA serves as a robust, domain-specific model with broad fine-tuning potential. Its public release aims to spur astronomy-focused research, including automatic paper summarization and conversational agent development.",
    ctas: [
      { label: "Read the paper", route: "https://arxiv.org/abs/2309.06126" },
      { label: "Join on Discord", route: "https://discord.gg/CcPfhePkmT" },
    ],
  },
  {
    id: 4,
    title:
      "Adversarial Fine-Tuning of Language Models: An Iterative Optimisation Approach for the Generation and Detection of Problematic Content",
    date: "Aug 26, 2023",
    authors: "Charles O'Neill, Jack Miller, Ioana Ciucă, Yuan-Sen Ting, Thang Bui",
    arxivId: "2308.13768",
    researchLabel: "Collaborative AI",
    content:
      "In this paper, we tackle the emerging challenge of unintended harmful content generation in Large Language Models (LLMs) with a novel dual-stage optimisation technique using adversarial fine-tuning. Our two-pronged approach employs an adversarial model, fine-tuned to generate potentially harmful prompts, and a judge model, iteratively optimised to discern these prompts. In this adversarial cycle, the two models seek to outperform each other in the prompting phase, generating a dataset of rich examples which are then used for fine-tuning. This iterative application of prompting and fine-tuning allows continuous refinement and improved performance. The performance of our approach is evaluated through classification accuracy on a dataset consisting of problematic prompts not detected by GPT-4, as well as a selection of contentious but unproblematic prompts. We show considerable increase in classification accuracy of the judge model on this challenging dataset as it undergoes the optimisation process. Furthermore, we show that a rudimentary model \\texttt{ada} can achieve 13% higher accuracy on the hold-out test set than GPT-4 after only a few rounds of this process, and that this fine-tuning improves performance in parallel tasks such as toxic comment identification.",
    ctas: [{ label: "Read the paper", route: "https://arxiv.org/abs/2308.13768" }],
  },
  {
    id: 3,
    title:
      "Steering Language Generation: Harnessing Contrastive Expert Guidance and Negative Prompting for Coherent and Diverse Synthetic Data Generation",
    date: "Aug 15, 2023",
    authors: "Charles O'Neill, Yuan-Sen Ting, Ioana Ciucă, Jack Miller, Thang Bui",
    arxivId: "2308.07645",
    researchLabel: "Collaborative AI",
    content:
      "Large Language Models (LLMs) hold immense potential to generate synthetic data of high quality and utility, which has numerous applications from downstream model training to practical data utilisation. However, contemporary models, despite their impressive capacities, consistently struggle to produce both coherent and diverse data. To address the coherency issue, we introduce contrastive expert guidance, where the difference between the logit distributions of fine-tuned and base language models is emphasised to ensure domain adherence. In order to ensure diversity, we utilise existing real and synthetic examples as negative prompts to the model. We deem this dual-pronged approach to logit reshaping as STEER: Semantic Text Enhancement via Embedding Repositioning. STEER operates at inference-time and systematically guides the LLMs to strike a balance between adherence to the data distribution (ensuring semantic fidelity) and deviation from prior synthetic examples or existing real datasets (ensuring diversity and authenticity). This delicate balancing act is achieved by dynamically moving towards or away from chosen representations in the latent space. STEER demonstrates improved performance over previous synthetic data generation techniques, exhibiting better balance between data diversity and coherency across three distinct tasks: hypothesis generation, toxic and non-toxic comment generation, and commonsense reasoning task generation. We demonstrate how STEER allows for fine-tuned control over the diversity-coherency trade-off via its hyperparameters, highlighting its versatility.",
    ctas: [{ label: "Read the paper", route: "https://arxiv.org/abs/2308.07645" }],
  },
  {
    id: 2,
    title:
      "Harnessing the Power of Adversarial Prompting and Large Language Models for Robust Hypothesis Generation in Astronomy",
    date: "Jun 20, 2023",
    authors: "Ioana Ciucă, Yuan-Sen Ting, Sandor Kruk, Kartheik Iyer",
    arxivId: "2306.11648",
    researchLabel: "Collaborative AI",
    content:
      "This study investigates the application of Large Language Models (LLMs), specifically GPT-4, within Astronomy. We employ in-context prompting, supplying the model with up to 1000 papers from the NASA Astrophysics Data System, to explore the extent to which performance can be improved by immersing the model in domain-specific literature. Our findings point towards a substantial boost in hypothesis generation when using in-context prompting, a benefit that is further accentuated by adversarial prompting. We illustrate how adversarial prompting empowers GPT-4 to extract essential details from a vast knowledge base to produce meaningful hypotheses, signaling an innovative step towards employing LLMs for scientific research in Astronomy.",
    ctas: [{ label: "Read the paper", route: "https://arxiv.org/abs/2306.11648" }],
  },
  {
    id: 1,
    title:
      "Galactic ChitChat: Using Large Language Models to Converse with Astronomy Literature",
    date: "Apr 12, 2023",
    authors: "Ioana Ciucă, Yuan-Sen Ting",
    arxivId: "2304.05406",
    researchLabel: "Collaborative AI",
    content:
      "We demonstrate the potential of the state-of-the-art OpenAI GPT-4 large language model to engage in meaningful interactions with Astronomy papers using in-context prompting. To optimize for efficiency, we employ a distillation technique that effectively reduces the size of the original input paper by 50% while maintaining the paragraph structure and overall semantic integrity. We then explore the model's responses using a multi-document context (ten distilled documents). Our findings indicate that GPT-4 excels in the multi-document domain, providing detailed answers contextualized within the framework of related research findings. Our results showcase the potential of large language models for the astronomical community, offering a promising avenue for further exploration, particularly the possibility of utilizing the models for hypothesis generation.",
    ctas: [{ label: "Read the paper", route: "https://arxiv.org/abs/2304.05406" }],
  },
];
