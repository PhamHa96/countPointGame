(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacy-privacy-module"],{

/***/ "./src/app/privacy/privacy.module.ts":
/*!*******************************************!*\
  !*** ./src/app/privacy/privacy.module.ts ***!
  \*******************************************/
/*! exports provided: PrivacyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPageModule", function() { return PrivacyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy.page */ "./src/app/privacy/privacy.page.ts");







var routes = [
    {
        path: '',
        component: _privacy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPage"]
    }
];
var PrivacyPageModule = /** @class */ (function () {
    function PrivacyPageModule() {
    }
    PrivacyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_privacy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPage"]]
        })
    ], PrivacyPageModule);
    return PrivacyPageModule;
}());



/***/ }),

/***/ "./src/app/privacy/privacy.page.html":
/*!*******************************************!*\
  !*** ./src/app/privacy/privacy.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>privacy</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/privacy/privacy.page.scss":
/*!*******************************************!*\
  !*** ./src/app/privacy/privacy.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3kvcHJpdmFjeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/privacy/privacy.page.ts":
/*!*****************************************!*\
  !*** ./src/app/privacy/privacy.page.ts ***!
  \*****************************************/
/*! exports provided: PrivacyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPage", function() { return PrivacyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivacyPage = /** @class */ (function () {
    function PrivacyPage() {
    }
    PrivacyPage.prototype.ngOnInit = function () {
    };
    PrivacyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.page.html */ "./src/app/privacy/privacy.page.html"),
            styles: [__webpack_require__(/*! ./privacy.page.scss */ "./src/app/privacy/privacy.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivacyPage);
    return PrivacyPage;
}());



/***/ })

}]);
//# sourceMappingURL=privacy-privacy-module.js.map