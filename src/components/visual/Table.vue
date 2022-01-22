<template>
  <div>
    <v-data-table
      :items="tableData"
      :headers="headers"
    >
      <template
        v-for="tplate in cellTemplates"
        :slot="`item.${[tplate.name]}`"
        slot-scope="item"
      >
        {{ tplate.display(item.value) }}
      </template>
      <template
        v-for="(index, name) in $scopedSlots"
        :slot="name"
        slot-scope="data"
      >
        <slot
          :name="name"
          v-bind="data"
        />
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  name: 'Table',
  props: {
    items: { type: Array, required: false, default: () => [] },
    headers: { type: Array, required: false, default: () => [] },
    getItems: { type: Function, required: false, default: () => [] },
    cellTemplates: { type: Array, required: false, default: () => [] }
  },
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.getItems().then(res => { this.tableData = res; });
  }
};
</script>
