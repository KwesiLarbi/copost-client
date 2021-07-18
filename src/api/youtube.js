import axios from 'axios';

const YOUTUBE_API = process.env.REACT_APP_YOUTUBE_API;

export default axios.creates({
  baseURL: '',
  params: {
    part: 'snippet',
    maxresults: 1,
    key: YOUTUBE_API
  }
});
