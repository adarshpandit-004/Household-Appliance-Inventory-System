const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const applianceRoutes = require('./pages/routes/applianceRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', applianceRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
