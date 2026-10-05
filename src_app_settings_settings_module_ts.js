"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 8786:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 583);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 7187:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 8786);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 583);








let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 583:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 5375);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 2282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ 9605);
/* harmony import */ var src_services_myevent_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/myevent.services */ 8059);
/* harmony import */ var src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/contants.models */ 1758);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/helper.models */ 9410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);










let SettingsPage = class SettingsPage {
    constructor(config, myEvent, route, navCtrl) {
        this.config = config;
        this.myEvent = myEvent;
        this.route = route;
        this.navCtrl = navCtrl;
        this.distance_unity = "Kilometer";
        this.defaultLanguageCode = config.availableLanguages[0].code;
        let defaultLang = window.localStorage.getItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.KEY_DEFAULT_LANGUAGE);
        if (defaultLang)
            this.defaultLanguageCode = defaultLang;
    }
    ngOnInit() {
        this.defaultLanguageCode = this.config.availableLanguages[0].code;
        this.darkModeStatus = (src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__.Helper.getThemeMode(this.config.defaultThemeMode) == src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.THEME_MODE_DARK).toString();
        this.languages = this.config.availableLanguages;
        let defaultLang = window.localStorage.getItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.KEY_DEFAULT_LANGUAGE);
        if (defaultLang)
            this.defaultLanguageCode = defaultLang;
    }
    languageConfirm() {
        this.myEvent.setLanguageData(this.defaultLanguageCode);
        window.localStorage.setItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
    }
    onDarkMode(event) {
        let isDarkTheme = event.target.value == "true" ? true : false;
        document.body.setAttribute('class', isDarkTheme ? 'dark-theme' : 'light-theme');
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__.Helper.seThemeMode(isDarkTheme ? src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.THEME_MODE_DARK : src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.THEME_MODE_LIGHT);
    }
    termsConditions() {
        this.route.navigate(['./terms-conditions']);
    }
    privacyPolicy() {
        this.route.navigate(['./privacy-policy']);
    }
    signIn() {
        this.navCtrl.navigateRoot(['./sign-in']);
    }
};
SettingsPage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject, args: [_app_config__WEBPACK_IMPORTED_MODULE_2__.APP_CONFIG,] }] },
    { type: src_services_myevent_services__WEBPACK_IMPORTED_MODULE_3__.MyEvent },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-settings',
        template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsPage);



/***/ }),

