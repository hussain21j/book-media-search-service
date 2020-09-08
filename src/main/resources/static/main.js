(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,body {\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: 400;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-size: 1rem;\r\n  line-height: 1.58;\r\n  color: #333;\r\n  background-color: #f4f4f4;\r\n  height: 100%;\r\n}\r\n\r\nbody:before {\r\n  height: 50%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background: #128ff2;\r\n  content: \"\";\r\n  z-index: 0;\r\n}\r\n\r\n.clearfix:after {\r\n  display: block;\r\n  content: \"\";\r\n  clear: both;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.form-control {\r\n  width: 100%;\r\n  min-height: 38px;\r\n  font-size: 15px;\r\n  border: 1px solid #c8c8c8;\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 15px;\r\n}\r\n\r\ninput {\r\n  padding-left: 10px;\r\n  outline: none;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.7em;\r\n}\r\n\r\na {\r\n  color: #128ff2;\r\n}\r\n\r\nbutton {\r\n  box-shadow: none;\r\n  border: 1px solid transparent;\r\n  font-size: 14px;\r\n  outline: none;\r\n  line-height: 100%;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  padding: 0.6rem 1rem;\r\n  border-radius: 2px;\r\n  transition: all 0.2s ease-in-out;\r\n  cursor: pointer;\r\n  min-height: 38px;\r\n}\r\n\r\nbutton.default {\r\n  background-color: #e8e8e8;\r\n  color: #333;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\nbutton.primary {\r\n  background-color: #128ff2;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\r\n  color: #fff;\r\n}\r\n\r\nbutton.accent {\r\n  background-color: #ff4743;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\r\n  color: #fff;\r\n}\r\n\r\n#username-page {\r\n  text-align: center;\r\n}\r\n\r\n.username-page-container {\r\n  background: #fff;\r\n  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\r\n  border-radius: 2px;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  display: inline-block;\r\n  margin-top: 42px;\r\n  vertical-align: middle;\r\n  position: relative;\r\n  padding: 35px 55px 35px;\r\n  min-height: 250px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0 auto;\r\n  margin-top: -160px;\r\n}\r\n\r\n.search-result-container {\r\n  max-width: 700px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: #fff;\r\n  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\r\n  margin-top: 30px;\r\n  height: 580px;\r\n  position: relative;\r\n}\r\n\r\n.username-page-container .username-submit {\r\n  margin-top: 10px;\r\n}\r\n\r\n#chat-page {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.chat-container {\r\n  max-width: 700px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: #fff;\r\n  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\r\n  margin-top: 30px;\r\n  height: 500px;\r\n  position: relative;\r\n}\r\n\r\n#chat-page ul {\r\n  list-style-type: none;\r\n  background-color: #FFF;\r\n  margin: 0;\r\n  overflow: auto;\r\n  overflow-y: scroll;\r\n  padding: 0 20px 0px 20px;\r\n  height: calc(100% - 150px);\r\n}\r\n\r\n#search-result-page ul {\r\n  list-style-type: none;\r\n  background-color: #FFF;\r\n  margin: 0;\r\n  overflow: auto;\r\n  overflow-y: scroll;\r\n  padding: 0 20px 0px 20px;\r\n  height: calc(100% - 150px);\r\n}\r\n\r\n#chat-page #messageForm {\r\n  padding: 20px;\r\n}\r\n\r\n#chat-page ul li {\r\n  line-height: 1.5rem;\r\n  padding: 10px 20px;\r\n  margin: 0;\r\n  border-bottom: 1px solid #f4f4f4;\r\n}\r\n\r\n#chat-page ul li p {\r\n  margin: 0;\r\n}\r\n\r\n#chat-page .event-message {\r\n  width: 100%;\r\n  text-align: center;\r\n  clear: both;\r\n}\r\n\r\n#chat-page .event-message p {\r\n  color: #777;\r\n  font-size: 14px;\r\n  word-wrap: break-word;\r\n}\r\n\r\n#chat-page .chat-message {\r\n  padding-left: 68px;\r\n  position: relative;\r\n}\r\n\r\n#chat-page .chat-message i {\r\n  position: absolute;\r\n  width: 42px;\r\n  height: 42px;\r\n  overflow: hidden;\r\n  left: 10px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  font-size: 18px;\r\n  line-height: 42px;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 50%;\r\n  font-style: normal;\r\n  text-transform: uppercase;\r\n}\r\n\r\n#chat-page .chat-message span {\r\n  color: #333;\r\n  font-weight: 600;\r\n}\r\n\r\n#chat-page .chat-message p {\r\n  color: #43464b;\r\n}\r\n\r\n#messageForm .input-group input {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n#messageForm .input-group button {\r\n  float: left;\r\n  width: auto;\r\n  height: 38px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.search-result-header {\r\n  text-align: center;\r\n  padding: 15px;\r\n  border-bottom: 1px solid #ececec;\r\n}\r\n\r\n.page-heading {\r\n  margin: 0;\r\n  font-weight: 700;\r\n  font-size: 150%;\r\n  text-align: center;\r\n}\r\n\r\n.logged-user {\r\n  float: right;\r\n  margin-right: 5px;\r\n  background-color: #c8c8c8; \r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  border-radius: 25px;\r\n  font-weight: 700;\r\n}\r\n\r\n.connecting {\r\n  padding-top: 5px;\r\n  text-align: center;\r\n  color: #777;\r\n  position: absolute;\r\n  top: 65px;\r\n  width: 100%;\r\n}\r\n\r\n#search-result-box {\r\n  border-style:solid;\r\n   border-color: #777;\r\n   border-width:0.5px;\r\n   padding-top:5px;\r\n   padding-bottom:5px;\r\n   padding-right:5px;\r\n   padding-left:5px;\r\n   margin-top:5px;\r\n   margin-bottom:5px;\r\n   margin-right:5px;\r\n   margin-left:5px;\r\n   border-radius: 15px;\r\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.sender {\r\n font-family: verdana;\r\n font-style: italic;\r\n font-size: 12px;\r\n color: #777;\r\n}\r\n\r\n.content {\r\n font-family: comic sans ms;\r\n font-size: 15px;\r\n padding-left:15px;\r\n}\r\n\r\n.date {\r\n text-align: right;\r\n font-family: Times New Roman;\r\n font-size: 15px;\r\n color: #777;\r\n padding-right:8px;\r\n}\r\n\r\n#search-result-control {\r\n  align-content: center;\r\n  text-align: center;\r\n  margin-left: 50px;\r\n  margin-left: 30%;;\r\n  margin-right: 30%;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #ff4743;  \r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsMkRBQTJEO0VBQzNELGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJDQUEyQztFQUMzQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkNBQTJDO0VBQzNDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsUUFBUTtFQUNSLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsMENBQTBDO0VBQzFDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QiwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwwQkFBMEI7QUFDNUI7O0FBSUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBSUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7R0FDakIsa0JBQWtCO0dBQ2xCLGtCQUFrQjtHQUNsQixlQUFlO0dBQ2Ysa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixnQkFBZ0I7R0FDaEIsY0FBYztHQUNkLGlCQUFpQjtHQUNqQixnQkFBZ0I7R0FDaEIsZUFBZTtHQUNmLG1CQUFtQjtHQUNuQiw0RUFBNEU7QUFDL0U7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixXQUFXO0FBQ1o7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQiw0QkFBNEI7Q0FDNUIsZUFBZTtDQUNmLFdBQVc7Q0FDWCxpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwsYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHk6YmVmb3JlIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogIzEyOGZmMjtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5jbGVhcmZpeDphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMzhweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAxLjdlbTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICMxMjhmZjI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBsaW5lLWhlaWdodDogMTAwJTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZzogMC42cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtaW4taGVpZ2h0OiAzOHB4O1xyXG59XHJcblxyXG5idXR0b24uZGVmYXVsdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICBjb2xvcjogIzMzMztcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG5idXR0b24ucHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyOGZmMjtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5idXR0b24uYWNjZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NzQzO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiN1c2VybmFtZS1wYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51c2VybmFtZS1wYWdlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDFweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDQycHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMzVweCA1NXB4IDM1cHg7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogLTE2MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdC1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMTFweCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgaGVpZ2h0OiA1ODBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51c2VybmFtZS1wYWdlLWNvbnRhaW5lciAudXNlcm5hbWUtc3VibWl0IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuI2NoYXQtcGFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNoYXQtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDExcHggcmdiYSgwLCAwLCAwLCAwLjI3KTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuI2NoYXQtcGFnZSB1bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwYWRkaW5nOiAwIDIwcHggMHB4IDIwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNTBweCk7XHJcbn1cclxuXHJcbiNzZWFyY2gtcmVzdWx0LXBhZ2UgdWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgcGFkZGluZzogMCAyMHB4IDBweCAyMHB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTUwcHgpO1xyXG59XHJcblxyXG5cclxuXHJcbiNjaGF0LXBhZ2UgI21lc3NhZ2VGb3JtIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jY2hhdC1wYWdlIHVsIGxpIHtcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY0ZjQ7XHJcbn1cclxuXHJcbiNjaGF0LXBhZ2UgdWwgbGkgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuXHJcbiNjaGF0LXBhZ2UgLmV2ZW50LW1lc3NhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuI2NoYXQtcGFnZSAuZXZlbnQtbWVzc2FnZSBwIHtcclxuICBjb2xvcjogIzc3NztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG5cclxuI2NoYXQtcGFnZSAuY2hhdC1tZXNzYWdlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDY4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jY2hhdC1wYWdlIC5jaGF0LW1lc3NhZ2UgaSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA0MnB4O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbiNjaGF0LXBhZ2UgLmNoYXQtbWVzc2FnZSBzcGFuIHtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4jY2hhdC1wYWdlIC5jaGF0LW1lc3NhZ2UgcCB7XHJcbiAgY29sb3I6ICM0MzQ2NGI7XHJcbn1cclxuXHJcbiNtZXNzYWdlRm9ybSAuaW5wdXQtZ3JvdXAgaW5wdXQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbiNtZXNzYWdlRm9ybSAuaW5wdXQtZ3JvdXAgYnV0dG9uIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQtaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcclxufVxyXG5cclxuLnBhZ2UtaGVhZGluZyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2dlZC11c2VyIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4YzhjODsgXHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmNvbm5lY3Rpbmcge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNzZWFyY2gtcmVzdWx0LWJveCB7XHJcbiAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gICBib3JkZXItY29sb3I6ICM3Nzc7XHJcbiAgIGJvcmRlci13aWR0aDowLjVweDtcclxuICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICBwYWRkaW5nLWJvdHRvbTo1cHg7XHJcbiAgIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG4gICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gICBtYXJnaW4tdG9wOjVweDtcclxuICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLnNlbmRlciB7XHJcbiBmb250LWZhbWlseTogdmVyZGFuYTtcclxuIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuIGZvbnQtc2l6ZTogMTJweDtcclxuIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiBmb250LWZhbWlseTogY29taWMgc2FucyBtcztcclxuIGZvbnQtc2l6ZTogMTVweDtcclxuIHBhZGRpbmctbGVmdDoxNXB4O1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiB0ZXh0LWFsaWduOiByaWdodDtcclxuIGZvbnQtZmFtaWx5OiBUaW1lcyBOZXcgUm9tYW47XHJcbiBmb250LXNpemU6IDE1cHg7XHJcbiBjb2xvcjogIzc3NztcclxuIHBhZGRpbmctcmlnaHQ6OHB4O1xyXG59XHJcblxyXG4jc2VhcmNoLXJlc3VsdC1jb250cm9sIHtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7O1xyXG4gIG1hcmdpbi1yaWdodDogMzAlO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDc0MzsgIFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <title>{{title}}</title>\n</head>\n\n<body>\n    <alert type=\"danger\" *ngIf=\"!isValidationOk\" style=\"text-align: center\">{{errorMessage}}</alert>\n    <!--Search home page-->\n    <div id=\"username-page\" *ngIf=\"isSearchInputScreen\">\n        <div class=\"username-page-container\">\n            <h1 class=\"title\">{{applicationName}}</h1>\n            <form id=\"searchForm\" name=\"searchForm\">\n                <div class=\"form-group\">\n                    <input [(ngModel)]=\"searchText\" id=\"searchText\" placeholder=\"Enter text to search\" name=\"searchText\"\n                        class=\"form-control\" />\n                </div>\n                <div class=\"form-group\">\n                    <button type=\"submit\" (click)=\"searchBookAndMedia($event)\" class=\"accent username-submit\">Search</button>\n                </div>\n            </form>\n        </div>\n    </div>\n\n   \n    <!--search result division-->\n    <div id=\"search-result-page\" *ngIf=\"isSearchResultScreen\">\n        <div class=\"search-result-container\">\n            <div class=\"search-result-header\">\n                    <span class=\"page-heading\">Search Result</span>\n            </div>\n            <ul>\n                <li *ngFor=\"let result of searchResultList\">\n                    <div id=\"search-result-box\">\n                        <div class=\"sender\">\n                            <span>{{result.title}}</span>\n                        </div>\n                        <div class=\"content\">\n                            <span>{{result.type}}</span>\n                        </div>\n                        <div class=\"date\">\n                            <span>{{result.information}}</span>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <div id=\"search-result-control\">\n                <button type=\"button\" (click)=\"backToSearch($event)\" class=\"primary\">Back to Search</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"footer\">\n        <p style=\"float: right; margin-right: 5%\" >Assigngnment solution - Tayab Hussain</p>\n    </div>\n\n\n\n    <router-outlet></router-outlet>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _models_Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Config */ "./src/app/models/Config.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(searchService) {
        this.searchText = "";
        this.message = "";
        this.applicationName = "Search Application";
        this.isSearchInputScreen = true;
        this.isChatScreen = false;
        this.isValidationOk = true;
        this.isConnected = false;
        this.isHistoryScreen = false;
        this.isSearchResultScreen = false;
        this.chatHistoryList = [];
        this.searchResultList = []; //declare this model
        this.title = 'nng-search-app';
        this.searchService = searchService;
    }
    /**
     * Extract details from the payload
     */
    AppComponent.prototype.onMessageReceived = function (payload) {
        console.log("message received");
        var message = JSON.parse(payload.body);
        var messageElement = window.document.createElement('li');
        messageElement.style.lineHeight = '1.5rem';
        messageElement.style.padding = '5px 5px';
        messageElement.style.margin = '0';
        messageElement.style.borderBottom = '1px solid #f4f4f4';
        if (message.type === 'JOIN') {
            //style join message
            messageElement.style.width = '100%';
            messageElement.style.textAlign = 'center';
            messageElement.style.clear = 'both';
            messageElement.style.color = '#777';
            messageElement.style.fontSize = '14px';
            messageElement.style.wordWrap = 'break-word';
            message.content = message.sender + ' joined!';
        }
        else if (message.type === 'LEAVE') {
            message.content = message.sender + ' left!';
        }
        else {
            //style message element
            messageElement.style.paddingLeft = '68px';
            messageElement.style.position = 'relative';
            var avatarElement = window.document.createElement('i');
            //style avtar
            avatarElement = this.styeElementAvtar(avatarElement);
            var avatarText = window.document.createTextNode(message.sender[0]);
            avatarElement.appendChild(avatarText);
            avatarElement.style.backgroundColor = this.getAvatarColor(message.sender);
            messageElement.appendChild(avatarElement);
            var usernameElement = window.document.createElement('span');
            usernameElement.style.color = '#333';
            usernameElement.style.fontWeight = '600';
            var usernameText = window.document.createTextNode(message.sender);
            usernameElement.appendChild(usernameText);
            messageElement.appendChild(usernameElement);
        }
        var textElement = window.document.createElement('p');
        var messageText = window.document.createTextNode(message.content);
        textElement.appendChild(messageText);
        messageElement.appendChild(textElement);
        var messageArea = window.document.getElementById("messageArea");
        messageArea.appendChild(messageElement);
    };
    AppComponent.prototype.getAvatarColor = function (messageSender) {
        var hash = 0;
        for (var i = 0; i < messageSender.length; i++) {
            hash = 31 * hash + messageSender.charCodeAt(i);
        }
        var index = Math.abs(hash % _models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].colors.length);
        return _models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].colors[index];
    };
    /**
     * get chat history
     */
    AppComponent.prototype.publishHistory = function (event) {
        var _this = this;
        console.log("fetching history");
        this.isChatScreen = false;
        this.isSearchInputScreen = false;
        this.isHistoryScreen = true;
        this.searchService.getChatHistory().subscribe(function (resp) {
            _this.chatHistoryList = []; //clean the list
            _this.chatHistoryList = resp;
        }, function (error) {
            _this.errorMessage = "Error in fetching the history";
        });
    };
    /**
     * searches the book and media service
     * todo: validate it
     */
    AppComponent.prototype.searchBookAndMedia = function (event) {
        var _this = this;
        console.log("search text:" + this.searchText);
        //claean the list of result 
        this.searchResultList = []; //clean the list
        if (this.validateInput()) {
            this.isSearchInputScreen = false;
            this.isSearchResultScreen = true;
            this.searchService.getSearchResult(this.searchText).subscribe(function (resp) {
                _this.searchResultList = resp;
                //if list is empty 
                if (_this.searchResultList.length == 0) {
                    _this.errorMessage = "No Matching records found, Please go back and search again";
                    _this.isValidationOk = false;
                }
            }, function (error) {
                console.log("error in searchig reocrds");
                _this.errorMessage = ":( Oops , something severe happened at the service layer.";
                _this.isValidationOk = false;
            });
        }
    };
    AppComponent.prototype.validateInput = function () {
        var validateStatus = true;
        if (this.searchText.trim().trim().length != 0) {
            validateStatus = true;
            this.isValidationOk = true;
        }
        else {
            validateStatus = false;
            this.isValidationOk = false;
            this.errorMessage = "Please fill the valid text to search";
        }
        return validateStatus;
    };
    /**
    * function called when back button on the chat history is triggered
    */
    AppComponent.prototype.backToSearch = function () {
        this.isSearchInputScreen = true;
        this.isSearchResultScreen = false;
        this.isValidationOk = true;
        this.errorMessage = "";
    };
    /**
     * Styling for avtar element
     */
    AppComponent.prototype.styeElementAvtar = function (avatarElement) {
        avatarElement.style.position = 'absolute';
        avatarElement.style.width = '42px';
        avatarElement.style.height = '42px';
        avatarElement.style.overflow = 'hidden';
        avatarElement.style.left = '10px';
        avatarElement.style.display = 'inline-block';
        avatarElement.style.verticalAlign = 'middle';
        avatarElement.style.fontSize = '18px';
        avatarElement.style.lineHeight = '42px';
        avatarElement.style.color = '#fff';
        avatarElement.style.textAlign = 'center';
        avatarElement.style.borderRadius = '50%';
        avatarElement.style.fontStyle = 'normal';
        avatarElement.style.textTransform = 'uppercase';
        return avatarElement;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        /**
         * Application component
         * @author Tayab Hussain
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/Config.ts":
/*!**********************************!*\
  !*** ./src/app/models/Config.ts ***!
  \**********************************/
/*! exports provided: Config, ChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessage", function() { return ChatMessage; });
/**
 * Class contains the common proerties
 * @author Tayab Hussain
 */
var Config = /** @class */ (function () {
    function Config() {
    }
    /**
     * color codes for avtar
     */
    Config.colors = [
        '#2196F3', '#32c787', '#00BCD4', '#ff5652',
        '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
    ];
    /**
     * Web socket server URL
     */
    Config.serverWebSocketURL = "http://localhost:8080/ws";
    Config.apiBaseURL = "http://localhost:8080/searchservice/";
    Config.endPointChatHistory = "chat/history";
    Config.searchApiURL = "search?name=";
    return Config;
}());

/**
 * Chat message class
 */
var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Config */ "./src/app/models/Config.ts");




/**
 * Angular service to interect with the API
 * @author Tayab Hussain
 */
var SearchService = /** @class */ (function () {
    function SearchService(_http) {
        this._http = _http;
    }
    ;
    SearchService.prototype.getChatHistory = function () {
        return this._http.get(_models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].apiBaseURL + _models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].endPointChatHistory);
    };
    /**
     * call the search api
     */
    SearchService.prototype.getSearchResult = function (name) {
        return this._http.get(_models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].apiBaseURL + _models_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].searchApiURL + name);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\workspace\ng-search-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map