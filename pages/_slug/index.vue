<template>
  <div class="container">
    <main class="single_main">
      <h1>{{ post.title }}</h1>
      <div class="content">
        <div v-html="post.html">
          {{ post.html }}
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { getSinglePost } from '~/api/posts';

export default {
  async asyncData ({params}) {
    const post = await getSinglePost(params.slug);
    return { post: post };
  }
}
</script>

<style lang="scss" scoped>

  h1 {
    color: #000000;
    margin: 1em 0;
  }

  .content {
    background: #ffffff;
    border-radius: 1em;
    padding: 1em;
  }

  .single_main {
    margin-top: 0;
  }

  .content img {
    width: 100%;
  }
</style>
