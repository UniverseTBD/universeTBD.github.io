<script setup>

import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";
import participants from "@/data/people.json";

function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

let participants_shuf = shuffle(participants);

</script>


<template>

  <section class="pb-0 position-relative bg-gradient-dark mx-n1">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <p class="text-white opacity-9 mb-0 font-italic">
            Alone we can do so little; together we can do so much.
          </p>
        </div>
      </div>


      <div v-for="(participant, index) in participants_shuf">
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