/***/ 2282:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".form {\n  padding-bottom: 20px;\n}\n.form ion-item {\n  margin-bottom: 15px !important;\n}\n.form ion-item:last-child {\n  margin-bottom: 0 !important;\n}\n.form ion-item ion-label {\n  padding: 0 !important;\n  color: var(--text-dark) !important;\n}\n.form ion-item .item_inner .input_box {\n  border: 0 !important;\n  padding: 0;\n  background: none !important;\n}\n.form ion-item .item_inner .input_box ion-icon {\n  color: var(--text-dark) !important;\n  font-size: 1.5rem !important;\n}\n.form ion-item.item-select ion-select {\n  color: var(--text-light) !important;\n  padding-top: 3px;\n  font-size: 1.05rem !important;\n  font-weight: 500 !important;\n}\n.otherLinks {\n  border-top: 2px dashed var(--border-line-color);\n  padding: 25px 25px;\n}\n.otherLinks h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.05rem;\n  font-weight: 500;\n  padding-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uL1BsdWdQViUyMC0lMjBBcHAlMjAvc3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKO0FEQUk7RUFDSSw4QkFBQTtBQ0VSO0FERFE7RUFDSSwyQkFBQTtBQ0daO0FERFE7RUFDSSxxQkFBQTtFQUNBLGtDQUFBO0FDR1o7QUREUTtFQUNJLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FDR1o7QURGWTtFQUNJLGtDQUFBO0VBQ0EsNEJBQUE7QUNJaEI7QUREUTtFQUNJLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FDR1o7QURFQTtFQUNJLCtDQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDRVIiLCJmaWxlIjoic2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW1faW5uZXIgLmlucHV0X2JveCB7XG4gICAgICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyaykhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLml0ZW0tc2VsZWN0IGlvbi1zZWxlY3Qge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjA1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5vdGhlckxpbmtzIHtcbiAgICBib3JkZXItdG9wOiAycHggZGFzaGVkIHZhcigtLWJvcmRlci1saW5lLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAyNXB4IDI1cHg7XG4gICAgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIH1cbn0iLCIuZm9ybSB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmZvcm0gaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG4uZm9ybSBpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLmZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKSAhaW1wb3J0YW50O1xufVxuLmZvcm0gaW9uLWl0ZW0gLml0ZW1faW5uZXIgLmlucHV0X2JveCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG4uZm9ybSBpb24taXRlbSAuaXRlbV9pbm5lciAuaW5wdXRfYm94IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyaykgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cbi5mb3JtIGlvbi1pdGVtLml0ZW0tc2VsZWN0IGlvbi1zZWxlY3Qge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgZm9udC1zaXplOiAxLjA1cmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxuLm90aGVyTGlua3Mge1xuICBib3JkZXItdG9wOiAycHggZGFzaGVkIHZhcigtLWJvcmRlci1saW5lLWNvbG9yKTtcbiAgcGFkZGluZzogMjVweCAyNXB4O1xufVxuLm90aGVyTGlua3MgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 5375:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n            <!-- <ion-back-button text=\"\" defaultHref=\"sign-in\" icon=\"arrow-back-outline\"></ion-back-button> -->\n        </ion-buttons>\n    </ion-toolbar>\n\n    <div class=\"header_text\">\n        <h1 class=\"animate__animated animate__fadeInUp\">\n            {{\"settings\" | translate}}\n        </h1>\n        <h2 class=\"animate__animated animate__fadeInUp\">\n            {{\"set_your_preferences\" | translate}}\n        </h2>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_white\" fullscreen>\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner\">\n                    <ion-label mode=\"md\">{{\"select_language\" | translate}}</ion-label>\n                    <div class=\"input_box d-flex\">\n                        <ion-select okText=\"{{'okay' | translate}}\" cancelText=\"{{'dismiss' | translate}}\" [(ngModel)]=\"defaultLanguageCode\" (ionChange)=\"languageConfirm()\">\n                            <ion-select-option *ngFor=\"let language of config.availableLanguages\" [value]=\"language.code\">\n                                {{language.name}}\n                            </ion-select-option>\n                        </ion-select>\n                        <ion-icon class=\"zmdi zmdi-chevron-down  ion-text-end end\" style=\"color: var(--text-dark);\"></ion-icon>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner\">\n                    <ion-label mode=\"md\">{{\"app_mode\" | translate}}</ion-label>\n                    <div class=\"input_box d-flex\">\n                        <ion-select okText=\"{{'okay' | translate}}\" [(ngModel)]=\"darkModeStatus\" (ionChange)=\"onDarkMode($event)\" cancelText=\"{{'dismiss' | translate}}\" placeholder=\"{{'select_one' | translate}}\">\n                            <ion-select-option value=\"true\">\n                                {{\"dark_mode\" | translate}}\n                            </ion-select-option>\n                            <ion-select-option value=\"false\">\n                                {{\"light_mode\" | translate}}\n                            </ion-select-option>\n                        </ion-select>\n                        <ion-icon class=\"zmdi zmdi-chevron-down ion-text-end end \"></ion-icon>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner\">\n                    <ion-label mode=\"md\">{{\"distance_unity\" | translate}}</ion-label>\n                    <div class=\"input_box d-flex\">\n                        <ion-select [(ngModel)]=\"distance_unity\" okText=\"{{'okay' | translate}}\" cancelText=\"{{'dismiss' | translate}}\" placeholder=\"{{'select_one' | translate}}\">\n                            <ion-select-option value=\"Kilometer\">\n                                Km (Kilometer)\n                            </ion-select-option>\n                            <ion-select-option value=\"Millimeters\">\n                                Mm (Millimeters)\n                            </ion-select-option>\n                            <ion-select-option value=\"Centimeters\">\n                                Cm (Centimeters)\n                            </ion-select-option>\n                            <ion-select-option value=\"Meters\">\n                                M (Meters)\n                            </ion-select-option>\n                        </ion-select>\n                        <ion-icon class=\"zmdi zmdi-chevron-down ion-text-end end \"></ion-icon>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n\n    <div class=\"otherLinks\">\n        <h3 class=\"d-flex animate__animated animate__fadeInUp\" (click)=\"termsConditions()\">\n            {{\"terms_conditions\" | translate}}\n        </h3>\n        <h3 class=\"d-flex animate__animated animate__fadeInUp\" (click)=\"privacyPolicy()\">\n            {{\"privacy_polisy\" | translate}}\n        </h3>\n        <h3 class=\"d-flex animate__animated animate__fadeInUp\" (click)=\"signIn()\">\n            {{\"logout\" | translate}}\n        </h3>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map