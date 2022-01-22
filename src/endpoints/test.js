import axios from '../axios';
class TestApi {
  getAll() {
    return axios.get('/');
  }

  get(id) {
    return axios.get(`/${id}`);
  }

  create(data) {
    console.log('tried create');
    return axios.post('/', data);
  }

  update(id, data) {
    return axios.put(`/${id}`, data);
  }

  delete(id) {
    return axios.delete(`/${id}`);
  }

  deleteAll() {
    return axios.delete('/');
  }

  findByTitle(title) {
    return axios.get(`/?title=${title}`);
  }
}

export default new TestApi();
