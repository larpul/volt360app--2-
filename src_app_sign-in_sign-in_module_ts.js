"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sign-in_sign-in_module_ts"],{

/***/ 6922:
/*!***************************************************!*\
  !*** ./src/app/sign-in/sign-in-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageRoutingModule": () => (/* binding */ SignInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.page */ 8785);




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_0__.SignInPage
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ 895:
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageModule": () => (/* binding */ SignInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in-routing.module */ 6922);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.page */ 8785);








let SignInPageModule = class SignInPageModule {
};
SignInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignInPageRoutingModule
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_1__.SignInPage]
    })
], SignInPageModule);



/***/ }),

/***/ 8785:
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPage": () => (/* binding */ SignInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sign_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.page.html?ngResource */ 521);
/* harmony import */ var _sign_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.page.scss?ngResource */ 8345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_services_myevent_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/myevent.services */ 8059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let SignInPage = class SignInPage {
    constructor(myEvent, route, navCtrl) {
        this.myEvent = myEvent;
        this.route = route;
        this.navCtrl = navCtrl;
        this.countries = new Array();
        this.myEvent.getCountries().subscribe(res => this.countries = res);
    }
    ngOnInit() {
    }
    continue() {
        this.route.navigate(['./sign-up']);
    }
    verification() {
        this.route.navigate(['./verification']);
    }
    home() {
        this.navCtrl.navigateRoot(['./home']);
    }
};
SignInPage.ctorParameters = () => [
    { type: src_services_myevent_services__WEBPACK_IMPORTED_MODULE_2__.MyEvent },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
SignInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sign-in',
        template: _sign_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sign_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignInPage);



/***/ }),

/***/ 8345:
/*!******************************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar .logo {\n  min-height: 90px;\n  display: flex;\n  align-items: center;\n}\nion-header ion-toolbar .logo img {\n  width: 146px;\n  margin: 0 auto;\n}\n.banner .text {\n  padding: 20px;\n}\n.banner .text h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 1.05rem;\n  padding-bottom: 7px;\n}\n.banner .text h1 {\n  margin: 0;\n  color: var(--text-dark);\n  font-weight: 600;\n  font-size: 1.4rem;\n}\n.form {\n  padding-top: 20px !important;\n}\n.form ion-list {\n  padding-bottom: 10px !important;\n}\n.form ion-item {\n  margin-bottom: 15px !important;\n}\n.or_continue_with h3 {\n  margin: 0;\n  color: var(--text-light3);\n  font-size: 1.05rem;\n  padding: 25px 0;\n}\n.or_continue_with ion-row {\n  margin: 0 -5px;\n}\n.or_continue_with ion-row ion-col {\n  padding: 0 5px;\n}\n.or_continue_with ion-row ion-col .button.btn.button-outline {\n  --border-color: var(--border-line-color) !important;\n  color: var(--text-dark);\n  font-weight: 600;\n  --border-width: 2px;\n}\n.or_continue_with ion-row ion-col .button.btn.button-outline img {\n  width: 20px;\n  position: relative;\n  left: -15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4ucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vUGx1Z1BWJTIwLSUyMEFwcCUyMC9zcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FSO0FEQ1E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0NaO0FES0k7RUFDSSxhQUFBO0FDRlI7QURHUTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNEWjtBREdRO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RaO0FETUE7RUFDSSw0QkFBQTtBQ0hKO0FESUk7RUFDSSwrQkFBQTtBQ0ZSO0FESUk7RUFDSSw4QkFBQTtBQ0ZSO0FET0k7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNKUjtBRE1JO0VBQ0ksY0FBQTtBQ0pSO0FES1E7RUFDSSxjQUFBO0FDSFo7QURJWTtFQUNJLG1EQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRmhCO0FER2dCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RwQiIsImZpbGUiOiJzaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAgIC5sb2dvIHtcbiAgICAgICAgbWluLWhlaWdodDogOTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNDZweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYmFubmVyIHtcbiAgICAudGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb3JtIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ub3JfY29udGludWVfd2l0aCB7XG4gICAgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Myk7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgICAgICAgcGFkZGluZzogMjVweCAwO1xuICAgIH1cbiAgICBpb24tcm93IHtcbiAgICAgICAgbWFyZ2luOiAwIC01cHg7XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgICAuYnV0dG9uLmJ0bi5idXR0b24tb3V0bGluZSB7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1saW5lLWNvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciAubG9nbyB7XG4gIG1pbi1oZWlnaHQ6IDkwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC5sb2dvIGltZyB7XG4gIHdpZHRoOiAxNDZweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5iYW5uZXIgLnRleHQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmJhbm5lciAudGV4dCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG4uYmFubmVyIC50ZXh0IGgxIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb3JtIHtcbiAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cbi5mb3JtIGlvbi1saXN0IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cbi5mb3JtIGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4ub3JfY29udGludWVfd2l0aCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQzKTtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBwYWRkaW5nOiAyNXB4IDA7XG59XG4ub3JfY29udGludWVfd2l0aCBpb24tcm93IHtcbiAgbWFyZ2luOiAwIC01cHg7XG59XG4ub3JfY29udGludWVfd2l0aCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbi5vcl9jb250aW51ZV93aXRoIGlvbi1yb3cgaW9uLWNvbCAuYnV0dG9uLmJ0bi5idXR0b24tb3V0bGluZSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItbGluZS1jb2xvcikgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG59XG4ub3JfY29udGludWVfd2l0aCBpb24tcm93IGlvbi1jb2wgLmJ1dHRvbi5idG4uYnV0dG9uLW91dGxpbmUgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTE1cHg7XG59Il19 */";

