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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const BucketListFormView = __webpack_require__(/*! ./views/bucket_list_form_view.js */ \"./client/src/views/bucket_list_form_view.js\");\nconst BucketListGridView = __webpack_require__(/*! ./views/bucket_list_grid_view.js */ \"./client/src/views/bucket_list_grid_view.js\");\nconst BucketList = __webpack_require__(/*! ./models/bucket_list.js */ \"./client/src/models/bucket_list.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const url = 'http://localhost:3000/api/bucket-list';\n  const bucketList = new BucketList(url);\n  bucketList.bindEvents();\n  bucketList.getData();\n\n\n  const bucketListForm = document.querySelector('form#bucket-list-form');\n  const bucketListFormView = new BucketListFormView(bucketListForm);\n  bucketListFormView.bindEvents();\n\n  const bucketListContainer =\n  document.querySelector('div#bucket-list');\n  const bucketListGridView = new\n  BucketListGridView(bucketListContainer);\n  bucketListGridView.bindEvents();\n\n  // const url = 'http://localhost:3000/api/bucket-list';\n  // const bucketList = new BucketList(url);\n  // bucketList.bindEvents();\n  // bucketList.getData();\n\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request_helper.js":
/*!**********************************************!*\
  !*** ./client/src/helpers/request_helper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function(url) {\n  this.url = url;\n};\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url)\n  .then((response) => response.json());\n};\n\n// RequestHelper.prototype.post = function (payload) {\n//   return fetch(this.url, {\n//     method: \"POST\",\n//     body: JSON.stringify(payload),\n//     headers: {'Contesnt-Type': 'application/json'}\n//   })\n//   .then((response) => response.json());\n// };\n\nRequestHelper.prototype.post = function (payload) {\n  return fetch(this.url, {\n    method: 'POST',\n    body: JSON.stringify(payload),\n    headers: { 'Content-Type': 'application/json' }\n  })\n    .then((response) => response.json());\n};\n\n\nRequestHelper.prototype.delete = function (id) {\n  return fetch(`${this.url}/${id}`, {\n    method: 'DELETE',\n\n  })\n  .then((response) => response.json());\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request_helper.js?");

/***/ }),

/***/ "./client/src/models/bucket_list.js":
/*!******************************************!*\
  !*** ./client/src/models/bucket_list.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\n  const BucketList = function (url) {\n    this.url = url;\n    this.request = new RequestHelper(this.url);\n  };\n\n  BucketList.prototype.bindEvents = function () {\n    PubSub.subscribe('BucketListView: event-delete-clicked', (evt) =>{\n      this.deleteBucketList(evt.detail);\n    });\n\n    PubSub.subscribe('EventView:event-save-clicked', (evt) => {\n      this.postBucketList(evt.detail);\n    });\n  };\n\n  BucketList.prototype.getData = function () {\n      this.request.get()\n      .then((data) => {\n        PubSub.publish('BucketList: data-loaded', data);\n        // console.log(data)\n      })\n      .catch(console.err);\n  };\n\n  BucketList.prototype.postBucketList = function (bucketList) {\n    this.request.post(bucketList)\n    .then((data) =>{\n      PubSub.publish('BucketList: data-loaded', data)\n      console.log(data);\n    })\n    .catch(console.err);\n  };\n\n\n  BucketList.prototype.deleteBucketList = function (bucketListId) {\n    this.request.delete(bucketListId)\n    .then((data) => {\n      PubSub.publish('BucketList: data-loaded', data);\n    })\n    .catch(console.error);\n  };\n\n  module.exports = BucketList;\n\n\n//# sourceURL=webpack:///./client/src/models/bucket_list.js?");

/***/ }),

/***/ "./client/src/views/bucket_list_form_view.js":
/*!***************************************************!*\
  !*** ./client/src/views/bucket_list_form_view.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst BucketListFormView = function (form) {\n  this.form = form;\n};\n\nBucketListFormView.prototype.bindEvents = function () {\n  this.form.addEventListener('submit', (evt) => {\n     this.handleSubmit(evt);\n\n  });\n};\n\nBucketListFormView.prototype.handleSubmit = function (evt) {\n  evt.preventDefault();\n  console.log(evt);\n  const  newBucketList = this.createBucketList(evt.target);\n  PubSub.publish('EventView:event-save-clicked', newBucketList);\n  evt.target.reset();\n};\n\nBucketListFormView.prototype.createBucketList = function (form) {\n  const newBucketList = {\n    event: form.event.value,\n    year: form.year.value,\n    location: form.location.value\n  }\n  return newBucketList;\n};\n\nmodule.exports = BucketListFormView;\n\n\n//# sourceURL=webpack:///./client/src/views/bucket_list_form_view.js?");

/***/ }),

/***/ "./client/src/views/bucket_list_grid_view.js":
/*!***************************************************!*\
  !*** ./client/src/views/bucket_list_grid_view.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst BucketListView = __webpack_require__(/*! ./bucket_list_view.js */ \"./client/src/views/bucket_list_view.js\");\n\nconst BucketListGridView = function (container) {\n  this.container = container;\n};\n\nBucketListGridView.prototype.bindEvents = function () {\n  PubSub.subscribe('BucketList: data-loaded', (evt) =>{\n\n   this.display(evt.detail);\n   // console.log(evt.detail)\n  });\n};\n\nBucketListGridView.prototype.display = function (data) {\n  this.container.innerHTML = '';\n  const bucketListView = new BucketListView(this.container);\n  data.forEach((bucketList) => bucketListView.render(bucketList));\n};\n\nmodule.exports = BucketListGridView;\n\n\n//# sourceURL=webpack:///./client/src/views/bucket_list_grid_view.js?");

/***/ }),

/***/ "./client/src/views/bucket_list_view.js":
/*!**********************************************!*\
  !*** ./client/src/views/bucket_list_view.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\n  const BucketListView = function (container) {\n    this.container = container;\n  };\n\n  BucketListView.prototype.render = function (bucketList) {\n    const bucketListContainer = document.createElement\n\n\n    const eventName = document.createElement(\"h2\");\n    eventName.textContent = bucketList.event;\n    this.container.appendChild(eventName);\n\n    const eventYear = document.createElement(\"li\");\n    eventYear.textContent = bucketList.year;\n    this.container.appendChild(eventYear);\n\n    const eventLocation = document.createElement(\"li\");\n    eventLocation.textContent = bucketList.location;\n    this.container.appendChild(eventLocation);\n\n    const eventDeleteButton = document.createElement('button');\n      eventDeleteButton.classList.add('delete-btn');\n    eventDeleteButton.value = bucketList._id\n    this.container.appendChild(eventDeleteButton);\n\n    eventDeleteButton.addEventListener('click', (evt) => {\n      PubSub.publish('BucketListView: event-delete-clicked', evt.target.value);\n    });\n    return eventDeleteButton;\n\n  };\n\n  module.exports = BucketListView;\n\n\n//# sourceURL=webpack:///./client/src/views/bucket_list_view.js?");

/***/ })

/******/ });