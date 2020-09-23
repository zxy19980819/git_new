<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <button @click="add1">加一</button>
    <button>dev</button>
    {{count}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
    methods:{
     add1(){
         this.$store.commit('add1')
     }
    },
   computed:{
      count(){
          return this.$store.state.count
      }
   }
}
</script>
