export const API_KEY = 'b4fc09155cbf6393b8bec5a42afae2a0';
export const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMulti = async (query) => {
  const endpoint = `${BASE_URL}/search/multi?api_key=${API_KEY}&language=pt-BR&query=${query}&region=BR`
  const data = await fetchMoviesOrTvInfo(endpoint);
  return data;
}

export const fetchMoviesOrTvInfo = async (endpoint) => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

export const getHomePageList = async () => {
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
      list: await fetchMoviesOrTvInfo(`${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=pt-BR`),
    },
    {
      slug: 'drama-series',
      title: 'Séries drámaticas para maratonar',
      list: await fetchMoviesOrTvInfo(`${BASE_URL}/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=18&with_watch_providers=8&watch_region=BR&sort_by=popularity.desc`),
    },
    {
      slug: 'scifi-movies',
      title: 'Geek',
      list: await fetchMoviesOrTvInfo(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=878&with_watch_providers=8&watch_region=BR&sort_by=popularity.desc`),
    },
    {
      slug: 'comedy-series',
      title: 'Séries de humor refinado',
      list: await fetchMoviesOrTvInfo(`${BASE_URL}/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=35&with_watch_providers=8&watch_region=BR&sort_by=popularity.desc`),
    }
  ]
}
//ID de filmes
// 0: {id: 28, name: "Ação"}
// 1: {id: 12, name: "Aventura"}
// 2: {id: 16, name: "Animação"}
// 3: {id: 35, name: "Comédia"}
// 4: {id: 80, name: "Crime"}
// 5: {id: 99, name: "Documentário"}
// 6: {id: 18, name: "Drama"}
// 7: {id: 10751, name: "Família"}
// 8: {id: 14, name: "Fantasia"}
// 9: {id: 36, name: "História"}
// 10: {id: 27, name: "Terror"}
// 11: {id: 10402, name: "Música"}
// 12: {id: 9648, name: "Mistério"}
// 13: {id: 10749, name: "Romance"}
// 14: {id: 878, name: "Ficção científica"}
// 15: {id: 10770, name: "Cinema TV"}
// 16: {id: 53, name: "Thriller"}
// 17: {id: 10752, name: "Guerra"}
// 18: {id: 37, name: "Faroeste"}

//ID de series
// "genres": [
//   {
//     "id": 10759,
//     "name": "Action & Adventure"
//   },
//   {
//     "id": 16,
//     "name": "Animação"
//   },
//   {
//     "id": 35,
//     "name": "Comédia"
//   },
//   {
//     "id": 80,
//     "name": "Crime"
//   },
//   {
//     "id": 99,
//     "name": "Documentário"
//   },
//   {
//     "id": 18,
//     "name": "Drama"
//   },
//   {
//     "id": 10751,
//     "name": "Família"
//   },
//   {
//     "id": 10762,
//     "name": "Kids"
//   },
//   {
//     "id": 9648,
//     "name": "Mistério"
//   },
//   {
//     "id": 10763,
//     "name": "News"
//   },
//   {
//     "id": 10764,
//     "name": "Reality"
//   },
//   {
//     "id": 10765,
//     "name": "Sci-Fi & Fantasy"
//   },
//   {
//     "id": 10766,
//     "name": "Soap"
//   },
//   {
//     "id": 10767,
//     "name": "Talk"
//   },
//   {
//     "id": 10768,
//     "name": "War & Politics"
//   },
//   {
//     "id": 37,
//     "name": "Faroeste"
//   }
// ]
