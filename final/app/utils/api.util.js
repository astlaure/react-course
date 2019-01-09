import axios from 'axios';

const get = url => axios.get(url)
  .then(response => response.data)
  .catch((err) => {
    throw err;
  });

export default {
  get,
};
