const API_KEY = 'b4fc09155cbf6393b8bec5a42afae2a0';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMoviesOrTvInfo = async (endpoint) => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

const getHomePageList = async () => {
  return [
    {
      slug: 'movie-originals',
      title: 'Filmes populares na Netflix',
      list: await fetchMoviesOrTvInfo(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_watch_providers=8&watch_region=BR&sort_by=popularity.desc&language=pt-BR`),
    },
    {
      slug: 'series-originals',
      title: 'Séries populares na Netflix',
      list: await fetchMoviesOrTvInfo(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_watch_providers=8&watch_region=BR&sort_by=popularity.desc&language=pt-BR`),
    },
    {
      slug: 'trending',
      title: 'Em alta',
      list: await fetchMoviesOrTvInfo(`${BASE_URL}/trending/all/day?api_key=${API_KEY}&with_watch_providers=8&watch_region=BR&sort_by=popularity.desc&language=pt-BR`),
    },
    
  ]
}

export default getHomePageList;
