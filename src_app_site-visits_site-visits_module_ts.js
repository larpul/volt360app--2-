"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_site-visits_site-visits_module_ts"],{

/***/ 9230:
/*!****************************************************************!*\
  !*** ./src/app/site-visits/site-visits-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteVisitsPageRoutingModule": () => (/* binding */ SiteVisitsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _site_visits_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-visits.page */ 9232);




const routes = [
    {
        path: '',
        component: _site_visits_page__WEBPACK_IMPORTED_MODULE_0__.SiteVisitsPage
    }
];
let SiteVisitsPageRoutingModule = class SiteVisitsPageRoutingModule {
};
SiteVisitsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SiteVisitsPageRoutingModule);



/***/ }),

/***/ 9231:
/*!*******************************************************!*\
  !*** ./src/app/site-visits/site-visits.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteVisitsPageModule": () => (/* binding */ SiteVisitsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _site_visits_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-visits-routing.module */ 9230);
/* harmony import */ var _site_visits_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-visits.page */ 9232);







let SiteVisitsPageModule = class SiteVisitsPageModule {
};
SiteVisitsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _site_visits_routing_module__WEBPACK_IMPORTED_MODULE_0__.SiteVisitsPageRoutingModule
        ],
        declarations: [_site_visits_page__WEBPACK_IMPORTED_MODULE_1__.SiteVisitsPage]
    })
], SiteVisitsPageModule);



/***/ }),

/***/ 9232:
/*!***************************************************!*\
  !*** ./src/app/site-visits/site-visits.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteVisitsPage": () => (/* binding */ SiteVisitsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/inquiry-store */ 9200);

// The log of past site visits: where each visit happened, when the technician checked in and
// what they wrote down while they were there. Check out on the Home map appends a visit to
// VisitLog, which keeps it in localStorage, and the store's own visited houses (the seeded
// demo visits) fill in the earlier history.
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const template = `<ion-header>
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Site visits</ion-title>
    </ion-toolbar>
</ion-header>

<ion-content class="bg_color" fullscreen>
    <div class="visits_wrap">
        <div class="visits_hero">
            <h2>{{ visitCount }}</h2>
            <span>site visits logged</span>
            <p>{{ lastVisitLabel }}</p>
        </div>

        <div class="visits_card">
            <div class="card_head d-flex">
                <h3>Visit log</h3>
            </div>
            <p class="empty_note" *ngIf="!visits.length">No site visits logged yet. Check in on a house from the map, check out when you leave, and the visit lands here.</p>
            <div class="visit_row d-flex" *ngFor="let visit of visits">
                <div class="date_box">
                    <strong>{{ visit.day }}</strong>
                    <span>{{ visit.month }}</span>
                </div>
                <div class="visit_body">
                    <h4>{{ visit.customerName }}</h4>
                    <p class="visit_addr">{{ visit.locationAddress }}</p>
                    <div class="visit_meta d-flex">
                        <span class="meta_item"><strong>Check-in</strong>{{ visit.checkIn }}</span>
                        <span class="meta_item"><strong>Saved location</strong>{{ visit.coords }}</span>
                    </div>
                    <p class="visit_note">{{ visit.notes }}</p>
                </div>
            </div>
        </div>
    </div>
</ion-content>`;

