"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_theme-language-selction_theme-language-selction_module_ts"],{

/***/ 1980:
/*!***********************************************************************************!*\
  !*** ./src/app/theme-language-selction/theme-language-selction-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeLanguageSelctionPageRoutingModule": () => (/* binding */ ThemeLanguageSelctionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _theme_language_selction_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-language-selction.page */ 8000);




const routes = [
    {
        path: '',
        component: _theme_language_selction_page__WEBPACK_IMPORTED_MODULE_0__.ThemeLanguageSelctionPage
    }
];
let ThemeLanguageSelctionPageRoutingModule = class ThemeLanguageSelctionPageRoutingModule {
};
ThemeLanguageSelctionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ThemeLanguageSelctionPageRoutingModule);



/***/ }),

/***/ 5742:
/*!***************************************************************************!*\
  !*** ./src/app/theme-language-selction/theme-language-selction.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeLanguageSelctionPageModule": () => (/* binding */ ThemeLanguageSelctionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _theme_language_selction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-language-selction-routing.module */ 1980);
/* harmony import */ var _theme_language_selction_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-language-selction.page */ 8000);








let ThemeLanguageSelctionPageModule = class ThemeLanguageSelctionPageModule {
};
ThemeLanguageSelctionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _theme_language_selction_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThemeLanguageSelctionPageRoutingModule
        ],
        declarations: [_theme_language_selction_page__WEBPACK_IMPORTED_MODULE_1__.ThemeLanguageSelctionPage]
    })
], ThemeLanguageSelctionPageModule);



/***/ }),

/***/ 8000:
/*!*************************************************************************!*\
  !*** ./src/app/theme-language-selction/theme-language-selction.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeLanguageSelctionPage": () => (/* binding */ ThemeLanguageSelctionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _theme_language_selction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-language-selction.page.html?ngResource */ 1849);
/* harmony import */ var _theme_language_selction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-language-selction.page.scss?ngResource */ 1688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ 9605);
/* harmony import */ var src_services_myevent_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/myevent.services */ 8059);
/* harmony import */ var src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/contants.models */ 1758);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/helper.models */ 9410);








let ThemeLanguageSelctionPage = class ThemeLanguageSelctionPage {
    constructor(config, myEvent) {
        this.config = config;
        this.myEvent = myEvent;
    }
    ngOnInit() {
        this.defaultLanguageCode = this.config.availableLanguages[0].code;
        this.darkModeStatus = src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__.Helper.getThemeMode(this.config.defaultThemeMode) == src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.THEME_MODE_DARK;
        this.languages = this.config.availableLanguages;
        let defaultLang = window.localStorage.getItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.KEY_DEFAULT_LANGUAGE);
        if (defaultLang)
            this.defaultLanguageCode = defaultLang;
    }
    onLanguageClick(language) {
        this.defaultLanguageCode = language.code;
    }
    languageConfirm() {
        window.localStorage.setItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
        this.myEvent.setLanguageData(this.defaultLanguageCode);
    }
    onDarkMode(event) {
        let isDarkTheme = event.detail.checked;
        document.body.setAttribute('class', isDarkTheme ? 'dark-theme' : 'light-theme');
        src_models_helper_models__WEBPACK_IMPORTED_MODULE_5__.Helper.seThemeMode(isDarkTheme ? src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.THEME_MODE_DARK : src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.THEME_MODE_LIGHT);
    }
};
ThemeLanguageSelctionPage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject, args: [_app_config__WEBPACK_IMPORTED_MODULE_2__.APP_CONFIG,] }] },
    { type: src_services_myevent_services__WEBPACK_IMPORTED_MODULE_3__.MyEvent }
];
ThemeLanguageSelctionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-theme-language-selction',
        template: _theme_language_selction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_theme_language_selction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ThemeLanguageSelctionPage);



/***/ }),

