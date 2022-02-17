const API_KEY = require("../../config/config.js");
const axios = require("axios");

let config = {
  headers: {
    'Authorization': API_KEY
  }
};

module.exports = {
  // return a list of trending movies for the week
  getTrending: (req, res) => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`, config)
      .then((result) => {
        console.log('Successfully retrieved trending movies for the week!')
        res.status(200).send(result.data)
      })
      .catch((err) => {
        console.log('Cannot retrieve trending movies.')
        res.status(400).send(err)
      })
  }
}