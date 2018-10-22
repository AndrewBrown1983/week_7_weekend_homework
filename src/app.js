const Matches = require('./models/matches.js');
const MatchListView = require('./views/matches_list_view.js');
const SelectView = require('./views/select_view.js');
const MatchesByVenue = require('./views/matches_by_venue.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const matches = new Matches();
  matches.getMatchesData();

  const listContainer = document.querySelector('#matches');
  const matchesListView = new MatchListView(listContainer);
  matchesListView.bindEvents();

  const selectElement = document.querySelector('#dropDown');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  matches.bindEvents();

  const matchesByVenue = new MatchesByVenue(listContainer);
  matchesByVenue.bindEvents(matchesByVenue);


})
