/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Matches = __webpack_require__(/*! ./models/matches.js */ \"./src/models/matches.js\");\nconst MatchListView = __webpack_require__(/*! ./views/matches_list_view.js */ \"./src/views/matches_list_view.js\");\nconst SelectView = __webpack_require__(/*! ./views/select_view.js */ \"./src/views/select_view.js\");\nconst MatchesByVenue = __webpack_require__(/*! ./views/matches_by_venue.js */ \"./src/views/matches_by_venue.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JavaScript Loaded');\n\n  const matches = new Matches();\n  matches.getMatchesData();\n\n  const listContainer = document.querySelector('#matches');\n  const matchesListView = new MatchListView(listContainer);\n  matchesListView.bindEvents();\n\n  const selectElement = document.querySelector('#dropDown');\n  const selectView = new SelectView(selectElement);\n  selectView.bindEvents();\n\n  matches.bindEvents();\n\n  const matchesByVenue = new MatchesByVenue(listContainer);\n  matchesByVenue.bindEvents(matchesByVenue);\n\n\n})\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const request = function(url){\n  this.url = url;\n;}\n\nRequest.prototype.get = function (onComplete) {\n  const xhr = new XMLHttpRequest();\n  xhr.open(\"GET\", this.url);\n  xhr.setRequestHeader(\"Accept\", \"application/json\");\n  xhr.send();\n\n  xhr.addEventListener(\"load\", () => {\n\n    if (xhr.status !== 200){\n      return;\n    }\n\n    const jsonString = xhr.responseText;\n    const data = JSON.parse(jsonString);\n\n    onComplete(data);\n  });\n};\n\n\n\nmodule.exports= Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request.js?");

/***/ }),

/***/ "./src/models/matches.js":
/*!*******************************!*\
  !*** ./src/models/matches.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst Request = __webpack_require__(/*! ../helpers/request.js */ \"./src/helpers/request.js\");\n\nconst Matches = function(){\n  this.matches = [];\n};\n\nMatches.prototype.getMatchesData = function () {\n  console.log('hi');\n  const request = new Request('https://worldcup.sfg.io/matches');\n  request.get((data)=>{\n    console.log(data);\n    this.matches = data;\n    PubSub.publish('Matches:all-data-ready', this.matches)\n\n\n  });\n};\n\nMatches.prototype.bindEvents = function () {\n  PubSub.subscribe('SelectView:regionSelected', (event)=>{\n    const selectedVenue = event.detail;\n    console.log(selectedVenue);\n    const newMatchList = this.modelMatchesByVenue(selectedVenue);\n    console.log(newMatchList);\n\n    PubSub.publish('Matches:matchesFiltered', newMatchList);\n  });\n};\n\nMatches.prototype.modelMatchesByVenue = function (venue) {\n  return this.matches.filter((match)=> match.venue === venue);\n};\n\nmodule.exports = Matches;\n\n\n//# sourceURL=webpack:///./src/models/matches.js?");

/***/ }),

/***/ "./src/views/match_view.js":
/*!*********************************!*\
  !*** ./src/views/match_view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const MatchView = function(container, match){\n  this.container = container;\n  this.match = match;\n};\n\nMatchView.prototype.render = function () {\n  const matchItem = document.createElement('div');\n  matchItem.classList.add('matchList')\n\n  const homeTeam = this.getHomeTeam();\n  matchItem.appendChild(homeTeam);\n\n  const awayTeam = this.getAwayTeam();\n  matchItem.appendChild(awayTeam);\n\n  const stadium = this.getStadium();\n  matchItem.appendChild(stadium);\n\n  const score = this.getScore();\n  matchItem.appendChild(score);\n\n  this.container.appendChild(matchItem);\n};\n\nMatchView.prototype.getHomeTeam = function () {\n  const homeTeam = document.createElement('p');\n  homeTeam.classList.add('home-team');\n  homeTeam.textContent = `Home Team: ${ this.match.home_team.country}`;\n  return homeTeam;\n};\n\nMatchView.prototype.getAwayTeam = function () {\n  const awayTeam = document.createElement('p');\n  awayTeam.classList.add('away-team');\n  awayTeam.textContent = `Away Team: ${ this.match.away_team.country}`;\n  return awayTeam;\n};\n\nMatchView.prototype.getStadium = function () {\n  const stadium = document.createElement('p');\n  stadium.classList.add('stadium');\n  stadium.textContent = `Stadium: ${ this.match.location}`;\n  return stadium;\n};\n\nMatchView.prototype.getScore = function () {\n  const score = document.createElement('h3');\n  score.classList.add('score');\n  score.textContent = `Score: ${ this.match.home_team.goals} - ${ this.match.away_team.goals}`;\n  return score;\n};\n\n\nmodule.exports = MatchView;\n\n\n//# sourceURL=webpack:///./src/views/match_view.js?");

/***/ }),

