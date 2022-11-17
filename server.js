//Install express server
const express = require('express');
const path = require('path');

const SERVER_PORT = process.env.PORT || 8080

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/go-bank'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/go-bank/'}),
);

// Start the app by listening on the default Heroku port
app.listen(SERVER_PORT);