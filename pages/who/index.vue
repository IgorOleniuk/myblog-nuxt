<template>
  <div class="container">
    <main class="single_main">
      <h1>{{ page.title }}</h1>
      <div class="content">
        <div v-html="page.html">
          {{ page.html }}
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { getPage } from '~/api/posts';

export default {
  async asyncData () {
    const page = await getPage('who-am-i');
    return { page: page };
  },

  head () {
    return {
      title: this.page.meta_title,
      meta: [
        { hid: 'description', name: 'description', content: this.page.meta_description }
      ]
    }
  }
}
</script>

<style scoped>

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
