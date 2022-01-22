<template>
  <div>
    <h2>Global Spells</h2>
    <Table
      :headers="spellHeaders"
      :items="spells"
    />
  </div>
</template>
<script>
import { SpellApi } from '@/endpoints';
import { spellHeaders } from '@/components/spells';
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
      spells: []
    };
  },
  mounted() {
    this.getSpells();
  },
  methods: {
    getSpells() {
      this.SpellApi.getAll().then((res) => {
        this.spells = res?.data;
      });
    }
  }
};
</script>
