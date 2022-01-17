<template>
  <v-app>
    <div id="app">
      <Toolbar />
      <router-view />
      <Navbar />
    </div>
  </v-app>
</template>
<script>
import {
  Navbar,
  Toolbar
} from '@/components';
export default {
  name: 'App',
  components: {
    Navbar,
    Toolbar
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
