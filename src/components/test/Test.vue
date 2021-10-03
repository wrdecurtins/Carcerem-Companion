<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="title">Title</label>
                <input
                    type="text"
                    class="form-control"
                    id="title"
                    required
                    v-model='test.title'
                    name="title"
                />
            </div>
            <div class="form-group">
                <label for="description">description</label>
                <input
                    class='form-control'
                    id='description'
                    required
                    v-model='test.description'
                    name='description'
                />
            </div>
            <button @click="saveTest" class="btn btn-success">Submit</button>
        </div>
        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newTest">Add</button>
        </div>
    </div>
</template>
<script>
import TestEnds from '@/endpoints/test';

export default {
    name: 'Test',
    data() {
        return {
            test: {
                id: null,
                title: '',
                description: '',
                published: false
            },
            submitted: false
        };
    },
    methods: {
        saveTest() {
            var data = {
                title: this.test.title,
                description: this.test.description
            };

            console.log(TestEnds);
            console.log(TestEnds.create);

            TestEnds.create(data)
                .then(response => {
                    this.test.id = response.data.id;
                    console.log(response.data.id);
                    this.submitted = true;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        newTest() {
            this.submitted = false;
            this.test = {};
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
