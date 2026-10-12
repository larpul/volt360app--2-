"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_roof_roof_module_ts"],{

/***/ 9280:
/*!*************************************************!*\
  !*** ./src/app/roof/roof-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoofPageRoutingModule": () => (/* binding */ RoofPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _roof_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roof.page */ 9282);




const routes = [
    {
        path: '',
        component: _roof_page__WEBPACK_IMPORTED_MODULE_0__.RoofPage
    }
];
let RoofPageRoutingModule = class RoofPageRoutingModule {
};
RoofPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RoofPageRoutingModule);



/***/ }),

/***/ 9281:
/*!******************************************!*\
  !*** ./src/app/roof/roof.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoofPageModule": () => (/* binding */ RoofPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _roof_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roof-routing.module */ 9280);
/* harmony import */ var _roof_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roof.page */ 9282);







let RoofPageModule = class RoofPageModule {
};
RoofPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _roof_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoofPageRoutingModule
        ],
        declarations: [_roof_page__WEBPACK_IMPORTED_MODULE_1__.RoofPage]
    })
], RoofPageModule);



/***/ }),

/***/ 9282:
/*!***********************************!*\
  !*** ./src/app/roof/roof.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoofPage": () => (/* binding */ RoofPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/inquiry-store */ 9200);

// The design half of a quote: the property the panels go on, what the roof looks like from above,
// where Google would put the panels, the system that covers the customer's bill, and what adding a
// battery changes. The address and the roof layout are looked up live; the sizing repeats the
// savings and proposal pages' constants so all three pages agree on the same system.
const PRODUCTION_PER_KW = 1400;   // kWh a year one kW of panels makes in this region
const COST_PER_WATT = 2.6;        // installed dollars a watt, before the tax credit
const FEDERAL_CREDIT = 0.30;      // federal residential solar credit
const PANEL_WATTS = 400;
const LOAN_APR = 0.0599;          // a ten-year loan, nothing down
const LOAN_MONTHS = 120;
const SOLAR_SELF_USE = 0.4;       // share of the roof's output a home uses while the sun is up
const BATTERY_KWH = 13.5;         // one battery, the size a home backup is sold at
const BATTERY_COST_PER_KWH = 780;
const BATTERY_USABLE = 0.9;       // a battery is not drained to zero
const MAP_VIEW_ZOOM = 19;         // the wider satellite look at the property
const MAP_LAYOUT_ZOOM = 20;       // tight enough to place single panels
const MAP_WIDTH = 640;
const MAP_HEIGHT = 400;
const MAX_DRAWN_PANELS = 240;

