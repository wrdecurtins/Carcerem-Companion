<template>
  <div>
    <v-simple-table>
      <thead>
        <th>Action</th>
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
          <td>
            <v-btn
              color="primary"
              elevation="2"
              @click="deleteItem(test.id)"
            >
              delete
            </v-btn>
          </td>
          <td>{{ test.title }}</td>
          <td>{{ test.description }}</td>
          <td>{{ test.published }}</td>
          <td>{{ test.createdAt }}</td>
          <td>{{ test.updatedAt }}</td>
        </tr>
      </tbody>
    </v-simple-table>

    <div v-if="!submitted">
      <v-text-field
        v-model="submitTest.title"
        class="w-50 mx-auto"
        label="Title"
        required
      />
      <v-text-field
        v-model="submitTest.description"
        class="w-50 mx-auto"
        label="Description"
        required
      />
      <v-btn
        color="primary"
        @click="saveTest"
      >
        Submit
      </v-btn>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <v-btn
        elevation="2"
        color="primary"
        @click="newTest"
      >
        Add
      </v-btn>
    </div>
  </div>
</template>
<script>
import TestEnds from '@/endpoints/test';

export default {
    name: 'TestList',
    data() {
        return {
            submitTest: {
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
                title: this.submitTest.title,
                description: this.submitTest.description
            };

            await TestEnds.create(data)
                .then(response => {
                    this.submitTest.id = response.data.id;
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
            this.submitTest = {};
        },
        async useTestList() {
            await TestEnds.getAll()
                .then(res => {
                    this.tests = res.data;
                });
        },
        deleteItem(id) {
            TestEnds.delete(id)
                .then(res => {
                    this.useTestList();
                });
        }
    }
};
</script>
<style scoped>
.submit-form {
    max-width: 330px;
    margin: auto;
}
</style>
