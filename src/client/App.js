import React, { useState } from 'react';
import './styles/App.scss';

import SearchBar from './components/SearchBar';
import ResultsSection from './components/ResultsSection';

const App = () => {
  const [summonerResult, setSummonerResult] = useState();

  const doSearch = async (summonerName) => {
    const result = await fetch(`http://localhost:9000/api/summonerName/${summonerName}`);
    const summonerResultJson = await result.json();
    setSummonerResult(summonerResultJson);
  }

  return (

    <div className="App">
      <div className="main-content" role="main">
        <div>Search for a summoner</div>
        <SearchBar doSearch={doSearch}/>
        <ResultsSection data={summonerResult}/>
      </div>
    </div>
  );
}

export default App;