const template = `<ion-header>
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Roof design</ion-title>
    </ion-toolbar>
</ion-header>

<ion-content class="roof_content" fullscreen>
    <div class="roof_wrap">
        <div class="roof_card animate__animated animate__fadeInUp">
            <div class="detail_head d-flex">
                <div class="head_text">
                    <h2 class="detail_name">{{ headerName() }}</h2>
                    <p class="detail_addr">
                        <ion-icon class="zmdi zmdi-pin"></ion-icon>
                        <span>{{ formattedAddress || 'No property looked up yet' }}</span>
                    </p>
                </div>
                <button class="detail_close" type="button" (click)="clearDesign()" aria-label="Clear this design">
                    <ion-icon class="zmdi zmdi-close"></ion-icon>
                </button>
            </div>
            <p class="head_sub">The property, the roof from above and the panels that go on it.</p>
            <div class="head_stats d-flex">
                <div class="head_stat">
                    <strong>{{ systemSize() }} kW</strong>
                    <span>system size</span>
                </div>
                <div class="head_stat">
                    <strong>{{ proposedPanels() }}</strong>
                    <span>panels</span>
                </div>
                <div class="head_stat">
                    <strong>{{ kwh(annualProduction()) }}</strong>
                    <span>kWh a year</span>
                </div>
            </div>
            <p class="head_note">{{ heroNote() }}</p>

            <div class="detail_field">
                <label class="field_label">Status</label>
                <div class="pill_row d-flex" *ngIf="roof">
                    <span class="status_pill" *ngIf="roof.imageryQuality"><ion-icon class="zmdi zmdi-flash"></ion-icon>{{ roof.imageryQuality }} imagery</span>
                    <span class="status_pill" *ngIf="roof.roofAreaM2"><ion-icon class="zmdi zmdi-flash"></ion-icon>{{ roof.roofAreaM2 }} m2 of roof</span>
                    <span class="status_pill" *ngIf="roof.maxPanels"><ion-icon class="zmdi zmdi-flash"></ion-icon>Fits up to {{ roof.maxPanels }} panels</span>
                </div>
                <p class="notes_box" *ngIf="!roof">{{ roofNotice || 'No roof data for this property yet.' }}</p>
            </div>

            <div class="detail_field">
                <label class="field_label">Saved inquiry</label>
                <div class="select_box">
                    <select class="cust_select" [ngModel]="customerId" (ngModelChange)="pickCustomerId($event)">
                        <option value="">Choose a saved inquiry</option>
                        <option *ngFor="let customer of customers" [value]="customer.id">{{ customer.customerName }}</option>
                    </select>
                    <ion-icon class="zmdi zmdi-chevron-down"></ion-icon>
                </div>
            </div>

            <div class="detail_field">
                <label class="field_label">Address</label>
                <p class="card_text">Pick the customer's saved inquiry or type the address, and the roof lookup follows.</p>
                <div class="search_row d-flex">
                    <div class="field_box grow">
                        <ion-icon class="zmdi zmdi-pin pin_icon"></ion-icon>
                        <input type="text" [(ngModel)]="addressInput" placeholder="1420 Tylersville Rd, Mason, OH" (keyup.enter)="lookupAddress()">
                    </div>
                    <button class="look_btn" type="button" (click)="lookupAddress()">
                        <span *ngIf="!looking">Look up</span>
                        <span *ngIf="looking">Looking</span>
                    </button>
                </div>
                <div class="prop_box" *ngIf="formattedAddress">
                    <div class="prop_top d-flex">
                        <span class="prop_badge">{{ propertyLabel() }}</span>
                        <span class="prop_coords end">{{ coordsLabel() }}</span>
                    </div>
                    <h4 class="prop_addr">{{ formattedAddress }}</h4>
                </div>
                <p class="notice" *ngIf="lookupNotice">{{ lookupNotice }}</p>
            </div>

            <div class="detail_field">
                <label class="field_label">Satellite view</label>
                <p class="card_text">The property from above, so the roof area and the shading are visible.</p>
                <div class="roof_stage" *ngIf="viewImage(); else noView">
                    <img class="roof_img" [src]="viewImage()" alt="Satellite view of the property" (error)="onImageError()">
                </div>
                <ng-template #noView>
                    <p class="notes_box">No satellite image for this address yet.</p>
                </ng-template>
                <p class="notice" *ngIf="roofNotice">{{ roofNotice }}</p>
            </div>

            <div class="detail_field">
                <div class="field_head d-flex">
                    <label class="field_label">Solar panel placement</label>
                    <span class="status_pill" *ngIf="drawnPanels().length"><ion-icon class="zmdi zmdi-flash"></ion-icon>{{ drawnPanels().length }} panels</span>
                </div>
                <p class="card_text">Where the panels sit on the roof, on Google's own roof model.</p>
                <div class="roof_stage" *ngIf="layoutImage(); else noLayout">
                    <img class="roof_img" [src]="layoutImage()" alt="Proposed panel layout on the roof" (error)="onImageError()">
                    <span class="panel_zone" *ngFor="let panel of drawnPanels()" [style.left.%]="panel.left" [style.top.%]="panel.top" [style.width.%]="panel.width" [style.height.%]="panel.height"></span>
                </div>
                <ng-template #noLayout>
                    <p class="notes_box">No satellite image for this address yet.</p>
                </ng-template>
                <div class="legend_row d-flex" *ngIf="drawnPanels().length">
                    <span class="legend_swatch"></span>
                    <span class="legend_text">Proposed panel</span>
                </div>
                <p class="notice" *ngIf="placementNotice()">{{ placementNotice() }}</p>
            </div>

            <div class="detail_field">
                <label class="field_label">System size and production</label>
                <p class="card_text">Sized off the bill this customer handed over.</p>
                <div class="stat_grid">
                    <div class="stat_cell">
                        <strong>{{ systemSize() }} kW</strong>
                        <span>system size</span>
                    </div>
                    <div class="stat_cell">
                        <strong>{{ panelCount() }}</strong>
                        <span>panels needed</span>
                    </div>
                    <div class="stat_cell">
                        <strong>{{ kwh(annualProduction()) }}</strong>
                        <span>kWh a year</span>
                    </div>
                    <div class="stat_cell">
                        <strong>{{ offsetPercent() }}%</strong>
                        <span>of the usage</span>
                    </div>
                </div>
                <p class="notice" *ngIf="roofFitNotice()">{{ roofFitNotice() }}</p>
            </div>

            <div class="detail_field">
                <label class="field_label">Battery configuration</label>
                <p class="card_text">The same roof with the utility as the battery, and with a {{ BATTERY_KWH }} kWh battery added.</p>
                <div class="cmp_head d-flex">
                    <span class="cmp_label"></span>
                    <span class="cmp_col">Solar only</span>
                    <span class="cmp_col">With battery</span>
                </div>
                <div class="cmp_row d-flex" *ngFor="let row of batteryRows()">
                    <span class="cmp_label">{{ row.label }}</span>
                    <strong class="cmp_val">{{ row.only }}</strong>
                    <strong class="cmp_val battery">{{ row.both }}</strong>
                </div>
                <p class="fine_print">The battery shifts more of the roof's output into the evening and covers an outage; today the grid stores that energy for free. {{ money(batteryCost()) }} for {{ BATTERY_KWH }} kWh, on the same 10-year loan.</p>
            </div>

            <div class="detail_field">
                <label class="field_label">Additional notes</label>
                <p class="notes_box">Sizing assumes {{ kwh(PRODUCTION_PER_KW) }} kWh a year for every kW of panels, $2.60 a watt installed and the 30% federal credit. The roof area, the panel count and the panel layout come from Google's roof data for this address.</p>
            </div>
        </div>
    </div>
</ion-content>`;

