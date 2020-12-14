<template>
  <v-app>
    <v-card class="mx-auto overflow-hidden">
      <v-system-bar color="deep-purple darken-3"></v-system-bar>
      <v-app-bar color="deep-purple accent-4" dark prominent>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title v-on:click="goToRoute('/')">Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title v-on:click="goToRoute('/patient/list')"
                >Patient List</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-card-text>
        <router-view></router-view>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
/* eslint-disable */

export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
    title: "Home Page",
  }),

  methods: {
    viewPatientList() {
      this.$router.push("/patient/list");
    },
    goToRoute(link) {
      this.$router.push(link);
    }
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
