const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hi from BE' });
});

app.get('/api', (req, res) => {
  res.status(200).send({ message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
