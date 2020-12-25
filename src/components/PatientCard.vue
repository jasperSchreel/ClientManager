<template>
  <v-container>
    <v-card v-on:click="goToRoute(patient)" class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">PatientList</div>
          <v-list-item-title class="headline mb-1">
            {{ patient.name }}
          </v-list-item-title>
          <v-list-item-subtitle
            >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text> View Patient </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "PatientCard",
  props: {
    name: '',
    id: '',
    number: '',
    patient: {},
  },
  
  methods: {
    goToRoute(patient) {
      console.log(patient.name)
      console.log(patient.id)
      console.log(patient.number)
      //this.$router.push('/patient/detail/'+id);
    },
  },
};
</script>
