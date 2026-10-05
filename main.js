(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const routes = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 5098)).then(m => m.FolderPageModule)
    },
    {
        path: 'sign-in',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sign-in_sign-in_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sign-in/sign-in.module */ 895)).then(m => m.SignInPageModule)
    },
    {
        path: 'sign-up',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sign-up_sign-up_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sign-up/sign-up.module */ 1391)).then(m => m.SignUpPageModule)
    },
    {
        path: 'verification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_verification_verification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./verification/verification.module */ 7345)).then(m => m.VerificationPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 2711)).then(m => m.HomePageModule)
    },
    {
        path: 'filter',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_filter_filter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./filter/filter.module */ 5254)).then(m => m.FilterPageModule)
    },
    {
        path: 'charge-spot-info',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_charge-spot-info_charge-spot-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./charge-spot-info/charge-spot-info.module */ 873)).then(m => m.ChargeSpotInfoPageModule)
    },
    {
        path: 'add-check-in',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_add-check-in_add-check-in_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./add-check-in/add-check-in.module */ 9021)).then(m => m.AddCheckInPageModule)
    },
    {
        path: 'my-profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_my-profile_my-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./my-profile/my-profile.module */ 785)).then(m => m.MyProfilePageModule)
    },
    {
        path: 'faqs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_faqs_faqs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./faqs/faqs.module */ 8730)).then(m => m.FaqsPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 7187)).then(m => m.SettingsPageModule)
    },
    {
        path: 'terms-conditions',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_terms-conditions_terms-conditions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./terms-conditions/terms-conditions.module */ 1530)).then(m => m.TermsConditionsPageModule)
    },
    {
        path: 'privacy-policy',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_privacy-policy_privacy-policy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./privacy-policy/privacy-policy.module */ 9523)).then(m => m.PrivacyPolicyPageModule)
    },
    {
        path: 'theme-language-selction',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_theme-language-selction_theme-language-selction_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./theme-language-selction/theme-language-selction.module */ 5742)).then(m => m.ThemeLanguageSelctionPageModule)
    },
    {
        path: 'buyappalert',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_buyappalert_buyappalert_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./buyappalert/buyappalert.module */ 3705)).then(m => m.BuyappalertPageModule)
    },
    {
        path: 'vt-popup',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./vt-popup/vt-popup.module */ 3802)).then(m => m.VtPopupPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 4883);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 1550);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.config */ 9605);
/* harmony import */ var src_services_myevent_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/myevent.services */ 8059);
/* harmony import */ var src_models_contants_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/contants.models */ 1758);
/* harmony import */ var _app_buyappalert_buyappalert_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/buyappalert/buyappalert.page */ 4519);
/* harmony import */ var _vt_popup_vt_popup_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vt-popup/vt-popup.page */ 6551);
/* harmony import */ var src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/models/helper.models */ 9410);
















let AppComponent = class AppComponent {
    constructor(config, platform, navCtrl, splashScreen, statusBar, modalController, translate, myEvent, alertController) {
        this.config = config;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.modalController = modalController;
        this.translate = translate;
        this.myEvent = myEvent;
        this.alertController = alertController;
        this.rtlSide = "left";
        this.rtlSideMenu = "start";
        this.showSideMenu = false;
        this.initializeApp();
        this.myEvent.getLanguageObservable().subscribe(value => {
            this.navCtrl.navigateRoot(['./']);
            this.globalize(value);
        });
    }
    initializeApp() {
        if (this.config.demoMode && this.platform.is('cordova') && !window.localStorage.getItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_6__.Constants.KEY_IS_DEMO_MODE)) {
            window.localStorage.setItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_6__.Constants.KEY_IS_DEMO_MODE, "true");
            this.language();
            setTimeout(() => this.presentModal(), 30000);
        }
        else {
            this.navCtrl.navigateRoot(['./']);
        }
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.show();
            this.statusBar.overlaysWebView(false);
            this.statusBar.backgroundColorByHexString('#000000');
            let defaultLang = window.localStorage.getItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_6__.Constants.KEY_DEFAULT_LANGUAGE);
            this.globalize(defaultLang);
            setTimeout(() => this.splashScreen.hide(), 3000);
            this.darkModeSetting();
        });
    }
    globalize(languagePriority) {
        this.translate.setDefaultLang("en");
        let defaultLangCode = this.config.availableLanguages[0].code;
        this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
        this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    }
    setDirectionAccordingly(lang) {
        this.showSideMenu = false;
        switch (lang) {
            case 'iw':
            case 'ar':
                this.rtlSide = "rtl";
                this.rtlSideMenu = "end";
                break;
            default:
                this.rtlSide = "ltr";
                this.rtlSideMenu = "start";
                break;
        }
        setTimeout(() => this.showSideMenu = true, 100);
    }
    my_profile() {
        this.navCtrl.navigateRoot(['./my-profile']);
    }
    home() {
        this.navCtrl.navigateRoot(['./home']);
    }
    favorite() {
        this.navCtrl.navigateRoot(['./favorite']);
    }
    termsConditions() {
        this.navCtrl.navigateRoot(['./terms-conditions']);
    }
    faq() {
        this.navCtrl.navigateRoot(['./faqs']);
    }
    settings() {
        this.navCtrl.navigateRoot(['./settings']);
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _vt_popup_vt_popup_page__WEBPACK_IMPORTED_MODULE_8__.VtPopupPage,
            });
            return yield modal.present();
        });
    }
    language() {
        this.navCtrl.navigateRoot(['./theme-language-selction']);
    }
    developed_by() {
        window.open("https://opuslab.works/", '_system', 'location=no');
    }
    buyappalert() {
        this.modalController
            .create({ component: _app_buyappalert_buyappalert_page__WEBPACK_IMPORTED_MODULE_7__.BuyappalertPage })
            .then(modalElement => {
            modalElement.present();
        });
    }
    darkModeSetting() {
        document.body.setAttribute('class', (src_models_helper_models__WEBPACK_IMPORTED_MODULE_9__.Helper.getThemeMode(this.config.defaultThemeMode) == src_models_contants_models__WEBPACK_IMPORTED_MODULE_6__.Constants.THEME_MODE_DARK ? 'dark-theme' : 'light-theme'));
    }
};
AppComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Inject, args: [_app_config__WEBPACK_IMPORTED_MODULE_4__.APP_CONFIG,] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController },
    { type: _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen },
    { type: _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService },
    { type: src_services_myevent_services__WEBPACK_IMPORTED_MODULE_5__.MyEvent },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 9605:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_CONFIG": () => (/* binding */ APP_CONFIG),
