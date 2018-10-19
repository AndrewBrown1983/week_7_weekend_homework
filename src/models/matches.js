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
  });
};

module.exports = Matches;
