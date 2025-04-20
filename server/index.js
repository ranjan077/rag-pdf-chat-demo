const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/upload/pdf", (req, res) => {
  const { body } = req;
  console.log(body);
  return res.json({
    result: "ok",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
