import axios from 'axios';

const search = async (query) =>
  axios.get(`https://wger.de/api/v2/exercise/?language=2`);


export default { search };
