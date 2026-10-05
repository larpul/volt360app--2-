"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_add-check-in_add-check-in_module_ts"],{

/***/ 1798:
/*!*************************************************************!*\
  !*** ./src/app/add-check-in/add-check-in-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCheckInPageRoutingModule": () => (/* binding */ AddCheckInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _add_check_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-check-in.page */ 5433);




const routes = [
    {
        path: '',
        component: _add_check_in_page__WEBPACK_IMPORTED_MODULE_0__.AddCheckInPage
    }
];
let AddCheckInPageRoutingModule = class AddCheckInPageRoutingModule {
};
AddCheckInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddCheckInPageRoutingModule);



/***/ }),

/***/ 9021:
/*!*****************************************************!*\
  !*** ./src/app/add-check-in/add-check-in.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCheckInPageModule": () => (/* binding */ AddCheckInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_check_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-check-in-routing.module */ 1798);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _add_check_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-check-in.page */ 5433);








let AddCheckInPageModule = class AddCheckInPageModule {
};
AddCheckInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _add_check_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddCheckInPageRoutingModule
        ],
        declarations: [_add_check_in_page__WEBPACK_IMPORTED_MODULE_1__.AddCheckInPage]
    })
], AddCheckInPageModule);



/***/ }),

/***/ 5433:
/*!***************************************************!*\
  !*** ./src/app/add-check-in/add-check-in.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCheckInPage": () => (/* binding */ AddCheckInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_check_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-check-in.page.html?ngResource */ 5910);
/* harmony import */ var _add_check_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-check-in.page.scss?ngResource */ 2093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let AddCheckInPage = class AddCheckInPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    home() {
        this.navCtrl.navigateRoot(['./home']);
    }
};
AddCheckInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
AddCheckInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-add-check-in',
        template: _add_check_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_check_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddCheckInPage);



/***/ }),

/***/ 2093:
/*!****************************************************************!*\
  !*** ./src/app/add-check-in/add-check-in.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  background: var(--bg-color) !important;\n  height: 170px;\n}\nion-header ion-toolbar {\n  --background: var(--bg-color) !important;\n}\nion-header ion-toolbar ion-title {\n  font-weight: 500;\n  font-size: 1.15rem;\n}\nion-header .banner {\n  max-width: 100%;\n  overflow: hidden;\n  padding-left: 20px;\n  position: relative;\n  top: -13px;\n  z-index: 999;\n}\nion-header .banner .header_text {\n  padding: 0;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n}\nion-header .banner .header_text h2 {\n  padding-bottom: 7px;\n  color: var(--text-light2);\n  font-size: 0.75rem;\n}\nion-header .banner .header_text h1 {\n  padding-bottom: 0;\n}\nion-header .banner img {\n  width: 155px;\n  min-width: 155px;\n}\nion-content {\n  overflow: hidden;\n  border-radius: 15px 15px 0 0;\n}\n.form {\n  padding-top: 30px;\n}\n.form ion-item ion-textarea {\n  padding: 0;\n  --padding-top: 0 !important;\n  --padding-bottom: 0 !important;\n}\n.form ion-item ion-label span {\n  color: var(--text-light2);\n}\n.form ion-item.add_photos .input_box {\n  border: 0;\n  background: var(--bg-color);\n  min-height: 140px;\n  display: flex;\n  align-items: center;\n}\n.form ion-item.add_photos .input_box .text_box {\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\n.form ion-item.add_photos .input_box .text_box ion-icon {\n  margin: 0 auto;\n  display: block;\n  font-size: 1.8rem;\n  min-height: 47px;\n}\n.form ion-item.add_photos .input_box .text_box h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 1rem;\n  text-align: center;\n}\nion-footer {\n  padding: 25px;\n  background: var(--bg-white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jaGVjay1pbi5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi9QbHVnUFYlMjAtJTIwQXBwJTIwL3NyYy9hcHAvYWRkLWNoZWNrLWluL2FkZC1jaGVjay1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0ksd0NBQUE7QUNFUjtBRERRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0daO0FEQUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNFUjtBRERRO0VBQ0ksVUFBQTtFQUNBLDRCQUFBO0VBQUEsdUJBQUE7QUNHWjtBREZZO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDSWhCO0FERlk7RUFDSSxpQkFBQTtBQ0loQjtBRERRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDR1o7QURFQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVBO0VBQ0ksaUJBQUE7QUNDSjtBRENRO0VBQ0ksVUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNDWjtBREVZO0VBQ0kseUJBQUE7QUNBaEI7QURJWTtFQUNJLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRmhCO0FER2dCO0VBQ0ksdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7QUNEcEI7QURFb0I7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBeEI7QURFb0I7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBeEI7QURRQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtBQ0xKIiwiZmlsZSI6ImFkZC1jaGVjay1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcikgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgaW9uLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJhbm5lciB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTEzcHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgLmhlYWRlcl90ZXh0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTVweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTU1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XG59XG5cbi5mb3JtIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIGlvbi10ZXh0YXJlYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuYWRkX3Bob3RvcyB7XG4gICAgICAgICAgICAuaW5wdXRfYm94IHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE0MHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAudGV4dF9ib3gge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDdweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXdoaXRlKTtcbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTcwcHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcikgIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xufVxuaW9uLWhlYWRlciAuYmFubmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTNweDtcbiAgei1pbmRleDogOTk5O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIC5oZWFkZXJfdGV4dCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIC5oZWFkZXJfdGV4dCBoMiB7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciAuaGVhZGVyX3RleHQgaDEge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciBpbWcge1xuICB3aWR0aDogMTU1cHg7XG4gIG1pbi13aWR0aDogMTU1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5mb3JtIGlvbi1pdGVtIGlvbi10ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDA7XG4gIC0tcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLmZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVsIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xufVxuLmZvcm0gaW9uLWl0ZW0uYWRkX3Bob3RvcyAuaW5wdXRfYm94IHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvcm0gaW9uLWl0ZW0uYWRkX3Bob3RvcyAuaW5wdXRfYm94IC50ZXh0X2JveCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmZvcm0gaW9uLWl0ZW0uYWRkX3Bob3RvcyAuaW5wdXRfYm94IC50ZXh0X2JveCBpb24taWNvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIG1pbi1oZWlnaHQ6IDQ3cHg7XG59XG4uZm9ybSBpb24taXRlbS5hZGRfcGhvdG9zIC5pbnB1dF9ib3ggLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXdoaXRlKTtcbn0iXX0= */";

