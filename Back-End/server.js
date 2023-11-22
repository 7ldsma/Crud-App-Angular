const express = require('express');



// const routes = require('./routes/routes');
// const eventRoutes = require('./routes/notes.routes')
// const { server } = require('http');

//INITIALIZATIONS

const app = express();

//SETTINGS

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
  
    next();
  });

app.set('port', process.env.PORT || 4000)

app.get('/', (req, res) => {
    res.send("Hooolllaaa")
})


//MIDDLEWARES

app.use(express.urlencoded({extended: false}));

//GLOBAL VARIABLES


//ROUTES


app.use(express.json());
app.use(require('./routes/routes'));
app.use(require('./routes/properties.routes'));

// app.use(eventRoutes);

//STATIC FILES

// app.use(express.static(path.join(__dirname + 'public')))



module.exports = app;

