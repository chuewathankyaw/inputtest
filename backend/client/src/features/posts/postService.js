import axios from "axios";

const API_URL = "http://localhost:8800/api/post/";

const createService = async (data) => {
  const result = await axios.post(API_URL, data);
  return result.data;
};

const getService = async () => {
  const result = await axios.get(API_URL);
  return result.data;
};

const postService = {
  createService,
  getService,
};

export default postService;
