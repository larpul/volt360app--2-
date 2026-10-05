"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_verification_verification_module_ts"],{

/***/ 1800:
/*!*************************************************************!*\
  !*** ./src/app/verification/verification-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageRoutingModule": () => (/* binding */ VerificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification.page */ 9687);




const routes = [
    {
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_0__.VerificationPage
    }
];
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerificationPageRoutingModule);



/***/ }),

/***/ 7345:
/*!*****************************************************!*\
  !*** ./src/app/verification/verification.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageModule": () => (/* binding */ VerificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _verification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification-routing.module */ 1800);
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.page */ 9687);








let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _verification_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerificationPageRoutingModule
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_1__.VerificationPage]
    })
], VerificationPageModule);



/***/ }),

/***/ 9687:
/*!***************************************************!*\
  !*** ./src/app/verification/verification.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPage": () => (/* binding */ VerificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification.page.html?ngResource */ 3012);
/* harmony import */ var _verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.page.scss?ngResource */ 8937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let VerificationPage = class VerificationPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    continue() {
        this.navCtrl.navigateRoot(['./home']);
    }
};
VerificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
VerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-verification',
        template: _verification_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verification_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerificationPage);



/***/ }),

/***/ 8937:
/*!****************************************************************!*\
  !*** ./src/app/verification/verification.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-header .header_text h2 {\n  max-width: calc(100% - 30px);\n}\n\n.form {\n  padding-top: 30px;\n}\n\n.form ion-item ion-input {\n  letter-spacing: 3px !important;\n}\n\nh3 {\n  margin: 0;\n  padding-top: 35px;\n  color: var(--text-light3);\n  font-size: 1rem;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\nh3 span {\n  color: var(--primary);\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi9QbHVnUFYlMjAtJTIwQXBwJTIwL3NyYy9hcHAvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURBSTtFQUNJLDhCQUFBO0FDRVI7O0FERUE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FEQUk7RUFDSSxxQkFBQTtFQUNBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSx5QkFBQTtBQ0VSIiwiZmlsZSI6InZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIC5oZWFkZXJfdGV4dCBoMiB7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbn1cblxuLmZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy10b3A6IDM1cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQzKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG59IiwiaW9uLWhlYWRlciAuaGVhZGVyX3RleHQgaDIge1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLmZvcm0gaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweCAhaW1wb3J0YW50O1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDM1cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Myk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbmgzIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */";

/***/ }),

/***/ 3012:
/*!****************************************************************!*\
  !*** ./src/app/verification/verification.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <div class=\"header_text\">\n        <h1 class=\"animate__animated animate__fadeInUp\">\n            {{\"verification\" | translate}}\n        </h1>\n        <h2 class=\"animate__animated animate__fadeInUp\">\n            {{\"enter_verification_code_sent_on_given_number\" | translate}}\n        </h2>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_white\" fullscreen>\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner\">\n                    <ion-label>{{'enter_6_digit_otp' | translate}}</ion-label>\n                    <div class=\"input_box\">\n                        <ion-input type=\"tel\" value=\"645770\" placeholder=\"{{'enter_6_digit_otp' | translate}}\"></ion-input>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n        <ion-button size=\"large\" shape=\"block\" class=\"btn animate__animated animate__fadeInUp\" (click)=\"continue()\">{{'submit' | translate}}</ion-button>\n\n        <h3 class=\"d-flex animate__animated animate__fadeInUp\">\n            0:25 min left\n            <span class=\"end\">{{'resend' | translate}}</span>\n        </h3>\n\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_verification_verification_module_ts.js.map