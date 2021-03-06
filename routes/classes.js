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
	var skillList = require('./classes/skills')
	res.render('classes/new', {title: 'Add A New Class', skillList: skillList})
})

// Temp paladin page
router.get('/paladin', function (req, res) {
	res.render('classes/paladin', {title: 'Paladin'})
})

// Show page
router.get('/:id', function (req, res) {
	// search the db for the requested class
	Class.findOne({name: req.params.id}, function (error, foundClass) {
		if(error){
			req.flash('error', error.message)
			res.redirect('/classes')
		}
		else if(!foundClass){
			req.flash('error', 'Class not found.')
			res.redirect('/classes')
		}
		else{
			console.log(foundClass)
			res.render('classes/show', {title: foundClass.name, pc: foundClass})
		}
	})
})

// Posting a new class to the database
router.post('/', function (req, res) {
	console.log(req.body.class)
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