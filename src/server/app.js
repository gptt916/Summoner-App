console.log('Starting Server');

const express = require('express');
const path = require('path');

const constants = require('./utils/constants');
const routes = require('./routes.js');

const app = express();

const mapsPath = `assets/${constants.currentPatch}/data`;
const profileiconPath = `assets/${constants.currentPatch}/dataDragon/${constants.currentPatch}/img/profileicon`;

app.use(express.static(path.join(path.resolve(), 'build')));
app.use('/maps', express.static(path.join(path.resolve(), mapsPath)));
app.use('/profileicon', express.static(path.join(path.resolve(), profileiconPath)));


app.get('/', routes.index);

app.get('/api/summonerName/:summonerName', routes.summonerByName);
app.get('/api/matchDetails/:gameId', routes.matchDetails);

app.listen(9000);