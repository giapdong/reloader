const fs = require('fs')
const path = require('path')

const TOPIC_PLACEHOLDER = '__MY_TOPIC_PLACEHOLDER__'

function replaceTopic() {

	let new_topic = 'custom_' + Math.random().toString(16).substr(2, 8) + '.' + Date.now()
	let extension_content = fs.readFileSync(path.join(__dirname, 'chrome-extention/content.js'), {encoding: "utf8"})
	extension_content = extension_content.replace(TOPIC_PLACEHOLDER, new_topic)
	fs.writeFileSync(path.join(__dirname, 'chrome-extention/content.js'), extension_content, {encoding: 'utf8'})

	let index_content = fs.readFileSync(path.join(__dirname, './index.js'), {encoding: "utf8"})
	index_content = index_content.replace(TOPIC_PLACEHOLDER, new_topic)
	fs.writeFileSync(path.join(__dirname, './index.js'), index_content, {encoding: 'utf8'})
}


function showPath() {

	let current_path = path.join(__dirname, './index.js')
	console.log('Run publisher by:\n\nnode ', current_path)
}

// Actions
replaceTopic()
showPath()

