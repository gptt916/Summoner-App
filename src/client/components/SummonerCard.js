import React, { useState } from 'react';

const SummonerCard = ({data, ...others}) => {

    if (!data) {
        return null;
    }

    return (
        <div className='summoner-card'>
            <img className='summoner-card_icon' src={`http://localhost:9000/profileicon/${data.profileIconId}.png`}/>
            <div className='summoner-card_name'>{data.name}</div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default SummonerCard;