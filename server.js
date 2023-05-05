const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const mysql = require("mysql");


const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'database.ccmd6j6rmnku.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'password',
  database: 'projectspring2023',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database successfully!');
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

require(__dirname + "/routes/blog-post.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
