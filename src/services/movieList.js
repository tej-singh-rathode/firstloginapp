import axios from 'axios';

export const getMovieList = async () => {
    const res = await axios.get('https://ghibliapi.herokuapp.com/films');
    return res.data;
  };