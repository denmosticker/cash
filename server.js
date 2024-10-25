const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let userCredentials = {};

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  userCredentials = { username, password };
  res.send({ message: 'Signup successful!' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === userCredentials.username && password === userCredentials.password) {
    res.send({ success: true });
  } else {
    res.send({ success: false, message: 'Incorrect username or password.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
