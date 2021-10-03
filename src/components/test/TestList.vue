<template>
  <div>
    <v-simple-table>
      <thead>
        <th>Title</th>
        <th>Description</th>
        <th>Published</th>
        <th>Created On</th>
        <th>Updated On</th>
      </thead>
      <tbody v-if="tests != []">
        <tr
          v-for="test in tests"
          :key="test.id"
        >
          <td>{{ test.title }}</td>
          <td>{{ test.description }}</td>
          <td>{{ test.published }}</td>
          <td>{{ test.createdAt }}</td>
          <td>{{ test.updatedAt }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            id="title"
            v-model="test.title"
            type="text"
            class="form-control"
            required
            name="title"
          >
        </div>
        <div class="form-group">
          <label for="description">description</label>
          <input
            id="description"
            v-model="test.description"
            class="form-control"
            required
            name="description"
          >
        </div>
        <button
          class="btn btn-success"
          @click="saveTest"
        >
          Submit
        </button>
      </div>
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button
          class="btn btn-success"
          @click="newTest"
        >
          Add
        </button>
        <v-btn
          elevation="2"
        />
      </div>
    </div>
  </div>
</template>
<script>
import TestEnds from '@/endpoints/test';

export default {
    name: 'TestList',
    data() {
        return {
            test: {
                id: null,
                title: '',
                description: '',
                published: false
            },
            submitted: false,
            tests: []
        };
    },
    mounted() {
        this.useTestList();
    },
    methods: {
        async saveTest() {
            var data = {
                title: this.test.title,
                description: this.test.description
            };

            await TestEnds.create(data)
                .then(response => {
                    this.test.id = response.data.id;
                    console.log(response.data.id);
                    this.submitted = true;
                })
                .catch(error => {
                    console.log(error);
                });
            this.useTestList();
        },
        newTest() {
            this.submitted = false;
            this.test = {};
        },
        async useTestList() {
            await TestEnds.getAll()
                .then(res => {
                    this.tests = res.data;
                });
        }
    }
};
</script>
<style>
.submit-form {
    max-width: 330px;
    margin: auto;
}
</style>
