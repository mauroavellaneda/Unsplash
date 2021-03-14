import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = `https://api.unsplash.com`;
const COUNT = 10;
const URL = `${BASE_URL}/photos/random/?client_id=${API_KEY}&count=${COUNT}`;

const fetchData = async () => {
  const response = await axios.get(URL);
  return response;
};

export default fetchData;
