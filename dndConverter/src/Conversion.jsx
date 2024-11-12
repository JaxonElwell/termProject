import React, { useState } from 'react';
import TopNavigation from './TopNavigation';
import Card from './Card';
import Modal from './Modal';

var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://api.open5e.com/v1/monsters/', // General endpoint
  headers: {
    'User-Agent': 'insomnia/10.1.1'
  }
};

axios.request(options).then(function (response) {
  const monsters = response.data.results;
  // Display the names of the first few monsters
  monsters.slice(0, 5).forEach(monster => console.log(monster.name));
}).catch(function (error) {
  console.error(error);
});


export default Conversion;