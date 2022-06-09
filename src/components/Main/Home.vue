<template>
<v-layout v-if="!isUserLoggedIn" row align-center justify-center>
      <v-flex xs10 sm7 md5>
          <v-card>
                <v-card-title justify-center class="mr-3">
                  <h2 v-text="`${msg}`"></h2>
                </v-card-title>
          </v-card>
    </v-flex>
</v-layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      msg: "Dashboard",
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  }
};
</script>

<style scoped>
</style>
