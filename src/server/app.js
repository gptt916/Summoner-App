console.log('Starting Server');

const express = require('express');
const path = require('path');

var winston = require('winston'),
    expressWinston = require('express-winston');
const morgan = require('morgan');

const constants = require('./utils/constants');
const routes = require('./routes.js');

const app = express();

const mapsPath = `assets/${constants.currentPatch}/data`;
const profileiconPath = `assets/${constants.currentPatch}/dataDragon/${constants.currentPatch}/img/profileicon`;

// app.use(expressWinston.logger({
//   transports: [
//     new winston.transports.Console()
//   ],
//   format: winston.format.combine(
//     winston.format.colorize(),
//     winston.format.json()
//   ),
//   meta: true, // optional: control whether you want to log the meta data about the request (default to true)
//   msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
//   expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
//   colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
//   ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
// }));

app.use(morgan('tiny'));

app.use(express.static(path.join(path.resolve(), 'build')));
app.use('/maps', express.static(path.join(path.resolve(), mapsPath)));
app.use('/profileicon', express.static(path.join(path.resolve(), profileiconPath)));


app.get('/', routes.index);

app.get('/api/summonerName/:summonerName', routes.summonerByName);
app.get('/api/matchDetails/:gameId', routes.matchDetails);

app.listen(9000);
console.log('listening on port 9000')