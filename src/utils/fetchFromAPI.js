import Axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'x-rapidapi-key': '124708ed13msh83a39316370e35ap13b20cjsnc87ca750ce38',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await Axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
