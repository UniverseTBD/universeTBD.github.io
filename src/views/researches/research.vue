<script setup>
import { onMounted, onUnmounted } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

// assets
import background from "@/assets/img/background.png";
import { researchProjects } from "@/data/researchProjects";

const labelColorMap = {
  Interpretability: "label-interpretability",
  "Blue Skies": "label-blue-skies",
  "Collaborative AI": "label-collaborative-ai",
  "Research Tools": "label-research-tools",
};

const getLabelClass = (label) => labelColorMap[label] || "label-default";

const arXivs = researchProjects;


const body = document.getElementsByTagName("body")[0];

onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <DefaultNavbar transparent />
  <header class="">
    <div
      class="page-header min-vh-100"
      :style="{
        backgroundImage: `url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }"
    >
      <span class="mask bg-gradient-dark opacity-3"></span>

      <div class="container">
        <div class="col-lg-9 text-center mx-auto mt-8 mb-4">
          <h2 class="text-white">Our Projects</h2>
          <p
            class="lead text-white px-3 mt-3"
            :style="{ fontWeight: '500', textShadow: '2px 2px 2px black' }"
          >
            We do research across the three dimensions of Interpretability, Collaborative AI,
            and Blue Skies, while releasing Research Tools to support our scientific community.
          </p>
        </div>

        <div class="row justify-content-center">
          <div class="container">
            <div v-for="arXiv in arXivs" :key="arXiv.id" class="card my-4 research-card">
              <div
                class="card-header mb-0 d-flex flex-column flex-md-row align-items-md-center justify-content-between"
              >
                <div>
                  <h4 class="mb-1">{{ arXiv.title }}</h4>
                  <span class="h6 text-muted">{{ arXiv.authors }}</span>
                </div>
                <div
                  v-if="arXiv.researchLabel"
                  class="header-badges mt-3 mt-md-0"
                >
                  <span
                    class="badge research-label"
                    :class="getLabelClass(arXiv.researchLabel)"
                  >
                    {{ arXiv.researchLabel }}
                  </span>
                </div>
              </div>
              <div class="card-body mb-0">
                <div class="d-flex flex-column flex-md-row gap-3">
                  <img
                    v-if="arXiv.image"
                    :src="arXiv.image"
                    :alt="`${arXiv.title} logo`"
                    class="research-thumb"
                  />
                  <div>
                    <ul class="list-unstyled mb-3">
                      <li v-if="arXiv.arxivId" class="text-sm text-muted">
                        ArXiv ID: {{ arXiv.arxivId }}
                      </li>
                    </ul>
                    <div v-if="arXiv.impact" class="impact-chips mb-3">
                      <span v-for="chip in arXiv.impact" :key="chip" class="impact-chip">
                        {{ chip }}
                      </span>
                    </div>
                    <p class="text-lg mb-3">
                      <b>{{ arXiv.summaryLabel || "Abstract" }}:</b> {{ arXiv.content }}
                    </p>
                    <div
                      v-if="arXiv.date"
                      class="release-date text-sm text-muted mb-2"
                    >
                      Released: {{ arXiv.date }}
                    </div>
                    <div class="cta-group" v-if="arXiv.ctas && arXiv.ctas.length">
                      <a
                        v-for="cta in arXiv.ctas"
                        :key="cta.route"
                        :href="cta.route"
                        class="btn btn-sm btn-success"
                        target="_blank"
                        rel="noopener"
                      >
                        {{ cta.label }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <DefaultFooter />
</template>

<style scoped>
.research-card {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.18);
}

.research-card .card-header {
  background: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.header-badges {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
}

.research-label {
  font-weight: 700;
  letter-spacing: 0.03em;
  border: none;
}

.label-interpretability {
  background: #e0cffc;
  color: #402062;
}

.label-blue-skies {
  background: #bfdbfe;
  color: #0f1f3d;
}

.label-collaborative-ai {
  background: #fbe9ec;
  color: #7a1c2d;
}

.label-research-tools {
  background: #e1f7f0;
  color: #0c4a36;
}

.label-default {
  background: #e2e8f0;
  color: #1f2937;
}

.research-thumb {
  width: 128px;
  height: 128px;
  object-fit: contain;
  border-radius: 1rem;
  background: #ffffff;
  padding: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.impact-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.impact-chip {
  background: rgba(25, 135, 84, 0.12);
  color: #198754;
  border-radius: 999px;
  padding: 0.25rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 600;
}

.release-date {
  font-style: italic;
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.cta-group .btn {
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.1);
  color: #111827;
  font-weight: 600;
}

.cta-group .btn:hover {
  background: rgba(15, 23, 42, 0.05);
  color: #111827;
}
</style>
