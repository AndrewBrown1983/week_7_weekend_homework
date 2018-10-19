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

eval("const Matches = __webpack_require__(/*! ./models/matches.js */ \"./src/models/matches.js\");\nconst MatchListView = __webpack_require__(/*! ./views/matches_list_view.js */ \"./src/views/matches_list_view.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JavaScript Loaded');\n\n  const matches = new Matches();\n  matches.getMatchesData();\n\n  const listContainer = document.querySelector('#matches')\n  const matchesListView = new MatchListView(listContainer);\n  matchesListView.bindEvents();\n\n\n})\n\n\n//# sourceURL=webpack:///./src/app.js?");

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

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst Request = __webpack_require__(/*! ../helpers/request.js */ \"./src/helpers/request.js\");\n\nconst Matches = function(){\n  this.matches = [];\n};\n\nMatches.prototype.getMatchesData = function () {\n  console.log('hi');\n  const request = new Request('https://worldcup.sfg.io/matches');\n  request.get((data)=>{\n    console.log(data);\n    this.matches = data;\n    PubSub.publish('Matches:all-data-ready', this.matches)\n  });\n};\n\nmodule.exports = Matches;\n\n\n//# sourceURL=webpack:///./src/models/matches.js?");

/***/ }),

/***/ "./src/views/match_view.js":
/*!*********************************!*\
  !*** ./src/views/match_view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const MatchView = function(container, match){\n  this.container = container;\n  this.match = match;\n};\n\nMatchView.prototype.render = function () {\n  const matchItem = document.createElement('div');\n\n  const homeTeam = this.getHomeTeam();\n  matchItem.appendChild(homeTeam);\n\n  const awayTeam = this.getAwayTeam();\n  matchItem.appendChild(awayTeam);\n\n  const stadium = this.getStadium();\n  matchItem.appendChild(stadium);\n\n  this.container.appendChild(matchItem);\n};\n\nMatchView.prototype.getHomeTeam = function () {\n  const homeTeam = document.createElement('h3');\n  homeTeam.classList.add('home-team');\n  homeTeam.textContent = `Home Team:${ this.match.home_team.country}`;\n  return homeTeam;\n};\n\nMatchView.prototype.getAwayTeam = function () {\n  const awayTeam = document.createElement('h3');\n  awayTeam.classList.add('away-team');\n  awayTeam.textContent = `Away Team:${ this.match.away_team.country}`;\n  return awayTeam;\n};\n\nMatchView.prototype.getStadium = function () {\n  const stadium = document.createElement('p');\n  stadium.classList.add('stadium');\n  stadium.textContent = `Stadium:${ this.match.location}`;\n  return stadium;\n};\n\n\nmodule.exports = MatchView;\n\n\n//# sourceURL=webpack:///./src/views/match_view.js?");

/***/ }),

/***/ "./src/views/matches_list_view.js":
/*!****************************************!*\
  !*** ./src/views/matches_list_view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst MatchView = __webpack_require__(/*! ../views/match_view.js */ \"./src/views/match_view.js\");\n\nconst MatchListView = function (container){\n  this.container = container;\n}\n\nMatchListView.prototype.bindEvents = function () {\n  PubSub.subscribe('Matches:all-data-ready', (event)=>{\n    console.log(event.detail);\n    this.matches = event.detail;\n    this.render()\n  });\n};\n\nMatchListView.prototype.render = function () {\n  this.matches.forEach((match)=>{\n    const matchView = new MatchView(this.container, match);\n    matchView.render();\n  });\n};\n\n\nmodule.exports = MatchListView;\n\n\n//# sourceURL=webpack:///./src/views/matches_list_view.js?");

/***/ })

/******/ });