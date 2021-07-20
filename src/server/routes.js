const path = require('path');
const axios = require('axios');
const constants = require('./utils/constants.js');

const token = process.env.riotToken;

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
        console.log(token)
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

        const summonerUrl = `${constants.summonerApi}${req.params.summonerName}`
        let summonerJson;
        try {
            const summonerResponse = await axios.get(summonerUrl, {
                headers: {
                    "X-Riot-Token": token,
                }
            });

            if (summonerResponse.status === 200) {
                summonerJson = summonerResponse.data;
            }
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
            return;
        }

        let matchlistJson;
        try {
            const matchlistUrl = `${constants.matchlistApi.replace(/\{puuid\}/, summonerJson.puuid)}?start=${page-1}&count=${10}`
            const matchlistResponse = await axios.get(matchlistUrl, {
                headers: {
                    "X-Riot-Token": token,
                }
            });
            if (matchlistResponse.status === 200) {
                matchlistJson = matchlistResponse.data;
            }
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
            return;
        }

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
        let matchJson;
        try {
            const matchDetailsUrl = `${constants.matchDetailsApi}${gameId}`;
            const matchResponse = await axios.get(matchDetailsUrl, {
                headers: {
                    "X-Riot-Token": token,
                }
            });
            if (matchResponse.status === 200) {
                matchJson = matchResponse.data;
            } 
        }
        catch (err) {
            console.log(err)
            res.sendStatus(500)
            return;
        }

        res.setHeader('Access-Control-Allow-Origin', '*')
        res.json(matchJson);
        return;

    }
}

module.exports = routes;