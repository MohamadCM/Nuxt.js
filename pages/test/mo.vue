<template>
    <v-card>
      <v-card-title>
        This is Mohamad
      </v-card-title>
      <v-card-actions>
        <v-btn color="primary" @click="gotoPage">go to rmyRoute</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
  import { getUser } from '../../utils/user'
    export default {
      data: function(){
        return{
          id: 1
        }
      },
      methods: {
          gotoPage: function () {
            //location.replace(`/*/${this.id}`);
            $nuxt.$router.push('/rmyRoute')
          }
      }
    }
</script>

<style scoped>

</style>
