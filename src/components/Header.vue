<template>
  <v-app>

  </v-app>
</template>

<script>
/* eslint-disable */
// TODO breadcrumbs 

export default {
  name: "Header",
  data: () => ({
    drawer: false,
    group: null,
    title: "Home Page",
  }),
  mounted: function () {},
  methods: {
    viewPatientList() {
      this.$router.push("/patient/list");
    },
    goToRoute(link) {
      this.$router.push(link);
    },
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>