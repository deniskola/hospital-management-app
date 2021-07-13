import axios from "axios";
import {stores} from "../stores/store";

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

const PAllergy = {
  list: () => requests.get("/PAllergies"),
  details: (id) => requests.get(`/PAllergies/${id}`),
  create: (pAllergies) => axios.post(`/PAllergies`, pAllergies),
  update: (pAllergies) => axios.put(`/PAllergies/${pAllergies.id}`, pAllergies),
  delete: (id) => axios.delete(`/PAllergies/${id}`),
};

const BodyInfos = {
  list: () => requests.get("/BodyInfos"),
  details: (id) => requests.get(`/BodyInfos/${id}`),
  create: (bodyinfo) => axios.post(`/BodyInfos`, bodyinfo),
  update: (bodyinfo) => axios.put(`/BodyInfos/${bodyinfo.id}`, bodyinfo),
  delete: (id) => axios.delete(`/BodyInfos/${id}`),
};

const PatientHistories = {
  list: () => requests.get("/PatientHistory"),
  details: (id) => requests.get(`/PatientHistory/${id}`),
  create: (patientHistory) => axios.post(`/PatientHistory`, patientHistory),
  update: (patientHistory) =>
    axios.put(`/PatientHistory/${patientHistory.id}`, patientHistory),
  delete: (id) => axios.delete(`/PatientHistory/${id}`),
};

const LabTests = {
  list: () => requests.get("/LabTests"),
  details: (id) => requests.get(`/LabTests/${id}`),
  create: (labtest) => axios.post(`/LabTests`, labtest),
  update: (labtest) => axios.put(`/LabTests/${labtest.id}`, labtest),
  delete: (id) => axios.delete(`/LabTests/${id}`),
};

const Procedures = {
  list: () => requests.get("/Procedures"),
  details: (id) => requests.get(`/Procedures/${id}`),
  create: (procedure) => axios.post(`/Procedures`, procedure),
  update: (procedure) => axios.put(`/Procedures/${procedure.id}`, procedure),
  delete: (id) => axios.delete(`/Procedures/${id}`),
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

const HrDoctor = {
  list: () => requests.get("/doctor"),
  details: (id) => requests.get(`/doctor/${id}`),
  create: (appointment) => axios.post("/doctor", appointment),
  update: (appointment) => axios.put(`/doctor/${appointment.id}`, appointment),
  delete: (id) => axios.delete(`/doctor/${id}`),
};

const Countries = {
  list: () => requests.get("/countries"),
  details: (id) => requests.get(`/countries/${id}`),
  create: (country) => axios.post("/countries", country),
  update: (country) => axios.put(`/countries/${country.id}`, country),
  delete: (id) => axios.delete(`/countries/${id}`),
};

const WorkingHours = {
  list: () => requests.get("/workinghours"),
  details: (id) => requests.get(`/workinghours/${id}`),
  create: (workinghour) => requests.post("/workinghours", workinghour),
  update: (workinghour) => axios.put(`/workinghours/${workinghour.id}`, workinghour),
  delete: (id) => axios.delete(`/workinghours/${id}`),
};

const Achievements = {
  list: () => requests.get("/achievements"),
  details: (id) => requests.get(`/achievements/${id}`),
  create: (achievement) => requests.post("/achievements", achievement),
  update: (achievement) =>
    axios.put(`/achievements/${achievement.id}`, achievement),
  delete: (id) => axios.delete(`/achievements/${id}`),
};

const Cities = {
  list: () => requests.get("/cities"),
  details: (id) => requests.get(`/cities/${id}`),
  create: (city) => axios.post("/cities", city),
  update: (city) => axios.put(`/cities/${city.id}`, city),
  delete: (id) => axios.delete(`/cities/${id}`),
};

const Prescriptions = {
  list: () => requests.get("/prescriptions"),
  details: (id) => requests.get(`/prescriptions/${id}`),
  create: (prescription) => requests.post("/prescriptions", prescription),
  update: (prescription) => axios.put(`/prescriptions/${prescription.id}`, prescription),
  delete: (id) => axios.delete(`/prescriptions/${id}`),
}

const agent = {
  Abouts,
  Appointments,
  PAllergy,
  Account,
  Users,
  BodyInfos,
  PatientHistories,
  LabTests,
  Procedures,
  HrDoctor,
  Countries,
  WorkingHours,
  Achievements,
  Cities,
  Prescriptions,
};

export default agent;
