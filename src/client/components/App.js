import React, { useState } from 'react';
import '../styles/App.scss';

import SearchBar from './SearchBar';

import constants from '../../utils/config';

const App = () => {
  const [summonerResult, setSummonerResult] = useState({});

  const doSearch = async (summonerName) => {
    const result = await fetch(`/api/summonerName/${summonerName}`)
    // setSummonerResult(result);
    console.log(result)
  }

  const test = () => {
    console.log('ayyy')
  }

  console.log(typeof test);


  return (

    <div className="App">
      <div className="main-content" role="main">
        <div>Search for a summoner</div>
        <SearchBar doSearch={doSearch}/>
        <div>{JSON.stringify(summonerResult)}</div>     
      </div>
    </div>
  );
}

export default App;
