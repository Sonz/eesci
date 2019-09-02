if (typeof window === 'undefined') {
	global.window = {}
}
const express = require('express')
const path = require('path')
const { renderToString } = require('react-dom/server')
const SSR = require('../dist/search-server')
const fs = require('fs')
const template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8')
const data = require('./data.json')

const server = port => {

	const app = express()

	app.use(express.static('dist'))

	app.get('/search', (req, res) => {
		const html = runderMarkup(renderToString(SSR))
		res.status(200).send(html)
	})

	app.listen(3000, () => {
		console.log('Server running port 3000')
	})
}

const runderMarkup = tpl => {
	const dataStr = JSON.stringify(data)
	return template.replace(`<!--HTML_PLACEHOLDER-->`, tpl).replace('<!--INITIAL_DATA_PLACEHOLDER-->', `<script>window.__initial_data=${dataStr}</script>`)
}

server(process.env.PORT || 3000)