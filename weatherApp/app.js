const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/weather', async (req, res) => {
  const { city, state, country } = req.query;
  const apiKey = 'your_api_key';
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Weather app backend listening at http://localhost:${port}`);
});
