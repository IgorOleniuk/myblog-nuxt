<template>
  <div class="container">
    <div
      v-for="photo in photoIds"
      :key="photo.id"
      class="mt-5"
    >
      <img :src="photo.media_url" style="height: 80%; width: 50%">
    </div>
    <a
      href="https://api.instagram.com/oauth/authorize/?client_id=650119452215599&redirect_uri=https://httpstat.us/200&scope=user_profile,user_media&response_type=code"
      target="_blank"
    >
      Authorize to Instagram
    </a>
  </div>
</template>

<script>
import axios from "axios";
// import 'instafeed' from 'instafeed.js';

export default {
  data () {
    return {
      photoIds: [],
      photos: [],
    }
  },

  mounted() {
    this.getPhotosIds();
  },

  methods: {
    getPhotosIds() {
      this.$axios.get('https://graph.instagram.com/17841404120211033/media?access_token=IGQVJVQlJiUTJ3VlV3VW9iNDRuMjUwV3Q1a2l1X2tWOUVnX2lpTU1sQTBaMVpSbm5QMTBYMzlSd25mcE5CcTA0UDdiU0ptcjZAIRDhweWNOTENoSlp5ckdYUFM3QnNwLUd0RkZAjTWJB&fields=id,timestamp,media_url').then((r) => {
        this.photoIds = r.data.data;
      })
    },

    getAccessToken() {
      this.$axios.post('https://api.instagram.com/oauth/access_token', {
        client_id: 650119452215599,
        client_secret: 'a8a8ada86be51319edc950f60a787e76',
        grant_type: 'authorization_code',
        redirect_uri: 'https://httpstat.us/200',
        code: 'AQAuO64PWz9RXTQNjYlsTwggJcc3sIGZ_0utp9il3DWyC_4Lm0UgnNcmjdkWVkaekQ5fiKSiFZydsxIVudgjF7YfLU213Ek329_PdUGD-rp6wVZcJ6Wayz-8V5fgO0RTFxeQzKHp36XOUztwtUpvx7KL4VEj7sqNbiFfwgxQO0ELbAEpWVrMJtZzLVNhed0ya-KZZCDyXdh9q0dyx9HdO2JJvhcuL9ahVG62Pykp5IvP5A'
      }).then((r) => {
        console.log(r);
      })
    }
  },
}
</script>


"access_token": "IGQVJXYks1aHVVTHh0LVFHdWJudEZAkSC1mdTZAvcklnYjl1b3Juc3E2SUFaTEJrNER5aXh5RlcwUUJKRGV2eUROTVhYb05YeWhDb2pnajR4bUVlU2lfckV1dTFJcC1CUE15a1B6QXJR",
"token_type": "bearer",
"expires_in": 5184000
"user_id": 17841404120211033
