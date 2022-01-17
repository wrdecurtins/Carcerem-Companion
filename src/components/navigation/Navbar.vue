<template>
  <div class="navbar">
    <v-bottom-navigation
      color="primary"
      fixed
    >
      <div
        v-for="item in navbarItems"
        :key="item.key"
      >
        <v-btn :to="item.route">
          <v-icon>
            {{ `${item.icon}` }}
          </v-icon>
        </v-btn>
      </div>
    </v-bottom-navigation>
  </div>
</template>
<script lang="js">
export default {
  name: 'Navbar',
  props: {
    navbarItems: { type: Array, required: false, default: () => [] }
  }
};
</script>
