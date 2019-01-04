import axios from 'axios';

const get = (url) => {
  return axios.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    })
};

export default {
  get,
}
