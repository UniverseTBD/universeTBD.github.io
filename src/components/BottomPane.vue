<template>
    <div class="custom-columns">
      <h2 class="column-title">UniverseTBD</h2>
      <b-columns class="columns-container">
        <b-column class="column-item">
          <h2>Research</h2>
          <ul>
            <li><router-link to="/home/research_overview" class="custom-li">Overview</router-link></li>
            <li><router-link to="/home/research_index" class="custom-li">Index</router-link></li>
          </ul>
        </b-column>
      </b-columns>
      <b-columns class="columns-container">
        <b-column class="column-item">
          <h2>Product</h2>
          <ul>
            <li><router-link to="/home/product_overview" class="custom-li">Overview</router-link></li>
            <li><router-link to="/home/astrollama" class="custom-li">AstroLLaMA</router-link></li>
            <li><router-link to="/home/hypothesis" class="custom-li">Hypothesis Generation</router-link></li>
            <li><router-link to="/home/embedding" class="custom-li">ArXiv Embedding</router-link></li>
          </ul>
        </b-column>
      </b-columns>
      <b-columns class="columns-container">
        <b-column class="column-item">
          <h2>People</h2>
          <ul>
            <li><router-link to="/home/participants" class="custom-li">Participants</router-link></li>
            <li><router-link to="/home/joinus" class="custom-li">Join Us</router-link></li>
          </ul>
        </b-column>
      </b-columns>
      <b-columns class="columns-container">
        <b-column class="column-item">
          <h2>About</h2>
          <ul>
            <li><router-link to="/home/about_overview" class="custom-li">Overview</router-link></li>
            <li><router-link to="/home/about_sponsor" class="custom-li">Sponsor</router-link></li>
          </ul>
        </b-column>
      </b-columns>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.column-title {
  text-align: left;
  margin-top: 0px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 900;
  color: #333;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.custom-columns {
  display: block;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 0px;
  padding: 0 10px;
}

.columns-container {
  background-color: none;
  border-radius: 10px;
  width: 25%;
  float:left
}

.column-item {
  margin: 0px 0px;
}

.column-item h2 {
  font-size: 16px;
  font-weight: bold;
  color: #000;
}

.column-item ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.column-item ul li {
  font-size: 14px;
}

.custom-li {
  color: #333
}

.column-item ul li:hover {
    text-decoration: underline;
}

</style>
