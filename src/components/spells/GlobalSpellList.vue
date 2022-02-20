<template>
  <div>
    <h2>Spells</h2>
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
      spellCellTemplates: spellCellTemplates ?? []
    };
  },
  methods: {
    getSpells() {
      return this.SpellApi.getAll();
    }
  }
};
</script>
