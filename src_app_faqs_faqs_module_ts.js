"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_faqs_faqs_module_ts"],{

/***/ 4448:
/*!*********************************************!*\
  !*** ./src/app/faqs/faqs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPageRoutingModule": () => (/* binding */ FaqsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs.page */ 550);




const routes = [
    {
        path: '',
        component: _faqs_page__WEBPACK_IMPORTED_MODULE_0__.FaqsPage
    }
];
let FaqsPageRoutingModule = class FaqsPageRoutingModule {
};
FaqsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FaqsPageRoutingModule);



/***/ }),

/***/ 8730:
/*!*************************************!*\
  !*** ./src/app/faqs/faqs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPageModule": () => (/* binding */ FaqsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _faqs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs-routing.module */ 4448);
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqs.page */ 550);








let FaqsPageModule = class FaqsPageModule {
};
FaqsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _faqs_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqsPageRoutingModule
        ],
        declarations: [_faqs_page__WEBPACK_IMPORTED_MODULE_1__.FaqsPage]
    })
], FaqsPageModule);



/***/ }),

/***/ 550:
/*!***********************************!*\
  !*** ./src/app/faqs/faqs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPage": () => (/* binding */ FaqsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _faqs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs.page.html?ngResource */ 5790);
/* harmony import */ var _faqs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqs.page.scss?ngResource */ 5778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FaqsPage = class FaqsPage {
    constructor() { }
    ngOnInit() {
    }
    reset() {
        this.faqExpand1 = false;
        this.faqExpand2 = false;
        this.faqExpand3 = false;
        this.faqExpand4 = false;
        this.faqExpand5 = false;
        this.faqExpand6 = false;
        this.faqExpand7 = false;
        this.faqExpand8 = false;
    }
    faqExpandToggle1() {
        this.reset();
        this.faqExpand1 = !this.faqExpand1;
    }
    faqExpandToggle2() {
        this.reset();
        this.faqExpand2 = !this.faqExpand2;
    }
    faqExpandToggle3() {
        this.reset();
        this.faqExpand3 = !this.faqExpand3;
    }
    faqExpandToggle4() {
        this.reset();
        this.faqExpand4 = !this.faqExpand4;
    }
    faqExpandToggle5() {
        this.reset();
        this.faqExpand5 = !this.faqExpand5;
    }
    faqExpandToggle6() {
        this.reset();
        this.faqExpand6 = !this.faqExpand6;
    }
    faqExpandToggle7() {
        this.reset();
        this.faqExpand7 = !this.faqExpand7;
    }
    faqExpandToggle8() {
        this.reset();
        this.faqExpand8 = !this.faqExpand8;
    }
};
FaqsPage.ctorParameters = () => [];
FaqsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-faqs',
        template: _faqs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_faqs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FaqsPage);



/***/ }),

/***/ 5778:
/*!************************************************!*\
  !*** ./src/app/faqs/faqs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  background: var(--bg-color) !important;\n}\nion-header ion-toolbar {\n  --background: var(--bg-color) !important;\n}\nion-header .header_text {\n  min-height: 80px;\n}\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n}\nion-list h2 {\n  width: calc(100% - 40px);\n  margin: 0 auto;\n  padding: 20px 0;\n  color: var(--text-light2);\n  font-size: 1.1rem;\n}\nion-list ion-item {\n  padding: 14px 20px;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  background: var(--bg-white);\n  --background: var(--transparent);\n  transition: all 0.5s;\n  width: calc(100% - 40px);\n  margin: 0 auto;\n  margin-bottom: 10px;\n  border-radius: 12px;\n}\nion-list ion-item .item_inner {\n  align-items: flex-start;\n}\nion-list ion-item .item_inner h3 {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 500;\n  color: var(--text-dark);\n}\nion-list ion-item .item_inner h3 ion-icon {\n  color: var(--text-dark);\n  font-size: 1.7rem;\n  width: 17px;\n  min-width: 17px;\n  transition: all 0.3s;\n}\nion-list ion-item .item_inner .text_box {\n  max-height: 0px;\n  overflow: hidden;\n  transition: all 0.5s;\n}\nion-list ion-item .item_inner .text_box p {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 29px;\n  align-items: flex-start;\n  padding-top: 13px;\n}\nion-list ion-item.active {\n  transition: all 0.5s;\n}\nion-list ion-item.active .item_inner h3 ion-icon {\n  transform: rotate(180deg);\n}\nion-list ion-item.active .item_inner .text_box {\n  max-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcXMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vUGx1Z1BWJTIwLSUyMEFwcCUyMC9zcmMvYXBwL2ZhcXMvZmFxcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBQTtBQ0NKO0FEQUk7RUFDSSx3Q0FBQTtBQ0VSO0FEQUk7RUFDSSxnQkFBQTtBQ0VSO0FERUE7RUFDSSx5Q0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7QURDSTtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURDSTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NSO0FEQVE7RUFDSSx1QkFBQTtBQ0VaO0FERFk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDR2hCO0FERmdCO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNJcEI7QUREWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDR2hCO0FERmdCO0VBQ0ksU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDSXBCO0FEQVE7RUFDSSxvQkFBQTtBQ0VaO0FERW9CO0VBQ0kseUJBQUE7QUNBeEI7QURHZ0I7RUFDSSxpQkFBQTtBQ0RwQiIsImZpbGUiOiJmYXFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKSAhaW1wb3J0YW50O1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcikgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmhlYWRlcl90ZXh0IHtcbiAgICAgICAgbWluLWhlaWdodDogODBweDtcbiAgICB9XG59XG5cbmlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICAvLyAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGgyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctd2hpdGUpO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIC5pdGVtX2lubmVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTdweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRleHRfYm94IHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAvL3BhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAgICAgICAuaXRlbV9pbm5lciB7XG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50ZXh0X2JveCB7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcikgIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgLmhlYWRlcl90ZXh0IHtcbiAgbWluLWhlaWdodDogODBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWxpc3QgaDIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctd2hpdGUpO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMyBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgd2lkdGg6IDE3cHg7XG4gIG1pbi13aWR0aDogMTdweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3gge1xuICBtYXgtaGVpZ2h0OiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0uYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5pb24tbGlzdCBpb24taXRlbS5hY3RpdmUgLml0ZW1faW5uZXIgaDMgaW9uLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0uYWN0aXZlIC5pdGVtX2lubmVyIC50ZXh0X2JveCB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xufSJdfQ== */";

