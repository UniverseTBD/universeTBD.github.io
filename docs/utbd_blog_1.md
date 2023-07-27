# Harnessing the Power of Advanced AI in Astronomy: A Venture with GPT-4

The realm of artificial intelligence continues to unveil untold potential, providing us with transformative solutions and exciting new possibilities. One area that has seen a recent surge in AI applications is scientific research, specifically Astronomy. In this blog post, we explore Large Language Models (LLMs) like GPT-4 and their application within Astronomy.

## The Experiment: Integrating AI in Galactic Astronomy
Our research involved a deep dive into a vast collection of academic literature. We selected 1,000 papers from the NASA Astrophysics Data System, focusing on Galactic Astronomy.

The technique is known as 'in-context prompting,' wherein we provide the AI model with a hefty dose of domain-specific literature. This immersion in astronomy literature aimed to improve the AI model's performance.

Our methodology involved pre-processing these papers into 'chunks' of 1,000 tokens using OpenAI's GPT-4 model and the Langchain library. These chunks underwent a process of embedding and analysis, followed by a similarity search between our query and the vector database of the embedded fragments. This procedure allowed us to filter out irrelevant information, creating a refined input for the GPT-4 model.

## The Power of Adversarial Prompting
To bolster the results, we designed an adversarial experiment incorporating another GPT-4 model to critique the generated hypotheses. This adversarial prompting served as a valuable tool, significantly improving hypothesis generation.

This experiment was replicated five times for each context level the model could access, i.e., for 1, 10, 100, and 1000 papers, culminating in 60 hypotheses and 40 critiques. Two Galactic Astronomy domain experts then evaluated these hypotheses on a scale from 1 (poor) to 5 (expert), focusing on scientific accuracy, creativity, and feasibility.

Interestingly, our results indicated that adversarial prompting enabled a stronger correlation between hypothesis quality and the number of referenced papers, thereby improving average scores and consistency of quality.

## Charting the Knowledge Footprint
One of the most intriguing aspects of this study was exploring the 'embedding space' by passing the abstracts of 1,000 astronomy papers through an embedding model. This allowed us to visualize the contextual differences and similarities within the data.

We identified each hypothesis's 'knowledge footprint', which showed how GPT-4 expanded its scope as the number of referenced papers increased. More importantly, adversarial prompting enabled the model to leverage a larger context, contributing to a more coherent understanding rather than merely producing a 'fact jumble'.

## Conclusions: A New Dawn for Accessible AI in Astronomy
Our research illuminates a novel and exciting path for applying Large Language Models (LLMs) in the scientific arena. In this work, we've honed in on the concept of 'in-context prompting' as a less resource-intensive alternative to the traditional method of fine-tuning. We aim to democratize these advanced AI technologies, making them more accessible to academic institutions, irrespective of their size or resource availability.

The outcomes of our research project have been highly encouraging. They illustrate the narrative that, with strategic utilization and thoughtful human input, we can revolutionize the accessibility of these powerful AI models. We envision a future where the prowess of AI is within everyone's reach, ready to open Astronomy to new horizons.

Check out the paper here: https://arxiv.org/abs/2306.11648

