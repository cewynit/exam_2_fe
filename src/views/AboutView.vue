<template>
  <v-app>
    <Header />
    <!-- <v-main>
      <v-container class="py-3 px-6">
        <router-view />
      </v-container>
    </v-main> -->
  </v-app>
</template>
<script>
import Header from "@/components/Admin/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
</style>