const styles = `ion-header {
  background: var(--white_gradient);
}
ion-header ion-toolbar ion-title {
  color: var(--text-dark);
  font-weight: 600;
}
.visits_wrap {
  padding-bottom: 30px;
}
.visits_hero {
  width: calc(100% - 40px);
  margin: 0 auto 15px auto;
  padding: 20px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--primary) 0%, #fa6c00 100%);
  box-shadow: 0 15px 12px -8px rgba(0, 0, 0, 0.25);
}
.visits_hero h2 {
  margin: 0;
  color: #ffffff;
  font-size: 2.3rem !important;
  font-weight: 700;
  line-height: 1;
}
.visits_hero span {
  display: block;
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.72rem !important;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: none;
}
.visits_hero p {
  margin: 10px 0 0 0;
  color: #ffffff;
  font-size: 0.85rem !important;
  font-weight: 500;
}
.visits_card {
  width: calc(100% - 40px);
  margin: 0 auto 15px auto;
  padding: 16px;
  background: var(--bg-white);
  border-radius: 14px;
  box-shadow: 0 15px 12px -8px rgba(0, 0, 0, 0.1);
}
.card_head h3 {
  margin: 0;
  color: var(--text-dark);
  font-size: 1rem !important;
  font-weight: 600;
}
.empty_note {
  margin: 12px 0 0 0;
  color: var(--text-light2);
  font-size: 0.8rem !important;
  line-height: 1.5;
}
.visit_row {
  padding: 14px 0;
  border-bottom: 1px solid var(--border-line-color);
}
.visit_row:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}
.date_box {
  min-width: 44px;
  width: 44px;
  height: 46px;
  margin-right: 12px;
  border-radius: 12px;
  background: rgba(250, 108, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.date_box strong {
  color: var(--primary);
  font-size: 1.05rem !important;
  font-weight: 700;
  line-height: 1;
}
.date_box span {
  margin-top: 3px;
  color: var(--text-light2);
  font-size: 0.62rem !important;
  font-weight: 600;
  text-transform: none;
}
.visit_body {
  width: 100%;
  overflow: hidden;
}
.visit_body h4 {
  margin: 0 0 2px 0;
  color: var(--text-dark);
  font-size: 0.92rem !important;
  font-weight: 600;
}
.visit_addr {
  margin: 0;
  color: var(--text-light2);
  font-size: 0.75rem !important;
}
.visit_meta {
  flex-wrap: wrap;
  margin-top: 8px;
}
.meta_item {
  margin: 0 8px 4px 0;
  padding: 4px 9px;
  border: 1px solid var(--border-line-color);
  border-radius: 20px;
  background: rgba(250, 108, 0, 0.08);
  color: var(--text-light2);
  font-size: 0.68rem !important;
  font-weight: 600;
}
.meta_item strong {
  margin-right: 5px;
  color: var(--text-dark);
  font-weight: 700;
}
.visit_note {
  margin: 6px 0 0 0;
  color: var(--text-light2);
  font-size: 0.75rem !important;
  line-height: 1.45;
}`;

let SiteVisitsPage = class SiteVisitsPage {
    constructor() {
        this.visits = [];
        this.visitCount = 0;
        this.lastVisitLabel = 'No site visits yet';
    }
    ngOnInit() {
        const data = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.InquiryStore.snapshot();
        this.visits = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.VisitLog.entries(data).map(visit => ({
            id: visit.id,
            customerName: visit.customerName,
            locationAddress: visit.locationAddress,
            day: this.dayLabel(visit.visitDate),
            month: this.monthLabel(visit.visitDate),
            checkIn: visit.checkInTime || 'Not recorded',
            coords: this.coordsLabel(visit),
            notes: visit.notes || 'No notes from this visit'
        }));
        this.visitCount = this.visits.length;
        this.lastVisitLabel = this.visits.length
            ? 'Most recent: ' + this.visits[0].day + ' ' + this.visits[0].month
            : 'No site visits yet';
    }
    dayLabel(isoDate) {
        return isoDate ? String(parseInt(isoDate.slice(8, 10), 10)) : '';
    }
    monthLabel(isoDate) {
        const month = isoDate ? parseInt(isoDate.slice(5, 7), 10) : 0;
        return month ? MONTHS[month - 1] : '';
    }
    // Where the visit was saved: the position the device stamped at check-in, or the house's
    // own pin when the browser would not give one.
    coordsLabel(visit) {
        const hasCoords = visit.lat !== undefined && visit.lat !== null && visit.lng !== undefined && visit.lng !== null;
        return hasCoords ? visit.lat.toFixed(5) + ', ' + visit.lng.toFixed(5) : 'Location not recorded';
    }
};
SiteVisitsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-site-visits',
        template: template,
        styles: [styles]
    })
], SiteVisitsPage);



/***/ })

}]);
