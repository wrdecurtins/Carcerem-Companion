<template>
  <div>
    <h2>Feats</h2>
    <Table
      :headers="featHeaders"
      :get-items="getFeats"
      :cell-templates="featCellTemplates"
    />
  </div>
</template>
<script>
import { Table } from '@/components/visual';
import { FeatApi } from '@/endpoints';
import { featHeaders, featCellTemplates } from './table';
export default {
  name: 'GlobalFeats',
  components: {
    Table
  },
  data() {
    return {
      FeatApi,
      featHeaders,
      featCellTemplates
    };
  },
  methods: {
    getFeats() {
      return this.FeatApi.getAll();
    }
  }
};
</script>
