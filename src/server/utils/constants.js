const constants = {
    currentPatch: '10.16.1',
    summonerApi: 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/',
    matchlistApi: 'https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids',
    matchDetailsApi: 'https://na1.api.riotgames.com/lol/match/v4/matches/',
    summonerIconLink: (id) => {
        return `http://localhost:9000/profileicon/${id}.png`
    }
}

module.exports = constants;