let express = require('express')
let app = express();
let hbs = require('hbs');
let bodyParser = require('body-parser')

//------------Do not uncomment this----------
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
//-------------------------------------------


// register partials so that hbs knows where to look for it when you use it
hbs.registerPartials(__dirname + '/views/partials');

//let express know what template engine you're using.
app.set('view engine', 'hbs');

//set the middleware to let express know where the static files are located
app.use(express.static('public'))


//define the routes 



//create the server on port 3000
app.listen('3000', () => {
    console.log(`Example app listening at http://localhost:3000`)
})