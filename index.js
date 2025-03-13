const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello, This is new Multi-Cloud CI/CD!'));

app.get('/health', (req, res) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  try {
    res.status(200).send(healthCheck);
  } catch (e) {
    healthCheck.message = e;
    res.status(503).send();
  }
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`App running on port ${port}`));
}

module.exports = app;
