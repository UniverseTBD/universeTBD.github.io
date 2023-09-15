<template>
  <div class="card-content">
      <div class="media">
          <div class="media-content">
              <p class="title">{{ blog.title }}</p>
              <p class="subtitle">{{ blog.authors }}</p>
              <p class="date">{{ blog.date }}</p>
          </div>
      </div>

      <div class="content">
          <p>{{ blog.content }}</p>
          <a @click="goToArxiv" class="arxiv-button">View on arXiv</a>
      </div>
  </div>
</template>

<script>
export default {
    name: "BlogCard",
    props: ['blog'],
    methods: {
        goToArxiv() {
            if (this.blog.arxivId) {
                window.open(`https://arxiv.org/abs/${this.blog.arxivId}`, '_blank');
            }
        }
    }
};
</script>

<style scoped>
.card-content {
  width: 80%;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;  
}


.title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.subtitle, .arxiv-id, .date {
  margin-top: 0.1rem;
  color: #666;
}

.content {
  margin-top: 1rem;
  color: #555;
}

.arxiv-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: white;
  color: white;
  border-radius: 0.25rem;
  cursor: pointer;
  text-decoration: none;
}

.arxiv-button:hover {
  background-color: #0056b3;
}
