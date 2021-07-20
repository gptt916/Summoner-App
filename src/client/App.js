import React, { useState, useEffect } from 'react';
import './styles/App.scss';

import SearchBar from './components/SearchBar';
import ResultsSection from './components/ResultsSection';
import constants from './utils/constants';


const App = () => {
  const [summonerResult, setSummonerResult] = useState();

  useEffect(() => {

    async function fetchData() {
      const path = window.location.pathname.split('/', 2);
      if (path.length > 1) {
        const result = await fetch(constants.summonerNameEndPoint(path[1]));
        const summonerResultJson = await result.json();
        setSummonerResult(summonerResultJson);
      }
    }
    fetchData();

  }, [])

  const doSearch = async (summonerName) => {
    const result = await fetch(constants.summonerNameEndPoint(summonerName));
    const summonerResultJson = await result.json();
    setSummonerResult(summonerResultJson);
  }

  return (

    <div className="App">
      <div className="main-content" role="main">
        <div>Search for a summoner asdfasdf</div>
        <SearchBar doSearch={doSearch}/>
        <ResultsSection data={summonerResult}/>
      </div>
    </div>
  );
}

export default App;
