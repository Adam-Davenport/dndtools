var features = document.getElementsByClassName('feature')

function insertAfter(newNode, referenceNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

function getFeatures() {
	features = document.getElementsByClassName('feature')
}

function createFeature() {
	// Update List
	getFeatures()
	// Create feature div and insert after last feature
	var feature = createDiv(['feature', 'form-group', 'row'])
	insertAfter(feature, features[features.length-1])
	// Create name label with col sm 2
	feature.appendChild(createLabel('Name:', 'col-sm-2'))
	// Create column to store the input
	var nameCol = createDiv('col-sm-10')
	feature.appendChild(nameCol)
	// Create Input
	nameCol.appendChild(createInput('form-control'))

	// Create description label with col sm 2
	feature.appendChild(createLabel('Description:', 'col-sm-2'))
	// Create column to store the input
	var descriptionCol = createDiv('col-sm-10')
	feature.appendChild(descriptionCol)
	// Create Input
	descriptionCol.appendChild(createElement('textarea', 'form-control'))
}

// Create element with classlist
function createElement(type, classList) {
	var element = document.createElement(type)
	if(type == 'input'){
		element.type = 'text'
	}
	element = addClasses(element, classList)
	return element
}

// Create input element with classlist
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