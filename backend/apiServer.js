const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');

app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
