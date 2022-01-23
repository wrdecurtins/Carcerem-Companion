import axios from '../axios';
export const FeatApi = {
  getAll() {
    return axios.get('/feat');
  }
};

export default FeatApi;
