const express = require('express');
const { faker } = require('@faker-js/faker'); 
const cors = require('cors');

const app = express();
const PORT = 4000;


app.use(cors());


app.get('/api/logs', (req, res) => {

  const logs = Array.from({ length: 10 }, (_, i) => ({
    id: (i + 1).toString(),
    timestamp: faker.date.recent().toISOString(),
    type: faker.helpers.arrayElement(['error', 'warning', 'info']),
    message: faker.lorem.sentence(),
    severity: faker.helpers.arrayElement(['low', 'medium', 'high']), 
  }));

  res.json(logs);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
