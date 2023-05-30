const key = '35d2dcab98bf323099e7bdc12b7222a2'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestShows: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    multiSearch: `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=`,
  };

  export default requests