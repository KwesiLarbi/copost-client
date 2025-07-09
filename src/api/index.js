import axios from 'axios';

// const API = axios.create({ baseURL: 'https://copost-server.herokuapp.com/' }) || 'http://localhost:5000';
const API = axios.create({ baseURL: 'http://localhost:5000' })
const COVID_API = process.env.REACT_APP_COVID_API || '';

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts/new-post', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/update-post/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/update-post/${id}`);
export const likePost = (id) => API.patch(`posts/${id}/likePost`);

// Drawing from server for sign in/up functionality
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

// Fetch COVID-19 country data
export const fetchData = async (country) => {
  let url = COVID_API;

  if (country) url = `${COVID_API}/countries/${country}`;

  try {
    // Destructure data to get confirmed, recovered, deaths, and lastUpdate
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate }

  } catch (error) {
    console.log(error);
  }
};

// Fetch daily data
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${COVID_API}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total, 
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

// Fetch list of countries
export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${COVID_API}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};