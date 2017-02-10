var express = require('express'),
	router  = express.Router()

// Artificer
router.get('/artificer', function (req, res) {
	res.render('classes/artificer', {title: 'Artificer'})
})

module.exports = router