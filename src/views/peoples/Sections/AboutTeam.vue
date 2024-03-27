<script setup>

import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";
import participants from "@/data/people.json";

</script>


<template>

  <section class="pb-0 position-relative bg-gradient-dark mx-n1">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            Main Participants
          </h3>
          <p class="text-white opacity-9 mb-0 font-italic">
            Alone we can do so little; together we can do so much.
          </p>
        </div>
      </div>


      <div v-for="(participant, index) in participants">
        <div class="row mt-4">
          <div class="col-lg-12 col-12">
            <HorizontalTeamCard
              class="mt-4 z-index-2"
              :image="participant.imageUrl"
              :profile="{ name: participant.name, link: participant.websiteUrl }"
              :position="{ label: participant.affiliation, color: 'success' }"
              :description="participant.bio"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  
</template>