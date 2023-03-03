const express = require('express')
const cors = require("cors");
const app = express()
const port = 4000

const corsOption = {
  origin: `http://localhost:4001`,
  credentials: true,
};

app.use(cors(corsOption));

app.get('/', (req, res) => {
  res.json({ message: "Hello world message from api" })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
