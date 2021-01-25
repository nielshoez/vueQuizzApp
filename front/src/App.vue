<template>
  <div id="app">
    <Quizz v-bind:quizz="quizz"/>
  </div>
</template>

<script>
import Quizz from './components/quizz'
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      quizz: []
    }
  },
  components: {
    Quizz
  },
  created() {
    axios.get('/api/quizz')
    .then(res => this.quizz = res.data)
    .catch(err=>{
      console.log(err)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
