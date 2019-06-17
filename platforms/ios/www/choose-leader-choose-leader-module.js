(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choose-leader-choose-leader-module"],{

/***/ "./src/app/choose-leader/choose-leader.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/choose-leader/choose-leader.module.ts ***!
  \*******************************************************/
/*! exports provided: ChooseLeaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseLeaderPageModule", function() { return ChooseLeaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _choose_leader_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose-leader.page */ "./src/app/choose-leader/choose-leader.page.ts");







var routes = [
    {
        path: '',
        component: _choose_leader_page__WEBPACK_IMPORTED_MODULE_6__["ChooseLeaderPage"]
    }
];
var ChooseLeaderPageModule = /** @class */ (function () {
    function ChooseLeaderPageModule() {
    }
    ChooseLeaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_choose_leader_page__WEBPACK_IMPORTED_MODULE_6__["ChooseLeaderPage"]]
        })
    ], ChooseLeaderPageModule);
    return ChooseLeaderPageModule;
}());



/***/ }),

/***/ "./src/app/choose-leader/choose-leader.page.html":
/*!*******************************************************!*\
  !*** ./src/app/choose-leader/choose-leader.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>\n      Choose Leader\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <!-- <ion-card>\n    <ion-item href=\"#\" *ngFor=\"let item of listUser\">\n      <ion-icon name=\"star-outline\"></ion-icon>\n      <ion-label>{{item.name}} - ${{item.money}}</ion-label>\n    </ion-item>\n  </ion-card> -->\n\n  <!-- Checkboxes in a List -->\n  <ion-list>\n    <ion-item *ngFor=\"let entry of listUser\">\n      <ion-label>{{entry.name}} - $ {{entry.money}}</ion-label>\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\" (ionChange)=\"checkEvent($event, entry.id)\">\n      </ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <ion-button expand=\"block\" fill=\"outline\" (click)=\"doPlay()\">Play</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/choose-leader/choose-leader.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/choose-leader/choose-leader.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nob29zZS1sZWFkZXIvY2hvb3NlLWxlYWRlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/choose-leader/choose-leader.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/choose-leader/choose-leader.page.ts ***!
  \*****************************************************/
/*! exports provided: ChooseLeaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseLeaderPage", function() { return ChooseLeaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ChooseLeaderPage = /** @class */ (function () {
    function ChooseLeaderPage(gamesv, router) {
        this.gamesv = gamesv;
        this.router = router;
        this.listUser = [];
    }
    ChooseLeaderPage.prototype.ngOnInit = function () {
        console.log('in choose leader ', this.gamesv.infoGameComing);
        var num = this.gamesv.infoGameComing ? this.gamesv.infoGameComing.numberPlayer : '';
        console.log('number play', num);
        if (this.gamesv.infoGameComing) {
            var tempListUser = this.gamesv.infoGameComing ? this.gamesv.infoGameComing.listGamer.splice(0, num) : [];
            this.listUser = tempListUser;
        }
    };
    ChooseLeaderPage.prototype.checkEvent = function (e, id) {
        console.log('e', e);
        if (e) {
            if (e.detail.checked) {
                this.listUser.map(function (user) {
                    if (user.id != id) {
                        user.isChecked = false;
                    }
                });
            }
        }
        console.log('list user', this.listUser);
        this.gamesv.infoGameComing.listGamer = this.listUser;
    };
    ChooseLeaderPage.prototype.doPlay = function () {
        this.router.navigate(['/board-playing']);
    };
    ChooseLeaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-leader',
            template: __webpack_require__(/*! ./choose-leader.page.html */ "./src/app/choose-leader/choose-leader.page.html"),
            styles: [__webpack_require__(/*! ./choose-leader.page.scss */ "./src/app/choose-leader/choose-leader.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChooseLeaderPage);
    return ChooseLeaderPage;
}());



/***/ })

}]);
//# sourceMappingURL=choose-leader-choose-leader-module.js.map