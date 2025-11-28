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
                description="Scientists, AI researchers, and artists co-create UniverseTBD in a global, open-source collective."
                :start="150"
                :count="200"
                suffix="+"
                :duration="1500"
                divider="vertical"
                customColor="#3949AB"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Moonshot"
                description="Building the lab of the future where humans and machines unlock the next scientific breakthrough."
                :start="2023"
                :count="2030"
                :duration="1500"
                divider="vertical"
                customColor="#3949AB"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Milestones"
                description="From NeurIPS spotlights to open benchmarks, we've shipped projects that actively advance open science."
                :count="10"
                suffix="+"
                :duration="1500"
                customColor="#3949AB"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
