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
  font-size: 64px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.custom-columns {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 0px;
}

.columns-container {
  background-color: none;
  border-radius: 10px;
}

.column-item {
  margin: 0 10px;
}

.column-item h2 {
  font-size: 36px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
}

.column-item ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.column-item ul li {
  margin-bottom: 5px;
  font-size: 24px;
}

.custom-li {
  color: #333
}

.column-item ul li:hover {
    text-decoration: underline;
}
@media screen and (max-width: 1200px) {
  .custom-columns{
    padding: 0 10px;
    display: block;
    .column-title{
      width: 100%;
    }
    .columns-container{
      width: 50%;
      float:left
    }
  }
  .column-title {
    font-size: 30px;
  }
  .column-item h2 {
    font-size: 25px;
  }
  .column-item ul li {
    margin-bottom: 5px;
    font-size: 18px;
  }
}
</style>
