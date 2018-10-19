const Matches = require('./models/matches.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const matches = new Matches();
  matches.getMatchesData();

})