const styles = `.roof_content {
  --background: #f1f1f1;
}
.roof_wrap {
  padding: 14px 14px 40px 14px;
}
.roof_card {
  border: 1px solid #ececec;
  border-radius: 22px;
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.07);
  overflow: hidden;
}
.detail_head {
  align-items: flex-start;
  justify-content: space-between;
  padding: 18px 18px 0 18px;
}
.head_text {
  min-width: 0;
}
.detail_name {
  margin: 0;
  color: #000000;
  font-size: 1.2rem !important;
  font-weight: 700;
  line-height: 1.25;
}
.detail_addr {
  display: flex;
  align-items: flex-start;
  margin: 6px 0 0 0;
  color: #7a7a7a;
  font-size: 0.78rem;
  line-height: 1.45;
}
.detail_addr ion-icon {
  margin: 2px 6px 0 0;
  color: #FF7110;
  font-size: 1rem;
}
.detail_close {
  flex: 0 0 auto;
  margin-left: 10px;
  padding: 4px;
  border: 0;
  background: transparent;
  color: #000000;
  line-height: 1;
}
.detail_close ion-icon {
  font-size: 1.15rem;
}
.head_sub {
  margin: 8px 18px 0 18px;
  color: #9a9a9a;
  font-size: 0.74rem;
  line-height: 1.5;
}
.head_stats {
  width: auto;
  margin: 14px 18px 0 18px;
  padding: 12px 0;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
}
.head_stat {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.head_stat strong {
  color: #FF7110;
  font-size: 1.15rem !important;
  font-weight: 700;
  line-height: 1.1;
}
.head_stat span {
  margin-top: 3px;
  color: #7a7a7a;
  font-size: 0.72rem;
  font-weight: 500;
}
.head_note {
  margin: 12px 18px 0 18px;
  color: #9a9a9a;
  font-size: 0.72rem;
  line-height: 1.5;
}
.detail_field {
  padding: 16px 18px;
  border-top: 1px solid #ececec;
}
.field_head {
  align-items: center;
  justify-content: space-between;
}
.field_label {
  display: block;
  margin: 0 0 6px 0;
  color: #4a4a4a;
  font-size: 0.74rem;
  font-weight: 700;
}
.field_head .field_label {
  margin-bottom: 0;
}
.field_head + .card_text {
  margin-top: 8px;
}
.card_text {
  margin: 0 0 10px 0;
  color: #9a9a9a;
  font-size: 0.74rem;
  line-height: 1.5;
}
.pill_row {
  flex-wrap: wrap;
}
.status_pill {
  display: inline-flex;
  align-items: center;
  margin: 0 8px 6px 0;
  padding: 7px 13px;
  border-radius: 22px;
  background: #2b2b2b;
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 500;
  white-space: nowrap;
}
.status_pill ion-icon {
  margin-right: 5px;
  color: #FF7110;
  font-size: 0.95rem;
}
.select_box {
  display: flex;
  align-items: center;
  padding: 12px 14px;
  border: 1px solid #ececec;
  border-radius: 12px;
  background: #ffffff;
}
.select_box .cust_select {
  width: 100%;
  border: 0;
  background: transparent;
  color: #1a1a1a;
  font-size: 0.86rem;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}
.select_box ion-icon {
  color: #000000;
  font-size: 1rem;
}
.search_row {
  align-items: center;
}
.field_box {
  display: flex;
  align-items: center;
  padding: 12px 14px;
  border: 1px solid #ececec;
  border-radius: 12px;
  background: #ffffff;
}
.field_box.grow {
  flex: 1;
  min-width: 0;
}
.field_box .pin_icon {
  margin-right: 8px;
  color: #FF7110;
  font-size: 1rem;
}
.field_box input {
  width: 100%;
  border: 0;
  background: transparent;
  color: #1a1a1a;
  font-size: 0.84rem;
  outline: none;
}
.look_btn {
  margin-left: 8px;
  padding: 12px 16px;
  border: 0;
  border-radius: 12px;
  background: #FF7110;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}
.prop_box {
  margin-top: 12px;
  padding: 12px;
  border: 1px solid #ececec;
  border-radius: 14px;
  background: #fafafa;
}
.prop_top {
  align-items: center;
  justify-content: space-between;
}
.prop_badge {
  padding: 5px 11px;
  border-radius: 20px;
  background: #2b2b2b;
  color: #ffffff;
  font-size: 0.68rem;
  font-weight: 600;
}
.prop_coords {
  color: #b0b0b0;
  font-size: 0.68rem;
  white-space: nowrap;
}
.prop_addr {
  margin: 8px 0 0 0;
  color: #1a1a1a;
  font-size: 0.84rem;
  font-weight: 600;
  line-height: 1.4;
}
.roof_stage {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  background: #ececec;
}
.roof_img {
  display: block;
  width: 100%;
  height: auto;
}
.panel_zone {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 2px;
  background: rgba(255, 113, 16, 0.6);
}
.legend_row {
  align-items: center;
  margin-top: 10px;
}
.legend_swatch {
  width: 14px;
  height: 10px;
  margin-right: 8px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 2px;
  background: rgba(255, 113, 16, 0.6);
}
.legend_text {
  color: #9a9a9a;
  font-size: 0.72rem;
}
.notice {
  margin: 10px 0 0 0;
  padding: 12px;
  border: 1px solid #dddddd;
  border-radius: 12px;
  background: #fafafa;
  color: #4a4a4a;
  font-size: 0.74rem;
  line-height: 1.55;
}
.notes_box {
  margin: 0;
  padding: 12px;
  border: 1px solid #dddddd;
  border-radius: 12px;
  background: #fafafa;
  color: #4a4a4a;
  font-size: 0.74rem;
  line-height: 1.55;
}
.stat_grid {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #f2f2f2;
}
.stat_cell {
  width: 50%;
  padding: 12px 0;
}
.stat_cell strong {
  display: block;
  color: #000000;
  font-size: 0.95rem;
  font-weight: 700;
}
.stat_cell span {
  display: block;
  margin-top: 2px;
  color: #9a9a9a;
  font-size: 0.72rem;
}
.cmp_head {
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 1px solid #ececec;
}
.cmp_head .cmp_col {
  flex: 0 0 31%;
  color: #7a7a7a;
  font-size: 0.7rem;
  font-weight: 600;
  text-align: right;
  white-space: nowrap;
}
.cmp_row {
  align-items: center;
  padding: 11px 0;
  border-bottom: 1px solid #f2f2f2;
}
.cmp_row:last-child {
  border-bottom: 0;
}
.cmp_label {
  flex: 0 0 38%;
  color: #4a4a4a;
  font-size: 0.76rem;
  line-height: 1.4;
}
.cmp_val {
  flex: 0 0 31%;
  color: #000000;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: right;
}
.cmp_val.battery {
  color: #FF7110;
}
.fine_print {
  margin: 12px 0 0 0;
  color: #b0b0b0;
  font-size: 0.7rem;
  line-height: 1.5;
}`;

