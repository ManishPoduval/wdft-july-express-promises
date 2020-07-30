let express = require('express')
let app = express();
let hbs = require('hbs');
let bodyParser = require('body-parser')

//------------Do not uncomment this----------
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
//-------------------------------------------

function getStudents(){
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(require('./dataStore'))
        }, 3000)
    })
    return myPromise
}

// register partials so that hbs knows where to look for it when you use it
hbs.registerPartials(__dirname + '/views/partials');

//let express know what template engine you're using.
app.set('view engine', 'hbs');

//set the middleware to let express know where the static files are located
app.use(express.static(__dirname  + '/public'))


//define the routes 
app.get('/', (req, res) => {
    // get all the students
    //then i will show the students.hbs page
    getStudents()
        .then((students) => {
              res.render(__dirname + '/views/students.hbs', { students })  
        })
})


//create the server on port 3000
app.listen('3000', () => {
    console.log(`Example app listening at http://localhost:3000`)
})