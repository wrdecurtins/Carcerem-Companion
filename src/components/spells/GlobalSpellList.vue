<template>
  <div>
    <h2>Global Spells</h2>
    <Table
      :headers="spellHeaders"
      :get-items="getSpells"
      :cell-templates="spellCellTemplates"
    />
  </div>
</template>
<script>
import { SpellApi } from '@/endpoints';
import { spellHeaders, spellCellTemplates } from '@/components/spells';
import { Table } from '@/components';
export default {
  name: 'GlobalSpellList',
  components: {
    Table
  },
  data() {
    return {
      SpellApi,
      spellHeaders: spellHeaders ?? [],
      spellCellTemplates: spellCellTemplates ?? [],
      spells: []
    };
  },
  methods: {
    async getSpells() {
      const { data } = await this.SpellApi.getAll();
      return data;
    }
  }
};
</script>
