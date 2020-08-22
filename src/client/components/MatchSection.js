import React from 'react';
import MatchResult from './MatchResult';

const MatchSection = ({data}) => {

  return (
    <div className='match-section'>
      {data.matches.map((match, key) => {
        return <MatchResult data={match} key={key}/>
      })}
    </div>
  )
}

export default MatchSection;