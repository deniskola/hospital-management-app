import axios from "axios";
import { stores } from "../stores/store";

const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.request.use((config) => {
  const token = stores.commonStore.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

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
  delete: (id) => axios.delete(`/allergies/${id}`),
};

const Appointments = {
  table: () => requests.get("/appointments"),
  details: (id) => requests.get(`/appointments/${id}`),
  create: (appointment) => axios.post("/appointments", appointment),
  update: (appointment) =>
    axios.put(`/appointments/${appointment.id}`, appointment),
  delete: (id) => axios.delete(`/appointments/${id}`),
};

const Account = {
  current: () => requests.get("/account"),
  login: (user) => requests.post("/account/login", user),
  register: (user) => requests.post("/account/register", user),
};

const Users = {
  list: () => requests.get("/user"),
  update: (user) => axios.put(`/user/${user.id}`, user),
  delete: (id) => axios.delete(`/user/${id}`),
  details: (id) => requests.get(`/user/${id}`),
};

const agent = {
  Abouts,
  Appointments,
  ProfileA,
  Account,
  Users,
};

export default agent;
