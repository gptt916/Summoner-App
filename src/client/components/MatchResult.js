import React, { useEffect, useState } from 'react';
import constants from '../utils/constants';

const MatchResult = ({data}) => {
    const [ matchData, setMatchData ] = useState();

    console.log(constants.matchDataEndpoint(data.gameId))

    useEffect(() => {
        async function fetchMatchData() {
            const result = await fetch(constants.matchDataEndpoint(data.gameId));
            const matchResultJson = await result.json();
            setMatchData(matchResultJson);
        }
        fetchMatchData();
    }, []);

    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
}

export default MatchResult;