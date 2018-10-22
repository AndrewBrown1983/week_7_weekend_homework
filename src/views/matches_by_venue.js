const PubSub = require('../helpers/pub_sub.js');
const MatchView = require('./match_view.js');

const MatchesByVenue = function(container){
  this.container = container
};

MatchesByVenue.prototype.bindEvents = function () {
  PubSub.subscribe('Matches:matchesFiltered', (event)=>{
     this.matchList = event.detail;
    console.log(this.matchList);
    this.container.innerHTML = '';
    this.render();
  })
};

MatchesByVenue.prototype.render = function (matchArray) {

  this.matchList.forEach((match)=>{
    const matchView = new MatchView(this.container, match);
    matchView.render();
});
};



module.exports = MatchesByVenue;
