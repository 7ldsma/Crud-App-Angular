const express = require('express');



const routes = require('./routes/routes');
// const { server } = require('http');

//INITIALIZATIONS

const app = express();

//SETTINGS

app.set('port', process.env.PORT || 4000)

app.get('/', (req, res) => {
    res.send("Hooolllaaa")
})


//MIDDLEWARES

app.use(express.urlencoded({extended: false}));

//GLOBAL VARIABLES


//ROUTES


app.use(express.json());
app.use(routes);

//STATIC FILES

// app.use(express.static(path.join(__dirname + 'public')))



module.exports = app;

