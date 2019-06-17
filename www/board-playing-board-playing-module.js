(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["board-playing-board-playing-module"],{

/***/ "./src/app/board-playing/board-playing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/board-playing/board-playing.module.ts ***!
  \*******************************************************/
/*! exports provided: BoardPlayingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardPlayingPageModule", function() { return BoardPlayingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _board_playing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./board-playing.page */ "./src/app/board-playing/board-playing.page.ts");







var routes = [
    {
        path: '',
        component: _board_playing_page__WEBPACK_IMPORTED_MODULE_6__["BoardPlayingPage"]
    }
];
var BoardPlayingPageModule = /** @class */ (function () {
    function BoardPlayingPageModule() {
    }
    BoardPlayingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_board_playing_page__WEBPACK_IMPORTED_MODULE_6__["BoardPlayingPage"]]
        })
    ], BoardPlayingPageModule);
    return BoardPlayingPageModule;
}());



/***/ }),

/***/ "./src/app/board-playing/board-playing.page.html":
/*!*******************************************************!*\
  !*** ./src/app/board-playing/board-playing.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>Board Playing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div text-center>\n    <ion-chip color=\"primary\">\n      <ion-avatar>\n        <img src=\"../../assets/default_avatar.png\">\n      </ion-avatar>\n      <ion-label>Leader: {{this.leader.name}}</ion-label>\n    </ion-chip>\n  </div>\n  <ion-grid>\n    <ion-row text-center>\n      <ion-col>\n        <b>STT</b>\n      </ion-col>\n      <ion-col *ngFor=\"let user of listUser\">\n        <b>{{user.name}}</b>\n      </ion-col>\n    </ion-row>\n    <ion-row text-center *ngFor=\"let in of counter(stt) ;let i = index\">\n      <ion-col class=\"stt-col\">\n        <ion-label>{{i+1}}</ion-label>\n      </ion-col>\n      <ion-col *ngFor=\"let user of listUser\">\n        <ion-input> </ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-icon name=\"add-circle-outline\" (click)=\"addNewGame()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/board-playing/board-playing.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/board-playing/board-playing.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col {\n  border: 0.1px solid #dad7d7;\n  margin: 2px; }\n  ion-col.stt-col {\n    padding-top: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvbXlDb2RlL2NvdW50UG9pbnRHYW1lL3NyYy9hcHAvYm9hcmQtcGxheWluZy9ib2FyZC1wbGF5aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixXQUFXLEVBQUE7RUFGYjtJQUlJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYm9hcmQtcGxheWluZy9ib2FyZC1wbGF5aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xuICBib3JkZXI6IDAuMXB4IHNvbGlkICNkYWQ3ZDc7XG4gIG1hcmdpbjogMnB4O1xuICAmLnN0dC1jb2wge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/board-playing/board-playing.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/board-playing/board-playing.page.ts ***!
  \*****************************************************/
/*! exports provided: BoardPlayingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardPlayingPage", function() { return BoardPlayingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");



var BoardPlayingPage = /** @class */ (function () {
    function BoardPlayingPage(gamesv) {
        this.gamesv = gamesv;
        this.listUser = [];
        this.stt = 1;
        this.adding = false;
        this.boardGame = {
            sttGame: 1,
            winner: ''
        };
    }
    BoardPlayingPage.prototype.ngOnInit = function () {
        // let temp = this.gamesv.infoGameComing ? this.gamesv.infoGameComing.listGamer : [];
        // temp.map(data => {
        //   if (data.isChecked) {
        //     this.leader = data;
        //   } else {
        //     this.listUser.push(data);
        //   }
        // });
        this.leader = {
            id: 1,
            isChecked: true,
            isHost: false,
            money: 10000,
            name: 'A'
        };
        this.listUser = [
            {
                id: 2,
                isChecked: false,
                isHost: false,
                money: 10000,
                name: 'B'
            },
            {
                id: 3,
                isChecked: false,
                isHost: false,
                money: 10000,
                name: 'C'
            },
            {
                id: 4,
                isChecked: false,
                isHost: false,
                money: 10000,
                name: 'D'
            },
        ];
        //console.log('list user on board', this.listUser, this.leader);
    };
    BoardPlayingPage.prototype.addNewGame = function () {
        this.stt++;
    };
    BoardPlayingPage.prototype.counter = function (i) {
        return new Array(i);
    };
    BoardPlayingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board-playing',
            template: __webpack_require__(/*! ./board-playing.page.html */ "./src/app/board-playing/board-playing.page.html"),
            styles: [__webpack_require__(/*! ./board-playing.page.scss */ "./src/app/board-playing/board-playing.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], BoardPlayingPage);
    return BoardPlayingPage;
}());



/***/ })

}]);
//# sourceMappingURL=board-playing-board-playing-module.js.map