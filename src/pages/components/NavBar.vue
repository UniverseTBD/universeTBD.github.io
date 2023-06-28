<!--
Navigation Bar Component
-->

<template>
    <b-navbar type="is-dark" class="custom-navbar" transparent=true>
      <template slot="brand">
        <img src="../assets/icon.png" alt="Logo" class="logo">
        <b-navbar-item tag="router-link" :to="{ name: 'home' }">
          <span class="logo-text">UniverseTBD</span>
        </b-navbar-item>
      </template>


      <template #start>
        <b-navbar-dropdown label="Product" class="custom-dropdown" transparent=true hoverable=true>
            <div>
            <b-navbar-item class="navbar-element" tag="router-link" :to="{ name: 'product_overview' }">
                Overview
            </b-navbar-item>
            <hr class="navbar-divider">
            <b-navbar-item class="navbar-element" tag="router-link" :to="{ name: 'dailyarxiv' }">
                Daily ArXiv
            </b-navbar-item>
            <b-navbar-item class="navbar-element" tag="router-link" :to="{ name: 'hypothesis' }">
                Hypothesis Generation
            </b-navbar-item>
            <b-navbar-item class="navbar-element" tag="router-link" :to="{ name: 'embedding' }">
                ArXiv Embedding
            </b-navbar-item>
            </div>
        </b-navbar-dropdown>

        <b-navbar-dropdown label="Research" class="custom-dropdown" transparent=true hoverable=true>
            <b-navbar-item class="navbar-element custom-color" tag="router-link" :to="{ name: 'research_overview' }">
                Overview
            </b-navbar-item>
            <b-navbar-item class="navbar-element" tag="router-link" :to="{ name: 'research_index' }">
                Index
            </b-navbar-item>
        </b-navbar-dropdown>
        
        <b-navbar-dropdown label="People" class="custom-dropdown" transparent=true hoverable=true>
            <b-navbar-item class="navbar-element" tag="router-link" :to="{ name: 'participants' }">
                Participants
            </b-navbar-item>
            <b-navbar-item class="navbar-element" tag="router-link" :to="{ name: 'joinus' }">
                Join Us
            </b-navbar-item>
        </b-navbar-dropdown>

        <b-navbar-dropdown label="About" class="custom-dropdown" transparent=true hoverable=true>
            <b-navbar-item class="navbar-element" tag="router-link" :to="{ name: 'about_overview' }">
                Overview
            </b-navbar-item>
            <b-navbar-item class="navbar-element" tag="router-link" :to="{ name: 'about_sponsor' }">
                Sponsor
            </b-navbar-item>
        </b-navbar-dropdown>
      </template>
      <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button custom-button">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button custom-button">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
      </template>
    </b-navbar>
</template>
  
<script>
  export default {
  };
</script>
  
<style scoped lang="scss">
@import "~bulma";
@import "~buefy/src/scss/buefy";



.custom-navbar {
  font-size: 36px;
}

.logo {
  height: 90px;
  width: auto;
}

.logo-text {
  font-size: 40px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.custom-dropdown {
  background: none;
  font-size: 36px;
  font-weight: bold;
}

.custom-dropdown .navbar-link {
  background: transparent; /* Set background to transparent for dropdown label */
}

.custom-dropdown .navbar-dropdown {
  background: transparent; /* Set background to transparent for dropdown items */
}

.navbar-element {
    font-size: 28px;
    font-weight: normal;
    color: #333;
}

.navbar-element:hover {
  text-decoration: underline;
}

.custom-button {
  background: none;
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  text-align: right;
  display: flex;
  justify-content: flex-end;
}

.buttons {
  display: flex;
  justify-content: flex-start;
}
</style>
