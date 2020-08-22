const constants = {
    currentPatch: '10.16.1',
    matchDataEndpoint: (id) => {
        return `http://localhost:9000/api/matchDetails/${id}`
    },
    summonerIconLink: (id) => {
        return `http://localhost:9000/profileicon/${id}.png`
    },
    summonerNameEndPoint: (name) => {
        return `http://localhost:9000/api/summonerName/${name}`
    }
}

export default constants;