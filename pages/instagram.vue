<template>
  <div class="container">
    <div
      v-for="photo in photoIds"
      :key="photo.id"
      class="mt-5"
    >
      <img
        v-if="photo.media_type === 'VIDEO'"
        :src="photo.thumbnail_url"
      >
      <img v-else :src="photo.media_url" style="height: 80%; width: 50%">
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
  export default {
  data () {
    return {
      photoIds: [],
      accessToken: '',
      userId: '',
    }
  },

  mounted() {
    this.getPhotosIds();
  },

  methods: {
    getPhotosIds() {
      this.$axios.get('http://pizzavel:8888/api/send-access-token')
        .then((res) => {
          this.accessToken = res.data.long_access_token;
          this.userId = res.data.user_id;

          this.$axios.get('https://graph.instagram.com/' + this.userId + '/media?access_token=' + this.accessToken + '&fields=id,media_type,media_url,thumbnail_url&limit=3')
            .then((r) => {
              console.log(r);
            this.photoIds = r.data.data;
          })
        })
    },
  },
}
</script>
