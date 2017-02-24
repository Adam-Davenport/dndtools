var features = document.getElementsByClassName('feature'),
		featureContainer = document.getElementById('features')

// Allows an element to be inserted after another
function insertAfter(newNode, referenceNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

// Update the list of features
function getFeatures() {
	features = document.getElementsByClassName('feature')
}

// Create a class feature
function createFeature() {
	// Update List
	getFeatures()
	// Create feature div and insert after last feature
	var feature = createDiv(['feature', 'form-group', 'row'])
	// Check and see if there are any class features in place
	if(features.length == 0){
		featureContainer.appendChild(feature)
	}
	else{
		insertAfter(feature, features[features.length-1])
	}
	// Create name label with col sm 2
	feature.appendChild(createLabel('Name:', 'col-sm-2'))
	// Create column to store the input
	var nameCol = createDiv('col-sm-10')
	feature.appendChild(nameCol)
	// Create Input
	var nameInput = createInput('form-control')
	nameCol.appendChild(nameInput)

	// Create description label with col sm 2
	feature.appendChild(createLabel('Description:', 'col-sm-2'))
	// Create column to store the input
	var descriptionCol = createDiv('col-sm-10')
	feature.appendChild(descriptionCol)
	// Create Input
	var descriptionInput = createElement('textarea', 'form-control')
	descriptionCol.appendChild(descriptionInput)

	// Add names to the inputs so data can be sent to the server in an organized post request
	setName(nameInput, descriptionInput)

	// Create buttons
	feature.appendChild(createMovementButtons())

}
// Create movement buttons
function createMovementButtons() {
	var div = createDiv('text-center')
	var upButton = createUpButton(),
			downButton  = createDownButton()
	div.appendChild(upButton)
	div.appendChild(downButton)
	return div
}

function createUpButton() {
	var upButton = createElement('button', ['btn', 'btn-primary'])
	upButton.appendChild(createElement('span', ['glyphicon', 'glyphicon-arrow-up']))
	upButton.onclick = function () {
		moveUp(upButton)
	}
	upButton.type = 'button'
	return upButton
}

function createDownButton() {
	var downButton = createElement('button', ['btn', 'btn-primary'])
	downButton.appendChild(createElement('span', ['glyphicon', 'glyphicon-arrow-down']))
	downButton.onclick = function () {
		moveDown(downButton)
	}
	downButton.type = 'button'
	return downButton
}

// Create element with class list
function createElement(type, classList) {
	var element = document.createElement(type)
	if(type == 'input'){
		element.type = 'text'
	}
	element = addClasses(element, classList)
	return element
}

// Create input element with class list
function createInput(classList) {
	var input = document.createElement("input")
	input.type = 'text'
	input = addClasses(input, classList)
	return input
}

// Create a div element with class list
function createDiv(classList){
	var div = document.createElement('div')
	div = addClasses(div, classList)
	return div
}

// Create label with a list of classes
function createLabel(text, classList) {
	var label = document.createElement('label')
	label.innerHTML = text
	label = addClasses(label, classList)
	return label
}

// Takes an element and list of classes and adds them to that element
function addClasses(element, classList){
	if(classList.constructor == Array){
		for(i = 0; i<classList.length; i++){
			element.classList.add(classList[i])
		}
		return element
	}
	else{
		element.classList.add(classList)
		return element
	}
}

// Move element up in the list
function moveUp(element){
	var featureDiv = movementSetup(element)
	for(i=0; i<features.length; i++){
		if(featureDiv === features[i]){
			if(i > 0 && i < features.length){
				featureDiv.parentNode.insertBefore(features[i], features[i-1])
				return
			}
		}
	}
}

// Move a class feature down in the list
function moveDown(element) {
	var featureDiv = movementSetup(element)
	for(i=features.length; i>=0; i--) {
		if (featureDiv === features[i]) {
			if ( i < features.length-1) {
				console.log(i)
				featureDiv.parentNode.insertBefore(features[i+1], features[i])
			}
		}
	}
}

// Movement setup
function movementSetup(element) {
	// Get the parent div of the button and then the parent of that div
	var featureDiv = element.parentNode.parentNode
	getFeatures()
	return featureDiv
}

function setName(name, description) {
	getFeatures()
	name.name = 'class[feature][]'
	description.name = 'class[feature][]'
}