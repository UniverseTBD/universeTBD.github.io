<script setup>
import { computed, ref } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import { useBodyClass } from "@/composables/useBodyClass";

// assets
import { researchProjects } from "@/data/researchProjects";

const labelColorMap = {
  Interpretability: "label-interpretability",
  "Blue Skies": "label-blue-skies",
  "Collaborative AI": "label-collaborative-ai",
  "Research Tools": "label-research-tools",
};

const getLabelClass = (label) => labelColorMap[label] || "label-default";

const baseTracks = [
  "Interpretability",
  "Collaborative AI",
  "Blue Skies",
  "Research Tools",
];
const trackOrder = researchProjects
  .map((project) => project.researchLabel)
  .filter(
    (label) => label && !baseTracks.includes(label),
  );
const trackFilters = ["All", ...baseTracks, ...new Set(trackOrder)];
const activeTrack = ref(trackFilters[0]);

const filteredProjects = computed(() =>
  activeTrack.value === "All"
    ? researchProjects
    : researchProjects.filter(
        (project) => project.researchLabel === activeTrack.value,
      ),
);

useBodyClass(["about-us", "bg-gray-200"]);
</script>

<template>
  <DefaultNavbar transparent />
  <header class="">
    <div
      class="page-header min-vh-100 parallax-bg"
      :style="{ backgroundImage: 'url(/background.webp)' }"
    >
      <span class="mask bg-gradient-dark opacity-3"></span>

      <div class="container">
        <div class="col-lg-9 text-center mx-auto mt-8 mb-4">
          <h2 class="text-white">Our Projects</h2>
          <p
            class="lead text-white px-3 mt-3"
            :style="{ fontWeight: '500', textShadow: '2px 2px 2px black' }"
          >
            We are building the open foundation models, human-centric AI agents, and collaborative infrastructure necessary to power the Lab of the Future.
          </p>
        </div>

        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <div class="track-filter text-center mb-4">
              <button
                v-for="track in trackFilters"
                :key="track"
                type="button"
                class="track-link"
                :class="{ active: activeTrack === track }"
                @click="activeTrack = track"
                :aria-pressed="activeTrack === track"
              >
                {{ track }}
              </button>
            </div>
            <div v-for="arXiv in filteredProjects" :key="arXiv.id" class="card my-4 research-card">
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
                    loading="lazy"
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

.track-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: center;
}

.track-link {
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  padding: 0;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.2s ease;
  position: relative;
}

.track-link::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -0.35rem;
  width: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.9);
  transition: width 0.2s ease, left 0.2s ease;
}

.track-link:hover {
  color: #ffffff;
}

.track-link:hover::after {
  width: 100%;
  left: 0;
}

.track-link.active {
  color: #ffffff;
}

.track-link.active::after {
  width: 100%;
  left: 0;
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
  background: transparent;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.label-interpretability {
  color: #c8abff;
}

.label-blue-skies {
  color: #8ed7ff;
}

.label-collaborative-ai {
  color: #ff9fc0;
}

.label-research-tools {
  color: #5ef2cf;
}

.label-default {
  color: #f5f7fb;
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
