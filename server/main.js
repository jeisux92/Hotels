var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var hotels = require('../data/data.json');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

var router = express.Router(); // get an instance of the express Router

router.get('/hoteles', function (req, res) {
    res.json(hotels);
});

router.route('/hoteles/:id').get((req, res) => {
    var hotel = hotels.find(x => x.id == req.params.id);
    res.json(hotel);
});

router.route('/hoteles/:name/:stars').get((req, res) => {
    var stars = req.params.stars.split('-');
    res.json((hotels.filter(x => {
        console.log(!req.params.name? true:false);
        return !req.params.name ? x.name.toLowerCase().search(req.params.name.toLowerCase()) != -1 : true && req.params.stars.search(x.stars) != -1;
    })));
    var hotel = hotels.find(x => x.id == req.params.id);
    res.json(hotel);
});

app.use('/api', router);


app.listen(port);
console.log('Magic happens on port ' + port);