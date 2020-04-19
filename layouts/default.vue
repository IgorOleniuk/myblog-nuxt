<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import '@/assets/main.scss';
import Header from '../components/Header.vue';

export default {
  components: {
    Header
  }
}
</script>

