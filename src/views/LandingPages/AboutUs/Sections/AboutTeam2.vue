<script setup>

import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard2.vue";
import participants from "@/data/people.json";

</script>


<template>

  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            Main Participants
          </h3>
          <p class="text-white opacity-8 mb-0">
            We choose to go to the moon. We choose to go to the moon in this
            decade and do the other things, not because they are easy, but
            because they are hard, because that goal will serve to organize and
            measure the best of our energies and skills, because that challenge
            is one that we are willing to accept, one we are unwilling to
            postpone, and one which we intend to win, and the others, too.
          </p>
        </div>
      </div>


      <div v-for="(participant, index) in participants">
        <div v-if="index % 2 === 0 && index + 1 < participants.length">
          <div class="row mt-4">
            <div class="col-lg-6 col-12">
              <HorizontalTeamCard
                class="mt-4 z-index-2"
                :image="participant.imageUrl"
                :profile="{ name: participant.name, link: participant.websiteUrl }"
                :position="{ label: participant.affiliation, color: 'success' }"
                :description="participant.bio"
              />
            </div>
            <div class="col-lg-6 col-12">
              <HorizontalTeamCard
                class="mt-4 z-index-2"
                :image="participants[index + 1].imageUrl"
                :profile="{ name: participants[index + 1].name, link: participants[index + 1].websiteUrl }"
                :position="{ label: participants[index + 1].affiliation, color: 'success' }"
                :description="participants[index + 1].bio"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-if="participants.length % 2 ==1">
        <div class="row mt-4">
          <div class="col-lg-6 col-12">
            <HorizontalTeamCard
              class="mt-4 z-index-2"
              :image="participants[participants.length - 1].imageUrl"
              :profile="{ name: participants[participants.length - 1].name, 
                link: participants[participants.length - 1].websiteUrl }"
              :position="{ label: participants[participants.length - 1].affiliation, color: 'success' }"
              :description="participants[participants.length - 1].bio"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
