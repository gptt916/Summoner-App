import React, { useState, memo } from "react";
import constants from "../utils/constants";

const SummonerCard = ({ data, ...others }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="summoner-card">
      <img
        className="summoner-card_icon"
        src={constants.summonerIconLink(data.profileIconId)}
      />
      <div className="summoner-card_info">
        <span className="summoner-card_info_name">{data.name}</span>
        <span className="summoner-card_info_level">
          level {data.summonerLevel}
        </span>
      </div>
    </div>
  );
};

export default memo(SummonerCard);
