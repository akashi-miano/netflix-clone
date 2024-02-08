const key = "1c1b89f349d18bf7d285030ce03758f1";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27&language=en-US&page=1`,
};

export default requests;
