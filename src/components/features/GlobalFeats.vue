<template>
  <div>
    <h2>Global Feats</h2>
    <Table :get-items="getFeats" />
  </div>
</template>
<script>
import { Table } from '@/components/visual';
import { FeatApi } from '@/endpoints';
export default {
  name: 'GlobalFeats',
  components: {
    Table
  },
  data() {
    return {
      FeatApi
    };
  },
  methods: {
    async getFeats() {
      const { data } = await this.FeatApi.getAll();
      return data;
    }
  }
};
</script>