/***/ }),

/***/ 5790:
/*!************************************************!*\
  !*** ./src/app/faqs/faqs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <div class=\"header_text\">\n        <h1 class=\"animate__animated animate__fadeInUp\">\n            {{\"faq\" | translate}}\n        </h1>\n        <h2 class=\"animate__animated animate__fadeInUp\">\n            {{\"your_question_got_answered\" | translate}}\n        </h2>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <ion-list lines=\"none\">\n        <ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand1 ? 'active' : '' \" (click)=\"faqExpandToggle1()\">\n            <div class=\"item_inner\">\n                <h3 class=\"d-flex\">How to Lorem ipsum dolor?\n                    <ion-icon class=\"zmdi zmdi-chevron-down ion-text-center end\"></ion-icon>\n                </h3>\n                <div class=\"text_box\">\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n                        specimen book.</p>\n                </div>\n            </div>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand2 ? 'active' : '' \" (click)=\"faqExpandToggle2()\">\n            <div class=\"item_inner\">\n                <h3 class=\"d-flex\">How to Lorem ipsum dolor?\n                    <ion-icon class=\"zmdi zmdi-chevron-down ion-text-center end\"></ion-icon>\n                </h3>\n                <div class=\"text_box\">\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n                        specimen book.</p>\n                </div>\n            </div>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand3 ? 'active' : '' \" (click)=\"faqExpandToggle3()\">\n            <div class=\"item_inner\">\n                <h3 class=\"d-flex\">How to Lorem ipsum dolor?\n                    <ion-icon class=\"zmdi zmdi-chevron-down ion-text-center end\"></ion-icon>\n                </h3>\n                <div class=\"text_box\">\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n                        specimen book.</p>\n                </div>\n            </div>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand4 ? 'active' : '' \" (click)=\"faqExpandToggle4()\">\n            <div class=\"item_inner\">\n                <h3 class=\"d-flex\">How to Lorem ipsum dolor?\n                    <ion-icon class=\"zmdi zmdi-chevron-down ion-text-center end\"></ion-icon>\n                </h3>\n                <div class=\"text_box\">\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n                        specimen book.</p>\n                </div>\n            </div>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand5 ? 'active' : '' \" (click)=\"faqExpandToggle5()\">\n            <div class=\"item_inner\">\n                <h3 class=\"d-flex\">How to Lorem ipsum dolor?\n                    <ion-icon class=\"zmdi zmdi-chevron-down ion-text-center end\"></ion-icon>\n                </h3>\n                <div class=\"text_box\">\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n                        specimen book.</p>\n                </div>\n            </div>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand6 ? 'active' : '' \" (click)=\"faqExpandToggle6()\">\n            <div class=\"item_inner\">\n                <h3 class=\"d-flex\">How to Lorem ipsum dolor?\n                    <ion-icon class=\"zmdi zmdi-chevron-down ion-text-center end\"></ion-icon>\n                </h3>\n                <div class=\"text_box\">\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n                        specimen book.</p>\n                </div>\n            </div>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand7 ? 'active' : '' \" (click)=\"faqExpandToggle7()\">\n            <div class=\"item_inner\">\n                <h3 class=\"d-flex\">How to Lorem ipsum dolor?\n                    <ion-icon class=\"zmdi zmdi-chevron-down ion-text-center end\"></ion-icon>\n                </h3>\n                <div class=\"text_box\">\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n                        specimen book.</p>\n                </div>\n            </div>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"faqExpand8 ? 'active' : '' \" (click)=\"faqExpandToggle8()\">\n            <div class=\"item_inner\">\n                <h3 class=\"d-flex\">How to Lorem ipsum dolor?\n                    <ion-icon class=\"zmdi zmdi-chevron-down ion-text-center end\"></ion-icon>\n                </h3>\n                <div class=\"text_box\">\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n                        specimen book.</p>\n                </div>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_faqs_faqs_module_ts.js.map