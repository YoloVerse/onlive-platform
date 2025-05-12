require('express-async-errors');
const express = require('express');
const app = express();
require('./startup/directory')();
require('./startup/config')(app);
require('./middleware/logger');
require('./startup/logging')(app);
require('./startup/validation')();
require('./startup/db')();
require('./startup/routes')(app);
require('./startup/swagger')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening on port ${port}...`) }); 