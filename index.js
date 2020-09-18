const express = require('express');
const hbs = require('express-handlebars')

const app = express();
const port = 3000;


app.set('view engine', 'hbs');

app.engine('hbs', hbs({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    partialsDir: __dirname + '/views/partials/'
}))

app.use(express.static('public'))


app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', {
        layout: 'index',
        listExists: false,
    });
});



app.listen(port, () => console.log(`App listening to port ${port}`));