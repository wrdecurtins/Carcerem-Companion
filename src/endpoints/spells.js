import axios from '../axios';
export const SpellApi = {
  getAll() {
    return axios.get('/spell');
  }
};

export default SpellApi;
