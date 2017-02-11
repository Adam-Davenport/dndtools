// Setting up express and packages
var express = require('express'),
	app 				= express(),
	mongoose 		= require('mongoose'),
	bodyParser 	= require('body-parser'),
	flash       = require('connect-flash'),
	methodOver	= require('method-override')

//Connecting mongoose to the local database
mongoose.connect('mongodb://10.0.0.2/dndtools')
// Using bluebird promise library for mongoose
mongoose.Promise = require('bluebird')

// Setup body-parser middleware
app.use(bodyParser.urlencoded({extended: true}))

// Sets the public directory so css and js can be accessed.
app.use(express.static(__dirname + '/public'))

// Set the templating engine to EJS
app.set('view engine', 'ejs')

// Use method override
app.use(methodOver('_method'))

// Session Configuration
app.use(require('express-session')({
	secret: 'Hello thank you very much',
	resave: false,
	saveUninitialized: false
}))

// Setting up flash messages
app.use(flash())

// Setting up global variables
app.use(function(req, res, next){
	res.locals.error = req.flash('error')
	res.locals.message = req.flash('message')
	res.locals.success = req.flash('success')
	next()
})

//=================================
//          Routes
//=================================
var classRoutes   = require('./routes/classes'),
		indexRoutes   = require('./routes/index'),
		featRoutes    = require('./routes/feats')

// Adding the class routes to express
app.use('/classes', classRoutes)
app.use(indexRoutes)
app.use('/feats', featRoutes)

// Running the server to listen on port 3000
app.listen(3000, function () {
	console.log('Running dndtools server')
})