/* harmony export */   "BaseAppConfig": () => (/* binding */ BaseAppConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_models_contants_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/contants.models */ 1758);


let APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken("app.config");
const BaseAppConfig = {
    availableLanguages: [{
            code: 'en',
            name: 'English'
        }, {
            code: 'ar',
            name: 'عربى'
        }, {
            code: 'fr',
            name: 'Français'
        }, {
            code: 'es',
            name: 'Española'
        }, {
            code: 'id',
            name: 'Bahasa Indonesia'
        }, {
            code: 'pt',
            name: 'Português'
        }, {
            code: 'tr',
            name: 'Türk'
        }, {
            code: 'it',
            name: 'Italiana'
        }, {
            code: 'sw',
            name: 'Kiswahili'
        }, {
            code: 'de',
            name: 'Deutsch'
        }, {
            code: 'ro',
            name: 'Română'
        }],
    defaultThemeMode: src_models_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.THEME_MODE_LIGHT,
    demoMode: false
};


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 4883);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 1550);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5347);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _vt_popup_vt_popup_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vt-popup/vt-popup.module */ 3802);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.config */ 9605);














function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http);
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
            _vt_popup_vt_popup_module__WEBPACK_IMPORTED_MODULE_2__.VtPopupPageModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
                }
            })
        ],
        providers: [
            _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
            _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            { provide: _app_config__WEBPACK_IMPORTED_MODULE_5__.APP_CONFIG, useValue: _app_config__WEBPACK_IMPORTED_MODULE_5__.BaseAppConfig },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 4519:
/*!*************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyappalertPage": () => (/* binding */ BuyappalertPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _buyappalert_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyappalert.page.html?ngResource */ 9186);
/* harmony import */ var _buyappalert_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buyappalert.page.scss?ngResource */ 101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);






let BuyappalertPage = class BuyappalertPage {
    constructor(modalController, http) {
        this.modalController = modalController;
        this.http = http;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss();
    }
    buyAppAction() {
        this.modalController.dismiss();
        window.open("https://dashboard.vtlabs.dev/projects/envato-referral-buy-link?project_slug=evspot_ionic", '_system', 'location=no');
    }
    navWhatsapp() {
        let projectName = "evspot";
        this.http.get("https://dashboard.vtlabs.dev/whatsapp.php?product_name=" + projectName + "&source=ionic_template", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
        }).subscribe(res => {
            window.open(res['link'], '_system', 'location=no');
        }, err => { });
        this.dismiss();
    }
};
BuyappalertPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
BuyappalertPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-buyappalert',
        template: _buyappalert_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_buyappalert_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BuyappalertPage);



/***/ }),

/***/ 1023:
/*!*****************************************************!*\
  !*** ./src/app/vt-popup/vt-popup-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VtPopupPageRoutingModule": () => (/* binding */ VtPopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _vt_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vt-popup.page */ 6551);




const routes = [
    {
        path: '',
        component: _vt_popup_page__WEBPACK_IMPORTED_MODULE_0__.VtPopupPage
    }
];
let VtPopupPageRoutingModule = class VtPopupPageRoutingModule {
};
VtPopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VtPopupPageRoutingModule);



/***/ }),

/***/ 3802:
/*!*********************************************!*\
  !*** ./src/app/vt-popup/vt-popup.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VtPopupPageModule": () => (/* binding */ VtPopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _vt_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vt-popup-routing.module */ 1023);
/* harmony import */ var _vt_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vt-popup.page */ 6551);







let VtPopupPageModule = class VtPopupPageModule {
};
VtPopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vt_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__.VtPopupPageRoutingModule
        ],
        declarations: [_vt_popup_page__WEBPACK_IMPORTED_MODULE_1__.VtPopupPage]
    })
], VtPopupPageModule);



/***/ }),

/***/ 6551:
/*!*******************************************!*\
  !*** ./src/app/vt-popup/vt-popup.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VtPopupPage": () => (/* binding */ VtPopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _vt_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vt-popup.page.html?ngResource */ 6455);
