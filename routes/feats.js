var express = require('express'),
	router  = express.Router(),
	Feats   = require('../models/feats')

router.get('/', function (req, res) {
	Feats.find({}, function (error, foundFeats) {
		if(error){
			req.flash('error', error.message)
			res.redirect('/feats')
		}
		else{

		}
	})
	res.render('feats/index', {title: 'Feats'})
})

router.get('/new', function (req, res) {
	res.render('feats/new', {title: 'Add New Feat'})
})

router.post('/', function (req, res) {
	Feats.create(req.body.feat, function (error) {
		if(error){
			req.flash('error', error.message)
			res.redirect('/feats')
		}
		else{
			req.flash('success', 'Added feat!')
			res.redirect('/feats')
		}
	})
})

module.exports = router