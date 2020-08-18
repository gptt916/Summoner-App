console.log('Starting Server');

import express from 'express';
import path from 'path';

import routes from './routes.js';

const app = express();

app.use(express.static(path.join(path.resolve(), 'build')));

app.get('/', routes.index);

app.get('/api/summonerName/:summonerName', routes.summonerName);
app.listen(9000);