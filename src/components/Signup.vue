<template>
  <v-container>
    <form>
      <v-text-field
        v-model="name"
        label="Name"
        placeholder="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        label="Password"
        placeholder="******"
        required
      ></v-text-field>

      <v-btn class="mr-4" @click="signup"> signup </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </v-container>
</template>

<script>
import { required, password, name } from "vuelidate/lib/validators";

export default {
  validations: {
    name: { required },
    password: { required, password },
  },

  data: () => ({
    name: "",
    password: "",
  }),

  computed: {},

  methods: {
    signup() {
      this.$store.dispatch("signup", {
        name: this.name,
        password: this.password,
      });
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.password = "";
    },
  },
};
</script>
