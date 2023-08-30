<template>
  <section>
    <div class="page hero is-fullheight custom-background">
    <NavBar/>
      <div class="container">
        <div v-for="blog in blogs" :key="blog.id" class="card">
          <BlogCard :blog="blog"/>
        </div>
      </div>
  </div>
  <BottomPane/>

  </section>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import BottomPane from '@/components/BottomPane.vue';
import BlogCard from '@/components/BlogCard.vue';

export default {
  name: "ResearchIndexPage",
  components: {
    NavBar,
    BottomPane,
    BlogCard
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: 'Blog 1',
          date: 'June 1, 2023',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 2,
          title: 'Blog 2',
          date: 'June 5, 2023',
          content: 'Nulla facilisi. Donec euismod tortor sit amet diam congue varius.',
        }
        // Add more blogs as needed
      ],
    };
  },
};
</script>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

.custom-background {
  background-image: url("@/assets/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
}
@media screen and (max-width: 1200px) {
  .card {
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    margin-bottom: 1.5rem;
  }

  .card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
  .container{
    width: 95%;
  }
}
</style>
