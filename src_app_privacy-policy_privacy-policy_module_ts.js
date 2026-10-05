"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_privacy-policy_privacy-policy_module_ts"],{

/***/ 8581:
/*!*****************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPageRoutingModule": () => (/* binding */ PrivacyPolicyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy.page */ 9974);




const routes = [
    {
        path: '',
        component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyPage
    }
];
let PrivacyPolicyPageRoutingModule = class PrivacyPolicyPageRoutingModule {
};
PrivacyPolicyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrivacyPolicyPageRoutingModule);



/***/ }),

/***/ 9523:
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPageModule": () => (/* binding */ PrivacyPolicyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy-routing.module */ 8581);
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.page */ 9974);








let PrivacyPolicyPageModule = class PrivacyPolicyPageModule {
};
PrivacyPolicyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyPageRoutingModule
        ],
        declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_1__.PrivacyPolicyPage]
    })
], PrivacyPolicyPageModule);



/***/ }),

/***/ 9974:
/*!*******************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPage": () => (/* binding */ PrivacyPolicyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _privacy_policy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy.page.html?ngResource */ 8121);
/* harmony import */ var _privacy_policy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.page.scss?ngResource */ 8508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PrivacyPolicyPage = class PrivacyPolicyPage {
    constructor() { }
    ngOnInit() {
    }
};
PrivacyPolicyPage.ctorParameters = () => [];
PrivacyPolicyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-privacy-policy',
        template: _privacy_policy_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_privacy_policy_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrivacyPolicyPage);



/***/ }),

/***/ 8508:
/*!********************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-header .header_text {\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n}\n\n.container {\n  padding: 20px 20px;\n}\n\n.container h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 1.05rem;\n  padding-bottom: 10px;\n}\n\n.container p {\n  margin: 0;\n  color: var(--text-black);\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 29px;\n  padding-bottom: 25px;\n  align-items: flex-start;\n}\n\n.container p ion-icon {\n  min-width: 25px;\n  color: var(--primary);\n  font-size: 0.6rem;\n  position: relative;\n  top: 7px;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uL1BsdWdQViUyMC0lMjBBcHAlMjAvc3JjL2FwcC9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUFBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREFJO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0VSOztBREFJO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FDRVI7O0FERFE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNHWiIsImZpbGUiOiJwcml2YWN5LXBvbGljeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIC5oZWFkZXJfdGV4dCB7XG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDdweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24taGVhZGVyIC5oZWFkZXJfdGV4dCB7XG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xufVxuLmNvbnRhaW5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5jb250YWluZXIgcCBpb24taWNvbiB7XG4gIG1pbi13aWR0aDogMjVweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDdweDtcbiAgcGFkZGluZzogMnB4O1xufSJdfQ== */";

/***/ }),

/***/ 8121:
/*!********************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <div class=\"header_text\">\n        <h1 class=\"animate__animated animate__fadeInUp\">\n            {{\"privacy_polisy\" | translate}}\n        </h1>\n        <!-- <h2 class=\"animate__animated animate__fadeInUp\">\n        {{\"looks_like_you_are_not_registered_yet\" | translate}}\n    </h2> -->\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_white\" fullscreen>\n    <div class=\"container\">\n        <p class=\"animate__animated animate__fadeInUp\">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n        </p>\n\n        <h2 class=\"animate__animated animate__fadeInUp\">Privacy Policies</h2>\n\n        <p class=\"animate__animated animate__fadeInUp d-flex\">\n            <ion-icon class=\"zmdi zmdi-circle\"></ion-icon> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n        </p>\n        <p class=\"animate__animated animate__fadeInUp d-flex\">\n            <ion-icon class=\"zmdi zmdi-circle\"></ion-icon> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n        </p>\n        <p class=\"animate__animated animate__fadeInUp d-flex\">\n            <ion-icon class=\"zmdi zmdi-circle\"></ion-icon> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n        </p>\n        <p class=\"animate__animated animate__fadeInUp d-flex\">\n            <ion-icon class=\"zmdi zmdi-circle\"></ion-icon> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n        </p>\n        <p class=\"animate__animated animate__fadeInUp d-flex\">\n            <ion-icon class=\"zmdi zmdi-circle\"></ion-icon> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n        </p>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_privacy-policy_privacy-policy_module_ts.js.map