/* harmony import */ var _vt_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vt-popup.page.scss?ngResource */ 4591);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let VtPopupPage = class VtPopupPage {
    constructor(navCtrl, modalCtrl, modalController, http, toastController, loadingController) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.modalController = modalController;
        this.http = http;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.email_Id = '';
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss();
    }
    onSubscribe() {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (this.email_Id.length <= 5 || !reg.test(this.email_Id)) {
            return this.presentToast('Please provide your Email.');
        }
        this.presentLoading('Sending...');
        let req = {
            "email": this.email_Id,
            "source": "opus_application_evspot"
        };
        this.http.post("https://dashboard.vtlabs.dev/api/subscribe", req).subscribe((res) => {
            this.presentToast('Submitted successfully.');
            this.modalController.dismiss();
            this.dismissLoading();
        });
    }
    presentToast(body, position, duration) {
        this.toastController.create({
            message: body,
            duration: (duration && duration > 0) ? duration : 2000,
            position: (position && (position == "top" || position == "middle")) ? position : 'bottom'
        }).then(toast => toast.present());
    }
    presentLoading(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({ message: body }).then(overlay => {
                overlay.present().then(() => {
                    if (!this.isLoading) {
                        try {
                            overlay.dismiss().then(() => console.log('loading aborted'));
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                });
            });
        });
    }
    dismissLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            try {
                return yield this.loadingController.dismiss();
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
};
VtPopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
VtPopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-vt-popup',
        template: _vt_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_vt_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VtPopupPage);



/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 1758:
/*!***************************************!*\
  !*** ./src/models/contants.models.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constants": () => (/* binding */ Constants)
/* harmony export */ });
class Constants {
}
Constants.KEY_DEFAULT_LANGUAGE = 'evSpot_dl';
Constants.KEY_DARK_MODE = 'evSpot_dark_mode';
Constants.KEY_IS_DEMO_MODE = 'evSpot_is_demo_mode';
Constants.THEME_MODE_DARK = "theme_dark";
Constants.THEME_MODE_LIGHT = "theme_light";


/***/ }),

/***/ 9410:
/*!*************************************!*\
  !*** ./src/models/helper.models.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Helper": () => (/* binding */ Helper)
/* harmony export */ });
/* harmony import */ var _contants_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contants.models */ 1758);

class Helper {
    static seThemeMode(status) {
        window.localStorage.setItem(_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.KEY_DARK_MODE, status);
    }
    static getThemeMode(defaultTheme) {
        let toReturn = window.localStorage.getItem(_contants_models__WEBPACK_IMPORTED_MODULE_0__.Constants.KEY_DARK_MODE);
        if (!toReturn)
            toReturn = defaultTheme;
        return toReturn;
    }
}


/***/ }),

/***/ 8059:
/*!******************************************!*\
  !*** ./src/services/myevent.services.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyEvent": () => (/* binding */ MyEvent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8759);


 // For rxjs 6


let MyEvent = class MyEvent {
    constructor(http) {
        this.http = http;
        this.selectedLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    getLanguageObservable() {
        return this.selectedLanguage.asObservable();
    }
    setLanguageData(data) {
        this.selectedLanguage.next(data);
    }
    getCountries() {
        return this.http.get('./assets/json/countries.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(data => {
            let indiaIndex = -1;
            // if (data) {
            //   for (let i = 0; i < data.length; i++) {
            //     if (data[i].name == "India") {
            //       indiaIndex = i;
            //       break;
            //     }
            //   }
            // }
            if (indiaIndex != -1)
                data.unshift(data.splice(indiaIndex, 1)[0]);
        }));
    }
};
MyEvent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
MyEvent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], MyEvent);



