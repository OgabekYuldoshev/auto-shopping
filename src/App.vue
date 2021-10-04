<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue"
export default {
  components:{Navbar}
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>
