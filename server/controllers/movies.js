const API_KEY = require("../../config/config.js").API_KEY;
const axios = require("axios");

let config = {
  headers: {
    'Authorization': API_KEY
  }
};

module.exports = {
  // return a list of trending movies for the week
  getTrendingMovies: (req, res) => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`, config)
      .then((result) => {
        console.log('Successfully retrieved trending movies!')
        res.status(200).send(result.data)
      })
      .catch((err) => {
        console.log('Cannot retrieve trending movies.')
        res.status(400).send(err)
      })
  },
  // return the cast list of a specific movie
  getMovieCast: (req, res) => {
    const movie_id = req.params.id;
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`, config)
      .then((result) => {
        // console.log(`Retrieved cast for movie id: ${movie_id}`)
        res.status(200).send(result.data);
      })
      .catch((err) => {
        console.log(`Cannot retrieve movie casts for ${movie_id}`)
        res.status(400).send(err.message);
      })
  }
}