/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "*,\nbody,\nhtml,\np,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nstrong,\nli {\n  --ion-font-family: \"Poppins\";\n  font-family: \"Poppins\";\n}\n\n.zmdi {\n  font: normal normal normal 14px/1 \"Material-Design-Iconic-Font\";\n}\n\nion-menu {\n  --background: var(--transparent) !important;\n}\n\nion-header {\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\nion-header ion-toolbar ion-title {\n  padding: 0 20px !important;\n  text-align: inherit !important;\n}\n\nion-header ion-toolbar ion-title .button.btn {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 45px;\n  font-size: 0.95rem;\n}\n\nion-header ion-toolbar ion-title ion-icon {\n  color: var(--text-dark);\n  font-size: 1.6rem;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\nion-header .brofile_box {\n  position: relative;\n  align-items: flex-end;\n  overflow: hidden;\n  padding: 28px 25px 10px 25px;\n}\n\nion-header .brofile_box .img_box {\n  min-width: 80px;\n  max-width: 80px;\n  height: 80px;\n  margin-bottom: 20px;\n  border-radius: 50%;\n}\n\nion-header .brofile_box .text_box {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\nion-header .brofile_box .text_box h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.5rem;\n  font-weight: 600;\n  align-items: flex-end;\n  line-height: 29px;\n}\n\nion-header .brofile_box .text_box h2 ion-icon {\n  font-size: 2rem;\n  color: var(--text-black);\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\nion-content {\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  --background: var(--transparent) !important;\n}\n\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 10px;\n}\n\nion-list ion-item {\n  padding: 15px 27px;\n  --min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent) !important;\n  --background-activated: var(--transparent) !important;\n  --background-activated-opacity: 1;\n  --background-hover: var(--transparent) !important;\n  --ripple-color: var(--transparent) !important;\n  background: var(--transparent);\n  margin: 0;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner ion-icon {\n  color: var(--primary);\n  font-size: 1.4rem;\n  padding: 2px;\n  min-width: 40px;\n  position: relative;\n  top: -1px;\n}\n\nion-list ion-item .item_inner h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.05rem;\n  font-weight: 500;\n  width: 100%;\n}\n\n.banner .logo {\n  width: 100%;\n  padding: 0 27px 20px 27px;\n}\n\n.banner .logo img {\n  width: 146px;\n}\n\n.banner .banner_img {\n  max-width: 400px;\n  display: block;\n  margin: 0 auto;\n}\n\nion-footer {\n  z-index: 999;\n  position: relative;\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\nion-footer .developed_by {\n  padding: 10px 15px 8px 15px;\n  background: var(--bg-white);\n  border-radius: 20px 20px 0 0;\n}\n\nion-footer .developed_by h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1rem;\n  font-weight: 500;\n  min-width: 50%;\n  letter-spacing: 0;\n}\n\nion-footer .developed_by .img_box {\n  width: 100%;\n}\n\nion-footer .developed_by .img_box img {\n  max-width: 140px;\n}\n\nion-footer .developed_by .img_box img.dark-theme-logo {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL1BsdWdQViUyMC0lMjBBcHAlMjAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7RUFhSSw0QkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSwrREFBQTtBQ0NKOztBREVBO0VBQ0ksMkNBQUE7QUNDSjs7QURFQTtFQUNJLHFDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0NKOztBREFJO0VBQ0ksMEJBQUE7RUFDQSw4QkFBQTtBQ0VSOztBRERRO0VBQ0ksMkJBQUE7RUFBQSxzQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHWjs7QUREUTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUFBLHNCQUFBO0FDR1o7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0VSOztBRERRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0daOztBRERRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNHWjs7QURGWTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDSWhCOztBREhnQjtFQUNJLGVBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQUEsc0JBQUE7QUNLcEI7O0FERUE7RUFDSSxxQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwyQ0FBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSwyQ0FBQTtFQUNBLHFEQUFBO0VBQ0EsaUNBQUE7RUFDQSxpREFBQTtFQUNBLDZDQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FDRVI7O0FERFE7RUFDSSxXQUFBO0FDR1o7O0FERlk7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNJaEI7O0FERlk7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0loQjs7QURHSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQ0FSOztBRENRO0VBQ0ksWUFBQTtBQ0NaOztBREVJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0FSOztBRElBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDREo7O0FERUk7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNBUjs7QURDUTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NaOztBRENRO0VBQ0ksV0FBQTtBQ0NaOztBREFZO0VBQ0ksZ0JBQUE7QUNFaEI7O0FERGdCO0VBQ0ksYUFBQTtBQ0dwQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLFxuYm9keSxcbmh0bWwsXG5wLFxuc3BhbixcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnN0cm9uZyxcbmxpIHtcbiAgICAtLWlvbi1mb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG59XG5cbi56bWRpIHtcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgJ01hdGVyaWFsLURlc2lnbi1JY29uaWMtRm9udCc7XG59XG5cbmlvbi1tZW51IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xufVxuXG5pb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1IDI1NSAyNTUgLyA4NSUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1hbGlnbjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICAuYnV0dG9uLmJ0biB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOTVyZW07XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJyb2ZpbGVfYm94IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDI4cHggMjVweCAxMHB4IDI1cHg7XG4gICAgICAgIC5pbWdfYm94IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHRfYm94IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1IDI1NSAyNTUgLyA4NSUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDI3cHg7XG4gICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgLS1yaXBwbGUtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLml0ZW1faW5uZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogLTFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5iYW5uZXIge1xuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMjdweCAyMHB4IDI3cHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTQ2cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJhbm5lcl9pbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUgMjU1IDI1NSAvIDg1JSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIC5kZXZlbG9wZWRfYnkge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHggOHB4IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA1MCU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nX2JveCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgICAgICAmLmRhcmstdGhlbWUtbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIiosXG5ib2R5LFxuaHRtbCxcbnAsXG5zcGFuLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuc3Ryb25nLFxubGkge1xuICAtLWlvbi1mb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbn1cblxuLnptZGkge1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgXCJNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnRcIjtcbn1cblxuaW9uLW1lbnUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xufVxuXG5pb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwYWRkaW5nOiAwIDIwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLmJ1dHRvbi5idG4ge1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogNDVweDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24taGVhZGVyIC5icm9maWxlX2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAyOHB4IDI1cHggMTBweCAyNXB4O1xufVxuaW9uLWhlYWRlciAuYnJvZmlsZV9ib3ggLmltZ19ib3gge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1heC13aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pb24taGVhZGVyIC5icm9maWxlX2JveCAudGV4dF9ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWhlYWRlciAuYnJvZmlsZV9ib3ggLnRleHRfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG5pb24taGVhZGVyIC5icm9maWxlX2JveCAudGV4dF9ib3ggaDIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDE1cHggMjdweDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcGFkZGluZzogMnB4O1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFubmVyIC5sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMjdweCAyMHB4IDI3cHg7XG59XG4uYmFubmVyIC5sb2dvIGltZyB7XG4gIHdpZHRoOiAxNDZweDtcbn1cbi5iYW5uZXIgLmJhbm5lcl9pbWcge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlvbi1mb290ZXIge1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xufVxuaW9uLWZvb3RlciAuZGV2ZWxvcGVkX2J5IHtcbiAgcGFkZGluZzogMTBweCAxNXB4IDhweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG59XG5pb24tZm9vdGVyIC5kZXZlbG9wZWRfYnkgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1pbi13aWR0aDogNTAlO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbmlvbi1mb290ZXIgLmRldmVsb3BlZF9ieSAuaW1nX2JveCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWZvb3RlciAuZGV2ZWxvcGVkX2J5IC5pbWdfYm94IGltZyB7XG4gIG1heC13aWR0aDogMTQwcHg7XG59XG5pb24tZm9vdGVyIC5kZXZlbG9wZWRfYnkgLmltZ19ib3ggaW1nLmRhcmstdGhlbWUtbG9nbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 101:
/*!**************************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".clear_button {\n  background: #14990A;\n  padding: 15px 24px;\n}\n.clear_button ion-icon {\n  color: #fff;\n  font-size: 1.65rem !important;\n}\nion-content {\n  --background: var(--white)!important;\n}\n.container {\n  padding: 51px 34px;\n  min-height: calc(50vh - 61px);\n  display: flex;\n  align-items: center;\n}\n.container .container_inner {\n  margin: auto;\n  min-width: 100%;\n}\n.container h2 {\n  margin: 0;\n  font-size: 1.55rem;\n  font-weight: 600;\n  letter-spacing: 0;\n  padding-bottom: 12px;\n}\n.container p {\n  margin: 0;\n  font-size: 0.87rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  padding-bottom: 32px;\n}\n.container .button {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  border-radius: 50px;\n  height: 58px;\n  padding: 0 18px;\n  box-shadow: 0 5px 9px -2px rgba(0, 0, 0, 0.3);\n}\n.container .button .icon_box {\n  min-width: 45px;\n}\n.container .button .icon_box img {\n  width: 35px;\n  display: block;\n}\n.container .button h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  letter-spacing: 0;\n}\n.container .button h3 strong {\n  font-weight: 700;\n}\n.container.no_backend {\n  background: #14990A;\n}\n.container.no_backend h2 {\n  color: #fff;\n}\n.container.no_backend p {\n  color: #fff;\n}\n.container.no_backend .button {\n  background: #fff;\n  color: #000000;\n}\n.container.complete_backend {\n  background: #FFFFFF;\n}\n.container.complete_backend h2 {\n  color: #000000;\n}\n.container.complete_backend p {\n  color: #7F7F7F;\n}\n.container.complete_backend .button {\n  background: #14990A;\n  color: #FFFFFF;\n}\n.container.complete_backend .button .icon_box img {\n  width: 33px;\n}\n.container.complete_backend .button h3 {\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eWFwcGFsZXJ0LnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uL1BsdWdQViUyMC0lMjBBcHAlMjAvc3JjL2FwcC9idXlhcHBhbGVydC9idXlhcHBhbGVydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtBQ0VSO0FERUE7RUFDSSxvQ0FBQTtBQ0NKO0FERUE7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDRVI7QURBSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0VSO0FEQUk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNFUjtBREFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtBQ0VSO0FERFE7RUFDSSxlQUFBO0FDR1o7QURGWTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDSWhCO0FERFE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0daO0FERlk7RUFDSSxnQkFBQTtBQ0loQjtBREFJO0VBQ0ksbUJBQUE7QUNFUjtBRERRO0VBQ0ksV0FBQTtBQ0daO0FERFE7RUFDSSxXQUFBO0FDR1o7QUREUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0daO0FEQUk7RUFDSSxtQkFBQTtBQ0VSO0FERFE7RUFDSSxjQUFBO0FDR1o7QUREUTtFQUNJLGNBQUE7QUNHWjtBRERRO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDR1o7QUREZ0I7RUFDSSxXQUFBO0FDR3BCO0FEQVk7RUFDSSxnQkFBQTtBQ0VoQiIsImZpbGUiOiJidXlhcHBhbGVydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXJfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTQ5OTBBO1xuICAgIHBhZGRpbmc6IDE1cHggMjRweDtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDEuNjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKSFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUxcHggMzRweDtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDUwdmggLSA2MXB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmNvbnRhaW5lcl9pbm5lciB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjU1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogLjg3cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgfVxuICAgIC5idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDlweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgLmljb25fYm94IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDVweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLm5vX2JhY2tlbmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTQ5OTBBO1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgfVxuICAgICYuY29tcGxldGVfYmFja2VuZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICM3RjdGN0Y7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTQ5OTBBO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAuaWNvbl9ib3gge1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5jbGVhcl9idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTQ5OTBBO1xuICBwYWRkaW5nOiAxNXB4IDI0cHg7XG59XG4uY2xlYXJfYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS42NXJlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0td2hpdGUpIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDUxcHggMzRweDtcbiAgbWluLWhlaWdodDogY2FsYyg1MHZoIC0gNjFweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5jb250YWluZXJfaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS41NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuLmNvbnRhaW5lciBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuODdyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cbi5jb250YWluZXIgLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDU4cHg7XG4gIHBhZGRpbmc6IDAgMThweDtcbiAgYm94LXNoYWRvdzogMCA1cHggOXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmNvbnRhaW5lciAuYnV0dG9uIC5pY29uX2JveCB7XG4gIG1pbi13aWR0aDogNDVweDtcbn1cbi5jb250YWluZXIgLmJ1dHRvbiAuaWNvbl9ib3ggaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRhaW5lciAuYnV0dG9uIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4uY29udGFpbmVyIC5idXR0b24gaDMgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5jb250YWluZXIubm9fYmFja2VuZCB7XG4gIGJhY2tncm91bmQ6ICMxNDk5MEE7XG59XG4uY29udGFpbmVyLm5vX2JhY2tlbmQgaDIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250YWluZXIubm9fYmFja2VuZCBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uY29udGFpbmVyLm5vX2JhY2tlbmQgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNvbnRhaW5lci5jb21wbGV0ZV9iYWNrZW5kIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cbi5jb250YWluZXIuY29tcGxldGVfYmFja2VuZCBoMiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNvbnRhaW5lci5jb21wbGV0ZV9iYWNrZW5kIHAge1xuICBjb2xvcjogIzdGN0Y3Rjtcbn1cbi5jb250YWluZXIuY29tcGxldGVfYmFja2VuZCAuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzE0OTkwQTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uY29udGFpbmVyLmNvbXBsZXRlX2JhY2tlbmQgLmJ1dHRvbiAuaWNvbl9ib3ggaW1nIHtcbiAgd2lkdGg6IDMzcHg7XG59XG4uY29udGFpbmVyLmNvbXBsZXRlX2JhY2tlbmQgLmJ1dHRvbiBoMyB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59Il19 */";

