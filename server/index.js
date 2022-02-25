const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const moviesRouter = require("./routers/routes/moviesRouter.js");
const tvRouter = require("./routers/routes/tvRouter.js");

const app = express();
const PORT = 3001;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/../client/dist"));


app.use("/movies", moviesRouter);
app.use("/tv", tvRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../client/dist/index.html"), function(err) {
    if (err) res.status(500).send(err)
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
