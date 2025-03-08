const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello,Multi-Cloud CI/CD!'));

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`App running on port ${port}`));
}

module.exports = app;
