<template>
  <v-layout>
    <v-flex text-xs-center>
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <v-text-field outline label="Name" value="MohamadCM" disabled></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        default: 10
      }
    },
    mounted() {
      console.log(this.id);
    }
  }
</script>
