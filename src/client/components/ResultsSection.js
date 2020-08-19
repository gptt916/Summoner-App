import React, { useState } from 'react'; 
import SummonerCard from './SummonerCard';

const ResultsSection = ({data, ...others}) => {

    if (!data) {
        return null;
    }

    return (
        <>
            <SummonerCard data={data.summoner}/>
            <pre>{JSON.stringify(data.matchlist, null, 2)}</pre>
        </>
    )
}

export default ResultsSection;