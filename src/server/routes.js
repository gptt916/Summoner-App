const path = require('path');
const fetch = require('node-fetch');
const constants = require('../utils/config.js');

const token = "RGAPI-cbe86298-c521-4106-b476-ff872c0eda8b";

const routes = {
    index: function (req, res, next) {
        res.sendFile(path.join(path.resolve(), 'build', 'index.html'));
    },
    /**
     * Returns summoner name
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    summonerByName: async function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*')

        const { summonerName } = req.params;
        const { page = 1 } = req.query;

        if (!summonerName) {
            res.sendStatus(400);
            return;
        }

        if (page < 1) {
            res.sendStatus(400);
            return;
        }

        const endIndex = page*10;
        const beginIndex = endIndex-10;

        const summoner = await fetch(`${constants.summonerApi}${req.params.summonerName}`, {
            headers: {
                "X-Riot-Token": token,
            }
        });
        const summonerJson = await summoner.json();

        const matchlist = await fetch(`${constants.matchlistApi}${summonerJson.accountId}?beginIndex=${beginIndex}&endIndex=${endIndex}`, {
            headers: {
                "X-Riot-Token": token,
            }
        });
        const matchlistJson = await matchlist.json();

        res.json({
            summoner: summonerJson,
            matchlist: matchlistJson
        });
        return;
    },

    matchDetails: async function (req, res, next) {
        const gameId = req.params.gameId;

        if (!gameId) {
            res.sendStatus(400);
            return;
        }

        const match = await fetch(`${constants.matchDetailsApi}${gameId}`, {
            headers: {
                "X-Riot-Token": token,
            }
        });
        const matchJson = await match.json();

        res.setHeader('Access-Control-Allow-Origin', '*')
        res.json(matchJson);
        return;

    }
}

module.exports = routes;