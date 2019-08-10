// DECLARATIONS & IMPORTS
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
// const logger = require('./logger');

// Simple Hello World
/*/app.get('/', (req, res) => {
   res.send('<h1>Hello World</h1>')
}); */

// init middleware
// app.use(logger);

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/members'));


app.use(express.json());
app.use(express.urlencoded({extended: false}));


// start Express Server
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
