(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choose-choose-module"],{

/***/ "./src/app/choose/choose.module.ts":
/*!*****************************************!*\
  !*** ./src/app/choose/choose.module.ts ***!
  \*****************************************/
/*! exports provided: ChoosePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosePageModule", function() { return ChoosePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _choose_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose.page */ "./src/app/choose/choose.page.ts");







var routes = [
    {
        path: '',
        component: _choose_page__WEBPACK_IMPORTED_MODULE_6__["ChoosePage"]
    }
];
var ChoosePageModule = /** @class */ (function () {
    function ChoosePageModule() {
    }
    ChoosePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_choose_page__WEBPACK_IMPORTED_MODULE_6__["ChoosePage"]]
        })
    ], ChoosePageModule);
    return ChoosePageModule;
}());



/***/ }),

/***/ "./src/app/choose/choose.page.html":
/*!*****************************************!*\
  !*** ./src/app/choose/choose.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>\n      Choose\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-item>\n    <ion-label>\n      <ion-icon name=\"body\"></ion-icon> Number player\n    </ion-label>\n    <ion-select (ionChange)=\"onChangeSelect($event)\" okText=\"Ok\" cancelText=\"Cancel\"\n      [(ngModel)]=\"infoGame.numberPlayer\">\n      <ion-select-option value=\"2\">2</ion-select-option>\n      <ion-select-option value=\"3\">3</ion-select-option>\n      <ion-select-option value=\"4\">4</ion-select-option>\n      <ion-select-option value=\"5\">5</ion-select-option>\n      <ion-select-option value=\"6\">6</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-img src=\"./../../assets/default_avatar.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"8\">\n        <form #infoPlayer>\n          <ion-item>\n            <ion-label>Name:</ion-label>\n            <ion-input [(ngModel)]=\"infoGame.listGamer[0].name\" name=\"name1\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Money have:</ion-label>\n            <ion-input [(ngModel)]=\"infoGame.listGamer[0].money\" name=\"money1\"></ion-input>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-img src=\"./../../assets/default_avatar.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"8\">\n        <form #infoPlayer>\n          <ion-item>\n            <ion-label>Name:</ion-label>\n            <ion-input [(ngModel)]=\"infoGame.listGamer[1].name\" name=\"name2\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Money have:</ion-label>\n            <ion-input [(ngModel)]=\"infoGame.listGamer[1].money\" name=\"money2\"></ion-input>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"infoGame.numberPlayer > 2\">\n      <ion-col size=\"4\">\n        <ion-img src=\"./../../assets/default_avatar.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"8\">\n        <form #infoPlayer>\n          <ion-item>\n            <ion-label>Name:</ion-label>\n            <ion-input [(ngModel)]=\"infoGame.listGamer[2].name\" name=\"name3\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Money have:</ion-label>\n            <ion-input [(ngModel)]=\"infoGame.listGamer[2].money\" name=\"money3\"></ion-input>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"infoGame.numberPlayer > 3\">\n      <ion-col size=\"4\">\n        <ion-img src=\"./../../assets/default_avatar.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"8\">\n        <form #infoPlayer>\n          <ion-item>\n            <ion-label>Name:</ion-label>\n            <ion-input [(ngModel)]=\"infoGame.listGamer[3].name\" name=\"name4\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Money have:</ion-label>\n            <ion-input [(ngModel)]=\"infoGame.listGamer[3].money\" name=\"money4\"></ion-input>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"infoGame.numberPlayer > 4\">\n      <ion-col size=\"4\">\n        <ion-img src=\"./../../assets/default_avatar.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"8\">\n        <form #infoPlayer>\n          <ion-item>\n            <ion-label>Name:</ion-label>\n            <ion-input [(ngModel)]=\"infoGame.listGamer[4].name\" name=\"name5\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Money have:</ion-label>\n            <ion-input [(ngModel)]=\"infoGame.listGamer[4].money\" name=\"money5\"></ion-input>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"infoGame.numberPlayer > 5\">\n      <ion-col size=\"4\">\n        <ion-img src=\"./../../assets/default_avatar.png\"></ion-img>\n      </ion-col>\n      <ion-col size=\"8\">\n        <form #infoPlayer>\n          <ion-item>\n            <ion-label>Name:</ion-label>\n            <ion-input [(ngModel)]=\"infoGame.listGamer[5].name\" name=\"name6\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Money have:</ion-label>\n            <ion-input [(ngModel)]=\"infoGame.listGamer[5].money\" name=\"money6\"></ion-input>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-button expand=\"block\" fill=\"outline\" (click)=\"doNext()\">Next</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/choose/choose.page.scss":
/*!*****************************************!*\
  !*** ./src/app/choose/choose.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  box-shadow: 0px 0px 8px 0px #afaeae;\n  margin: 1rem 0;\n  border-radius: 0.2rem; }\n  ion-row ion-label {\n    font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvbXlDb2RlL2NvdW50UG9pbnRHYW1lL3NyYy9hcHAvY2hvb3NlL2Nob29zZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLHFCQUFxQixFQUFBO0VBSHZCO0lBS0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaG9vc2UvY2hvb3NlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yb3cge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAwcHggI2FmYWVhZTtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/choose/choose.page.ts":
/*!***************************************!*\
  !*** ./src/app/choose/choose.page.ts ***!
  \***************************************/
/*! exports provided: ChoosePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosePage", function() { return ChoosePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");




var ChoosePage = /** @class */ (function () {
    function ChoosePage(router, gamesv) {
        var _this = this;
        this.router = router;
        this.gamesv = gamesv;
        this.infoGame = {
            id: '',
            name: '',
            listGamer: [
                {
                    id: 1,
                    name: '',
                    isHost: false,
                    money: 1000,
                },
                {
                    id: 2,
                    name: '',
                    isHost: false,
                    money: 1000,
                },
                {
                    id: 3,
                    name: '',
                    isHost: false,
                    money: 1000,
                },
                {
                    id: 4,
                    name: '',
                    isHost: false,
                    money: 1000,
                },
                {
                    id: 5,
                    name: '',
                    isHost: false,
                    money: 1000,
                },
                {
                    id: 6,
                    name: '',
                    isHost: false,
                    money: 1000,
                }
            ],
            typeGame: '',
            numberPlayer: 2,
            betPrimary: 2000,
            betSecondary: 1000,
            des: '',
            message: '',
        };
        if (this.gamesv.typeGameInit && this.gamesv.typeGame) {
            this.gamesv.typeGame.subscribe(function (info) { return _this.infoGame.typeGame = info; });
        }
    }
    ChoosePage.prototype.ngOnInit = function () {
    };
    ChoosePage.prototype.onChangeSelect = function (event) {
        if (event && event.detail) {
            this.infoGame.numberPlayer = event.detail.value;
        }
        else {
            this.infoGame.numberPlayer = 2;
        }
        console.log('change selecte', this.infoGame.numberPlayer);
    };
    ChoosePage.prototype.doNext = function () {
        this.gamesv.infoGameComing = this.infoGame;
        this.router.navigate(['/choose-leader']);
    };
    ChoosePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose',
            template: __webpack_require__(/*! ./choose.page.html */ "./src/app/choose/choose.page.html"),
            styles: [__webpack_require__(/*! ./choose.page.scss */ "./src/app/choose/choose.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]])
    ], ChoosePage);
    return ChoosePage;
}());



/***/ })

}]);
//# sourceMappingURL=choose-choose-module.js.map