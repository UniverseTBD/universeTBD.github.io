<script setup>
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import { useBodyClass } from "@/composables/useBodyClass";

useBodyClass(["about-us", "bg-gray-200"]);
</script>

<template>
  <DefaultNavbar transparent />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-100 parallax-bg"
      :style="{ backgroundImage: 'url(/background.webp)' }"
    >
      <span class="mask bg-gradient-dark opacity-3"></span>
      <div class="container">
        <div class="row justify-content-center align-items-center mt-4 mt-lg-6">
          <div class="col-12 col-lg-10 text-center mx-auto my-auto">
            <div class="card page-card blur shadow-blur mx-3 mx-md-5 my-4 my-md-5 text-dark text-start">
              <div class="card-body page-card-body">
                <section class="mb-4">
                  <h1 class="text-dark mb-4">What is UniverseTBD?</h1>
                  <p>
                    We are a global research lab with a bold mission to democratize science for <strong><em>everyone</em></strong>. We are on a quest to unlock the next major scientific breakthrough with Frontier AI by 2030. Our global team of astronomers, cross-disciplinary scientists, AI researchers, technologists, and artists conducts pioneering research and reimagines scientific practice to stay rigorous, creative, and radically open.
                  </p>
                  <div class="mt-1 mb-0">
                    <p>
                      We envision UTBD will be the blueprint for a new kind of international research lab: human-first
                      and AI-enabled, flexible, and democratically governed. We work in autonomous research pods to move fast and
                      stay transparent, and we keep our tools, data, and discoveries open from day one so anyone can participate
                      in discovery.
                    </p>
                    <p class="fw-bold text-uppercase text-secondary text-sm mb-2">Current directions</p>
                    <ul class="mb-3 ps-3">
                      <li><strong>Interpretability:</strong> understanding the inner workings of AI models.</li>
                      <li><strong>Collaborative AI:</strong> human-centric AI systems that co-discover with researchers.</li>
                      <li><strong>Blue Skies:</strong> misfit projects that stretch what’s possible.</li>
                      <li><strong>Research Tools:</strong> infrastructure that supports the scientific community.</li>
                    </ul>
                  <p>
                    <strong>Our values:</strong> Openness, Excellence with Purpose, Fearless Experimentation, Junior Leadership,
                    Transparency & Integrity.
                  </p>
                    <p class="mb-0">
                      <strong>Leadership:</strong> Ioana (Jo) Ciucă (Stanford University), Maja Jablonska (Australian National
                      University), Mugdha Polimera (NASA ADS), Mike Smith (Harvard / Center for Astrophysics), Pranav Khetarpal
                      (IIT Delhi), Sandor Kruk (European Space Agency), Gabi Marchidan (FeelIT), and Kartheik Iyer (Flatiron CCA)
                      keep the spaceship healthy and aligned with open-source, community-led projects.
                    </p>
                    <p class="mt-2 mb-1">
                      <strong>Our Story:</strong> In March 2023, a conference on data-driven astronomy at the Kavli Institute for
                      Theoretical Physics brought together researchers with diverse perspectives, including founders Ioana Ciucă
                      and Kartheik Iyer. Jo dove into the fast-moving frontier of large language models, visiting San Francisco
                      to meet model developers and explore how these tools could reshape scientific work.
                    </p>
                    <p>
                      Weeks later, over late-morning coffee at the Center for Computational Astrophysics (Flatiron Institute), Jo
                      and Kartheik committed to building a community that develops foundational models and methods to help humans
                      learn, explore, and generate new ideas—augmented by AI. Kartheik named it <strong>UniverseTBD</strong> to
                      reflect a universe shaped by change. UTBD launched in April 2023.
                    </p>
                    <p class="mb-0">
                      We thank <strong>Ze-chang Sun (Tsinghua University)</strong>, the original creator and designer of this
                      website.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <DefaultFooter />
</template>
