const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Matches:all-data-ready', (event)=>{
    const allMatches = event.detail;
    console.log(allMatches);
    const venueList = this.handleData(allMatches);
    console.log(venueList);
    this.populate(venueList);
  });
  this.element.addEventListener('change', (event)=>{
    selectedVenue = event.target.value;
    console.log(selectedVenue);
    PubSub.publish('SelectView:regionSelected', selectedVenue);
  })

};


SelectView.prototype.handleData = function (matches) {
  const groups = this.getVenues(matches);
  return groups;
};

SelectView.prototype.getVenues = function (matches) {
  return matches.map(match => match.venue).filter((venue, index, venues)=> venues.indexOf(venue) === index);
};

SelectView.prototype.populate = function (venues) {

  for (venue of venues) {
    const option = document.createElement('option');
    option.textContent = venue;
    option.value = venue;
    this.element.appendChild(option);

  }
  
};


module.exports = SelectView;