/***/ "./src/views/matches_by_venue.js":
/*!***************************************!*\
  !*** ./src/views/matches_by_venue.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst MatchView = __webpack_require__(/*! ./match_view.js */ \"./src/views/match_view.js\");\n\nconst MatchesByVenue = function(container){\n  this.container = container\n};\n\nMatchesByVenue.prototype.bindEvents = function () {\n  PubSub.subscribe('Matches:matchesFiltered', (event)=>{\n     this.matchList = event.detail;\n    console.log(this.matchList);\n    this.container.innerHTML = '';\n    this.render();\n  })\n};\n\nMatchesByVenue.prototype.render = function (matchArray) {\n\n  this.matchList.forEach((match)=>{\n    const matchView = new MatchView(this.container, match);\n    matchView.render();\n});\n};\n\n\n\nmodule.exports = MatchesByVenue;\n\n\n//# sourceURL=webpack:///./src/views/matches_by_venue.js?");

/***/ }),

/***/ "./src/views/matches_list_view.js":
/*!****************************************!*\
  !*** ./src/views/matches_list_view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst MatchView = __webpack_require__(/*! ../views/match_view.js */ \"./src/views/match_view.js\");\n\nconst MatchListView = function (container){\n  this.container = container;\n}\n\nMatchListView.prototype.bindEvents = function () {\n  PubSub.subscribe('Matches:all-data-ready', (event)=>{\n    console.log(event.detail);\n    this.matches = event.detail;\n    this.render()\n  });\n};\n\nMatchListView.prototype.render = function () {\n  this.matches.forEach((match)=>{\n    const matchView = new MatchView(this.container, match);\n    matchView.render();\n  });\n};\n\n\nmodule.exports = MatchListView;\n\n\n//# sourceURL=webpack:///./src/views/matches_list_view.js?");

/***/ }),

/***/ "./src/views/select_view.js":
/*!**********************************!*\
  !*** ./src/views/select_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst SelectView = function(element){\n  this.element = element;\n};\n\nSelectView.prototype.bindEvents = function () {\n  PubSub.subscribe('Matches:all-data-ready', (event)=>{\n    const allMatches = event.detail;\n    console.log(allMatches);\n    const venueList = this.handleData(allMatches);\n    console.log(venueList);\n    this.populate(venueList);\n  });\n  this.element.addEventListener('change', (event)=>{\n    selectedVenue = event.target.value;\n    console.log(selectedVenue);\n    PubSub.publish('SelectView:regionSelected', selectedVenue);\n  })\n\n};\n\n\nSelectView.prototype.handleData = function (matches) {\n  const groups = this.getVenues(matches);\n  return groups;\n};\n\nSelectView.prototype.getVenues = function (matches) {\n  return matches.map(match => match.venue).filter((venue, index, venues)=> venues.indexOf(venue) === index);\n};\n\nSelectView.prototype.populate = function (venues) {\n\n  for (venue of venues) {\n    const option = document.createElement('option');\n    option.textContent = venue;\n    option.value = venue;\n    this.element.appendChild(option);\n\n  }\n  \n};\n\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./src/views/select_view.js?");

/***/ })

/******/ });