/***/ }),

/***/ 521:
/*!******************************************************!*\
  !*** ./src/app/sign-in/sign-in.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <div class=\"logo\">\n            <img src=\"assets/images/logo_vault360.png\" class=\"lightThemeImg\">\n            <img src=\"assets/images/logo_vault360dark\" class=\"darkThemeImg\">\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_white\" fullscreen>\n    <div class=\"banner\">\n        <div class=\"banner_img\">\n            <img src=\"assets/images/vector_solar.png\">\n        </div>\n\n        <div class=\"text\">\n            <h2 class=\"animate__animated animate__fadeInUp\">\n                {{\"Hello There\" | translate}},\n            </h2>\n            <h1 class=\"animate__animated animate__fadeInUp\">\n                {{\"sign_in_now\" | translate}}\n            </h1>\n        </div>\n    </div>\n\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner\">\n                    <ion-label mode=\"md\">{{\"select_country\" | translate}}</ion-label>\n                    <div class=\"input_box d-flex\">\n                        <ion-select mode=\"md\" placeholder=\"{{'select_country' | translate}}\" cancelText=\"{{'cancel' | translate}}\" okText=\"{{'ok' | translate}}\">\n                            <ion-select-option *ngFor=\"let country of countries\" [value]=\"country.callingCodes[0]\">{{country.name}}</ion-select-option>\n                        </ion-select>\n                        <ion-icon class=\"zmdi zmdi-caret-down  ion-text-end end\"></ion-icon>\n                    </div>\n                </div>\n            </ion-item>\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner\">\n                    <ion-label>{{'phone_number' | translate}}</ion-label>\n                    <div class=\"input_box\">\n                        <ion-input type=\"number\" value=\"\" placeholder=\"{{'enter_phone_number' | translate}}\"></ion-input>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n        <ion-button size=\"large\" shape=\"block\" class=\"btn animate__animated animate__fadeInUp\" (click)=\"continue()\">{{'continue' | translate}}</ion-button>\n\n        <div class=\"or_continue_with\">\n            <h3 class=\"ion-text-center animate__animated animate__fadeInUp\">{{'or_continue_with' | translate}}</h3>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-button size=\"large\" shape=\"block\" fill=\"outline\" class=\"btn animate__animated animate__fadeInUp\" (click)=\"verification()\">\n                        <img src=\"assets/images/fb.png\"> {{'facebook' | translate}}\n                    </ion-button>\n                </ion-col>\n\n                <ion-col size=\"6\">\n                    <ion-button size=\"large\" shape=\"block\" fill=\"outline\" class=\"btn animate__animated animate__fadeInUp\" (click)=\"verification()\">\n                        <img src=\"assets/images/google.png\"> {{'google' | translate}}\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n    <br>\n    <br>\n    <br>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_sign-in_sign-in_module_ts.js.map