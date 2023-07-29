const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001;
const data = require('./mock/mockdata');

const app = express();
app.use(express.json()) // for parsing application/json

let currentRound = 1;

// Handle GET requests to /api route
app.get("/api/fixtures", (req, res) => {
  res.send(data);
});

app.get("/api/currentRound", (req, res) => {
    res.json(currentRound);
});

app.post("/api/picks", (req, res) => {
  console.log(req.body);
  res.send(req.body).status(200);
})

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});