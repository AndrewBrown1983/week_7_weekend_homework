const PubSub = require('../helpers/pub_sub.js');
const MatchView = require('../views/match_view.js');

const MatchListView = function (container){
  this.container = container;
}

MatchListView.prototype.bindEvents = function () {
  PubSub.subscribe('Matches:all-data-ready', (event)=>{
    console.log(event.detail);
    this.matches = event.detail;
    this.render()
  });
};

MatchListView.prototype.render = function () {
  this.matches.forEach((match)=>{
    const matchView = new MatchView(this.container, match);
    matchView.render();
  });
};


module.exports = MatchListView;
