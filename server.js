const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const db = require('./models');

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect('mongodb://localhost/bootcampDB', { useNewUrlParser: true });

require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});