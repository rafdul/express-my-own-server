const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next)=> {
	res.show = (name) => {
			res.sendFile(path.join(__dirname, `/pages/${name}`));
	};
	next();
});

app.use(['/user/settings', '/user/panel'], (req, res) => {
	res.send('<h1>You have to log in</h1>')
});

app.get('/', (req, res) => {
	res.show('home.html');
});

app.get('/home', (req, res) => {
	res.show('home.html');
});

app.get('/about', (req, res) => {
	res.show('about.html');
});

app.use((req, res) => {
	res.status(404).sendFile(path.join(__dirname, '/public/error.jpg'));
});

app.listen(8008, () => {
	console.log('Server is running on port: 8008');
});