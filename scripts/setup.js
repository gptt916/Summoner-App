'use strict';

const fs = require('fs');
const path = require('path');
const constants = require('../utils/constants');
console.log(constants.currentPatch)
const championRawData = require(`../assets/${constants.currentPatch}/dataDragon/${constants.currentPatch}/data/en_US/champion.json`).data;
const championMap = {};

Object.keys(championRawData).forEach((champion) => {
    const championJson = championRawData[champion];
    championMap[championJson.key] = championJson;
})

const championMapOutputPath = path.join(path.resolve(), 'assets', constants.currentPatch, 'data', 'championMap.json');

fs.writeFile(championMapOutputPath, JSON.stringify(championMap), (err) => {
    if (err) {
        throw new Error('error');
    }
    console.log('Champion map generated');
});
