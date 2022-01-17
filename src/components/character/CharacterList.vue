<template>
  <div>
    <v-list>
      <v-list-item
        v-for="item in characters"
        :key="item.key"
        @click="click(item)"
      >
        {{ `${item.text}` }}
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  name: 'CharacterList',
  props: {
    characters: {
      type: Array,
      required: false,
      default: () => [
        { key: 'belittle', text: 'belittle' }
      ]
    }
  },
  methods: {
    click(item) {
      this.$emit('click', item);
    }
  }
};
</script>
