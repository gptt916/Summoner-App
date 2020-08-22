import React, { useState } from 'react'; 
import SummonerCard from './SummonerCard';
import MatchSection from './MatchSection';

const ResultsSection = ({data, ...others}) => {

    if (!data) {
        return null;
    }

    return (
        <>
            <SummonerCard data={data.summoner}/>
            <MatchSection data={data.matchlist}/>
        </>
    )
}

export default ResultsSection;