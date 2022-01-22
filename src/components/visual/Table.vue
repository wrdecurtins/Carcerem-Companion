<template>
  <div>
    <v-data-table
      :items="items"
      :headers="headers"
    />
  </div>
</template>
<script>
export default {
  name: 'Table',
  props: {
    items: { type: Array, required: false, default: () => [] },
    headers: { type: Array, required: false, default: () => [] }
  }
};
</script>
