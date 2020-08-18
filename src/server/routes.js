import path from 'path';
import fetch from 'node-fetch';
import constants from '../utils/config.js';

const routes = {
    index: (req, res, next) => {
        res.sendFile(path.join(path.resolve(), 'build', 'index.html'));
    },
    summonerName: async (req, res, next) => {
        if (!req.params.summonerName) {
            res.sendStatus(400);
            return;
        }
        const result = await fetch(`${constants.summonerApi}${req.params.summonerName}`, {
            headers: {
                "X-Riot-Token": "RGAPI-cbe86298-c521-4106-b476-ff872c0eda8b",
            }
        });
        const resultJson = await result.json();
        res.json(resultJson);
        return;
    }
}

export default routes;