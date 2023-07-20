const express = require('express');
const path = require('path')
const cors = require('cors');
const mongoose = require('mongoose')
const session = require('express-session')
const dotenv = require('dotenv')
dotenv.config()
const cookieParser = require('cookie-parser')

const bodyParser = require('body-parser')

const app = express();

const PORT = process.env.PORT || 4000;




app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

/* This is a middleware that is used to handle cross-site requests. manage header issue */
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    next();
})


//static file location declared here
app.use(express.static(path.join(__dirname, 'public')));


// global error handler
app.use((err, req, res, next) => {
    // logger.error(err);
    res.status(500).json({ message: err.message });
})

const server = app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
});
require('./routes/api')(app)