/***/ 1688:
/*!**************************************************************************************!*\
  !*** ./src/app/theme-language-selction/theme-language-selction.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "ion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n}\nion-list h2 {\n  margin: 0;\n  padding: 10px 20px;\n  color: var(--text-light);\n  font-size: 1rem;\n}\nion-list ion-item {\n  padding: 13px 20px;\n  --min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent) !important;\n  --background-activated: var(--transparent) !important;\n  --background-activated-opacity: 1;\n  --background-hover: var(--transparent) !important;\n  --ripple-color: var(--transparent) !important;\n  background: var(--bg-white);\n  transition: all 0.5s;\n  margin-bottom: 8px;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item ion-toggle {\n  --background: #F4F7F1;\n  --background-checked: #F4F7F1;\n  --handle-background: var(--text-light2);\n  --handle-background-checked: var(--primary);\n  --handle-height: 13px;\n  --handle-width: 13px;\n  --handle-box-shadow: none;\n  height: 19px;\n  width: 34px;\n}\nion-list ion-item h3 {\n  margin: 0;\n  letter-spacing: 0;\n  font-size: 1.2rem;\n  color: var(--text-black);\n  font-weight: 500;\n}\nion-list ion-item p {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding-top: 5px;\n}\nion-list ion-item ion-radio {\n  --color-checked: var(--primary);\n}\nion-list .select_language {\n  padding-top: 20px;\n}\nion-list .select_language ion-item {\n  margin-bottom: 0;\n}\nion-footer {\n  padding: 0px 20px 25px 20px;\n  background: var(--bg-white);\n}\nion-footer ion-button {\n  --animate-duration: .2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLWxhbmd1YWdlLXNlbGN0aW9uLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uL1BsdWdQViUyMC0lMjBBcHAlMjAvc3JjL2FwcC90aGVtZS1sYW5ndWFnZS1zZWxjdGlvbi90aGVtZS1sYW5ndWFnZS1zZWxjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7QURBSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSwyQ0FBQTtFQUNBLHFEQUFBO0VBQ0EsaUNBQUE7RUFDQSxpREFBQTtFQUNBLDZDQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDRVI7QUREUTtFQUNJLFdBQUE7QUNHWjtBRERRO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0daO0FERFE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNHWjtBRERRO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR1o7QUREUTtFQUNJLCtCQUFBO0FDR1o7QURBSTtFQUNJLGlCQUFBO0FDRVI7QUREUTtFQUNJLGdCQUFBO0FDR1o7QURFQTtFQUNJLDJCQUFBO0VBQ0EsMkJBQUE7QUNDSjtBREFJO0VBQ0ksdUJBQUE7QUNFUiIsImZpbGUiOiJ0aGVtZS1sYW5ndWFnZS1zZWxjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMTNweCAyMHB4O1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctd2hpdGUpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIC5pdGVtX2lubmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIGlvbi10b2dnbGUge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRjRGN0YxO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGNEY3RjE7XG4gICAgICAgICAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gICAgICAgICAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgLS1oYW5kbGUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgLS1oYW5kbGUtd2lkdGg6IDEzcHg7XG4gICAgICAgICAgICAtLWhhbmRsZS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXJhZGlvIHtcbiAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNlbGVjdF9sYW5ndWFnZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAwcHggMjBweCAyNXB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctd2hpdGUpO1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWFuaW1hdGUtZHVyYXRpb246IC4ycztcbiAgICB9XG59IiwiaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWxpc3QgaDIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDFyZW07XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDEzcHggMjBweDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXdoaXRlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tdG9nZ2xlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjRGN0YxO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0Y0RjdGMTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDogdmFyKC0tdGV4dC1saWdodDIpO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXByaW1hcnkpO1xuICAtLWhhbmRsZS1oZWlnaHQ6IDEzcHg7XG4gIC0taGFuZGxlLXdpZHRoOiAxM3B4O1xuICAtLWhhbmRsZS1ib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDE5cHg7XG4gIHdpZHRoOiAzNHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gaDMge1xuICBtYXJnaW46IDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIGlvbi1yYWRpbyB7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tcHJpbWFyeSk7XG59XG5pb24tbGlzdCAuc2VsZWN0X2xhbmd1YWdlIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5pb24tbGlzdCAuc2VsZWN0X2xhbmd1YWdlIGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBhZGRpbmc6IDBweCAyMHB4IDI1cHggMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctd2hpdGUpO1xufVxuaW9uLWZvb3RlciBpb24tYnV0dG9uIHtcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAuMnM7XG59Il19 */";

/***/ }),

/***/ 1849:
/*!**************************************************************************************!*\
  !*** ./src/app/theme-language-selction/theme-language-selction.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" defaultHref=\"sign-in\" icon=\"arrow-back-outline\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <div class=\"header_text\">\n        <h1 class=\"animate__animated animate__fadeInUp\">\n            {{\"settings\" | translate}}\n        </h1>\n        <h2 class=\"animate__animated animate__fadeInUp\">\n            {{\"set_your_preferences\" | translate}}\n        </h2>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_white\" fullscreen>\n    <ion-list lines=\"none\">\n        <div class=\"display_setting\">\n            <h2>{{'display_setting' | translate}}</h2>\n            <ion-item>\n                <div class=\"item_inner\">\n                    <h3 class=\"d-flex\">{{'dark_mode' | translate}}\n                        <ion-toggle mode=\"ios\" class=\"end\" [(ngModel)]=\"darkModeStatus\" (ionChange)=\"onDarkMode($event)\"></ion-toggle>\n                    </h3>\n                    <p>{{'experience_an_excitiing_dark_mode' | translate}}</p>\n                </div>\n            </ion-item>\n        </div>\n\n        <div class=\"select_language\">\n            <h2>{{'select_language' | translate}}</h2>\n            <ion-radio-group [(ngModel)]=\"defaultLanguageCode\">\n                <ion-item class=\"animate__animated animate__fadeInUp\" *ngFor=\"let language of languages\" (click)=\"onLanguageClick(language)\">\n                    <div class=\"item_inner d-flex\">\n                        <h3>{{language.name}}</h3>\n                        <ion-radio class=\"end\" value=\"{{language.code}}\"></ion-radio>\n                    </div>\n                </ion-item>\n            </ion-radio-group>\n        </div>\n    </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-button size=\"large\" shape=\"block\" class=\"btn  animate__animated animate__fadeInUp\" (click)=\"languageConfirm()\">{{'save' | translate}}</ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_theme-language-selction_theme-language-selction_module_ts.js.map