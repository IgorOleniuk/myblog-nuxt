<script>
  /* eslint-disable */
  export default {
    data () {
      return {
        jitsi: false,
      };
    },

    methods: {
      connectToJitsi () {
        const domain = 'meet.jit.si';
        const options = {
          roomName: 'IgoraRoomTest',
          width: 700,
          height: 500,
          parentNode: document.querySelector('#meet'),
        };
        const api = new JitsiMeetExternalAPI(domain, options);
        console.log('good');
        this.jitsi = true;
      },
    },
  };
</script>

<template>
  <div class="container text-center mt-3">
    <h1>Jitsi in nuxt</h1>
    <button
      class="btn btn-primary"
      @click="connectToJitsi"
    >
      Open room
    </button>
    <div
      id="meet"
      class="mt-5"
    >
    </div>
    <button
      v-if="jitsi"
      type="button"
      class="close"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>
