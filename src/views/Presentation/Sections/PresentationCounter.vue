<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Community"
                description="Scientists, technologists, and artists co-create UniverseTBD in a bustling marketplace of ideas."
                :start="150"
                :count="200"
                suffix="+"
                :duration="2000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Mission"
                description="Democratizing science as we blueprint the research lab of the future—humans with AI, open by design."
                :start="2023"
                :count="2030"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Milestones"
                description="We’ve shipped 10+ AI for Science projects and community tools, each advancing open discovery."
                :count="10"
                suffix="+"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
