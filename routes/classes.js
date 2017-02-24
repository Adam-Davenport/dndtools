var express = require('express'),
	router  = express.Router(),
	Class = require('../models/classes')

// Main page with links to all of the class pages
router.get('/', function (req, res) {
	Class.find({}, function (error, classes) {
		if(error){
			req.flash('error', error.message)
			res.redirect('/')
		}
		else{
			res.render('classes/index', {title: 'Classes', classes: classes})
		}
	})
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
	var postedClass = req.body.class
	postedClass.features = req.body.feature
	Class.create(postedClass, function (error) {
		if(error){
			req.flash('error', error.message)
			res.redirect('/classes')
		}
		else{
			req.flash('success', 'Successfully added a new class.')
			res.redirect('/classes')
		}
	})
})

module.exports = router