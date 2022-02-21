const API_KEY = require("../../config/config.js").API_KEY;
const axios = require("axios");

let config = {
  headers: {
    'Authorization': API_KEY
  }
};

module.exports = {
  // return a list of trending TV shows for the week
  getTrendingTV: (req, res) => {
    axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`, config)
      .then((result) => {
        console.log('Successfully retrieved trending TV shows!')
        res.status(200).send(result.data)
      })
      .catch((err) => {
        console.log('Cannot retrieve trending TV shows.')
        res.status(400).send(err)
      })
  },
  // return the cast list of a specific TV show
  getTVCast: (req, res) => {
    const tv_id = req.params.id;
    axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=${API_KEY}`, config)
      .then((result) => {
        console.log(`Retrieved cast for tv id: ${tv_id}`)
        res.status(200).send(result.data)
      })
      .catch((err) => {
        console.log(`Cannot retrieve TV casts for ${tv_id}`)
        res.status(400).send(err.message)
      })
  }
}