/***/ }),

/***/ 4591:
/*!********************************************************!*\
  !*** ./src/app/vt-popup/vt-popup.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: rgba(0, 0, 0, 0.66) !important;\n}\n\n.cloes_btn {\n  padding: 25px;\n}\n\n.cloes_btn ion-icon {\n  color: #fff;\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\nion-card {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: calc(100% - 53px);\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 0;\n  background: none;\n  overflow: hidden;\n  box-shadow: none;\n  padding: 0 0 3px 0;\n}\n\nion-card::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 113px);\n  background: #fff;\n  border-radius: 5px;\n}\n\nion-card .img_box {\n  position: relative;\n  z-index: 99;\n  margin: auto;\n  width: 100%;\n  max-width: 275px;\n  min-height: 275px;\n}\n\nion-card .img_box img {\n  display: block;\n  margin: 0 auto;\n}\n\nion-card .text_box {\n  position: relative;\n  z-index: 99;\n  width: 100%;\n  padding: 0 25px;\n  top: -23px;\n}\n\nion-card .text_box h2 {\n  font-size: 2rem;\n  font-weight: 600;\n  color: #000;\n  margin: 0;\n  letter-spacing: 0;\n  padding-bottom: 18px;\n}\n\nion-card .text_box p {\n  margin: 0;\n  font-size: 1.1rem;\n  line-height: 19px;\n  color: #000;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\nion-card ion-list {\n  position: relative;\n  z-index: 99;\n  margin: 0;\n  padding: 0 25px;\n  padding-bottom: 25px;\n}\n\nion-card ion-list ion-item {\n  background: #f5f5f5;\n  padding: 0 17px;\n  width: calc(100% - 0px);\n  min-height: unset !important;\n  margin: 0 auto;\n  --background: none;\n  align-items: flex-start;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --ripple-color: var(--transparent) !important;\n  --background-focused: var(--transparent) !important;\n  margin-bottom: 20px;\n  border-radius: 5px;\n}\n\nion-card ion-list ion-item ion-input {\n  font-size: 0.95rem !important;\n  font-weight: 500 !important;\n  color: #000;\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n  --padding-top: 0 !important;\n  --padding-bottom: 0px !important;\n  --placeholder-color: #b3b3b3 !important;\n  --placeholder-opacity: 1;\n  --placeholder-font-weight: 400 !important;\n  --padding: 0 !important;\n  min-height: 45px;\n}\n\nion-card ion-list button[ion-button] {\n  margin: 0;\n  background: linear-gradient(180deg, #f5839d 0%, #ee2d5a 70%);\n  height: 46px;\n  border-radius: 5px;\n  text-transform: unset;\n  font-size: 1.4rem;\n  box-shadow: 0 12px 18px -1px rgba(238, 45, 90, 0.34);\n}\n\nion-card ion-list .button.btn {\n  width: 100%;\n  font-size: 0.95rem;\n  font-weight: 400;\n  letter-spacing: 0.53px !important;\n  height: 46px;\n  --background: linear-gradient(180deg, #f5839d 0%, #ee2d5a 70%);\n  color: #fff;\n  margin: 0;\n  text-transform: unset !important;\n  --box-shadow: 0 12px 18px -1px rgba(238, 45, 90, 0.34);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZ0LXBvcHVwLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uL1BsdWdQViUyMC0lMjBBcHAlMjAvc3JjL2FwcC92dC1wb3B1cC92dC1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBRENJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDUjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RSOztBREVRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNBWjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0ZSOztBREtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDSFo7O0FETVE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSlo7O0FEUUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDTlI7O0FEUVE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNOWjs7QURRWTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDTmhCOztBRFdZO0VBQ0ksU0FBQTtFQUNBLDREQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9EQUFBO0FDVGhCOztBRGNZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSw4REFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzREFBQTtBQ1poQiIsImZpbGUiOiJ2dC1wb3B1cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjYpICFpbXBvcnRhbnQ7XG59XG5cbi5jbG9lc19idG4ge1xuICAgIHBhZGRpbmc6IDI1cHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbmlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTNweCk7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmc6IDAgMCAzcHggMDtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMTNweCk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAuaW1nX2JveCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMjc1cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI3NXB4O1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRleHRfYm94IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgICAgdG9wOiAtMjNweDtcbiAgICAgICAgXG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG5cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTdweDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xuICAgICAgICAgICAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiM2IzYjMgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAmW2lvbi1idXR0b25dIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y1ODM5ZCAwJSwgI2VlMmQ1YSA3MCUpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCAxOHB4IC0xcHggcmdiYSgyMzgsIDQ1LCA5MCwgMC4zNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgICYuYnRuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41M3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y1ODM5ZCAwJSwgI2VlMmQ1YSA3MCUpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLWJveC1zaGFkb3c6IDAgMTJweCAxOHB4IC0xcHggcmdiYSgyMzgsIDQ1LCA5MCwgMC4zNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjYpICFpbXBvcnRhbnQ7XG59XG5cbi5jbG9lc19idG4ge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuLmNsb2VzX2J0biBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNTNweCk7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMCAzcHggMDtcbn1cbmlvbi1jYXJkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTEzcHgpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tY2FyZCAuaW1nX2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjc1cHg7XG4gIG1pbi1oZWlnaHQ6IDI3NXB4O1xufVxuaW9uLWNhcmQgLmltZ19ib3ggaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaW9uLWNhcmQgLnRleHRfYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgdG9wOiAtMjNweDtcbn1cbmlvbi1jYXJkIC50ZXh0X2JveCBoMiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xufVxuaW9uLWNhcmQgLnRleHRfYm94IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuaW9uLWNhcmQgaW9uLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5pb24tY2FyZCBpb24tbGlzdCBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDAgMTdweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLS1yaXBwbGUtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYjNiM2IzICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA0NXB4O1xufVxuaW9uLWNhcmQgaW9uLWxpc3QgYnV0dG9uW2lvbi1idXR0b25dIHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjU4MzlkIDAlLCAjZWUyZDVhIDcwJSk7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBib3gtc2hhZG93OiAwIDEycHggMThweCAtMXB4IHJnYmEoMjM4LCA0NSwgOTAsIDAuMzQpO1xufVxuaW9uLWNhcmQgaW9uLWxpc3QgLmJ1dHRvbi5idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41M3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDZweDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjU4MzlkIDAlLCAjZWUyZDVhIDcwJSk7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1bnNldCAhaW1wb3J0YW50O1xuICAtLWJveC1zaGFkb3c6IDAgMTJweCAxOHB4IC0xcHggcmdiYSgyMzgsIDQ1LCA5MCwgMC4zNCk7XG59Il19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app [dir]=\"rtlSide\">\n    <ion-split-pane contentId=\"main-content\">\n        <ion-menu *ngIf=\"showSideMenu\" contentId=\"main-content\" [side]=\"rtlSideMenu\" type=\"overlay\">\n            <ion-header class=\"bg_transparent\">\n                <!-- <ion-toolbar>\n                  <ion-title>\n                      <div class=\"title_inner d-flex\">\n                          <ion-menu-toggle auto-hide=\"false\">\n                              <ion-icon class=\"zmdi zmdi-close\"></ion-icon>\n                          </ion-menu-toggle>\n                      </div>\n                  </ion-title>\n              </ion-toolbar> -->\n                <ion-button *ngIf=\"config.demoMode\" size=\"large\" class=\"btn end\" expand=\"full\" (click)=\"buyappalert()\">\n                    {{\"buy_this_app\" | translate}}\n                </ion-button>\n                <ion-menu-toggle auto-hide=\"false\" (click)=\"my_profile()\">\n                    <div class=\"brofile_box\">\n                        <div class=\"img_box center_img\">\n                            <img src=\"assets/images/profile.png\" class=\"crop_img\">\n                        </div>\n                        <div class=\"text_box\">\n                            <h2 class=\"d-flex\">Ronald <br> Howansky\n                                <ion-icon class=\"zmdi zmdi-chevron-right ion-text-end end\"></ion-icon>\n                            </h2>\n                        </div>\n                    </div>\n                </ion-menu-toggle>\n            </ion-header>\n            <ion-content fullscreen>\n                <ion-list>\n                    <ion-menu-toggle auto-hide=\"false\" class=\"animate__animated animate__fadeInUp\" (click)=\"home()\">\n                        <ion-item lines=\"none\">\n                            <div class=\"item_inner d-flex\">\n                                <ion-icon class=\"zmdi zmdi-home ion-text-start\" style=\"color: #FF7110;\"></ion-icon>\n                                <h2>{{'home' | translate}}</h2>\n                            </div>\n                        </ion-item>\n                    </ion-menu-toggle>\n                    <ion-menu-toggle auto-hide=\"false\" class=\"animate__animated animate__fadeInUp\" (click)=\"favorite()\">\n                        <ion-item lines=\"none\">\n                            <div class=\"item_inner d-flex\">\n                                <ion-icon class=\"zmdi zmdi-favorite ion-text-start\" style=\"color: #FF7110;\"></ion-icon>\n                                <h2>{{'favorites' | translate}}</h2>\n                            </div>\n                        </ion-item>\n                    </ion-menu-toggle>\n\n                    <ion-menu-toggle auto-hide=\"false\" class=\"animate__animated animate__fadeInUp\" (click)=\"termsConditions()\">\n                        <ion-item lines=\"none\">\n                            <div class=\"item_inner d-flex\">\n                                <ion-icon class=\"zmdi zmdi-assignment ion-text-start\" style=\"color: #FF7110;\"></ion-icon>\n                                <h2>{{'terms_conditions' | translate}}</h2>\n                            </div>\n                        </ion-item>\n                    </ion-menu-toggle>\n\n                    <ion-menu-toggle auto-hide=\"false\" class=\"animate__animated animate__fadeInUp\" (click)=\"faq()\">\n                        <ion-item lines=\"none\">\n                            <div class=\"item_inner d-flex\">\n                                <ion-icon class=\"zmdi zmdi-help ion-text-start\" style=\"color: #FF7110;\"></ion-icon>\n                                <h2>{{'faq' | translate}}</h2>\n                            </div>\n                        </ion-item>\n                    </ion-menu-toggle>\n                    <ion-menu-toggle auto-hide=\"false\" class=\"animate__animated animate__fadeInUp\" (click)=\"settings()\">\n                        <ion-item lines=\"none\">\n                            <div class=\"item_inner d-flex\">\n                                <ion-icon class=\"zmdi zmdi-settings ion-text-start\" style=\"color: #FF7110;\"></ion-icon>\n                                <h2>{{'settings' | translate}}</h2>\n                            </div>\n                        </ion-item>\n                    </ion-menu-toggle>\n                </ion-list>\n            </ion-content>\n\n            <ion-footer class=\"ion-no-border\">\n                <div class=\"banner\">\n                    <div class=\"logo\" style=\" padding-top: 15px;\">\n                        <img src=\"assets/images/logo_vault360.png\" class=\"lightThemeImg\">\n                        <img src=\"assets/images/logo_vault360dark.png\" class=\"darkThemeImg\">\n                    </div>\n\n                    <div class=\"banner_img\">\n                        <img src=\"assets/images/vector_menu.png\">\n                    </div>\n                </div>\n\n                <ion-menu-toggle auto-hide=\"false\" *ngIf=\"config.demoMode\">\n                    <div class=\"developed_by d-flex\" (click)=\"developed_by()\">\n                        <h2>{{\"developed_by\" | translate}}</h2>\n                        <div class=\"img_box ion-text-end end\">\n                            <img src=\"assets/images/opus_labs_dark.png\" class=\"lightThemeImg\">\n                            <img src=\"assets/images/opus_labs.png\" class=\"darkThemeImg\">\n                        </div>\n                    </div>\n                </ion-menu-toggle>\n            </ion-footer>\n        </ion-menu>\n        <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n    </ion-split-pane>\n</ion-app>";

/***/ }),

