<script setup>
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import { useBodyClass } from "@/composables/useBodyClass";
import hfLogo from "@/assets/img/logo/huggingface.svg";
import eleutherLogo from "@/assets/img/logo/eleutherai.webp";
import googleLogo from "@/assets/img/logo/google3.png";
import msLogo from "@/assets/img/logo/Microsoft.svg";
import openaiLogo from "@/assets/img/logo/OpenAI.svg";

useBodyClass(["about-us", "bg-gray-200"]);

const partners = [
  {
    name: "EleutherAI",
    program: "Open source infrastructure and collaboration",
    logo: eleutherLogo,
    tileClass: "partner-tile--contrast",
    textClass: "text-white",
  },
  {
    name: "Hugging Face",
    program: "Open science infrastructure & hosting",
    logo: hfLogo,
  },
  {
    name: "Google Research",
    program: "Gemini credits support",
    logo: googleLogo,
    tileClass: "partner-tile--white",
  },
  {
    name: "Microsoft",
    program: "Accelerate Foundation Models Academic Research Initiative",
    logo: msLogo,
  },
  {
    name: "OpenAI",
    program: "Researcher Access Program",
    logo: openaiLogo,
  },
];
</script>

<template>
  <DefaultNavbar transparent />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-100 parallax-bg"
      :style="{ backgroundImage: 'url(/background.webp)' }"
    >
      <span class="mask bg-gradient-dark opacity-4"></span>
      <div class="container">
        <div class="row justify-content-center align-items-center mt-4 mt-lg-6">
          <div class="col-lg-10 text-center mx-auto my-auto">


            <div class="card page-card blur shadow-blur mx-3 mx-md-5 my-4 my-md-5 text-dark text-start">
              <div class="card-body page-card-body">
                <h1 class="text-dark mb-4">The Universe goes multiplayer</h1>
                <p>
                  UniverseTBD is powered by collaborators who believe science should be open, rigorous,
                  and multiplayer. Together we ship new tools, keep compute accessible, and welcome more
                  people into discovery.
                </p>
                <p>
                  Credits, cloud time, and direct feedback from partners let our research pods build
                  benchmarks, share datasets the day they are ready, and mentor junior researchers
                  without paywalls. These grants cover the heavy compute lifts, API credits, and tool
                  stacks so we can do reproducible research at open-source speed. Every collaboration
                  keeps UniverseTBD open.
                </p>
                <ul>
                  <li>Accelerate open benchmarks for astronomy and the sciences.</li>
                  <li>Scale responsible access to large models and compute.</li>
                  <li>Support global builders in doing reproducible research.</li>
                </ul>
                <p>
                  Want to collaborate? Email <a href="mailto:exec@universetbd.org">exec@universetbd.org</a>
                  and we will co-design a program that matches your mission.
                </p>
                <div class="row mt-4 partner-row justify-content-center">
                  <div
                    v-for="partner in partners"
                    :key="partner.name"
                    class="col-6 col-md-4 text-center mb-3"
                  >
                    <div :class="['partner-tile', 'p-3', 'h-100', partner.tileClass]">
                      <img
                        :src="partner.logo"
                        class="partner-logo"
                        :alt="`${partner.name} logo`"
                      />
                      <p :class="['text-sm', 'mt-2', 'mb-0', partner.textClass || 'text-dark']">
                        {{ partner.program }}
                      </p>
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
  <DefaultFooter :show-support-row="false" />
</template>

<style scoped>
.text-sm {
  font-size: 0.9rem;
}

.partner-logo {
  max-width: 100%;
  max-height: 56px;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.35));
}

.partner-tile {
  border-radius: 0.85rem;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.85), rgba(241, 245, 249, 0.7));
  border: 1px solid rgba(15, 23, 42, 0.08);
}

.partner-tile--contrast {
  background: linear-gradient(145deg, rgba(3, 7, 18, 0.9), rgba(15, 23, 42, 0.7));
  border-color: rgba(255, 255, 255, 0.12);
}

.partner-tile--white {
  background: #ffffff;
  border-color: rgba(15, 23, 42, 0.12);
}

</style>