/***/ }),

/***/ 5910:
/*!****************************************************************!*\
  !*** ./src/app/add-check-in/add-check-in.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"arrow-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            {{\"add_check_in\" | translate}}\n        </ion-title>\n    </ion-toolbar>\n    <div class=\"banner d-flex\">\n        <div class=\"header_text\">\n            <h2 class=\"animate__animated animate__fadeInUp\">\n                A233, World Trade Park\n            </h2>\n            <h1 class=\"animate__animated animate__fadeInUp\">\n                Business Center\n            </h1>\n        </div>\n\n        <img src=\"assets/images/vector_checkin.png\" class=\"end\">\n    </div>\n\n</ion-header>\n\n<ion-content class=\"bg_white\" fullscreen>\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp\">\n                <div class=\"item_inner\">\n                    <ion-label>{{'share_your_experience' | translate}}</ion-label>\n                    <div class=\"input_box\">\n                        <ion-textarea type=\"text\" rows=\"5\" value=\"\" placeholder=\"{{ 'enter_word_about' | translate}} EV Spot\"></ion-textarea>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item lines=\"none\" class=\"add_photos animate__animated animate__fadeInUp\">\n                <div class=\"item_inner\">\n                    <ion-label>{{'add_photos' | translate}} <span>({{'optional' | translate}})</span></ion-label>\n                    <div class=\"input_box\">\n                        <div class=\"text_box\">\n                            <ion-icon class=\"zmdi zmdi-camera\"></ion-icon>\n                            <h3 class=\"\">\n                                {{'upload_photo_or_video' | translate}}\n                            </h3>\n                        </div>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <!-- <ion-button size=\"large\" shape=\"block\" class=\"btn animate__animated animate__fadeInUp\" (click)=\"home()\">{{'submit' | translate}}</ion-button> -->\n    <ion-button size=\"large\" shape=\"block\" class=\"btn animate__animated animate__fadeInUp\">{{'submit' | translate}}</ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_add-check-in_add-check-in_module_ts.js.map