var express = require('express'),
	router  = express.Router()

// Main page with links to all of the class pages
router.get('/', function (req, res) {
	res.render('classes/index', {title: 'Classes'})
})

// New Page
router.get('/new', function (req, res) {
	res.render('classes/new', {title: 'Add A New Class'})
})

// Artificer
router.get('/artificer', function (req, res) {
	res.render('classes/artificer', {title: 'Artificer'})
})

// Cleric
router.get('/cleric', function (req, res) {
	res.render('classes/artificer', {title: 'Artificer'})
})

router.post('/', function (req, res) {
	console.log(req.body.class)
	res.send('post received')
})

module.exports = router