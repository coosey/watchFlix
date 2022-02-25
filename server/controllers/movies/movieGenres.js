const API_KEY = require("../../../config/config.js").API_KEY;
const axios = require("axios");

let config = {
  headers: {
    'Authorization': API_KEY
  }
};
let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=`

module.exports = {
  // return a list of action movies
  getActionMovies: (req, res) => {
    axios.get(`${url}28`)
      .then((result) => {
        console.log("Successfully retrieved Action movies!")
        res.status(200).send(result.data)
      })
      .catch((err) => {
        console.log("Cannot retrieve Action movies.")
        res.status(400).send(err)
      })
  }
}