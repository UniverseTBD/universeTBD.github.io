<template>
    <div class="card-content">
        <div class="media">
            <div class="media-content">
                <p class="title is-4">{{ blog.title }}</p>
                <p class="subtitle is-6">{{ blog.date }}</p>
            </div>
        </div>

        <div class="content">
              <p>{{ blog.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogCard",
    props: ['blog']
};
</script>

<style scoped>
.title {
  margin-bottom: 10px;
}

.subtitle {
  margin-top: 0;
}

.content {
  margin-top: 10px;
  color: #555;
}

.custom-background {
  background-image: url("../assets/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
}
.media-content {
  overflow-y: hidden;
}

.card {
  display: flex;
  align-items: center;
}
.media-content {
  flex: 1;
}

.title.is-4 {
  font-size: 24px;
  margin-bottom: 10px;
}
.subtitle.is-6 {
  font-size: 14px;
}

</style>