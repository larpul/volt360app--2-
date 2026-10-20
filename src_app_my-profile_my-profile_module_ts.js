"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_my-profile_my-profile_module_ts"],{

/***/ 6358:
/*!*********************************************************!*\
  !*** ./src/app/my-profile/my-profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfilePageRoutingModule": () => (/* binding */ MyProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-profile.page */ 6286);




const routes = [
    {
        path: '',
        component: _my_profile_page__WEBPACK_IMPORTED_MODULE_0__.MyProfilePage
    }
];
let MyProfilePageRoutingModule = class MyProfilePageRoutingModule {
};
MyProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyProfilePageRoutingModule);



/***/ }),

/***/ 785:
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfilePageModule": () => (/* binding */ MyProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-profile-routing.module */ 6358);
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-profile.page */ 6286);








let MyProfilePageModule = class MyProfilePageModule {
};
MyProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyProfilePageRoutingModule
        ],
        declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_1__.MyProfilePage]
    })
], MyProfilePageModule);



/***/ }),

/***/ 6286:
/*!***********************************************!*\
  !*** ./src/app/my-profile/my-profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfilePage": () => (/* binding */ MyProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _my_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-profile.page.html?ngResource */ 2938);
/* harmony import */ var _my_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-profile.page.scss?ngResource */ 7212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MyProfilePage = class MyProfilePage {
    constructor() {
        this.your_property = "1";
    }
    ngOnInit() {
    }
};
MyProfilePage.ctorParameters = () => [];
MyProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-my-profile',
        template: _my_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyProfilePage);



/***/ }),

/***/ 7212:
/*!************************************************************!*\
  !*** ./src/app/my-profile/my-profile.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-header .header_text {\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n}\nion-header .header_text h1 {\n  padding: 0;\n}\nion-header .header_text .img_container {\n  position: relative;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\nion-header .header_text .img_container .img_box {\n  min-width: 85px;\n  min-height: 85px;\n  border-radius: 8px;\n}\nion-header .header_text .img_container ion-icon {\n  position: absolute;\n  bottom: -12px;\n  right: -12px;\n  width: 27px;\n  height: 27px;\n  color: var(--white);\n  background: var(--primary);\n  border-radius: 50%;\n  text-align: center;\n  line-height: 27px;\n}\n.form {\n  padding-top: 20px;\n}\n.form ion-item .item_inner .input_box ion-icon {\n  color: var(--text-dark) !important;\n  font-size: 1.5rem !important;\n}\nion-footer {\n  padding: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXByb2ZpbGUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vUGx1Z1BWJTIwLSUyMEFwcCUyMC9zcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw0QkFBQTtFQUFBLHVCQUFBO0FDQVI7QURDUTtFQUNJLFVBQUE7QUNDWjtBRENRO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHNCQUFBO0FDQ1o7QURBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRWhCO0FEQVk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRWhCO0FESUE7RUFDSSxpQkFBQTtBQ0RKO0FESVk7RUFDSSxrQ0FBQTtFQUNBLDRCQUFBO0FDRmhCO0FEUUE7RUFDSSxhQUFBO0FDTEoiLCJmaWxlIjoibXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICAuaGVhZGVyX3RleHQge1xuICAgICAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nX2NvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgLmltZ19ib3gge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODVweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4NXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTJweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTEycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI3cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyN3B4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLml0ZW1faW5uZXIgLmlucHV0X2JveCB7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyaykhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgcGFkZGluZzogMjVweDtcbn0iLCJpb24taGVhZGVyIC5oZWFkZXJfdGV4dCB7XG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuaW9uLWhlYWRlciAuaGVhZGVyX3RleHQgaDEge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWhlYWRlciAuaGVhZGVyX3RleHQgLmltZ19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24taGVhZGVyIC5oZWFkZXJfdGV4dCAuaW1nX2NvbnRhaW5lciAuaW1nX2JveCB7XG4gIG1pbi13aWR0aDogODVweDtcbiAgbWluLWhlaWdodDogODVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuaW9uLWhlYWRlciAuaGVhZGVyX3RleHQgLmltZ19jb250YWluZXIgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTEycHg7XG4gIHJpZ2h0OiAtMTJweDtcbiAgd2lkdGg6IDI3cHg7XG4gIGhlaWdodDogMjdweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjdweDtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5mb3JtIGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pbnB1dF9ib3ggaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgcGFkZGluZzogMjVweDtcbn0iXX0= */";

/***/ }),

/***/ 2938:
/*!************************************************************!*\
  !*** ./src/app/my-profile/my-profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <div class=\"header_text d-flex\">\n        <h1 class=\"animate__animated animate__fadeInUp\">\n            {{\"profile\" | translate}}\n        </h1>\n\n        <div class=\"img_container end\">\n            <div class=\"img_box center_img animate__animated animate__zoomIn\">\n                <img src=\"assets/images/default-avatar.svg\" class=\"crop_img\">\n            </div>\n            <ion-icon class=\"zmdi zmdi-camera animate__animated animate__zoomIn\"></ion-icon>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_white\" fullscreen>\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner\">\n                    <ion-label>{{'full_name' | translate}}</ion-label>\n                    <div class=\"input_box\">\n                        <ion-input type=\"name\" value=\"Samantha Smith\" placeholder=\"{{'enter_your_full_name' | translate}}\"></ion-input>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner\">\n                    <ion-label>{{'phone_number' | translate}}</ion-label>\n                    <div class=\"input_box\">\n                        <ion-input type=\"tel\" value=\"+1 987 654 3210\" placeholder=\"{{'enter_phone_number' | translate}}\"></ion-input>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner\">\n                    <ion-label>{{'email_address' | translate}}</ion-label>\n                    <div class=\"input_box\">\n                        <ion-input type=\"email\" value=\"samanthasmith@email.com\" placeholder=\"{{'enter_your_email_address' | translate}}\"></ion-input>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner\">\n                    <ion-label>{{'your_property' | translate}}</ion-label>\n                    <div class=\"input_box d-flex\">\n                        <ion-select [(ngModel)]=\"your_property\" okText=\"{{'okay' | translate}}\" cancelText=\"{{'dismiss' | translate}}\" placeholder=\"{{'select_one' | translate}}\">\n                            <ion-select-option value=\"1\">\n                                Single-family home\n                            </ion-select-option>\n                            <ion-select-option value=\"2\">\n                                Townhouse\n                            </ion-select-option>\n                            <ion-select-option value=\"3\">\n                                Duplex\n                            </ion-select-option>\n                            <ion-select-option value=\"4\">\n                                Multifamily\n                            </ion-select-option>\n                            <ion-select-option value=\"5\">\n                                Apartment\n                            </ion-select-option>\n                            <ion-select-option value=\"6\">\n                                Mobile home\n                            </ion-select-option>\n                            <ion-select-option value=\"7\">\n                                New construction\n                            </ion-select-option>\n                            <ion-select-option value=\"8\">\n                                Commercial property\n                            </ion-select-option>\n                            <ion-select-option value=\"9\">\n                                Farm or acreage\n                            </ion-select-option>\n                            <ion-select-option value=\"10\">\n                                Nonprofit or church\n                            </ion-select-option>\n                        </ion-select>\n                        <ion-icon class=\"zmdi zmdi-chevron-down ion-text-end end \"></ion-icon>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n\n\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-button size=\"large\" shape=\"block\" class=\"btn animate__animated animate__fadeInUp\">{{'update' | translate}}</ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_my-profile_my-profile_module_ts.js.map