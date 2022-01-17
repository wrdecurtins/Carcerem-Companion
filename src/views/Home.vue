<template>
  <div>
    <h2 class="welcome-message">
      Welcome to Carcerem Companion
    </h2>
  </div>
</template>
<script>
export default {
  name: 'Home'
};
</script>
<style scoped>
.welcome-message {
  padding: 30px;
}

.welcome-message a {
  font-weight: bold;
  color: #2c3e50;
}

.welcome-message a.router-link-exact-active {
  color: #42b983;
}
</style>
