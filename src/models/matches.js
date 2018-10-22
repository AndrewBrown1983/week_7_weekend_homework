const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Matches = function(){
  this.matches = [];
};

Matches.prototype.getMatchesData = function () {
  console.log('hi');
  const request = new Request('https://worldcup.sfg.io/matches');
  request.get((data)=>{
    console.log(data);
    this.matches = data;
    PubSub.publish('Matches:all-data-ready', this.matches)


  });
};

Matches.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:regionSelected', (event)=>{
    const selectedVenue = event.detail;
    console.log(selectedVenue);
    const newMatchList = this.modelMatchesByVenue(selectedVenue);
    console.log(newMatchList);

    PubSub.publish('Matches:matchesFiltered', newMatchList);
  });
};

Matches.prototype.modelMatchesByVenue = function (venue) {
  return this.matches.filter((match)=> match.venue === venue);
};

module.exports = Matches;
