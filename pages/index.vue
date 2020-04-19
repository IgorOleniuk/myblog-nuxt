<template>
  <div>
    <div class="hero">
      <div class="container">
        <h1>Welcome To my DevBlog</h1>
        <p class="subtitle">Lorem ipsum dolor sit amen,  consetetur sadipscing</p>
        <nuxt-link to="contact" class="hire">Hire me</nuxt-link>
      </div>
    </div>

    <div class="container">
      <main>
        <h2>Latest Thoughts</h2>
        <ul>
          <li v-for="(post, index) in posts" :key="index">
            <div class="img">
              <img :src="post.feature_image">
              <span>Igor Oleniuk</span>
            </div>
            <div class="content">
              <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
              <p>{{ post.excerpt }}</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
import { getPosts } from '~/api/posts';

export default {
  async asyncData () {
    const posts = await getPosts();
    return { posts: posts };
  }
}
</script>