/***/ 9186:
/*!**************************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n    <div class=\"clear_button\">\n        <ion-icon name=\"close\" (click)=\"dismiss()\"></ion-icon>\n    </div>\n    <div class=\"container no_backend\">\n        <div class=\"container_inner\">\n            <h2>Buy this <br> Template Now</h2>\n            <p>IONIC template only, No Backend.</p>\n            <div class=\"button\" (click)=\"buyAppAction()\">\n                <div class=\"icon_box\">\n                    <img src=\"assets/images/ic_codecanyon.png\">\n                </div>\n                <h3>Get it on <strong>Codecanoyon</strong></h3>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"container complete_backend\">\n        <div class=\"container_inner\">\n            <h2>Buy this App with <br>Complete Backend </h2>\n            <p>Full App solution with complete Backend.</p>\n            <div class=\"button\" (click)=\"navWhatsapp()\">\n                <div class=\"icon_box\">\n                    <img src=\"assets/images/ic_whatsapp.png\">\n                </div>\n                <h3>Message on <strong>WhatsApp</strong></h3>\n            </div>\n        </div>\n\n    </div>\n</ion-content>";

/***/ }),

/***/ 6455:
/*!********************************************************!*\
  !*** ./src/app/vt-popup/vt-popup.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n    <div class=\"cloes_btn ion-text-end\">\n        <ion-icon name=\"close-outline\" (click)=\"dismiss()\"></ion-icon>\n    </div>\n\n    <ion-card>\n        <div class=\"img_box\">\n            <img src=\"assets/images/vt_popup_img.png\">\n        </div>\n\n        <div class=\"text_box\">\n            <h2>Stay in touch.</h2>\n            <p>Stay connected for Future <br>updates and new products.</p>\n        </div>\n        <ion-list lines=\"none\">\n\n            <ion-item lines=\"none\">\n                <ion-input type=\"email\" placeholder=\"Enter your email address\" [(ngModel)]=\"email_Id\"></ion-input>\n            </ion-item>\n\n            <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"onSubscribe()\">\n                Subscribe Now\n            </ion-button>\n\n        </ion-list>\n    </ion-card>\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map