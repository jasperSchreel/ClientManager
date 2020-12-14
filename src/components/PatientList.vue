<template>
  <v-container>
    <ul>
  <li v-for="item in patients" :key="item.label">
    <patient-card :label="item.label" :id="item.id"></patient-card>
  </li>
</ul>
  </v-container>
</template>

<script>
import PatientCard from './PatientCard.vue'

export default {
  name: 'PatientList',
  data () {
    return {
      test: 'hi',
      patients: [
        { id: 1, label: 'Mark', done: false },
        { id: 2, label: 'Isabelle', done: true },
        { id: 3, label: 'Luoise', done: true },
        { id: 4, label: 'Dirk', done: false }
      ]
    }
  },
  components: {
    PatientCard
  }
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
