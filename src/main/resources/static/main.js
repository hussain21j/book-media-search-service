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

module.exports = "* \r\n/*\r\n{\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n*/\r\n\r\nhtml,body {\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: 400;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-size: 1rem;\r\n  line-height: 1.58;\r\n  color: #333;\r\n  background-color: #f4f4f4;\r\n  height: 100%;\r\n}\r\n\r\nbody:before {\r\n  height: 50%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background: #128ff2;\r\n  content: \"\";\r\n  z-index: 0;\r\n}\r\n\r\n.clearfix:after {\r\n  display: block;\r\n  content: \"\";\r\n  clear: both;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.form-control {\r\n  width: 100%;\r\n  min-height: 38px;\r\n  font-size: 15px;\r\n  border: 1px solid #c8c8c8;\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 15px;\r\n}\r\n\r\ninput {\r\n  padding-left: 10px;\r\n  outline: none;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.7em;\r\n}\r\n\r\na {\r\n  color: #128ff2;\r\n}\r\n\r\nbutton {\r\n  box-shadow: none;\r\n  border: 1px solid transparent;\r\n  font-size: 14px;\r\n  outline: none;\r\n  line-height: 100%;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  padding: 0.6rem 1rem;\r\n  border-radius: 2px;\r\n  transition: all 0.2s ease-in-out;\r\n  cursor: pointer;\r\n  min-height: 38px;\r\n}\r\n\r\nbutton.default {\r\n  background-color: #e8e8e8;\r\n  color: #333;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\nbutton.primary {\r\n  background-color: #128ff2;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\r\n  color: #fff;\r\n}\r\n\r\nbutton.accent {\r\n  background-color: #ff4743;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);\r\n  color: #fff;\r\n}\r\n\r\n#search-home-page {\r\n  text-align: center;\r\n}\r\n\r\n.search-home-page-container {\r\n  background: #fff;\r\n  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\r\n  border-radius: 2px;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  display: inline-block;\r\n  margin-top: 42px;\r\n  vertical-align: middle;\r\n  position: relative;\r\n  padding: 35px 55px 35px;\r\n  min-height: 250px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0 auto;\r\n  margin-top: -160px;\r\n}\r\n\r\n.search-result-container {\r\n  max-width: 700px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: #fff;\r\n  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n  height: 800px;\r\n  position: relative;\r\n}\r\n\r\n.search-home-page-container .search-submit {\r\n  margin-top: 10px;\r\n}\r\n\r\n#search-result-page ul {\r\n  list-style-type: none;\r\n  background-color: #FFF;\r\n  margin: 0;\r\n  overflow: auto;\r\n  overflow-y: scroll;\r\n  padding: 0 20px 0px 20px;\r\n  height: calc(100% - 150px);\r\n}\r\n\r\n.search-result-header {\r\n  text-align: center;\r\n  padding: 15px;\r\n  border-bottom: 1px solid #ececec;\r\n}\r\n\r\n.page-heading {\r\n  margin: 0;\r\n  font-weight: 700;\r\n  font-size: 150%;\r\n  text-align: center;\r\n}\r\n\r\n#search-result-box {\r\n  border-style:solid;\r\n   border-color: #777;\r\n   border-width:0.5px;\r\n   padding-top:5px;\r\n   padding-bottom:5px;\r\n   padding-right:5px;\r\n   padding-left:5px;\r\n   margin-top:5px;\r\n   margin-bottom:5px;\r\n   margin-right:5px;\r\n   margin-left:5px;\r\n   border-radius: 15px;\r\n   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.search-item-title {\r\n font-family: verdana;\r\n font-style: italic;\r\n font-size: 12px;\r\n color: #777;\r\n}\r\n\r\n.content {\r\n font-family: comic sans ms;\r\n font-size: 15px;\r\n padding-left:15px;\r\n}\r\n\r\n.search-item-artist {\r\n text-align: right;\r\n font-family: Times New Roman;\r\n font-size: 15px;\r\n color: #777;\r\n padding-right:8px;\r\n}\r\n\r\n#search-result-control {\r\n  align-content: center;\r\n  text-align: center;\r\n  margin-left: 50px;\r\n  margin-left: 30%;;\r\n  margin-right: 30%;\r\n}\r\n\r\n.footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #ff4743;  \r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7RUFVRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsMkRBQTJEO0VBQzNELGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJDQUEyQztFQUMzQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkNBQTJDO0VBQzNDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsUUFBUTtFQUNSLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsMENBQTBDO0VBQzFDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUlBO0VBQ0Usa0JBQWtCO0dBQ2pCLGtCQUFrQjtHQUNsQixrQkFBa0I7R0FDbEIsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsZ0JBQWdCO0dBQ2hCLGNBQWM7R0FDZCxpQkFBaUI7R0FDakIsZ0JBQWdCO0dBQ2hCLGVBQWU7R0FDZixtQkFBbUI7R0FDbkIsNEVBQTRFO0FBQy9FOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsV0FBVztBQUNaOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsNEJBQTRCO0NBQzVCLGVBQWU7Q0FDZixXQUFXO0NBQ1gsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiBcclxuLypcclxue1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4qL1xyXG5cclxuaHRtbCxib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41ODtcclxuICBjb2xvcjogIzMzMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keTpiZWZvcmUge1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjMTI4ZmYyO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmNsZWFyZml4OmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAzOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjOGM4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDEuN2VtO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzEyOGZmMjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwYWRkaW5nOiAwLjZyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDM4cHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWZhdWx0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbmJ1dHRvbi5wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI4ZmYyO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmJ1dHRvbi5hY2NlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ3NDM7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI3NlYXJjaC1ob21lLXBhZ2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC1ob21lLXBhZ2UtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDExcHggcmdiYSgwLCAwLCAwLCAwLjI3KTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogNDJweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAzNXB4IDU1cHggMzVweDtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAtMTYwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0LWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDFweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGhlaWdodDogODAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VhcmNoLWhvbWUtcGFnZS1jb250YWluZXIgLnNlYXJjaC1zdWJtaXQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNzZWFyY2gtcmVzdWx0LXBhZ2UgdWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgcGFkZGluZzogMCAyMHB4IDBweCAyMHB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTUwcHgpO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdC1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xyXG59XHJcblxyXG4ucGFnZS1oZWFkaW5nIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbiNzZWFyY2gtcmVzdWx0LWJveCB7XHJcbiAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gICBib3JkZXItY29sb3I6ICM3Nzc7XHJcbiAgIGJvcmRlci13aWR0aDowLjVweDtcclxuICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICBwYWRkaW5nLWJvdHRvbTo1cHg7XHJcbiAgIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG4gICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gICBtYXJnaW4tdG9wOjVweDtcclxuICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLnNlYXJjaC1pdGVtLXRpdGxlIHtcclxuIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xyXG4gZm9udC1zdHlsZTogaXRhbGljO1xyXG4gZm9udC1zaXplOiAxMnB4O1xyXG4gY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuIGZvbnQtZmFtaWx5OiBjb21pYyBzYW5zIG1zO1xyXG4gZm9udC1zaXplOiAxNXB4O1xyXG4gcGFkZGluZy1sZWZ0OjE1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtaXRlbS1hcnRpc3Qge1xyXG4gdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiBmb250LWZhbWlseTogVGltZXMgTmV3IFJvbWFuO1xyXG4gZm9udC1zaXplOiAxNXB4O1xyXG4gY29sb3I6ICM3Nzc7XHJcbiBwYWRkaW5nLXJpZ2h0OjhweDtcclxufVxyXG5cclxuI3NlYXJjaC1yZXN1bHQtY29udHJvbCB7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogMzAlOztcclxuICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ3NDM7ICBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<body>\r\n    <alert type=\"danger\" *ngIf=\"!isValidationOk\" style=\"text-align: center\">{{errorMessage}}</alert>\r\n    <!--Search home page-->\r\n    <div id=\"search-home-page\" *ngIf=\"isSearchInputScreen\">\r\n        <div class=\"search-home-page-container\">\r\n            <h1 class=\"title\">{{applicationName}}</h1>\r\n            <form id=\"searchForm\" name=\"searchForm\">\r\n                <div class=\"form-group\">\r\n                    <input [(ngModel)]=\"searchText\" id=\"searchText\" placeholder=\"Enter text to search\" name=\"searchText\"\r\n                        class=\"form-control\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" (click)=\"searchBookAndMedia($event)\" class=\"accent search-submit\">Search</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n   \r\n    <!--search result division-->\r\n    <div id=\"search-result-page\" *ngIf=\"isSearchResultScreen\">\r\n        <div class=\"search-result-container\">\r\n            <div class=\"search-result-header\">\r\n                    <span class=\"page-heading\">Search Result</span>\r\n            </div>\r\n            <ul>\r\n                <li *ngFor=\"let result of searchResultList\">\r\n                    <div id=\"search-result-box\">\r\n                        <div class=\"search-item-title\">\r\n                            <span>Title : {{result.title}}</span>\r\n                        </div>\r\n                        <div class=\"search-item-type\">\r\n                            <span>{{result.type}}</span>\r\n                        </div>\r\n                        <div class=\"search-item-artist\">\r\n                            <span>Author/artist: </span>\r\n                            <span>{{result.authorsOrArtists}}</span>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n            <div id=\"search-result-control\">\r\n                <button type=\"button\" (click)=\"backToSearch($event)\" class=\"primary\">Back to Search</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"footer\">\r\n        <p style=\"float: right; margin-right: 5%\" >Assigngnment solution - Tayab Hussain</p>\r\n    </div>\r\n\r\n\r\n\r\n    <router-outlet></router-outlet>\r\n</body>\r\n\r\n"

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



var AppComponent = /** @class */ (function () {
    function AppComponent(searchService) {
        this.searchText = "";
        this.message = "";
        this.applicationName = "Search Application";
        this.isSearchInputScreen = true;
        this.isValidationOk = true;
        this.isConnected = false;
        this.isHistoryScreen = false;
        this.isSearchResultScreen = false;
        this.searchResultList = []; //declare this model
        this.title = 'ng-search-app';
        this.searchService = searchService;
    }
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
    /**
     * validates the search input screen
     */
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
    * function called when back to search button is triggered
    */
    AppComponent.prototype.backToSearch = function () {
        this.isSearchInputScreen = true;
        this.isSearchResultScreen = false;
        this.isValidationOk = true;
        this.errorMessage = "";
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
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
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
    Config.searchApiURL = "search?text=";
    return Config;
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