let RoofPage = class RoofPage {
    constructor() {
        this.PRODUCTION_PER_KW = PRODUCTION_PER_KW;
        this.BATTERY_KWH = BATTERY_KWH;
        this.monthlyBill = 180;
        this.monthlyUsage = 1100;
        this.customers = [];
        this.customerId = '';
        this.addressInput = '';
        this.formattedAddress = '';
        this.propertyType = '';
        this.lat = null;
        this.lng = null;
        this.mapsKey = '';
        this.roof = null;
        this.roofNotice = '';
        this.lookupNotice = '';
        this.looking = false;
        this.imageError = false;
    }
    ngOnInit() {
        const data = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_2__.InquiryStore.snapshot();
        this.customers = data.inquiries.map((inquiry) => {
            const note = data.notes[inquiry.id] || {};
            return {
                id: inquiry.id,
                lat: inquiry.lat,
                lng: inquiry.lng,
                customerName: note.customerName || 'New inquiry',
                locationAddress: note.locationAddress || '',
                bills: (note.electricBills || []).map((bill) => Object.assign({}, bill))
            };
        });
        const withBill = this.customers.filter((customer) => customer.bills.length)[0];
        if (withBill) {
            this.pickCustomerId(withBill.id);
        }
    }
    // The card is headed by the customer the design belongs to, the way a visit sheet is.
    headerName() {
        const customer = this.customers.filter((entry) => entry.id === this.customerId)[0];
        return (customer && customer.customerName) || 'Roof design';
    }
    // The card's close button drops the current design and leaves the card on its empty state.
    clearDesign() {
        this.customerId = '';
        this.addressInput = '';
        this.formattedAddress = '';
        this.propertyType = '';
        this.lat = null;
        this.lng = null;
        this.roof = null;
        this.roofNotice = '';
        this.lookupNotice = '';
        this.imageError = false;
    }
    // The browser key is handed to the client by /api/config, the same way the Home map gets it.
    mapsKeyPromise() {
        if (this.mapsKey) {
            return Promise.resolve(this.mapsKey);
        }
        return fetch('/api/config')
            .then((response) => response.json())
            .then((config) => {
            this.mapsKey = (config && config.googleMapsApiKey) || '';
            return this.mapsKey;
        })
            .catch(() => '');
    }
    hasPoint() {
        return typeof this.lat === 'number' && typeof this.lng === 'number';
    }
    // The design is written for one saved inquiry, so picking the customer brings their address
    // and the bill they handed over with it.
    pickCustomerId(id) {
        this.customerId = id;
        const customer = this.customers.filter((entry) => entry.id === id)[0];
        if (!customer) {
            return;
        }
        this.addressInput = customer.locationAddress;
        const latest = customer.bills.length ? customer.bills[customer.bills.length - 1] : null;
        const usage = latest ? Number(latest.usageKwh) : 0;
        const amount = latest ? Number(latest.amountDue) : 0;
        if (usage > 0) {
            this.monthlyUsage = usage;
        }
        if (amount > 0) {
            this.monthlyBill = amount;
        }
        this.geocode(customer.locationAddress, { address: customer.locationAddress, lat: customer.lat, lng: customer.lng });
    }
    lookupAddress() {
        const address = String(this.addressInput || '').trim();
        if (!address) {
            this.lookupNotice = 'Type an address, or pick a saved inquiry.';
            return;
        }
        this.customerId = '';
        this.geocode(address, null);
    }
    // One geocode for both paths: a saved inquiry falls back to its own pin when the address
    // cannot be resolved, while a typed address has nothing to fall back on.
    geocode(address, fallback) {
        if (!address) {
            this.lookupNotice = 'This inquiry has no address on it yet.';
            return;
        }
        this.looking = true;
        this.lookupNotice = '';
        this.mapsKeyPromise()
            .then((key) => {
            if (!key) {
                this.useFallback(fallback, 'The Google Maps key is not configured, so the address cannot be looked up.');
                return null;
            }
            return fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address) + '&key=' + encodeURIComponent(key))
                .then((response) => response.json())
                .then((data) => {
                const result = data && data.results && data.results[0];
                if (!result || !result.geometry) {
                    this.useFallback(fallback, 'That address could not be found.');
                    return;
                }
                this.applyPlace(result.formatted_address || address, result.geometry.location.lat, result.geometry.location.lng, result.types || []);
            });
        })
            .catch(() => {
            this.useFallback(fallback, 'The address lookup failed.');
        });
    }
    useFallback(fallback, message) {
        this.looking = false;
        if (!fallback) {
            this.lookupNotice = message;
            return;
        }
        this.applyPlace(fallback.address, fallback.lat, fallback.lng, []);
        this.lookupNotice = message + ' Using this inquiry\\u2019s saved pin instead.';
    }
    applyPlace(address, lat, lng, types) {
        this.looking = false;
        this.lookupNotice = '';
        this.formattedAddress = address;
        this.propertyType = this.propertyTypeFor(types);
        this.lat = Number(lat);
        this.lng = Number(lng);
        this.imageError = false;
        this.loadRoof();
    }
    // What Google found at the address: a home, a business, or just a street address.
    propertyTypeFor(types) {
        const list = types || [];
        if (list.indexOf('establishment') > -1 || list.indexOf('point_of_interest') > -1) {
            return 'Business';
        }
        return list.indexOf('premise') > -1 || list.indexOf('subpremise') > -1 ? 'Home' : 'Address';
    }
    propertyLabel() {
        return this.propertyType || 'Address';
    }
    coordsLabel() {
        return this.hasPoint() ? this.lat.toFixed(5) + ', ' + this.lng.toFixed(5) : 'No coordinates yet';
    }
    // Google's roof data for this address, through the same endpoint the Solar scan page uses.
    loadRoof() {
        this.roof = null;
        this.roofNotice = '';
        if (!this.hasPoint()) {
            return;
        }
        fetch('/api/solar/scan?lat=' + this.lat + '&lng=' + this.lng)
            .then((response) => response.json())
            .then((data) => {
            if (!data || !data.ok) {
                this.roofNotice = (data && data.message) || 'The roof lookup failed.';
                return;
            }
            const roof = data.roof && data.roof.available ? data.roof : null;
            this.roof = roof;
            if (!roof) {
                this.roofNotice = (data.roof && data.roof.reason) || 'Google has no roof data for this address.';
                return;
            }
            if (data.hasSolar === true) {
                this.roofNotice = 'This roof already has solar on it.';
            }
        })
            .catch(() => {
            this.roofNotice = 'The roof lookup failed.';
        });
    }
    // The map is asked for a rounded centre, so the projection below uses the same rounded point
    // and the panels cannot drift off the roof they belong to.
    mapPoint(centre) {
        const point = centre || { lat: this.lat, lng: this.lng };
        return {
            lat: Math.round(point.lat * 1000000) / 1000000,
            lng: Math.round(point.lng * 1000000) / 1000000
        };
    }
    // Google's roof data belongs to the building it found, which can sit a little way from the
    // address pin, so the layout is drawn around the panels' own centre. The satellite view card
    // still shows the address itself.
    layoutCentre() {
        const panels = this.roof && this.roof.panels ? this.roof.panels : [];
        if (!panels.length) {
            return { lat: this.lat, lng: this.lng };
        }
        let lat = 0;
        let lng = 0;
        panels.forEach((panel) => {
            lat += panel.lat;
            lng += panel.lng;
        });
        return { lat: lat / panels.length, lng: lng / panels.length };
    }
    satelliteUrl(zoom, centre) {
        if (this.imageError || !this.hasPoint() || !this.mapsKey) {
            return '';
        }
        const point = this.mapPoint(centre);
        return 'https://maps.googleapis.com/maps/api/staticmap?center=' + point.lat + ',' + point.lng
            + '&zoom=' + zoom + '&size=' + MAP_WIDTH + 'x' + MAP_HEIGHT + '&maptype=satellite'
            + '&key=' + encodeURIComponent(this.mapsKey);
    }
    viewImage() {
        return this.satelliteUrl(MAP_VIEW_ZOOM);
    }
    layoutImage() {
        return this.satelliteUrl(MAP_LAYOUT_ZOOM, this.layoutCentre());
    }
    onImageError() {
        this.imageError = true;
    }
    // Web Mercator, so a panel's latitude and longitude land on the right pixel of the static map
    // at the layout zoom. The positions are handed to the template as percentages, which keeps the
    // layout correct at whatever width the phone draws the image at.
    pixelX(lng, zoom) {
        return (lng + 180) / 360 * 256 * Math.pow(2, zoom);
    }
    pixelY(lat, zoom) {
        const rad = lat * Math.PI / 180;
        return (1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2 * 256 * Math.pow(2, zoom);
    }
    // The panels Google would put on this roof, cut down to the number this system needs.
    drawnPanels() {
        const panels = this.roof && this.roof.panels ? this.roof.panels : [];
        if (!panels.length || !this.hasPoint()) {
            return [];
        }
        const centre = this.mapPoint(this.layoutCentre());
        const metersPerPixel = 156543.03392 * Math.cos(centre.lat * Math.PI / 180) / Math.pow(2, MAP_LAYOUT_ZOOM);
        // Which of Google's two dimensions is the panel's long edge is not worth guessing at, so the
        // panel's own orientation decides which way round it is drawn: a landscape panel lies along
        // the roof, a portrait one stands up it.
        const longEdge = Math.max(this.roof.panelWidthMeters || 1.7, this.roof.panelHeightMeters || 1) / metersPerPixel;
        const shortEdge = Math.min(this.roof.panelWidthMeters || 1.7, this.roof.panelHeightMeters || 1) / metersPerPixel;
        const centreX = this.pixelX(centre.lng, MAP_LAYOUT_ZOOM);
        const centreY = this.pixelY(centre.lat, MAP_LAYOUT_ZOOM);
        const wanted = Math.min(this.panelCount() || panels.length, panels.length, MAX_DRAWN_PANELS);
        const drawn = [];
        panels.slice(0, wanted).forEach((panel) => {
            const x = this.pixelX(panel.lng, MAP_LAYOUT_ZOOM) - centreX + MAP_WIDTH / 2;
            const y = this.pixelY(panel.lat, MAP_LAYOUT_ZOOM) - centreY + MAP_HEIGHT / 2;
            const width = panel.portrait ? shortEdge : longEdge;
            const height = panel.portrait ? longEdge : shortEdge;
            const left = (x - width / 2) / MAP_WIDTH * 100;
            const top = (y - height / 2) / MAP_HEIGHT * 100;
            // A panel outside the frame is not drawn; the frame is the roof, so this is rare.
            if (left < -6 || left > 106 || top < -6 || top > 106) {
                return;
            }
            drawn.push({
                left: Math.round(left * 100) / 100,
                top: Math.round(top * 100) / 100,
                width: Math.round(width / MAP_WIDTH * 10000) / 100,
                height: Math.round(height / MAP_HEIGHT * 10000) / 100
            });
        });
        return drawn;
    }
    proposedPanels() {
        return this.drawnPanels().length;
    }
    placementNotice() {
        if (!this.hasPoint()) {
            return 'Look up an address and the proposed panel layout is drawn on the roof.';
        }
        if (this.roof && this.roof.maxPanels && this.panelCount() > this.roof.maxPanels) {
            return 'The roof fits ' + this.roof.maxPanels + ' of the ' + this.panelCount() + ' panels this system needs, so the layout shows the roof at its limit.';
        }
        if (this.roof && !this.drawnPanels().length) {
            return 'Google has no panel layout for this roof yet.';
        }
        return '';
    }
    roofFitNotice() {
        if (!this.roof || !this.roof.maxPanels) {
            return '';
        }
        if (this.panelCount() > this.roof.maxPanels) {
            return 'This roof fits up to ' + this.roof.maxPanels + ' panels, so the system covers less of the bill than the figure above.';
        }
        return 'This roof fits up to ' + this.roof.maxPanels + ' panels, so there is room for the ' + this.panelCount() + ' this system needs.';
    }
    heroNote() {
        const panels = this.proposedPanels() || this.panelCount();
        const where = this.formattedAddress ? ' at ' + this.formattedAddress : '';
        return panels + ' panels' + where + ', sized off the customer\\u2019s bill.';
    }
    billValue() {
        const bill = Number(this.monthlyBill);
        return isFinite(bill) && bill > 0 ? bill : 0;
    }
    usageValue() {
        const usage = Number(this.monthlyUsage);
        return isFinite(usage) && usage > 0 ? usage : 0;
    }
    annualUsage() {
        return this.usageValue() * 12;
    }
    // A system big enough to cover the year, in half-kilowatt steps, the way the other pages size it.
    systemSize() {
        const size = this.annualUsage() / PRODUCTION_PER_KW;
        return size > 0 ? Math.max(0.5, Math.round(size * 2) / 2) : 0;
    }
    annualProduction() {
        return this.systemSize() * PRODUCTION_PER_KW;
    }
    panelCount() {
        return this.systemSize() ? Math.ceil(this.systemSize() * 1000 / PANEL_WATTS) : 0;
    }
    offsetPercent() {
        const usage = this.annualUsage();
        return usage ? Math.min(100, Math.round(this.annualProduction() / usage * 100)) : 0;
    }
    grossCost() {
        return this.systemSize() * 1000 * COST_PER_WATT;
    }
    netCost() {
        return this.grossCost() * (1 - FEDERAL_CREDIT);
    }
    batteryCost() {
        return BATTERY_KWH * BATTERY_COST_PER_KWH * (1 - FEDERAL_CREDIT);
    }
    loanFactor() {
        const rate = LOAN_APR / 12;
        return rate / (1 - Math.pow(1 + rate, -LOAN_MONTHS));
    }
    monthlyPayment(extraCost) {
        return (this.netCost() + (extraCost || 0)) * this.loanFactor();
    }
    // Without a battery the home uses the power the roof makes while the sun is up and the grid
    // takes the rest. A battery shifts what it can into the evening, and that is all it can shift.
    selfUseShare(withBattery) {
        if (!withBattery) {
            return SOLAR_SELF_USE;
        }
        const production = this.annualProduction();
        const shifted = production ? BATTERY_KWH * BATTERY_USABLE * 365 / production : 0;
        return Math.min(0.85, SOLAR_SELF_USE + shifted);
    }
    selfUsedKwh(withBattery) {
        return this.annualProduction() * this.selfUseShare(withBattery);
    }
    exportedKwh(withBattery) {
        return this.annualProduction() - this.selfUsedKwh(withBattery);
    }
    usageCovered(withBattery) {
        const usage = this.annualUsage();
        return usage ? Math.min(100, Math.round(this.selfUsedKwh(withBattery) / usage * 100)) : 0;
    }
    batteryRows() {
        return [
            {
                label: 'Cost after the credit',
                only: this.money(this.netCost()),
                both: this.money(this.netCost() + this.batteryCost())
            },
            {
                label: 'Monthly payment',
                only: this.money(this.monthlyPayment(0)) + ' a month',
                both: this.money(this.monthlyPayment(this.batteryCost())) + ' a month'
            },
            {
                label: 'Used on site a year',
                only: this.kwh(this.selfUsedKwh(false)) + ' kWh',
                both: this.kwh(this.selfUsedKwh(true)) + ' kWh'
            },
            {
                label: 'Sent to the grid a year',
                only: this.kwh(this.exportedKwh(false)) + ' kWh',
                both: this.kwh(this.exportedKwh(true)) + ' kWh'
            },
            {
                label: 'Bill covered by the roof',
                only: this.usageCovered(false) + '%',
                both: this.usageCovered(true) + '%'
            },
            {
                label: 'Power in an outage',
                only: 'None',
                both: BATTERY_KWH + ' kWh'
            }
        ];
    }
    money(value) {
        const amount = Math.round(Number(value) || 0);
        return (amount < 0 ? '-$' : '$') + Math.abs(amount).toLocaleString('en-US');
    }
    kwh(value) {
        return Math.round(Number(value) || 0).toLocaleString('en-US');
    }
};
RoofPage = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        selector: 'app-roof',
        template: template,
        styles: [styles]
    })
], RoofPage);



/***/ })

}]);
