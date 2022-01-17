<template>
  <div>
    <router-view />
    <Navbar :navbar-items="NavbarItems" />
  </div>
</template>
<script>
import { Navbar, NavbarItems } from '@/components/navigation';
export default {
  name: 'CharacterBase',
  components: {
    Navbar
  },
  data() {
    return {
      NavbarItems
    };
  }
};
</script>
