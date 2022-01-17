<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon @click="ToolMenu = !ToolMenu" />
      <v-menu
        offset-y
        nudge-right="10"
      >
        <template
          v-slot:activator="{on}"
        >
          <v-app-bar-nav-icon
            icon
            right
            fixed
            v-on="on"
          >
            <v-icon>
              mdi-menu
            </v-icon>
          </v-app-bar-nav-icon>
        </template>
        <CharacterList
          @click="characterSelected"
        />
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-model="ToolMenu"
      app
    >
      <v-list>
        <v-list-item
          v-for="item in ToolBarMenuItems"
          :key="item.key"
          :to="item.route"
        >
          {{ `${item.text}` }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { ToolBarMenuItems } from './ToolbarItems';
import { CharacterList } from '@/components/character';
export default {
  name: 'Toolbar',
  components: {
    CharacterList
  },
  data() {
    return {
      ToolBarMenuItems,
      ToolMenu: false
    };
  },
  methods: {
    characterSelected(item) {
      console.log(item);
      this.$router.push({ name: 'Stats' });
    }
  }
};
</script>
