<template>
  <div class="navbar">
    <v-bottom-navigation
      color="primary"
      fixed
    >
      <div
        v-for="item in NavbarItems"
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
import { NavbarItems } from '@/components/navigation/NavbarItems';
export default {
  name: 'Navbar',
  data() {
    return {
      NavbarItems
    };
  },
  methods: {
    navigate(args) {
      console.log(args);
      console.log(this.nav_select);
    }
  }
};
</script>
