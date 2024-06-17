<template>
  <nav>
    <router-link to="/login">Home</router-link> |
    <router-link to="/register">About</router-link>
  </nav>
  <!-- <log-in-vue /> -->
  <router-view/>
</template>
<script>
// import LogInVue from "./components/Auth/LogIn.vue";
export default {
  components: {
    // LogInVue,
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
