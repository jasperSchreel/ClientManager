<template>
  <v-container>
    <ul>
  <li v-for="patient in patients" :key="patient.id">
    <patient-card :patient="patient"></patient-card>
  </li>
</ul>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import PatientCard from './PatientCard.vue'

export default {
  name: 'PatientList',
  components: {
    PatientCard
  },
  data () {
    return {
      test: 'hi',
      patientsPlaceholder: 
      [
        { id: 1, name: 'Mark', done: false },
        { id: 2, name: 'Isabelle', done: true },
        { id: 3, name: 'Louise', done: true },
        { id: 4, name: 'Dirk', done: false }
      ]
    }
  },
   computed: {
    ...mapState(['userProfile', 'patients'])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
