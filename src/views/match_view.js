const MatchView = function(container, match){
  this.container = container;
  this.match = match;
};

MatchView.prototype.render = function () {
  const matchItem = document.createElement('div');

  const homeTeam = this.getHomeTeam();
  matchItem.appendChild(homeTeam);

  const awayTeam = this.getAwayTeam();
  matchItem.appendChild(awayTeam);

  const stadium = this.getStadium();
  matchItem.appendChild(stadium);

  this.container.appendChild(matchItem);
};

MatchView.prototype.getHomeTeam = function () {
  const homeTeam = document.createElement('h3');
  homeTeam.classList.add('home-team');
  homeTeam.textContent = `Home Team:${ this.match.home_team.country}`;
  return homeTeam;
};

MatchView.prototype.getAwayTeam = function () {
  const awayTeam = document.createElement('h3');
  awayTeam.classList.add('away-team');
  awayTeam.textContent = `Away Team:${ this.match.away_team.country}`;
  return awayTeam;
};

MatchView.prototype.getStadium = function () {
  const stadium = document.createElement('p');
  stadium.classList.add('stadium');
  stadium.textContent = `Stadium:${ this.match.location}`;
  return stadium;
};


module.exports = MatchView;
