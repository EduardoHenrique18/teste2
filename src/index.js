const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

app.use(cors());

var port = process.env.PORT || 8080;
uri = process.env.ATLAS_URI || '';

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }).catch(err => console.log(err));

app.use(express.json());
app.use(routes);

app.listen(port);
