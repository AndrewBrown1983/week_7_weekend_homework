const Matches = require('./models/matches.js');
const MatchListView = require('./views/matches_list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const matches = new Matches();
  matches.getMatchesData();

  const listContainer = document.querySelector('#matches')
  const matchesListView = new MatchListView(listContainer);
  matchesListView.bindEvents();


})
