import axios from "axios";

const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

const Abouts = {
  list: () => requests.get("/about"),
  details: (id) => requests.get(`/about/${id}`),
  create: (ab) => axios.post("/about", ab),
  update: (ab) => axios.put(`/about/${ab.id}`, ab),
  delete: (id) => axios.delete(`/about/${id}`),
};

const ProfileA = {
  list: () => requests.get("/allergies"),
  details: (id) => requests.get(`/allergies/${id}`),
  create: (allergy) => axios.post(`/allergies`, allergy),
  update: (allergy) => axios.put(`/allergies/${allergy.id}`, allergy),
  delete: (id) => axios.delete(`/allergies/${id}`)
};

const agent = {
  Abouts, ProfileA
};

export default agent;
