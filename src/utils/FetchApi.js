import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {

  params: {
    maxResults : '50'
  },
  headers: {
    'X-RapidAPI-Key': '7e1757b3eamsh49c1cbdb8f4b8dfp139082jsn5fcbec216704',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};





