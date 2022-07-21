// const API_KEY = "2e168b3b879ec814fa52ec1be986b659";
const API_KEY = process.env.REACT_APP_TMDB_KEY;

const requests = {
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchContinueWatch: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchAgenda: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopIndonesian: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchWatchAgain: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchMyList: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
};

// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
// }

export default requests;
