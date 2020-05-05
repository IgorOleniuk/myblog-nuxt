<template>
  <div class="container">
    <client-only>
      <vue-instagram userId="17841404120211033" token="IGQVJVQlJiUTJ3VlV3VW9iNDRuMjUwV3Q1a2l1X2tWOUVnX2lpTU1sQTBaMVpSbm5QMTBYMzlSd25mcE5CcTA0UDdiU0ptcjZAIRDhweWNOTENoSlp5ckdYUFM3QnNwLUd0RkZAjTWJB" :count="3" mediaType="image">
        <template slot="feeds" slot-scope="props">
          <li class="fancy-list"> {{ props.feed.link }} </li>
        </template>
        <template slot="error" slot-scope="props">
          <div class="fancy-alert"> {{ props.error.error_message }} </div>
        </template>
      </vue-instagram>
    </client-only>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>
