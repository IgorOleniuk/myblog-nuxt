<template>
  <div class="container">
    <main class="single_main">
      <div class="content">
        <h2>Here will be short history about myself soon...</h2>
      </div>
    </main>
  </div>
</template>

<script>
/* import { getPage } from '~/api/posts';

export default {
  async asyncData () {
    const page = await getPage('who-am-i');
    return { page: page };
  },

  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: this.page.meta_description }
      ]
    }
  }
} */
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
